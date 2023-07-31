import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularRouting';

  constructor(private route: Router){}

  //routing without ancor tags

  navigate(){                          //navigating to the route without routerlinks
    this.route.navigate(['/contact'])
  }
}
