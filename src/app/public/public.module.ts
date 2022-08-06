import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ProduitComponent } from './produit/produit.component';
import { ConseilComponent } from './conseil/conseil.component';
import { MagasinComponent } from './magasin/magasin.component';
import { PrendreRdvComponent } from './prendre-rdv/prendre-rdv.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicNavBarComponent } from './public-nav-bar/public-nav-bar.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';



@NgModule({
  declarations: [
    AccueilComponent,
    ServiceComponent,
    ProduitComponent,
    ConseilComponent,
    MagasinComponent,
    PrendreRdvComponent,
    PublicLayoutComponent,
    PublicNavBarComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
