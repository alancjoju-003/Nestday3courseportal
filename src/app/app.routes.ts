import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Course } from './course/course';
import { Contactus } from './contactus/contactus';
import { Products } from './products/products';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'courses', component: Course },
    { path: 'contactus', component: Contactus },
    { path: 'products', component:Products }

];
