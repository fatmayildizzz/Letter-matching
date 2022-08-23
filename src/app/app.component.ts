import { Component } from '@angular/core';

import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText= lorem.sentence();
  title= 'harf';

  enterText:string='';
  colorcorrect="correct";
  

  getInputValue(value:string){

    console.log(this.randomText.split(''));
    this.enterText=value;
    

  }

  compore(randomletter:string,enterletter:string){
    if(!enterletter){
      return "pending";
    }
   return  randomletter===enterletter ? "correct" : "incorrect";
  }

  }
 
  

