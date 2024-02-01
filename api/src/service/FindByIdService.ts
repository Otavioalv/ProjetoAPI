import { StatusCodes } from "../helper/statusResult";
import { connection } from "../model/mysql";
import { ResultListProps } from "../props/StatusResponse";
import { UserProps } from "../props/UserProps";


class FindByIdService {
    async execute({id}: UserProps) {
        try {
            if(!id) return {rows: undefined, StatusResponse: StatusCodes.BadRequest} as ResultListProps;

            const idNum:number = typeof id === 'number' ? id : parseInt(id);

            await connection.promise().beginTransaction();
            const [rows, _] = await connection.promise().query(
                `SELECT id, nome, data_nascimento, foto, endereco, sexo, senha 
                FROM pessoa WHERE id = ?`,
                [idNum]
            ) as [[], []];
            await connection.promise().commit();
            
            return {rows, StatusResponse: StatusCodes.Success} as ResultListProps; 
        } catch (err) {
            await connection.promise().rollback();
            console.error(`Erro >>> ${err}`);
            return {rows: undefined, StatusResponse: StatusCodes.InternalServerError} as ResultListProps;
        }
    }
}

export {FindByIdService};