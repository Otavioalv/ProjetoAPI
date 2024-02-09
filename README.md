# Projeto AJAX - NODE.JS/Fastify - MYSQL - Typesript
---
### Pré-requisitos

- [x] **Node.js instalado**
- [x] **MSQL instalado**
- [x] **NPM instalado**
- [x] **Seu editor de texto preferido**
---

### Instalação

* **Abra um termial na pasta da sua escolha e clone o repositório:**
```
git clone https://github.com/Otavioalv/ProjetoAJAX.git
```

* **No terminal, instale as dependências:**
```
npm install
```

### Banco de Dados
* **No arquivo no caminho ./api/model/mysql.ts coloque as informações do servidor MySql para o funcionamento do Cadastro**
![image](https://github.com/Otavioalv/ProjetoAJAX/assets/107057360/a6d4642b-0d8e-4f1f-941f-1deeb2a01cc7)

- [x] Na propriedada <b>host</b> coloque o seu host
- [x] Na propriedada <b>database</b> coloque o seu banco de dado <b>MySql</b>
- [x] Na propriedada <b>user</b> coloque o seu ussuario
- [x] Na propriedada <b>password</b> coloque sua senha


### Iniciando o projeto
* **crie uma tabela no banco de dados selecionado usando esse codigo**
```
create table pessoa (
   id int primary key auto_increment, 
   nome varchar(120), 
   data_nascimento date, 
   foto varchar(300), 
   endereco varchar(200),
   sexo varchar(1),
   senha varchar(10)
);
```

### Executando o Projeto
* **Inicie o servidor:**

```
npm rum dev
```

* **Abra o arquivo no caminho api/src/frontEnd/index.html no navegador ou inicie um servidor local**

