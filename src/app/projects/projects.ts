import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects = [
    {
      title: 'Project One',
      description:
        'A responsive website built with Html and css to showcase awesome stuff.',
      image: 'assets/images/project1.png',
      github: 'https://m-otefy.github.io/custmize-psd/',
      liveDemo: 'https://project1-live-demo.com',
    },
    {
      title: 'Project Two',
      description:
        'E-commerce web app with real-time cart and payment integration.',
      image: 'assets/images/project2.png',
      github: 'https://m-otefy.github.io/Agency-Landing-Page/',
      liveDemo: 'https://project2-live-demo.com',
    },
  ];
}
