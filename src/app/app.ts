import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Carosal } from "./carosal/carosal";
import { Footer } from "./footer/footer";
import { Course } from "./course/course";
import { Home } from "./home/home";
import { Contactus } from "./contactus/contactus";
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('deep');
}
