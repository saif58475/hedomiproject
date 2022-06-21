import { Component, OnInit, OnChanges } from '@angular/core';
import { observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
parts:any [] = [];
first:any [] = [];
  constructor(private _ProductsService:ProductsService ) 
  {

  }

  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe(
      (data) => {
        this.parts = data;   
     console.log(this.parts);
      }
    );

  }
  
  
}
  
