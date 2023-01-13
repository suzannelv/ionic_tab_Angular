import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  //  angular 接收路由参数的服务
  constructor(public route: ActivatedRoute) { }
  name='';
  age='';
  ngOnInit() {
    console.log(this.route);
    this.name=this.route.snapshot.params['name'];
    this.age = this.route.snapshot.params['age'];
    
  }

}
