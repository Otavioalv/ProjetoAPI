var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//  elements
var listUser = document.querySelector('#list-user');
var form = document.querySelector('#form');
// elements create
var ulElement = document.createElement('ul');
var liElement = document.createElement('li');
var imgElement = document.createElement('img');
// Listeners
document.addEventListener('DOMContentLoaded', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, listUserFunction()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// CRUD
// Create 
function createUserFunction(datas) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetch('http://localhost:8090/create-user', {
                method: 'POST',
                body: JSON.stringify(datas)
            })
                .then(function (res) {
                console.log(res);
            });
            return [2 /*return*/];
        });
    });
}
// List/Read
function listUserFunction() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            listUser.innerHTML = '<h1 class="text-white">carregando...</h1>';
            fetch('http://localhost:8090/list')
                .then(function (res) {
                return res.json();
            })
                .then(function (res) {
                var response = res.StatusResponse;
                var datas = res.rows;
                listUser.innerHTML = '';
                datas.map(function (value, index) {
                    var _a;
                    console.log(value);
                    var divElement = document.createElement('div');
                    divElement.innerHTML = "\n                <ul class=\"bg-white w-full p-8 rounded-xl my-4\" id=\"user-".concat(value.id, "\">\n                    <li>\n                        <div class=\"flex justify-center items-center\">\n                            <div class=\"w-40 h-40\">\n                                <img class=\"w-40 h-40 object-cover rounded-full\" src=\"").concat(value.foto, "\" alt=\"pessoa-").concat(value.id, "\">\n                            </div>\n                            \n                            <ul class=\"ml-4\">\n                                <li>\n                                    Nome: ").concat(value.nome, "\n                                </li>\n                                <li>\n                                    Data de nascimento: ").concat((_a = value.data_nascimento) === null || _a === void 0 ? void 0 : _a.substring(0, 10), "\n                                </li>\n                                <li>\n                                    Endereco: ").concat(value.endereco, "\n                                </li>\n                                <li>\n                                    Id: ").concat(value.id, "\n                                </li>\n                                <li>\n                                    Senha: ").concat(value.senha, "\n                                </li>\n                                <li>\n                                    Sexo: ").concat(value.sexo, "\n                                </li>\n\n                                <ul class=\"flex justify-between mt-4\">\n                                    <li class=\" w-2/5\">\n                                        <button class=\"bg-red-500 hover:bg-red-600 transition-all w-full p-1.5 rounded-full text-white\" onclick=\"deleteUser(this.dataset.userId)\" data-user-id=\"").concat(value.id, "\">delete</button>\n                                    </li>\n\n                                    <li class=\" w-2/5\">\n                                        <button class=\"bg-gray-950 hover:bg-gray-800 transition-all p-1.5 w-full rounded-full text-white\" onclick=\"editUserPage(this.dataset.userId)\" data-user-id=\"").concat(value.id, "\">edit</button>\n                                    </li>\n                                </ul>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            ");
                    listUser.appendChild(divElement);
                });
            })
                .catch(function (err) {
                console.error("Error >>> ".concat(err));
            });
            return [2 /*return*/];
        });
    });
}
// Update
function updateUserFunction(datas) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(datas);
            fetch('http://localhost:8090/update', {
                method: "PATCH",
                body: JSON.stringify(datas)
            })
                .then(function (res) {
                console.log(res);
            });
            return [2 /*return*/];
        });
    });
}
// List/Read by ID
function listUserByIdFunction(id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:8090/find-by-id', {
                        method: 'POST',
                        body: JSON.stringify({ id: id })
                    })
                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        var response, responseDatas;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    response = _a.sent();
                                    responseDatas = response.rows[0];
                                    return [2 /*return*/, responseDatas];
                            }
                        });
                    }); })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
// Delete 
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            fetch('http://localhost:8090/delete', {
                method: 'DELETE',
                body: JSON.stringify({ id: userId })
            })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(res);
                            return [4 /*yield*/, listUserFunction()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
// FUNCTIONS
// CREATE
function createUser(e) {
    return __awaiter(this, void 0, void 0, function () {
        var form, userList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    form = e.target;
                    return [4 /*yield*/, formValues(form)];
                case 1:
                    userList = _a.sent();
                    return [4 /*yield*/, createUserFunction(userList)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, listUserFunction()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
// UPDATE
function updateUser(e) {
    return __awaiter(this, void 0, void 0, function () {
        var form, userList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    form = e.target;
                    return [4 /*yield*/, formValues(form)];
                case 1:
                    userList = _a.sent();
                    return [4 /*yield*/, updateUserFunction(userList)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, listUserFunction()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function formValues(formElement) {
    return __awaiter(this, void 0, void 0, function () {
        var nome, dataNascimento, endereco, senha, foto, id, genero, sexo, userListValue;
        return __generator(this, function (_a) {
            nome = formElement.querySelector('#nome').value.trim();
            dataNascimento = formElement.querySelector('#dataNascimento').value.trim();
            endereco = formElement.querySelector('#endereco').value.trim();
            senha = formElement.querySelector('#senha').value.trim();
            foto = formElement.querySelector('#foto').value.trim();
            id = formElement.querySelector('#idUserForm').value.trim();
            genero = formElement.querySelector('input[name="genero"]:checked');
            sexo = genero ? genero.value : '';
            console.log(id);
            userListValue = {
                data_nascimento: dataNascimento,
                endereco: endereco,
                foto: foto,
                senha: senha,
                sexo: sexo,
                nome: nome,
                id: id
            };
            console.log(userListValue);
            return [2 /*return*/, userListValue];
        });
    });
}
function editUserPage(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, listUserByIdFunction(userId)];
                case 1:
                    values = _a.sent();
                    return [4 /*yield*/, transformForm(values)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function transformForm(_a) {
    var data_nascimento = _a.data_nascimento, endereco = _a.endereco, foto = _a.foto, nome = _a.nome, senha = _a.senha, sexo = _a.sexo, id = _a.id;
    return __awaiter(this, void 0, void 0, function () {
        var userDatas;
        return __generator(this, function (_b) {
            userDatas = document.querySelector("#user-".concat(id));
            userDatas.innerHTML = "\n        <form id=\"formEdit\"  enctype=\"multipart/form-data\" onsubmit=\"updateUser(event)\" class=\"bg-white p-8 rounded-lg\">\n            <h1 class=\"text-base font-bold text-center\">Editar</h1>\n            \n            <div class=\"flex flex-col\">\n                <label for=\"nome\">nome</label>\n                <input class=\"border-solid border-2 border-gray-950 p-1 px-3 rounded-lg\" type=\"text\" name=\"nome\" id=\"nome\" value=\"".concat(nome, "\" required/>\n            </div>\n\n            <div class=\"flex flex-col\">\n                <label for=\"dataNascimento\">data de nascimento</label>\n                <input class=\"border-solid border-2 border-gray-950 p-1 px-3 rounded-lg\" type=\"date\" name=\"dataNascimento\" id=\"dataNascimento\" value=\"").concat(data_nascimento.substring(0, 10), "\" required/>\n            </div>\n\n            <div class=\"flex flex-col\">\n                <label for=\"endereco\">endere\u00E7o</label>\n                <input class=\"border-solid border-2 border-gray-950 p-1 px-3 rounded-lg\" type=\"text\" name=\"endereco\" id=\"endereco\" value=\"").concat(endereco, "\" required/>\n            </div>\n\n            <div class=\"flex flex-col\">\n                <label for=\"foto\">foto</label>\n                <input class=\"border-solid border-2 border-gray-950 p-1 px-3 rounded-lg\" type=\"text\" name=\"foto\" id=\"foto\" value=\"").concat(foto, "\" required/>\n            </div>\n\n            <div class=\"flex flex-col\">\n                <label for=\"senha\">senha</label>\n                <input class=\"border-solid border-2 border-gray-950 p-1 px-3 rounded-lg\" type=\"text\" name=\"senha\" id=\"senha\" value=\"").concat(senha, "\" required/>\n            </div>\n\n            <div class=\"flex mx-4\">\n                <label for=\"sexo\">sexo</label>\n                <label class=\"px-2\">\n                    <input type=\"radio\" name=\"genero\" value=\"M\" ").concat(sexo === 'M' ? 'checked' : '', "> Masculino\n                </label>\n            \n                <label class=\"px-2\">\n                    <input type=\"radio\" name=\"genero\" value=\"F\" ").concat(sexo === 'F' ? 'checked' : '', "> Feminino\n                </label>\n            </div>\n\n            <div>\n                <input type=\"hidden\" value=\"").concat(id, "\" id=\"idUserForm\">\n            </div>\n\n            <div class=\"flex justify-center my-3\">\n                <button type=\"submit\" class=\"bg-gray-950 w-full cursor-pointer text-white rounded-xl hover:bg-gray-800 transition-all p-1\">editar<button/>\n            </div>\n        </form>");
            return [2 /*return*/];
        });
    });
}
