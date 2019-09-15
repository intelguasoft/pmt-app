
interface Respuesta {
    data: Data;
}

interface Data {
    ok: boolean;
    message: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
    code: number;
}

interface User {
    id: number;
    role_id: number;
    oficial_id: number;
    date_birthday: string;
    first_name: string;
    last_name: string;
    gender: string;
    nit: string;
    dpi: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}