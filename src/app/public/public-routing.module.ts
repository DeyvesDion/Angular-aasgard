import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConseilComponent } from './conseil/conseil.component';
import { MagasinComponent } from './magasin/magasin.component';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { ProduitComponent } from './produit/produit.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [

  {
    path: '', component: PublicLayoutComponent, children: [
    
      { path: '', redirectTo: 'accueil', pathMatch: 'full'},
      
      {path: 'accueil', component: AccueilComponent},
      {path: 'conseil', component: ConseilComponent},
      {path: 'magasin', component: MagasinComponent},
      {path: 'prendre-rdv', component: PrendreRdvComponent },
      {path: 'produit', component: ProduitComponent },
      {path: 'service', component: ServiceComponent },

  ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
