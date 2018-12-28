import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { MatButtonModule } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
    NewsComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
