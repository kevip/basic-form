import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/shared/services/solicitud/solicitud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [SolicitudService]
})
export class ConsultaComponent implements OnInit {

  public initialPeriod: Date = new Date();
  public requests: Array<any> = [];


  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const body = form.value;
    this.solicitudService.getSolicitudes({...body}).subscribe(res => {
      this.requests = res.data;
    });
  }

}
