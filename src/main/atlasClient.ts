import fetch from 'node-fetch';
import { Logger } from "@ayanaware/logger";

export default class atlasClient {
    private apiKey: String;
    private botID: String;

    constructor(options = {
        auth: "",
        botID: ""
    }) {

        this.apiKey = options.auth;
        this.botID = options.botID;
    };

    async post (servers?: Number, shards?: Number) {

        if (!this.apiKey) throw new ReferenceError('[Atlas API] Missing API Token. Please provide a valid token!');
        if (!this.botID) throw new ReferenceError('[Atlas API] Missing Bot ID, Please provide a valid Bot ID!');

        if (!servers) servers = 0;
        if (!shards) shards = 0;

        await fetch (`https://api.atlasbots.com/stats/${this.botID}`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                servers: servers,
                shards: shards
            })
        });
    };

    atlasLogs (text?: String) {
        if (!text) text = "[Atlas API] Ready to Post Stats";
    
        var atlasLogs = Logger.get();
        atlasLogs.info(`${text}`);
    };
};