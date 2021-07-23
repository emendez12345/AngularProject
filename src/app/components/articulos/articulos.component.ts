import { Component, OnInit } from '@angular/core';
import{ArticuloService} from 'src/app/articulo.service';
import{Articulo} from 'src/app/Articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  articulos:any;
  articulo = new Articulo();
  /*
  title='Aqui se establecera el sistemas de venta';
  subtitle='Aqui se establece el subtitulo';*/
   
  constructor(private dataService:ArticuloService) { }

  ngOnInit(): void {

    this.getArticulosData();
  
  }

  getArticulosData(){
    this.dataService.getArt().subscribe(res=>{
      this.articulos=res;
    
   //  console.log(res);
    });
    //console.log('HOla mundo');
  }

  insertData(){
    this.dataService.insertArt(this.articulo).subscribe(res=>{
  //  console.log(res);
 //  console.log(this.articulo);
   this.getArticulosData();
  });

  }
  
  deleteData(id: any){
    this.dataService.deleteArt(id).subscribe(res=>{
      this.getArticulosData();
    })
}

}
