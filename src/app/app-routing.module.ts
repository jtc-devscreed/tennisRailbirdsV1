import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'objective',
    loadChildren: () => import('./objective/objective.module').then( m => m.ObjectivePageModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./equipment/equipment.module').then( m => m.EquipmentPageModule)
  },
  {
    path: 'scoring',
    loadChildren: () => import('./scoring/scoring.module').then( m => m.ScoringPageModule)
  },
  {
    path: 'winning',
    loadChildren: () => import('./winning/winning.module').then( m => m.WinningPageModule)
  },
  // {
  //   path: 'sport',
  //   loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  // },
  // {
  //   path: 'technology',
  //   loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  // },
  // {
  //   path: 'entertainment',
  //   loadChildren: () => import('./entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  // },
  // {
  //   path: 'health',
  //   loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  // },
  // {
  //   path: 'science',
  //   loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  // },
  // {
  //   path: 'sample',
  //   loadChildren: () => import('./sample/sample.module').then( m => m.SamplePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
