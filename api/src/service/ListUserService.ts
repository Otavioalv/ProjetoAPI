import { StatusCodes } from "../helper/statusResult";
import { connection } from "../model/mysql";
import { ResultListProps } from "../props/StatusResponse";


class ListUserService {
    async excecute() {
        try {    
            await connection.promise().beginTransaction();   

            const [rows, _] = await connection.promise().query(
                `SELECT id, nome, data_nascimento, foto, endereco, sexo, senha 
                FROM pessoa`
            ) as [[], []];

            await connection.promise().commit();
            
            return {rows, StatusResponse: StatusCodes.Success} as ResultListProps;   
        } catch (err) {
            await connection.promise().rollback();
            return {rows: undefined, StatusResponse: StatusCodes.InternalServerError} as ResultListProps;
        }
    }
}

export {ListUserService};