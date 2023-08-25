import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private readonly apiUrl = 'http://localhost:3000/api/userdata/'
    // private ssnIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')
    constructor(private httpClient: HttpClient) {}

    // setUserId(id: any) {
    //     this.ssnIdSubject.next(id)
    // }

    // getUserId() {
    //     return this.ssnIdSubject.asObservable()
    // }

    getUserData(id: any) {
        return this.httpClient.get(this.apiUrl + id)
    }
}