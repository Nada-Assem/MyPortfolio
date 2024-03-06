import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name:string = "Nada Assem" ;
  aboutme: string = "I am a dedicated backend developer proficient in .NET technologies, holding a Bachelor's degree in Computer Science from Luxor University. Thanks to my expertise in writing clean code and problem-solving skills, I contribute to delivering high-quality solutions. I work passionately and stay constantly updated on the latest developments in software development, allowing me to add my creative touch and approach each project with an analytical spirit.";
}

