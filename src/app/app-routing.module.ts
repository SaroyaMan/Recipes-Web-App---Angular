import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";


const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    //Lazy Loading: Load the Component only when it used!
    {path: 'recipes',loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [ //use forRoot only in parent module (=AppModule)!
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}