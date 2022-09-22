import { Component } from '@angular/core';
import { Product } from './product';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stud: Student = new Student();
  Students: Student[] = [];
  Cart: Product[] = [];
  Products: Product[] = [
    {
      Name: "Iphone 14",
      Description: "Dummy Mobile",
      Price: 200000,
      Image: "../assets/iphone.jpg"
    },
    {
      Name: "Samsung",
      Description: "Waste Mobile",
      Price: 180000,
      Image: "../assets/samsung.jpg"
    }

  ];

  title = 'sample';
  cStud: Student = new Student();
  IsEditMode = false;
  Add() {
    if (!this.IsEditMode) {
      let currentstudent = new Student();
      currentstudent.Name = this.stud.Name;
      currentstudent.Language = this.stud.Language;
      currentstudent.English = this.stud.English;
      currentstudent.Maths = this.stud.Maths;
      this.Students.push(currentstudent);
      alert('Student Added!!');
      this.stud = new Student();
    } else {
      this.cStud.Name = this.stud.Name;
      this.cStud.Language = this.stud.Language;
      this.cStud.English = this.stud.English;
      this.cStud.Maths = this.stud.Maths;
      this.stud = new Student();
      this.IsEditMode = false
    }
  }

  Edit(cs: Student) {
    this.cStud = cs;
    this.stud.Name = cs.Name;
    this.stud.Language = cs.Language;
    this.stud.English = cs.English;
    this.stud.Maths = cs.Maths;
    this.IsEditMode = true;
  }

  GetButtonText() {
    if (this.IsEditMode) {
      return "Update";
    }
    return "Add";
  }

  AddToCart(e: any){
    this.Cart.push(e);
  }
}
