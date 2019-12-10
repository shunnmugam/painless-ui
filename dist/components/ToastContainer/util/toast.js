import { NEW_TOAST } from './../const/events';
import { eventHandler } from "./eventHandler";
// const toast = (content, config:object|undefined = undefined) => {
//     eventHandler.emit(NEW_TOAST, content, config)
// }
const toast = Object.assign((content, containerId, config = {}) => {
    eventHandler.emit(NEW_TOAST, content, containerId, config);
}, {
    error: (content, containerId, config = {}) => {
        let style = config && config.style ? config.style : {};
        style = { ...style, ...{ background: "rgb(166, 41, 41)" } };
        config.style = style;
        let titleStyle = config && config.titleStyle ? config.titleStyle : {};
        titleStyle = { ...titleStyle, ...{ background: "#d32f2f" } };
        config.titleStyle = titleStyle;
        eventHandler.emit(NEW_TOAST, content, containerId, config);
    },
    success: (content, containerId, config = {}) => {
        let style = config && config.style ? config.style : {};
        style = { ...style, ...{ background: "rgba(58, 184, 63)" } };
        config.style = style;
        let titleStyle = config && config.titleStyle ? config.titleStyle : {};
        titleStyle = { ...titleStyle, ...{ background: "#43a047" } };
        config.titleStyle = titleStyle;
        eventHandler.emit(NEW_TOAST, content, containerId, config);
    },
    info: (content, containerId, config = {}) => {
        let style = config && config.style ? config.style : {};
        style = { ...style, ...{ background: "rgb(219, 192, 58)" } };
        config.style = style;
        let titleStyle = config && config.titleStyle ? config.titleStyle : {};
        titleStyle = { ...titleStyle, ...{ background: "rgb(199, 170, 29)" } };
        config.titleStyle = titleStyle;
        eventHandler.emit(NEW_TOAST, content, containerId, config);
    }
});
export default toast;
