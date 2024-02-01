import { FastifyReply, FastifyRequest } from "fastify";
import { FindByIdService } from "../service/FindByIdService";
import { UserProps } from "../props/UserProps";

class FindByIdController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        try {
            const id = req.body as string;
            const idObj = JSON.parse(id) as UserProps;

            const findByIdService: FindByIdService = new FindByIdService();
            const result = await findByIdService.execute(idObj);

            res.send(result);
        } catch (err) {
            console.error(`Error >>> ${err}`);
        }
    }
}

export {FindByIdController};
