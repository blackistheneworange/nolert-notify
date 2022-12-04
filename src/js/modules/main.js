import {nolertSetIcon,nolertSetPosition,nolertSetCloseButton,nolertRestructureAlertElements,nolertRemoveFromActiveElements,nolertRemoveAllFromActiveElements } from "./util.js";

let isNolertCSSLoaded = false;

const className="nolert-custom";
const contentClassName="nolert-content-custom";
const responsiveClassName="nolert-custom-mobile";
const nolertNotifySectionId = "nolert-notify-section";

const nolertActiveElements = {};
let isCreatingNolertAlert = false;
let nolertIdIncrementor=1;

export function trigger({message, type, position,closeIn, maxWidth, autoClose, closeButton, cssOverrides, iconType, noIcon, display}){

    // if(!isNolertCSSLoaded){
    //     nolertLoadCSS();
    //     isNolertCSSLoaded=true;
    // }
    try{
        if(isCreatingNolertAlert === true) return;

        isCreatingNolertAlert=true;
        // const id = `${className}-${Math.random()*1000}`;
        const id = `${className}-${nolertIdIncrementor++}`;

        if(closeIn<1000) closeIn=1000;

        if(autoClose===false){
            closeIn=null;
            closeButton=true;
        }
        else{
            nolertSetElRemoveTimeout(id, position, closeIn);
        }

        nolertAddToActiveElements(id, position, display);
        
        const containerEl = nolertCreateAlertElement({id, message, position, type, closeIn, maxWidth, closeButton, cssOverrides, iconType, noIcon});
        nolertAddToAlertSection(containerEl, id);
    }
    catch(err){
        console.log(err);
    }
    finally{
        isCreatingNolertAlert=false;
    }
}

function nolertCreateAlertElement({id, message, position, type, closeIn, maxWidth, closeButton, cssOverrides, iconType, noIcon}){
    const containerEl = document.createElement("div");
    containerEl.setAttribute("id",id);
    containerEl.classList.add(className);
    containerEl.classList.add(responsiveClassName);
    // containerEl.style.zIndex = zIndex;

    if(maxWidth){
        containerEl.style.maxWidth=maxWidth;
    }

    nolertSetPosition(containerEl, position, closeIn);

    const alertEl = document.createElement("div");
    alertEl.setAttribute("role","alert");
    alertEl.classList.add(type);
    
    for(const cssOverridesKey of Object.keys(cssOverrides)){
        alertEl.style[cssOverridesKey] = cssOverrides[cssOverridesKey];
    }
    
    const alertContentEl = document.createElement("div");
    alertContentEl.classList.add(contentClassName);

    const svgIconContainerEl = document.createElement("div");
    svgIconContainerEl.classList.add("nolert-svg-icon-container");

    if(noIcon===false) nolertSetIcon(svgIconContainerEl, type, iconType);

    const messageEl = document.createElement("p");
    // messageEl.textContent = message;
    messageEl.innerHTML = message;

    alertContentEl.appendChild(svgIconContainerEl);
    alertContentEl.appendChild(messageEl);

    alertEl.appendChild(alertContentEl);

    if(closeButton) nolertSetCloseButton(alertEl, id, nolertActiveElements, position);

    containerEl.appendChild(alertEl);

    return containerEl;
}

function nolertAddToAlertSection(containerEl){
    const alertSection = document.getElementById(nolertNotifySectionId);

    if(!alertSection){
        const alertSectionEl = document.createElement("div");
        alertSectionEl.setAttribute("id", nolertNotifySectionId);
        alertSectionEl.appendChild(containerEl);
        document.body.appendChild(alertSectionEl);
    }
    else{
        alertSection.appendChild(containerEl);
    }
}

function nolertAddToActiveElements(id, position, display){
    
    if(nolertActiveElements[position] && nolertActiveElements[position].length>0){
        if(display==="solo"){
            nolertRemoveAllFromActiveElements(nolertActiveElements, position);
        }
        else{
            nolertRestructureAlertElements(nolertActiveElements, position, true);
        }
        nolertActiveElements[position].push(id);
    }
    else{
        nolertActiveElements[position]=[id];
    }
}

function nolertSetElRemoveTimeout(id, position, closeIn){
    if(closeIn){
        setTimeout(()=>{
            nolertRemoveFromActiveElements(id, nolertActiveElements, position);
            nolertRestructureAlertElements(nolertActiveElements, position);
            const el =  document.getElementById(id);
            if(el) el.remove();
        },closeIn+500)
    }
}
