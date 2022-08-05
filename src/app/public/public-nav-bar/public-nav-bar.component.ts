import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-nav-bar',
  templateUrl: './public-nav-bar.component.html',
  styleUrls: ['./public-nav-bar.component.css']
})
export class PublicNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public toggleMenu(): void{
    const navLink : any = document.querySelector(".navLink");
    const linkItem : any = document.querySelector(".linkItem");
    navLink.classList.toggle('mobileMenu');
    linkItem.classList.toggle('mobileMenu');
}
}
