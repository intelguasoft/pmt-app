
export interface RespuestaLogin {
    data?: DataLogin;
}

export interface DataLogin {
    ok?: boolean;
    message?: string;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    user?: User;
    code?: number;
}
export interface RespuestaPeajes {
  success?: boolean;
  data?: DataPaginadaPeaje;
  message?: string;
}
export interface User {
    id?: number;
    role_id?: number;
    oficial_id?: number;
    date_birthday?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    nit?: string;
    dpi?: string;
    email?: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
}

export interface Peaje {
    car_plate?: string;
    created_at?: string;
    date?: string;
    id?: number;
    time?: string;
    type_toll_vehicle_id?: number;
    type_toll_vehicle?: TypeTollVehicle;
    updated_at?: string;
    user_id?: number;
}

export interface DataPaginadaPeaje {
    current_page?: 1;
    data?: Peaje[];
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    path?: string;
    per_page?: number;
    prev_page_url?: string;
    to?: number;
    total?: number;
}

export interface TypeTollVehicle {
    cost?: number;
    created_at?: string;
    description?: string;
    id?: number;
    prefix_car_plate?: string;
    type?: string;
    updated_at?: string;
}

export interface RespuestaTipoVeniculoPeaje {
    success?: boolean;
    data?: TypeTollVehicle[];
    message?: string;
}

export interface RespuestaTipoVeniculoPeajeId {
    success?: boolean;
    data?: TypeTollVehicle;
    message?: string;
}

export interface RespuestaPeaje {
    data?: Peaje;
    message?: string;
    success?: boolean;
}
