# miniaqua

The server for static JSON documents.

This API server is designed to be used in the development stage.
It is not intended for production use.

## Usage

- Put JSON document in `/data/:domainName/`, where `domainName` is the domain name of your website. For example if you're using a site called `example.com`, then put JSON data in `/data/example.com`. You can use HTTP GET method to fetch data from this API server.
- Run the application by executing `node app.mjs` from command line.
- Use the API client to interact with the server.
- The API will respond with JSON data.

## Dependencies

- Node.js
- Express.js

## Client code

```js
// Fetch API data
const apiUrl = "http://localhost:3100";

const response = await fetch(apiUrl, {
  method: "GET",
  headers: {
    Authorization: `Basic ${Buffer.from(apiCredentials.username + ":" + apiCredentials.password).toString("base64")}`,
  },
});

// Parse JSON data
const data = await response.json();

// Print API data
console.log(data);
```
