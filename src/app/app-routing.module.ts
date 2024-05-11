import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodayComponent } from './pages/today/today.component';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { TenDaysComponent } from './pages/ten-days/ten-days.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'today', component: TodayComponent },
  { path: 'tomorrow', component: TomorrowComponent },
  { path: 'tendays', component: TenDaysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
