import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
// 路由跳转服务
  constructor(public router:NavController) { }

  ngOnInit() {
  }
  onClick() {
    // 不带参数
    // this.router.navigateForward('/detail')
    // 带参数
    this.router.navigateForward(["/detail", {name:"snopy", age:3}])

  }

}
