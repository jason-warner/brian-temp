import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
import { LitNetwork } from "@lit-protocol/constants";
import express, { Request, Response } from 'express'


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);

    await app.locals.litNodeClient.connect();
});

app.locals.litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
    alertWhenUnauthorized: false,
    litNetwork: LitNetwork.Datil,
});
