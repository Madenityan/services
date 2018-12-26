import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bem',
  templateUrl: './test-bem.component.html',
  styleUrls: ['./test-bem.component.scss']
})
export class TestBemComponent implements OnInit {
  public listItem = [
    {
      img: 'http://placehold.it/100x100',
      title: 'Lorem Ipsun',
      price: '123',
      sale: '100'
    },
    {
      img: 'http://placehold.it/100x100',
      title: 'Lorem Ipsun',
      price: '654',
      sale: '200'
    },
    {
      img: 'http://placehold.it/100x100',
      title: 'Lorem Ipsun',
      price: '479',
      sale: '350'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
