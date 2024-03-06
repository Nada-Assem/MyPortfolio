import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
s1:string = 'Developing robust and scalable web applications using .NET technologies such as ASP.NET and ASP.NET Core.';
s2:string ="Designing and implementing databases, utilizing technologies like Microsoft SQL Server, MySQL, or MongoDB. Managing database schemas, indexing, and optimization for efficient data storage and retrieval.";
s3:string ="Creating RESTful APIs or SOAP services to facilitate communication between different components of a system or to allow integration with third-party services.";

}
