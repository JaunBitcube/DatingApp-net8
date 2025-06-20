import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService)
cancelRegister = output<boolean>()
model: any = {};

register(){
  this.accountService.register(this.model).subscribe({
    next: response =>{
      console.log('Registration successful:', response);
      this.cancel();
    },
    error: error=>{
      console.log('Registration failed:', error);
      
    }
  })
  

}





cancel(){
  this.cancelRegister.emit(false)
  
}
}
