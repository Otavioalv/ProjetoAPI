import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateUserService } from "../service/UpdateUserService";
import { UserProps } from "../props/UserProps";


class UpdateUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        try {
            const datas = req.body as string;
            const datasObj = JSON.parse(datas) as UserProps;

            const updateUserService: UpdateUserService = new UpdateUserService();
            const result = updateUserService.execute(datasObj);

            res.send(result);
        } catch (err) {
            console.log(`Erro ao atualizar >>> ${err}`);
        }
    }
}

export {UpdateUserController}