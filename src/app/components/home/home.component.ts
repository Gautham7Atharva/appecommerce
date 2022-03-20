import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = [];
  productsList = [];
  tempProductsList = [];
  term: string = null;
  constructor(private productsService:ProductsService,private router: Router) { }

  ngOnInit(){
    this.getallCategories();
  }

  getallCategories(){
    this.categories = [];
    this.productsService.getCategories().subscribe(result =>{
      if(result?.length > 0)
      this.categories = result;
    });
  }

  getallProductsByCategory(category){
    if(category){
      this.productsList = [];
      this.productsService.getAllProductsByCategories(category).subscribe(result =>{
        if(result?.length > 0)
        this.productsList = result;
        this.tempProductsList = result;
      });
    }
    
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    if (val != '' && val != null) {
      const temp = this.productsList.filter(function (d) {
        return d.title.toLowerCase().indexOf(val) !== -1 || !val;
      });
      this.tempProductsList = new Array<any>();
      this.tempProductsList = temp;
    }
    else {
      this.tempProductsList = JSON.parse(JSON.stringify(this.productsList));
    }
  }
  checkProduct(){
      this.router.navigate(["/components/productdetail"]);
  }

}
