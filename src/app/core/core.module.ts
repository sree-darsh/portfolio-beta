import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    HeroComponent,
  ],
  exports: [
    FooterComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
