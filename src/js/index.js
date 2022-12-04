import {trigger} from "./modules/main.js";

class NolertNotify{

    static screenPositions = ["bottom","top","top-left","top-right","bottom-left","bottom-right"];

    static config={
        type:"info",
        display: "stack",
        position: "bottom",
        closeButton: true,
        autoClose: true,
        closeIn: 4000,
        noIcon: false,
        cssOverrides:{
            zIndex: 100,
            borderRadius: "4px"
        }
    }

    NolertNotify(){}

    static trigger({type, iconType, closeButton, closeIn, autoClose, noIcon, message, position}){
        const props = {
            type: (type || this.config.type), 
            iconType: (iconType || this.config.iconType), 
            closeButton: ((typeof closeButton === 'boolean') ? closeButton : this.config.closeButton), 
            closeIn: ((closeIn && typeof closeIn === "number" && closeIn>999) ? closeIn : this.config.closeIn), 
            autoClose: ((typeof autoClose === 'boolean') ? autoClose : this.config.autoClose),  
            noIcon: ((typeof noIcon === 'boolean') ? noIcon : this.config.noIcon), 
            message: message, 
            position: (position || this.config.position),
            cssOverrides: {...this.config.cssOverrides},
            display: this.config.display
        };
        trigger({
            ...props
        });
    }

    static setConfig(values){
        if(typeof values === "object"){
            for(const key of Object.keys(values)){
                switch(key){
                    case "display":
                        if(values[key] === "solo" || values[key] === "stack"){
                            this.config[key] = values[key];
                        }
                        break;
                    case "position":
                        if(this.screenPositions.includes(values[key])){
                            this.config[key] = values[key];
                        }
                        break;
                    case "closeButton":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                        break;
                    case "closeIn":
                        if(typeof values[key] === 'number' && values[key]>999){
                            this.config[key] = values[key];
                        }
                        break;
                    case "autoClose":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                        break;
                    case "noIcon":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                        break;
                    case "type":
                        this.config[key] = values[key];
                        break;
                    case "iconType":
                        this.config[key] = values[key];
                        break;
                    case "cssOverrides":
                        const overrides = values[key];
                        for(const key2 of Object.keys(overrides)){
                            switch(key2){
                                case "zIndex":
                                    if(typeof overrides[key2] === 'number'){
                                        this.config["cssOverrides"][key2] = overrides[key2];
                                    }
                                    break;
                                case "borderRadius":
                                    this.config["cssOverrides"][key2] = overrides[key2];
                                    break;
                                default:
                                    //none
                            }
                        }
                        break;
                    default:
                        //none
                }
            }
        }
    }
}

export default NolertNotify;