import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"produit",component:ProduitComponent},
  {path:"listproduit",component:ListproduitComponent},
  {path:"",redirectTo:"produit",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
