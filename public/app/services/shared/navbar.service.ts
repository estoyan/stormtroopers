import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from '../../models/user.model';

@Injectable()
export class NavbarService {
    @Output() private userInfo: EventEmitter<User> = new EventEmitter();

    updateUserInfo(newInfo: User): void {
        this.userInfo.emit(newInfo);
    }

    getEmittedValue(): EventEmitter<User> {
        return this.userInfo;
    }
}