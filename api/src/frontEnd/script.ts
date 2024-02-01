//  elements
let listUser = document.querySelector('#list-user') as Element;
let form = document.querySelector('#form') as Element;

// elements create
const ulElement:HTMLUListElement = document.createElement('ul');
const liElement:HTMLLIElement = document.createElement('li');
const imgElement:HTMLImageElement = document.createElement('img');

// Interface
interface UserInterface {
    data_nascimento:string, 
    endereco: string, 
    foto: string, 
    id?:number | string, 
    nome:string, 
    senha:string, 
    sexo:string
}

// Listeners
document.addEventListener('DOMContentLoaded', async () => {
    await listUserFunction();
});


// CRUD
// Create 
async function createUserFunction(datas: UserInterface) {

    fetch('http://localhost:8090/create-user', {
        method: 'POST',
        body: JSON.stringify(datas)
    })
    .then(res => {
        console.log(res);
    })
}

// List/Read
async function listUserFunction() {
    listUser.innerHTML = '<h1 class="text-white">carregando...</h1>';

    fetch('http://localhost:8090/list')
    .then(res => {
        return res.json();
    })
    .then(res => {
        const response = res.StatusResponse as {};
        const datas = res.rows as [];

        listUser.innerHTML = '';

        datas.map((value: UserInterface, index) => {
            // console.log(value);
            const divElement:HTMLDivElement = document.createElement('div');
            divElement.innerHTML = `
                <ul class="bg-white w-full p-8 rounded-xl my-4" id="user-${value.id}">
                    <li>
                        <div class="flex justify-center items-center">
                            <div class="w-40 h-40">
                                <img class="w-40 h-40 object-cover rounded-full" src="${value.foto}" alt="pessoa-${value.id}">
                            </div>
                            
                            <ul class="ml-4">
                                <li>
                                    Nome: ${value.nome}
                                </li>
                                <li>
                                    Data de nascimento: ${value.data_nascimento?.substring(0, 10)}
                                </li>
                                <li>
                                    Endereco: ${value.endereco}
                                </li>
                                <li>
                                    Id: ${value.id}
                                </li>
                                <li>
                                    Senha: ${value.senha}
                                </li>
                                <li>
                                    Sexo: ${value.sexo}
                                </li>

                                <ul class="flex justify-between mt-4">
                                    <li class=" w-2/5">
                                        <button class="bg-red-500 hover:bg-red-600 transition-all w-full p-1.5 rounded-full text-white" onclick="deleteUser(this.dataset.userId)" data-user-id="${value.id}">delete</button>
                                    </li>

                                    <li class=" w-2/5">
                                        <button class="bg-gray-950 hover:bg-gray-800 transition-all p-1.5 w-full rounded-full text-white" onclick="editUserPage(this.dataset.userId)" data-user-id="${value.id}">edit</button>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </li>
                </ul>
            `
            listUser.appendChild(divElement);
        });
    })
    .catch(err => {
        console.error(`Error >>> ${err}`);
    });
}

// Update
async function updateUserFunction(datas: UserInterface) {
    console.log(datas);
    fetch('http://localhost:8090/update', {
        method: "PATCH",
        body: JSON.stringify(datas)
    })
    .then(res => {
        console.log(res);
    });
}


// List/Read by ID
async function listUserByIdFunction(id: number | string) {
    const result = await fetch('http://localhost:8090/find-by-id', {
        method: 'POST',
        body: JSON.stringify({id} as UserInterface)
    })
    .then(async (res) => {
        const response = await res.json();
        const responseDatas = response.rows[0] as UserInterface;
        return responseDatas;
    })

    return result
}


// Delete 
async function deleteUser(userId: string) {

    fetch('http://localhost:8090/delete', {
        method: 'DELETE',
        body: JSON.stringify({id: userId} as UserInterface)
    })
    .then(async (res) => {
        console.log(res);
        await listUserFunction();
    })
}


// FUNCTIONS
// CREATE
async function createUser(e: Event){
    e.preventDefault();
    const form = e.target as HTMLFormElement
    const userList: UserInterface = await formValues(form);
    

    await createUserFunction(userList);
    await listUserFunction();
};

// UPDATE
async function updateUser(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userList: UserInterface = await formValues(form);

    await updateUserFunction(userList);
    await listUserFunction();
}


async function formValues(formElement: HTMLFormElement):Promise<UserInterface> {
    const nome = (formElement.querySelector('#nome') as HTMLInputElement).value.trim();
    const dataNascimento = (formElement.querySelector('#dataNascimento') as HTMLInputElement).value.trim();
    const endereco = (formElement.querySelector('#endereco') as HTMLInputElement).value.trim();
    const senha = (formElement.querySelector('#senha') as HTMLInputElement).value.trim();
    const foto = (formElement.querySelector('#foto') as HTMLInputElement).value.trim();
    const id = (formElement.querySelector('#idUserForm') as HTMLInputElement).value.trim();

    const genero = formElement.querySelector('input[name="genero"]:checked') as HTMLInputElement;
    const sexo = genero ? genero.value : '';
    
    console.log(id);
    
    const userListValue:UserInterface = {
        data_nascimento: dataNascimento,
        endereco, 
        foto, 
        senha,
        sexo,
        nome,
        id
    }

    console.log(userListValue);
    return userListValue;
}

async function editUserPage(userId: string) {
    const values:UserInterface = await listUserByIdFunction(userId);
    await transformForm(values);
}

async function transformForm({data_nascimento, endereco, foto, nome, senha, sexo, id}: UserInterface) {
    
    const userDatas = document.querySelector(`#user-${id}`) as Element;

    userDatas.innerHTML = `
        <form id="formEdit"  enctype="multipart/form-data" onsubmit="updateUser(event)" class="bg-white p-8 rounded-lg">
            <h1 class="text-base font-bold text-center">Editar</h1>
            
            <div class="flex flex-col">
                <label for="nome">nome</label>
                <input class="border-solid border-2 border-gray-950 p-1 px-3 rounded-lg" type="text" name="nome" id="nome" value="${nome}" required/>
            </div>

            <div class="flex flex-col">
                <label for="dataNascimento">data de nascimento</label>
                <input class="border-solid border-2 border-gray-950 p-1 px-3 rounded-lg" type="date" name="dataNascimento" id="dataNascimento" value="${data_nascimento.substring(0, 10)}" required/>
            </div>

            <div class="flex flex-col">
                <label for="endereco">endereço</label>
                <input class="border-solid border-2 border-gray-950 p-1 px-3 rounded-lg" type="text" name="endereco" id="endereco" value="${endereco}" required/>
            </div>

            <div class="flex flex-col">
                <label for="foto">foto</label>
                <input class="border-solid border-2 border-gray-950 p-1 px-3 rounded-lg" type="text" name="foto" id="foto" value="${foto}" required/>
            </div>

            <div class="flex flex-col">
                <label for="senha">senha</label>
                <input class="border-solid border-2 border-gray-950 p-1 px-3 rounded-lg" type="text" name="senha" id="senha" value="${senha}" required/>
            </div>

            <div class="flex mx-4">
                <label for="sexo">sexo</label>
                <label class="px-2">
                    <input type="radio" name="genero" value="M" ${sexo === 'M' ? 'checked' : ''}> Masculino
                </label>
            
                <label class="px-2">
                    <input type="radio" name="genero" value="F" ${sexo === 'F' ? 'checked' : ''}> Feminino
                </label>
            </div>

            <div>
                <input type="hidden" value="${id}" id="idUserForm">
            </div>

            <div class="flex justify-center my-3">
                <button type="submit" class="bg-gray-950 w-full cursor-pointer text-white rounded-xl hover:bg-gray-800 transition-all p-1">editar<button/>
            </div>
        </form>`
}
