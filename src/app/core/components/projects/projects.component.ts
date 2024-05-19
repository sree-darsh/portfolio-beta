import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: {
    title: string;
    imgUrl: string;
    tech: { title: string }[];
    details: string;
  }[] = [
    {
      title: 'Intranet',
      imgUrl: 'assets/img/angular.png',
      tech: [
        { title: 'Angular' },
        { title: 'PrimeNG' },
        { title: 'Bootstrap' },
      ],
      details:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is av',
    },
    {
      title: 'Intranet',
      imgUrl: 'assets/img/angular.png',
      tech: [
        { title: 'Angular' },
        { title: 'PrimeNG' },
        { title: 'Bootstrap' },
      ],
      details:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is av',
    },
    {
      title: 'Intranet',
      imgUrl: 'assets/img/angular.png',
      tech: [
        { title: 'Angular' },
        { title: 'PrimeNG' },
        { title: 'Bootstrap' },
      ],
      details:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is av',
    },
  ];
}
