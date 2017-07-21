import {Injectable} from "@angular/core";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharedService{
    private isSuccess = new BehaviorSubject<boolean>(false);
    private loggedIn = new BehaviorSubject<string>('');

    getSaveBtnStatus(){
        return this.isSuccess.asObservable();
    }

    setSaveBtnStatus(value: boolean){
        this.isSuccess.next(value);
    }

    setUserName(value : string){
        this.loggedIn.next(value);
    }

    getUserName(){
        return this.loggedIn.asObservable();
    }
}