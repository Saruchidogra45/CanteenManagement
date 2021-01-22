import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[];
  total:any;
  arr: any[];
  constructor(private router: Router, private authService: AuthService,private userService: UserService,private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    if(this.authService.getCount()==0)
    {
      this.authService.setCount(0);
      this.router.navigate(['/empty-cart']);
    }
    this.webSocketService.listen('cart').subscribe(
      (data) => {
        console.log(data);
        this.getdata();
      }
    )
    this.check();
    this.getdata();
  }


  getdata()
  {
    this.userService.getcart().subscribe(
      data => {
        // console.log(data);
        this.arr = data[0];
        // console.log(this.arr);
        this.total=this.arr['total'];
        // console.log(this.total);
        this.items=this.arr['items']
        // console.log(this.items);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        console.log(error);
      }
    )
  }
  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);
        // console.log(data.total);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        console.log(error);
      }
    )
  }

  delete(item)
  {
    console.log("delte");
    console.log(item);
    this.userService.deleteFromCart(item).subscribe(
      data => {
        console.log(data);
        // console.log(data.total);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        console.log(error);
      }
    )
  }
}