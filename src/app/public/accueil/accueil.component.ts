import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

//Faire tomber la boule du haut
const getBounce =
      this.elementRef.nativeElement.querySelector('.bounce');
    window.addEventListener('load', () =>
    { setTimeout(() => { getBounce.classList.add("show"); }, 1000) });


    // Fonction toogle float-img
    window.addEventListener("scroll", () => {
      const slideToggle = this.elementRef.nativeElement.querySelector('.slide');
      slideToggle.classList.add("showSlide", window.screenY >= 0);
    });
  }

}
