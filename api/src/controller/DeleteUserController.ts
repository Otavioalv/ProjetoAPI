import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserService } from "../service/DeleteUserService";
import { UserProps } from "../props/UserProps";

class DeleteUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        try {
            const id = req.body as string;
            const idObj = JSON.parse(id) as UserProps;

            const deleteUserService: DeleteUserService = new DeleteUserService();
            const result = await deleteUserService.execute(idObj);

            return result;
        } catch (err) {
            console.error(`Erro >>> ${err}`);
        }
    }
}

export {DeleteUserController};