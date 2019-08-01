import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMePageComponent } from './components/contact-me-page/contact-me-page.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';


const routes: Routes = [
  {
    path: 'ContactMe',
    component: ContactMePageComponent
  },
  {
    path: 'WorkHistory',
    component: WorkHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
