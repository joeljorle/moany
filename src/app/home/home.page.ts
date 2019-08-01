import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currenttab: any;
  qty=10;
  imgplan='../../assets/icon/pilgif.gif';
  level=1;
  plangamer:Array<any>=[];
  plangame:Array<any>=[];
  

  constructor(router:ActivatedRoute) {
    this.changetab();
  }



  changeplan()
  {
    if(this.imgplan=='../../assets/icon/pilgif.gif')
    this.imgplan='../../assets/icon/korngif.gif';
    else this.imgplan='../../assets/icon/pilgif.gif';
  }
  changetab(name?:any)
  {
   this.currenttab=name==undefined?'home':name;
    switch (this.currenttab)
    {
        case 'money':
        break;
        case 'home':
          this.initplangamer(this.level);
        break;
        case 'jackpot':
        break;
        case 'otherlevel':
        break;  
        default: this.changetab();
        break;

    }                                                     

  }

  initplangamer(size)
  {
    for (let index = 0; index < size; index++) {
      this.plangamer.push(0);
     }
    this.initplangame();
  }

  updateplangamer(index)
  {
    this.plangamer[index]=!this.plangamer[index];
  }

  initplangame()
  {
    for (let index = 0; index < this.plangamer.length; index++) {
      this.plangamer.push(0);
     } 
  }

  randominitplangame()
  {
    this.plangame.forEach(
      item=>{
        item=this.random(0,1);
      }); 
  }



  allwin()
  {let rep=true;
    for (let index = 0; index < this.plangamer.length; index++) {
      if(this.plangame[index]!=this.plangamer[index]) rep =false;
     }
     return rep;
  }

  alllost()
  {let rep=true;
    for (let index = 0; index < this.plangamer.length; index++) {
      if(this.plangame[index]==this.plangamer[index]) rep =false;
     }
  return rep;}

  winqty()
  {
    let rep=0;
      for (let index = 0; index < this.plangamer.length; index++) {
        if(this.plangame[index]==this.plangamer[index]) rep++;
       }
    return rep
  }

random(min,max)
{
return Math.floor(Math.random()*(max-min))+min;
}


}
