export interface ResponseProps {
    success?: boolean;
    status?: number;
    message?: string;
}

export interface ResultListProps extends ResponseProps{
    rows?: object;
    StatusResponse?: ResponseProps;
}