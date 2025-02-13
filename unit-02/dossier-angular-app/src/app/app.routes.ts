import { Routes } from '@angular/router';
import { Practice8Component } from './practices/practice8/practice8.component';
import { ImcCalc } from './practices/imccalc/imccalc.component';
import { Practice072Component } from './practices/practice07-2/practice07-2.component';

export const routes: Routes = [
  {
    path:'',
    component: Practice8Component,
    title: 'RockPaperScissor'
  },
  {
    path:'rps',
    component: Practice8Component,
    title: 'RockPaperScissor'
  },
  {
    path:'imccalc',
    component: ImcCalc,
    title: 'IMCalc'
  },
  {
    path:'imccalc/:id',
    component: ImcCalc,
    title: 'IMCalc'
  },
  {
    path:'gatos',
    component: Practice072Component,
    title: 'Gatos'
  },
  {
    path:'gatos/:id',
    component: Practice072Component,
    title: 'Gatos'
  }
];
