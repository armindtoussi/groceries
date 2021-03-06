export declare const JSONP_HOME = "__ng_jsonp__";
export declare class BrowserJsonp {
    build(url: string): any;
    nextRequestID(): string;
    requestCallback(id: string): string;
    exposeConnection(id: string, connection: any): void;
    removeConnection(id: string): void;
    send(node: any): void;
    cleanup(node: any): void;
}
