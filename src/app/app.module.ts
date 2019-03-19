import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { SessionsComponent } from './sessions/sessions.component';

const appRoutes: Routes = [
  {path:'', redirectTo: 'deployments', pathMatch: 'full'},
  {path: 'deployments', component: DeploymentsComponent},
  {path: 'sessions', component: SessionsComponent}
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, DeploymentsComponent, SessionsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
