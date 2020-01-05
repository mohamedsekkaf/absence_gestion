import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule }  from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { ClassEtudiantComponent } from './class-etudiant/class-etudiant.component';
import { HomeComponent } from './home/home.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
 


const appRoutes: Routes = [
  { path: 'list-etudiant', component:  ListEtudiantComponent },
  { path: 'list-absence', component: ListAbsenceComponent },
  {path: 'class-etudiant', component: ClassEtudiantComponent  },
  {path: 'home', component: HomeComponent },
  {path: 'app-ajouter-etudiant', component: AjouterEtudiantComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEtudiantComponent,
    ListAbsenceComponent,
    ClassEtudiantComponent,
    HomeComponent,
    AjouterEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
