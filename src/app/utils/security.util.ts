import { User } from '../models/user.model';

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user); // chega um json e converte ele para string

        // btoa encripta os dados
        localStorage.setItem('petshopuser', btoa(data));
        localStorage.setItem('petshoptoken', token);
    }
    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('petshopuser', btoa(data));
    }
    public static setToken(token: string) {
        localStorage.setItem('petshoptoken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('petshopuser');
        if (data) {
            // atob desencripta os dados
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('petshoptoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }
    // verfica se o usuario está autenticado ou tem token no banco
    public static hasToken(): boolean {
        if (this.getToken) {
            return true;
        } else {
            return false;
        }
    }
    public static clear() {
        localStorage.removeItem('petshopuser');
        localStorage.removeItem('petshoptoken');
    }
}
