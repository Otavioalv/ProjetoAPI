import { connection } from "../model/mysql";
import { UserProps } from "../props/UserProps";


class DeleteUserService {
    async execute(id: UserProps) {
        const idNum = parseInt(typeof id.id == 'string' ? id.id : '');
        
        try {
            await connection.promise().beginTransaction();
            await connection.promise().query(
                `DELETE FROM pessoa WHERE id = ?`,
                [idNum]
            );
            await connection.promise().commit();
        } catch (err) {
            await connection.promise().rollback();
            console.log(`Error >>> ${err}`);
        }
    }
}

export {DeleteUserService};