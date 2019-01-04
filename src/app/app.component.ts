import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  todoArray=[]

  addTodo(value){
    this.todoArray.push(value)
    console.log(value)
  }

  deleteTodo(value){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(value == this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

  todoSubmit(value:any){
    if(value!==""){
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    console.log(value)
  }

}
