import { Component, OnInit } from '@angular/core';
import { AccountType } from '../../shared/services/account-type/AccountType';
import { NgForm } from '@angular/forms';
import { SolicitudService } from 'src/app/shared/services/solicitud/solicitud.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css'],
  providers: [SolicitudService]
})
export class AuditoriaComponent implements OnInit {
  
  public requests: Array<any> = [];
  public accountTypes: Array<AccountType> = [
    { name: 'type 1', value: '1'},
    { name: 'type 2', value: '2'},
  ];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
  }

  searchRequest(form: NgForm) {
    const body = form.value;
    this.solicitudService.getSolicitudes(body).subscribe(res => {
      this.requests = res.data;
    });
  }

}
