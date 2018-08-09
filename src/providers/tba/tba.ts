import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';

/*
  Generated class for the TbaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  lHqQTfGJ1B6WbSYAMLXRrjbB3ylOb26VnKWC7nNIeyZH7cobjTgQ1K43YDADulep
*/

const httpOptions = {
  headers: new HttpHeaders({
    'X-TBA-Auth-Key':  'lHqQTfGJ1B6WbSYAMLXRrjbB3ylOb26VnKWC7nNIeyZH7cobjTgQ1K43YDADulep'
  })
};
@Injectable()
export class TbaProvider {
  constructor(public http: HttpClient) {
  }
  getTeams(key: string){
    if(key == '2018tnsci') {
      key = '2018tnkn';
      console.log(key);
    }
    let url = 'http://www.thebluealliance.com/api/v3/event/'+key+'/teams';
    return this.http.get<any>(url, httpOptions);
  }
  test(): any{
    let url = 'http://www.thebluealliance.com/api/v3/event/2018tnkn/teams';
    return this.http.get<any>(url, httpOptions);
  }

}
