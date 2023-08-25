import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveData, RouterStateSnapshot } from "@angular/router";
import { UserDataService } from "./user-data-service";
import { map, shareReplay, switchMap, take } from "rxjs";

@Injectable()
export class UserDataResolver implements ResolveData {
    constructor(private userService: UserDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.userService.getUserId().pipe(
        //     take(1),
        //     shareReplay(1),
        //     switchMap((id) => {
        //         return this.userService.getUserData(id)
        //     })
        // )
    }
}