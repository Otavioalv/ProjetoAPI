import { ResponseProps } from "../props/StatusResponse";

type statusKey =  {
    readonly Success: ResponseProps,
    readonly Created: ResponseProps,
    
    readonly BadRequest: ResponseProps,
    readonly Unauthorized: ResponseProps,
    readonly Forbidden: ResponseProps,
    readonly NotFound: ResponseProps,
    
    readonly InternalServerError: ResponseProps,
};

export const StatusCodes = {
    Success: { status: 200, message: "A raequisição foi um secesso" },
    Created: {status: 201, message: "Nova feature criada"},

    BadRequest: {status: 400, message: "Requisição invalida ou parametros perdidos"},
    Unauthorized: {status: 401, message: "Requer autenticação"},
    Forbidden: {status: 403, message: "O cliente não tem permissão para acessar"},
    NotFound: {status: 404, message: "A requisição não foi encontrada" },
    
    InternalServerError: {status: 500, message: "Erro interno no servidor"},

} as statusKey;