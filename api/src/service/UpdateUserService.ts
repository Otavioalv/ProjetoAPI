import { connection } from "../model/mysql";
import { UserProps } from "../props/UserProps";


class UpdateUserService {
    async execute({data_nascimento, endereco, foto, id, nome, senha, sexo}: UserProps) {
        try {
            await connection.promise().beginTransaction();
            await connection.promise().query(
                `UPDATE pessoa SET 
                nome = ?,
                endereco = ?, 
                sexo = ?, 
                senha = ?, 
                data_nascimento = ?, 
                foto = ? 
                WHERE id = ?`,
                [nome, endereco, sexo, senha, data_nascimento, foto, id]
            );
            await connection.promise().commit();
        } catch (err) {
            await connection.promise().rollback();
            console.error(`Erro >>> ${err}`);
        }
    }
}

export {UpdateUserService};