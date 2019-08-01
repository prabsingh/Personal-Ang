import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMePageComponent } from './components/contact-me-page/contact-me-page.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {
    path: 'ContactMe',
    component: ContactMePageComponent
  },
  {
    path: 'WorkHistory',
    component: WorkHistoryComponent
  },
  {
    path: 'AboutMe',
    component: AboutMeComponent
  },
  {
    path: 'Education',
    component: EducationComponent
  },
  {
    path: 'Skills',
    component: SkillsComponent
  },
  {
    path: '',
    redirectTo: '/AboutMe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
