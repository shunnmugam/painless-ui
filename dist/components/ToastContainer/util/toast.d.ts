declare const toast: ((content: any, containerId: any, config?: any) => void) & {
    error: (content: any, containerId: any, config?: any) => void;
    success: (content: any, containerId: any, config?: any) => void;
    info: (content: any, containerId: any, config?: any) => void;
};
export default toast;
