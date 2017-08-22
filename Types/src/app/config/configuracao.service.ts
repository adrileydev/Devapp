import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracaoService {

  constructor() { }

  getLocale(){
     return 'pt-BR';

  }

}
