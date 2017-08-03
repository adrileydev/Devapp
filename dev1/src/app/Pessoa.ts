export class Pessoa{
   Nome      : string;
   Idade     : number;
   Telefone? : string;
   Ativo     : boolean;

   constructor(N: string,id : number,f : string,a?: boolean)
   {
       this.Idade    = id;
       this.Nome     = N;
       this.Telefone = f;
       this.Ativo    = a;
        
   }
     public ValidaId(value : number): boolean{
        if(value >= 18){
            return true;
        }else{
            return false;
        }
     }
}