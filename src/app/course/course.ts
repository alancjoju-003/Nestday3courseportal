import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  courses=[
    {id: 1, title: 'React', description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',image:'atom.png'},
    {id: 2, title: 'Mysql', description: 'Mysql is a popular open-source relational database management system. It is widely used for web development and data storage.',image:'mysql.png'},
    {id: 3, title: 'C', description: 'C is a general-purpose, procedural programming language. It is known for its efficiency and low-level control over system resources.',image:'c-.png'},
    {id: 4, title: 'Linux', description: 'Linux is a free and open-source operating system. It is widely used for web servers, desktops, and embedded systems.',image:'linux.png'},
    {id: 5, title: 'Python', description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for web development, data analysis, artificial intelligence, scientific computing, and more.',image:'python.png'},
    {id: 6, title: 'JavaScript', description: 'JavaScript is a high-level, interpreted programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, mobile applications, and web applications.',image:'java-script.png'},
    {id: 7, title: 'C++', description: 'C++ is a general-purpose programming language that is an extension of the C programming language. It is widely used for system/software development, game development, and in performance-critical applications.',image:'programmer.png'},
    {id: 8, title: 'Node.js', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling you to build scalable and high-performance applications.',image:'nodejs.png'},
    {id: 9, title: 'HTML', description: 'HTML is the standard markup language for creating web pages and web applications. It is used to structure content on the web.',image:'html.png'},
  ]
}

