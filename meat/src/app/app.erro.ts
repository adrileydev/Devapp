import{Response} from "@angular/http"
import { Observable } from "rxjs/Observable";

export class ErroHandler{
 
    static handleError(error: Response | any)
    {
        let erroMessage:string
        if(error instanceof Response){
            erroMessage = `Erro ${error.status} ao Acessar a Url ${error.url} - ${error.statusText}`

        }else{

              erroMessage = error.toString();

        }

        console.log(erroMessage)
        return Observable.throw(erroMessage)
    }
}