import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Articulo } from 'src/app/Articulo';
import { ArticuloserService } from 'src/app/articuloser.service';

@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css']
})
export class ArticuloEditComponent implements OnInit {


  id: any;
  articuloser:any;
  articulo = new Articulo();
  
  constructor(private route:ActivatedRoute,private articuloserService:ArticuloserService) { }

  ngOnInit(): void {

  console.log(this.route.snapshot.params.id);
  this.id=this.route.snapshot.params.id;
  this.getData();
  }

  getData(){
    this.articuloserService.getArticuloById(this.id).subscribe(res=>{
      console.log(res);
     this.articuloser=res;
     this.articulo=this.articuloser;
    })
}

  updateArticulo(){
    this.articuloserService.updateDate(this.id,this.articulo).subscribe(res=>{
              
    });
  }
}
