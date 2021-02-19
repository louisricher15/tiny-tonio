import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() locale: string = '';

  wording: any = {
    ourProducts: {
      plants: {
        fr: 'Voir les plantes',
        en: 'See plants'
      },
      figurines: {
        fr: 'Voir les figurines',
        en: 'See figurines'
      },
      wallArts: {
        fr: 'Voir les arts muraux',
        en: 'See Wall Arts'
      },
      favoriteProducts: {
        title: {
          fr: 'Produits à la une',
          en: 'Featured Products '
        }
      }
    },
    favoriteProducts: {
      bonsai: {
        fr: ''
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
