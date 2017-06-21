import {Injectable} from '@angular/core';
import {Config} from './config.model';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

  private config: Config;

  constructor(private http: Http) {
  }

  load(): Promise<Config> {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(res => res.json())
      .subscribe((env_data) => {
        this.config = env_data;
        console.log(env_data);
      });
    return Promise.resolve(this.config);
  }

  getConfig(): Config {
    return this.config;
  }
}
