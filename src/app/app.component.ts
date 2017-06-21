import {Component} from '@angular/core';
import {Config} from './services/config.model';
import {ConfigService} from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: Config = ConfigService.configuration;

  // constructor(service: ConfigService) {
  //   this.config = service.config;
  // }
}
