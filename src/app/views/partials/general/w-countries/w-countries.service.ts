import { Injectable } from '@angular/core';
import { DataResponse } from '@core/interfaces/response';
import { ApiService } from '@core/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable()
export class WCountriesService {
  private countriesSubject = new BehaviorSubject<any>([]);
  public countries$ = this.countriesSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private apiService: ApiService) {
  }

  getList() {
    return this.apiService.get('/markets').pipe(
      tap((res: DataResponse) => {
        // console.log(res.data);
        const data = res.data.map((v: any) => {
          return {
            id: v.id,
            itemName: v.name
          };
        });
        this.countriesSubject.next(data);
      })
    );
  }
}
