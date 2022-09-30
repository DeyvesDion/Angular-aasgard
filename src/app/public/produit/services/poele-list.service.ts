import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, throwError, tap, map } from "rxjs";
import { IPoele } from "../models/interface/poele";


@Injectable({
  providedIn: 'root'
})
export class PoeleListService {

      private readonly POELE_API_URL = "api/DataPoele";

      constructor(private http: HttpClient) { }
      

    public getPoeleList(): Observable<IPoele[]>{
        return this.http.get<IPoele[]>(this.POELE_API_URL).pipe(
            tap((response: any) =>this.log(response))
        )
      
        // return this.http.get<IPoele[]>(this.POELE_API_URL).pipe(
        //     //  tap((response: any) => this.log(response)),
        //       catchError((error) => this.handleError(error))
        // );
  }
    log(response: any): void {
        throw new Error("Method not implemented.");
    }
  
//   public getPoeleById(id: number): Observable<IPoele | any> {

//     const url = `${this.POELE_API_URL}/{id}`;
    
//     if (id==0) {
//       return of(this.getDefaultPoele());
//     }

//     return this.http.get<IPoele>(url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   public updateHotel(hotel: IPoele): Observable<IPoele> {
//     const url = `${this.POELE_API_URL}/${poele.id}`;

//     return this.http.put<IPoele>(url, poele).pipe(
//       catchError(this.handleError)
//     );
//   }

//   public delateHotel(id: number | any): Observable<{}>{
//     const url = `${this.HOTEL_API_URL}/{id}`;
//     return this.http.delete<IHotel>(url).pipe(
//       catchError(this.handleError)
//     );
// }

  
//   createHotel(hotel: IHotel):Observable<IHotel> {
//     hotel = {
//       ...hotel,
//       imageUrl: 'assets/img/hotel-room.jpg',
//       id: null
//     };

//     return this.http.post<IPoele>(this.POELE_API_URL, hotel).pipe(
//       catchError(this.handleError)
//     );
//   }

      
      
//   private getDefaultHotel(): IPoele|any{
//     return {
//       id: 0,
//       hotelName: null,
//       description: null,
//       price: null,
//       rating: null,
//       imageUrl: null
//   }
// }

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
      
}
