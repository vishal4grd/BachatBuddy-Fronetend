import { CanActivateFn } from '@angular/router';

export const myguardGuard: CanActivateFn = (route, state) => {

  if(sessionStorage.getItem("uid")==null){
    return false
  }else{
  return true;
  }
};
