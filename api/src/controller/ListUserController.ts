import { FastifyReply, FastifyRequest } from "fastify";
import { ListUserService } from "../service/ListUserService";
import { ResultListProps } from "../props/StatusResponse";
import { StatusCodes } from "../helper/statusResult";


class ListUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {  
        try {
            const listUserService: ListUserService = new ListUserService();
            const result = await listUserService.excecute();
            
            res.send(result);
        } catch (err) {
            res.send({rows: undefined, StatusResponse: StatusCodes.InternalServerError} as ResultListProps);
        }
    }
}

export {ListUserController};