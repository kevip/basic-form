import { Component, OnInit } from '@angular/core';
import { AccountType } from '../../shared/services/account-type/AccountType';
import { NgForm } from '@angular/forms';
import { SolicitudService } from '../../shared/services/solicitud/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
  providers: [SolicitudService]
})
export class SolicitudComponent implements OnInit {
  public requestType; // 'demanda' by default
  public requests = [];
  public accountType;
  public accountNumber: number = null;
  public initialPeriod: string = '';
  public endOfPeriod: string = '';
  public accountTypes: Array<AccountType> = [
    { name: 'type 1', value: '1'},
    { name: 'type 2', value: '2'},
  ];

  constructor(private solicitudService: SolicitudService) { 

  }

  ngOnInit() {
    this.solicitudService.getSolicitudes().subscribe( res => {
      this.requests = res.data;
    });
  }

  addRequest(form: NgForm) {
    let request = form.value;
    request = {
      ...request,
      totalEEC: Math.floor(Math.random() * 10)
    }
    this.solicitudService.addSolicitud(request).subscribe( res => {
      this.requests.push(request);
    });
  }

}
