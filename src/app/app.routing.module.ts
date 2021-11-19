import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child.component';
import { SubChildComponent } from './subchild.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: '~login',
    },
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: '~home',
        },
        children: [
          {
            path: 'child',
            component: ChildComponent,
            data: {
              breadcrumb: '~child',
            },
            children: [
              {
                path: 'subchild',
                component: SubChildComponent,
                data: {
                  breadcrumb: '~subchild',
                },
              },
            ],
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
