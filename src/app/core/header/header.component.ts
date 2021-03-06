import {Component} from '@angular/core';

import {Response} from "@angular/http";
import {AuthService} from "../../auth/auth.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService:DataStorageService,
                private authService:AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response:Response) => console.log(response) ,
                (error) => console.log(error)
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}