import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RestapiServiceProvider],

})
export class HomePage {
  public people = [];
  public page = 1;
  constructor(public navCtrl: NavController, public restapiService: RestapiServiceProvider) {
    this.loadPeople(this.page);
  }


loadPeople(page){
  console.log("page ", page);
this.restapiService.load(this.page)
.subscribe(res => {
  console.log(res);
  if(!this.page)
  this.people = res.data;
  if(this.page){
    res.data.forEach(item => {
      this.people.push(item)
    })
  }

})




}
doInfinite(infiniteScroll) {
    this.page ++;
    let error = err => {
      console.log("Erro", err);
      infiniteScroll.complete();
    }
    let success = res => {
      let ctx = this;
      setTimeout(() => {

        res.data.forEach(item => {
          this.people.push(item)
        })

                  infiniteScroll.complete();
      });
    }
    if (this.page != 4) {
      this.restapiService.load(this.page)
      .subscribe(success, error)
  }else{
    infiniteScroll.complete();
  }


  }


}
