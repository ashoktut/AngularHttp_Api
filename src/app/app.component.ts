import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';

  // constructor() {
  //   // define a type of data that our subscription / observable is going to be emitting and assign it to an object literal
  //   type HttpResponse = {code: number, data: string};

  //   // Use observable when you need to emit a stream of data / just some asynchronous data which means its not code blocking
  //   // Observable start
  //   const observable = new Observable<HttpResponse>(subscriber => {
  //     console.log('Inside Subscriber..');

  //     subscriber.next({code: 200, data: 'This is data 1...'});
  //     subscriber.next({code: 200, data: 'This is data 2...'});
  //     subscriber.next({code: 200, data: 'This is data 3...'});
  //     // subscriber.error({code: 500, msg: 'Error Occurred...'})

  //     setTimeout(() => {
  //       subscriber.next({code: 200, data: 'This is more data...'});
  //       subscriber.complete();
  //     }, 3 * 1000);

  //     console.log('Subscriber is done emitting...');
  //   });
  //   // Observable end

  //   observable.subscribe({
  //     next(response: HttpResponse) {
  //       console.log('Got Response: ', response);
  //     },
  //     error(error: any) {
  //       console.error('Something wrong happened: ', error);
  //     },
  //     complete() {
  //       console.log('done');
  //     }
  //   });
  // }

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response) => console.log(response),
      error: (e) => console.log(e),
      complete: () => console.log('Done getting users')
    });
  }

  onGetUser(): void {
    this.userService.getUser().subscribe({
      next: (response) => console.log(response),
      error: (e) => console.log(e),
      complete: () => console.log('Done getting a single user')
    });
  }
}
