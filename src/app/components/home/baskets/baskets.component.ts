import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { Store } from '@ngrx/store';
import { Stores } from 'src/app/state/stores';


@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {

  baskets$: BasketModel[] = [] 

  constructor(
    private store: Store<Stores["baskets"]>
  ) { 
    this.store.select("baskets").subscribe(res=> {
      this.baskets$ = res;
    })
  }

  ngOnInit() {
    
  }

  

}
