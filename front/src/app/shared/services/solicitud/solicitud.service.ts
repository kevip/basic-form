import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env} from '../../../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':  'application/json'})
  };

@Injectable()
export class SolicitudService {

    constructor(private http: HttpClient) {}
    /**
     * @param request 
     */
    public addSolicitud(request:any): Observable<any> {
        return this.http.post(`${env.api}/solicitud`, request, httpOptions);
        // return new Promise((resolve, reject) => {
        //     try {
        //         let requests = JSON.parse(window.localStorage.getItem('requests')) || [];
        //         requests.push(request);
        //         window.localStorage.setItem('requests', JSON.stringify(requests));        
        //         return resolve({data: request, code: 201});
        //     } catch {
        //         return reject();
        //     }
        // });        
    }

    public getSolicitudes(params?: any): Observable<any> {
        console.log(params);
        return this.http.get(`${env.api}/solicitud`, {params});
        // return new Promise((resolve, reject) => {
        //     try {
        //         const requests = JSON.parse(window.localStorage.getItem('requests')) || [];
        //         return resolve({data: requests, code: 200});
        //     } catch {
        //         return reject();
        //     }
        // });
    }
}