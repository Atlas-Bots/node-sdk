export default class atlasClient {
    private apiKey;
    private botID;
    constructor(options?: {
        auth: string;
        botID: string;
    });
    post(servers?: Number, shards?: Number): Promise<void>;
    atlasLogs(text?: String): void;
}
