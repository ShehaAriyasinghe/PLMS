import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {exists} from "fs";

@Injectable({
  providedIn: 'root'
})
export class CookiemanagerService {

  constructor(private cookieService:CookieService) { }

  createCookie(name:any,value:any){
    this.cookieService.set(name,value,25,'/')

  }
  isExistsCookie(name:any):boolean{
    return this.cookieService.check(name);
  }

  isExistsCookieWithPromise(name:any):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      try{
        const exist:boolean=this.cookieService.check(name);
        resolve(exist);
      }catch (error){
        reject(error);
      }

    })

  }

  clearCookie(name:any){
    this.cookieService.delete(name);

  }

  clearAllCookies(name:any){
    this.cookieService.deleteAll();

  }

  findCookie(name:any){

    if(this.isExistsCookie(name)){
      return this.cookieService.get(name);
    }else {
      return undefined;
    }

  }





}
