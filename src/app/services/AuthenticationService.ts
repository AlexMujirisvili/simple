import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    logIn(username: string, password: string): boolean {

        //make post request

        //if authenticated, save token and return true


        //otherwise return false

        return username === 'a' && password === 'a';

    }

}