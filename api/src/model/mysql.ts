import mysql from "mysql2";
import { databaseConfig } from "../config";

const config = databaseConfig;

export const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root", 
    password: "123456", 
    database: "cadastro",
    port: 3306
});


connection.connect((err) => {
    if(err) {
        throw new Error(`Erro ao conectar ao banco de dados >>> ${err.message}`);
    } else {
        console.log(`Conectado ao banco de dados com sucesso >>> ${config.HOST}:${config.PORT}`);
    }
});

/* <h1>Cadastro ussuario</h1>

<div>
    <h1>Como iniciar o Cadastro</h1>
    <ul>
        <li>Clone o codigo</li>
        <li>No terminal digite <b>npm install</b></li> 
        <li>
            <div>
                <p>No arquivo <b>database.js</b> coloque as informações do servidor MySql para o funcionamento do Cadastro</p>

![image](https://github.com/Otavioalv/Cadastro_Ussuario/assets/107057360/3b15da62-a8a2-4187-8099-39b8b75ff8e9)
            </div>
        </li>
        <ul>
            <li>Na propriedada <b>host</b> coloque o seu host</li>
            <li>Na propriedada <b>database</b> coloque o seu banco de dado <b>MySql</b></li>
            <li>Na propriedada <b>user</b> coloque o seu ussuario</li>
            <li>Na propriedada <b>password</b> coloque sua senha</li>
            <li>crie uma tabela no banco de dados selecionado usando esse codigo <br><br><b>create table pessoas(
                id int primary key auto_increment not null,
                nome varchar(100),  dataNas date,
                foto blob, 
                endereco varchar(150),
                sexo varchar(1),
                passwor varchar(10) -- Tipo hipotetico
            );</b><br><br>
            <li>Inicie o servidor MySql</li>
            </li>
        </ul>
        <li>Servidor configurado. No terminal digite <b>npm start</b>
        </li>
        <li>No navegador digite a url: <b>http://localhost:3000/sample_data</b></li>
        <li>Pronto. Agora e só testar!!!</li>
    </ul>
</div>
 */