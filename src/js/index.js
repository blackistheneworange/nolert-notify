import {trigger as triggerNotification} from "./modules/main.js";

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
        zIndex: 100
    }

    NolertNotify(){}

    static trigger({type, iconType, closeButton, closeIn, autoClose, noIcon, message, position}){
        const props = {
            type: (type || this.config.type), 
            iconType: (iconType || this.config.iconType), 
            closeButton: ((typeof closeButton === 'boolean') ? closeButton : this.config.closeButton), 
            closeIn: (closeIn || this.config.closeIn), 
            autoClose: ((typeof autoClose === 'boolean') ? autoClose : this.config.autoClose),  
            noIcon: ((typeof noIcon === 'boolean') ? noIcon : this.config.noIcon), 
            message: message, 
            position: (position || this.config.position),
            zIndex: this.config.zIndex,
            display: this.config.display
        };
        triggerNotification({
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
                    case "closeButton":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                    case "closeIn":
                        if(typeof values[key] === 'number' && values[key]>999){
                            this.config[key] = values[key];
                        }
                    case "autoClose":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                    case "noIcon":
                        if(typeof values[key] === 'boolean'){
                            this.config[key] = values[key];
                        }
                    case "type":
                        this.config[key] = values[key];
                    case "iconType":
                        this.config[key] = values[key];
                    case "zIndex":
                        if(typeof values[key] === 'number'){
                            this.config[key] = values[key];
                        }
                    default:
                        //none
                }
            }
        }
    }
}

export default NolertNotify;