export declare const eventHandler: {
    list: Map<any, any>;
    on(event: any, callback: any): any;
    off(event: any): any;
    emit(event: any, ...args: any[]): void;
};
