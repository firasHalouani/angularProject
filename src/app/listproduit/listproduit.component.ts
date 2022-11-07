import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
productF!:Produit[]
af="masquer"
products:Produit[]=[
  {id:1, nom:"Computer",prix:6500,quantite:0,urlimage:"assets/images/pc.png"},
  {id:2, nom:"Printer",prix:1200,quantite:10,urlimage:"assets/images/imprimante.png"},
  {id:3, nom:"Smart Phone",prix:1400,quantite:17,urlimage:"assets/images/smartphone.png"}
]


  constructor() { }

  ngOnInit(): void {
    this.productF=this.products;
  }
  supprimer(p:any)
  {
    let index = this.products.indexOf(p ,0)
    this.products.splice(index,1)
  }
  masquer(){
    if(this.af=="masquer"){
      this.af="afficher"
    }else{
      this.af="masquer"
    }
  }
  set VFiltre(a:string){
    //console.log(a)
    this.productF=this.Ffiltrer(a);
  }
  Ffiltrer(b:string){
    return this.products.filter(x=>x.nom==b)
  }
  getColor(q:any){
    console.log(q)
    if(q==0){
      return 'red';
    }else{
      return 'blue';
    }
  }
}
