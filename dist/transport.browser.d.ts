import * as Sentry from "@sentry/browser";
import TransportStream = require("winston-transport");
export interface SentryTransportOptions extends TransportStream.TransportStreamOptions {
    sentry?: Sentry.BrowserOptions;
    levelsMap?: SeverityOptions;
    skipSentryInit?: boolean;
}
interface SeverityOptions {
    [key: string]: Sentry.SeverityLevel;
}
export default class SentryTransport extends TransportStream {
    silent: boolean;
    private levelsMap;
    constructor(opts?: SentryTransportOptions);
    log(info: any, callback: () => void): void;
    end(...args: any[]): this;
    get sentry(): typeof Sentry;
    private setLevelsMap;
    private static withDefaults;
    private static isObject;
    private static shouldLogException;
}
export {};
