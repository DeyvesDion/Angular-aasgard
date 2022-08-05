import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const getBounce:any = document.querySelector(".bounce");
    window.addEventListener("load", () => { setTimeout(() => { getBounce.classList.add("show"); }, 1000) });

    window.addEventListener("scroll", () => {

    // Fonction toogle float-img
    const slideToggle : any = document.querySelector(".slide");
    slideToggle.classList.add("showSlide", window.scrollY >= 0)
});
  }

}
