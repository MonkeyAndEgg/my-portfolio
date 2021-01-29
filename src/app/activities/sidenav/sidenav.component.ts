import { Component, OnInit } from '@angular/core';
import { faCoffee, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // TODO get proper icons
  faCoffee = faCoffee;
  faMoneyBill = faMoneyBill
  faUser = faUser

  constructor() { }

  ngOnInit(): void {
  }

}
