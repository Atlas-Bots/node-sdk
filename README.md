# Atlas Bots (Node-SDK)

<hr />

## Install
```diff
+ npm
npm install soon
+ yarn
yarn add soon 
```

<hr />

## Usage
```js
const { AtlasClient } = require("atlas-bots");

const client = new AtlasClient({
    token: "Api key",
    id: "Bot id"
});

client.post(SERVER_COUNT, SHARD_COUNT);
client.log("Some Log Text so you know it Worked");
```

<hr />

## Example
```js
const { AtlasClient } = require("atlas-bots");

const client = new AtlasClient({
    token: "AUTH_TOKEN", 
    id: "819050202508890419"
});

client.post(client.guilds.cache.size, 0).catch((err) => {
   client.log(`Posting Stats has failed | Error: ${err}`);
});

client.log("Posted Stats Successfully");
```

<hr />
