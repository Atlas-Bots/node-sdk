# Atlas Bots (Node-SDK)

<hr />

## Install
```diff
npm install atlas-bots

or

npm install atlasbots@latest
```

<hr />

## Usage
```js
const { AtlasClient } = require("atlas-bots");

const atlas = new AtlasClient({
    auth: "Api key",
    botID: "Bot id"
});

atlas.post(SERVER_COUNT, SHARD_COUNT);
atlas.log("Some Log Text so you know it Worked");
```

<hr />

## Example
```js
const { AtlasClient } = require("atlas-bots");

const atlas = new AtlasClient({
    auth: "AUTH_TOKEN", 
    botID: "819050202508890419"
});

atlas.post(client.guilds.cache.size, 0).catch((err) => {
   atlas.atlasLogs(`Posting Stats has failed | Error: ${err}`);
});

atlas.atlasLogs("Posted Stats Successfully");
```

<hr />