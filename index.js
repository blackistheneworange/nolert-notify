import NolertNotify from "./src/js/index.js";

export default (
    ("default" in NolertNotify) 
    ? 
        NolertNotify.default 
    : 
        NolertNotify
);