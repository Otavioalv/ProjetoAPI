import Fastify from "fastify";
import { router } from "./router";
import cors from '@fastify/cors';

const app = Fastify({ logger: false });

app.setErrorHandler((err, req, res) => {
    res.code(404).send({message: err.message});
});

const PORT:number = 8090;

async function start() {
    
    await app.register(cors);
    await app.register(router);

    try {
        await app.listen({port: PORT}, () => {
            console.log(`API rodando na url >>> http://localhost:${PORT}\n`);
        })

    } catch(err) {
        process.exit(1);
    }
}

start();