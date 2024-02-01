import { StatusCodes } from "../helper/statusResult";
import { connection } from "../model/mysql";
import { ResultListProps } from "../props/StatusResponse";
import { UserProps } from "../props/UserProps";


class CreateUserService {
    async execute(user: UserProps) {
        try {
            const {data_nascimento, endereco, foto, nome, senha, sexo} = user;

            await connection.promise().beginTransaction();
            await connection.promise().query(
                `INSERT INTO pessoa (nome, endereco, sexo, senha, data_nascimento, foto) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [nome, endereco, sexo, senha, data_nascimento, foto]
            );
            await connection.promise().commit();
        } catch (err) {
            connection.promise().rollback();
            return {StatusResponse: StatusCodes.InternalServerError} as ResultListProps;
        }
    }
}

export {CreateUserService};