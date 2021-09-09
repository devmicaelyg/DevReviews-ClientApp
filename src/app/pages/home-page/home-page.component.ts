import { Store } from './../../models/Store';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  stores: Store[] = []; 
  constructor(
    private storeService: StoreService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllStores(); 
  }
  
  getAllStores(){
    this.spinner.show();
    this.storeService.getAll().subscribe(
      res => {
        this.stores = res; 
        console.log(res)
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }
}
