import { Component, OnInit } from '@angular/core';
import { PoeleListService } from './services/poele-list.service';
import { IPoele } from './models/interface/poele';
import { DataPoele } from './services/api/poele.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  poeleList=DataPoele;
  errMsg: any;

  
  constructor(
    // private poeleListService: PoeleListService,
  private router: Router,) { }

  ngOnInit(): void {
  
  }
 goToPoele(poele: { base: string; }) {
 this.router.navigate(['/poele', poele.base]);
  }
}
