import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../service/CreateUserService";
import { ListUserService } from "../service/ListUserService";
import { UserProps } from "../props/UserProps";
import { ResultListProps } from "../props/StatusResponse";
import { StatusCodes } from "../helper/statusResult";


class CreateUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        try {
            const user = req.body as string;
            const userObj = JSON.parse(user) as UserProps ;

            const createUserService: CreateUserService = new CreateUserService();
            const result = await createUserService.execute(userObj);

            res.send(result);
        } catch (err) {
            res.send({StatusResponse: StatusCodes.InternalServerError} as ResultListProps);
        }
    }
}

export {CreateUserController};