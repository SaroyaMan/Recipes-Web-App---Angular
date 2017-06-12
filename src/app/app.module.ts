import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "app/app-routing.module";
import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,  //<--CommonModule is included in BrowserModule
        HttpModule,
        AppRoutingModule,
        SharedModule,
        ShoppingListModule,
        AuthModule,
        CoreModule
    ],

    //It is better to use providers in Root Injector (Root Modules)
    //Finger Rule: Don't provide Services in Shared Modules
    // providers: [],
    bootstrap: [AppComponent],
    // providers: [
    //     ShoppingListService,
    //     RecipeService,
    //     DataStorageService,
    //     AuthService,
    //     AuthGuard
    // ]
})
export class AppModule { }
