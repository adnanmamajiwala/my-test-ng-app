import {Injectable} from '@angular/core';
import {Config} from './config.model';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

  static configuration: Config;
  private _config: Config;

  constructor(private http: Http) {
  }

  load(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {

      this.http.get('https://jsonplaceholder.typicode.com/posts/1')
        .map(res => res.json())
        .subscribe((env_data) => {
          this._config = env_data;
          ConfigService.configuration = env_data;
          console.log('Inside ConfigService.load.subscribe =>' + JSON.stringify(this._config));
          resolve(true);
        });
    });
  }


  get config(): Config {
    return this._config;
  }

}
