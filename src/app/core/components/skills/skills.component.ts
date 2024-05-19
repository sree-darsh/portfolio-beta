import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  images: { url: string; title: string }[] = [
    { url: 'assets/img/angular.png', title: 'angular' },
    { url: 'assets/img/react.png', title: 'react' },
    { url: 'assets/img/css3.png', title: 'css3' },
    { url: 'assets/img/html-5.png', title: 'html5' },
    { url: 'assets/img/javascript.png', title: 'javascript' },
    { url: 'assets/img/typescript.png', title: 'typescript' },
    { url: 'assets/img/sass.png', title: 'sass' },
    { url: 'assets/img/bootstrap.png', title: 'bootstrap' },
  ];
}
