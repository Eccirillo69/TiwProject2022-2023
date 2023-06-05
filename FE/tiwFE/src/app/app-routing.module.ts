import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ThreadComponent } from './components/thread/thread.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },

  {
    path: "home", component: HomePageComponent,
    children: [
      {path: "thread", component: ThreadComponent}
    ]
  },
  {
    path: "search", component: SearchComponent
  },
  {
    path: "profile", component: ProfileComponent
  },

  // 404
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
