import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  fg: any;
;
  constructor(public ob:Router) {
    this.fg = new FormGroup({

      username: new FormControl("admin", [Validators.required]),
      email: new FormControl("", [Validators.email]),
      message: new FormControl("", [Validators.maxLength(10)]),
      age: new FormControl(null, [AgeValidator])

    })
  


  }
  validate(frm:any){
    alert(frm.uid)
    if(frm.uid=="admin" && frm.pwd== "india123"){
      
    }

  }
 

  showdata(frm:any){
if(this.fg.valid
)
  
{alert(frm.username + ":" +frm.email + ":" + frm.message)}
else{ alert("Invalid")}
  }
 
 


}

export function AgeValidator(txt:AbstractControl){
var data = parseInt(txt.value)
if(data> 18){
 return null;  //do nor display error (valid state)
}
else {
return {age:true}

}


}
