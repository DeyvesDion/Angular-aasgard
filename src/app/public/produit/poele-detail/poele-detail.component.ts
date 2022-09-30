import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poele-detail',
  templateUrl: './poele-detail.component.html',
  styleUrls: ['./poele-detail.component.css']
})
export class PoeleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    // private hotelService: HotelListService,
    private router: Router) { }

  ngOnInit(): void {

  // const base:string | any = this.route.snapshot.paramMap.get('base');

  //   this.hotelService.getPoeleList()
  //     .subscribe((hotels: IHotel[]) => {
  //     this.hotel = hotels.find(hotel => hotel.id == id);
  //     console.log('Hotel: ' ,this.hotel);
  //   });


  }

}
