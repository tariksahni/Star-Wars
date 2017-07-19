import {Injectable} from "@angular/core";
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharedService{
    private isSuccess = new BehaviorSubject<boolean>(false);

    getSaveBtnStatus(){
        return this.isSuccess.asObservable();
    }

    setSaveBtnStatus(value: boolean){
        this.isSuccess.next(value);
    }
}