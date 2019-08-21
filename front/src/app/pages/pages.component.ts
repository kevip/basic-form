import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from '@angular/core';

@Component({
    templateUrl: './pages.component.html',
    selector: 'app-pages',
    styleUrls: ['./pages.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit {
    public title ="";
    ngOnInit () {

    }
}