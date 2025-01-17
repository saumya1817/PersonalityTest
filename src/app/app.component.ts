import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Logger // Typescript Class Decorator
export class AppComponent {
  title = 'personality-test';
  constructor(){}

  @Log
  add(a: number, b: number){
    return a+b;
  }
}
// Function for class decorator
function Logger(target: Function){
  console.log(`Logging Class : ${target.name}`);
}

// Function for function decorator
function Log(target: any, propertyKey: any, description: PropertyDescriptor){
  const origMethod = description.value;

  description.value = function(...args: any[]){
    console.log(`Calling ${propertyKey} with arguments`, args);
    return origMethod.apply(this, args);
  }

}

const calc = new AppComponent();
console.log(calc.add(4,5));

