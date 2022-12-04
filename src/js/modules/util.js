const nolertCornerSpacing = 24;
const nolertCornerSpacingUnit = "px";

function nolertSetIcon(parentEl, type, iconType){
    if((!iconType && type==="success") || iconType==="success"){
        parentEl.innerHTML=`
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        `
    }
    else if((!iconType && type==="danger") || iconType==="danger"){
        parentEl.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/> <circle cx="8" cy="8" r="6.25"/> </svg>
        `
    }
    else if((!iconType && type==="warning") || iconType==="warning"){
        parentEl.innerHTML=`
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"/></svg>
        `
    }
    else{
        parentEl.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/> </svg>
        `
    }
}

function nolertSetPosition(containerEl, position, closeIn){
    containerEl.style.opacity=0;
    switch(position){
        case "top":
            containerEl.style.left="50%";
            containerEl.style.top="-80px";
            containerEl.style.transform="translate(-50%,0)";
            //timeout for appear animation
            setTimeout(()=>{
                containerEl.style.opacity=1;
                containerEl.style.top = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                containerEl.style.transform="translate(-50%, 4px)";
            },100);
            setTimeout(()=>{
                containerEl.style.transform="translate(-50%, 0)";
            },500)
            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    // containerEl.style.transform="translate(-50%, 40px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        case "top-right":
            containerEl.style.right="-500px";
            containerEl.style.top=`${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
            //timeout for appear animation
            setTimeout(()=>{
                containerEl.style.opacity=1;
                containerEl.style.right=0;
                // containerEl.style.right = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                containerEl.style.transform = "translateX(-24px)";
            },100);
            setTimeout(()=>{
                // containerEl.style.transform = "translateX(0)";
                containerEl.style.transform = "translateX(-8px)";
            },500)

            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    containerEl.style.transform = "translateX(80px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        case "top-left":
            containerEl.style.left="-500px";
            containerEl.style.top=`${nolertCornerSpacing}${nolertCornerSpacingUnit}`;

            //timeout for appear animation
            setTimeout(()=>{
                containerEl.style.opacity=1;
                containerEl.style.left = 0;
                // containerEl.style.left = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                containerEl.style.transform = "translateX(24px)";
            },100);
            setTimeout(()=>{
                containerEl.style.transform = "translateX(8px)";
            },500)

            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    containerEl.style.transform = "translateX(-80px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        case "bottom":
            containerEl.style.left="50%";
            containerEl.style.bottom=`-500px`;
            containerEl.style.transform="translateX(-50%)";

            //timeout for appear animation
            setTimeout(()=>{
                containerEl.style.opacity=1;
                containerEl.style.bottom = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                containerEl.style.transform="translate(-50%, -4px)";
            },100);
            setTimeout(()=>{
                containerEl.style.transform="translate(-50%, 0)";
            },500)

            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    // containerEl.style.transform="translate(-50%, -40px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        case "bottom-right":
            containerEl.style.right=`-500px`;
            containerEl.style.bottom=`${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
            
            //timeout for appear animation
            setTimeout(()=>{
                containerEl.style.opacity=1;
                // containerEl.style.right = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                containerEl.style.right = 0;
                containerEl.style.transform = "translateX(-24px)";
            },100);
            setTimeout(()=>{
                containerEl.style.transform = "translateX(-8px)";
            },500)

            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    containerEl.style.transform = "translateX(80px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        case "bottom-left":
            containerEl.style.left=`-500px`;
            containerEl.style.bottom=`${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
            
            //timeout for appear animation
                setTimeout(()=>{
                    containerEl.style.opacity=1;
                    containerEl.style.left = 0;
                    // containerEl.style.left = `${nolertCornerSpacing}${nolertCornerSpacingUnit}`;
                    containerEl.style.transform = "translateX(24px)";
                },100);
                setTimeout(()=>{
                    containerEl.style.transform = "translateX(8px)";
                },500)

            //timeout for disappear animation
            if(closeIn){
                setTimeout(()=>{
                    containerEl.style.transform = "translateX(-80px)";
                    containerEl.style.opacity=0;
                },closeIn);
            }
            break;
        default:
            //none
    }
}

function nolertSetCloseButton(parentEl, parentId, activeElements, position){

    const closeButton = document.createElement("button");
    closeButton.classList.add("nolert-close-button");
    closeButton.addEventListener("click",(el)=>nolertHandleCloseAlert(parentId, activeElements, position));

    closeButton.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
            </g>
        </svg>
    `;

    parentEl.appendChild(closeButton);
}

function nolertRestructureAlertElements(activeElements, position, added){
    const elements = activeElements[position];
    const length = elements.length;
    for(let i=0;i<length;i++){
        const el = document.getElementById(elements[i])
        if(el){
            const elHeight = el.offsetHeight;
            if(position.includes("bottom")){
                const updatedBottomValue = added ? (
                    nolertCornerSpacing
                    +
                    ((length-(i+1))*(elHeight+8))
                    +
                    (elHeight+8)
                )
                :
                (i===length-1 
                    ? 
                        nolertCornerSpacing
                    :(
                        nolertCornerSpacing
                        +
                        ((length-(i))*(elHeight+8))
                        -
                        (elHeight+8)
                    )
                )
                el.style.bottom = `${updatedBottomValue}px`;
            }
            else if(position.includes("top")){
                const updatedTopValue = added ? (
                    nolertCornerSpacing
                    +
                    ((length-(i+1))*(elHeight+8))
                    +
                    (elHeight+8)
                )
                :
                (i===length-1 
                    ? 
                        nolertCornerSpacing
                    :(
                        nolertCornerSpacing
                        +
                        ((length-(i))*(elHeight+8))
                        -
                        (elHeight+8)
                    )
                )
                el.style.top = `${updatedTopValue}px`;
            }
        }
    }
}

function nolertHandleCloseAlert(parentId, activeElements, position){
    const el = document.getElementById(parentId);
    if(el) el.remove();
    nolertRemoveFromActiveElements(parentId, activeElements, position);
    nolertRestructureAlertElements(activeElements, position);
}

function nolertRemoveFromActiveElements(id, activeElements, position){
    if(activeElements && activeElements[position]){
        activeElements[position] = activeElements[position].filter(elId => elId !== id);
    }
}

function nolertRemoveAllFromActiveElements(activeElements, position){
    const elements = activeElements[position];
    const length = elements.length;
    for(let i=0;i<length;i++){
        const el =  document.getElementById(elements[i]);
        if(el){
            el.remove();
        }
    }
    activeElements[position] = [];
}

// function nolertLoadCSS(){
//     const link = document.createElement('link');

//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = './style.min.css';

//     const styleTag = document.createElement('style');
 
//     styleTag.innerHTML = ``

//     document.getElementsByTagName('head')[0].appendChild(styleTag);
// }

export {
    nolertSetIcon,
    nolertSetPosition,
    nolertSetCloseButton,
    nolertRestructureAlertElements,
    nolertRemoveFromActiveElements,
    nolertRemoveAllFromActiveElements
}