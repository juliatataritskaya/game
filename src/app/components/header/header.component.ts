import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  placement = 'bottom-right';

  constructor(private authService: AuthService) {
  }

  public logout() {
    this.authService.logout();
  }
}
