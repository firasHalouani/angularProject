import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

info={
  nom:'firas',
  prenom:'halouani',
  h:20
}
v=1
h=20
url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"

  constructor() { }

  ngOnInit(): void {

  }
ajouter()
{
  this.v+=1
}
dimenuer(){
  this.v-=1
}
}
