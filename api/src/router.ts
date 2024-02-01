import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { ListUserController } from "./controller/ListUserController";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { FindByIdController } from "./controller/FindByIdController";
import { UpdateUserController } from "./controller/UpdateUserController";

export async function router(router: FastifyInstance, options: FastifyPluginOptions ) {
    
    router.get('/list', async (req: FastifyRequest, res: FastifyReply) => {
        return await new ListUserController().handle(req, res);
    });
    
    router.post('/find-by-id', async(req: FastifyRequest, res: FastifyReply) => {
        return await new FindByIdController().handle(req, res);
    });

    router.post('/create-user', async(req: FastifyRequest, res: FastifyReply) => {
        return await new CreateUserController().handle(req, res);
    });

    router.delete('/delete',async (req: FastifyRequest, res: FastifyReply) => {
        return await new DeleteUserController().handle(req, res);
    });

    router.patch('/update', async(req: FastifyRequest, res: FastifyReply) => {
        return await new UpdateUserController().handle(req, res);
    });

}