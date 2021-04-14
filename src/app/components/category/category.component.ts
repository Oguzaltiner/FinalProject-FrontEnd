import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   category ={categoryId:1,categoryName:"içecek"};
   category2 ={categoryId:1,categoryName:"yiyecek"};
   category3 ={categoryId:1,categoryName:"giyecek"};
   categories =[this.category,this.category2,this.category3];
  constructor() { }

  ngOnInit(): void {
  }

}
