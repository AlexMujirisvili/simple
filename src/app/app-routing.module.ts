import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
   { path: '', redirectTo: '/auth', pathMatch: 'full'},
   { path: 'auth', component: AuthComponent},
   { path: 'user', component: UserComponent},
   { path: 'news', component: NewsComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule{

}