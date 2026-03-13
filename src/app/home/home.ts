import { Component } from '@angular/core';
import { Carosal } from "../carosal/carosal";
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [Carosal, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
