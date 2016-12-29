import { Injectable } from '@angular/core';

const USER_KEY = 'user';

@Injectable()
export class LocalStorageService {
    constructor() { }

    private getUserItem() {
        return JSON.parse(window.localStorage.getItem(USER_KEY));
    }

    getToken(): string {
        return this.getUserItem().token;
    }

    getUser() {
        return this.getUserItem();
    }

    deleteUser() {
        window.localStorage.removeItem('user');
    }
}