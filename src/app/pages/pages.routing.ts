import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
      { path: 'materials', loadChildren: 'app/pages/materials/materials.module#MaterialsModule' },
      { path: 'clients', loadChildren: 'app/pages/clients/clients.module#ClientsModule' },
=======
>>>>>>> Stashed changes
      { path: 'order', loadChildren: 'app/pages/order/order.module#OrderModule' },
      { path: 'orderdetail/:id', loadChildren: 'app/pages/orderdetail/orderdetail.module#OrderDetailModule' },
      { path: 'materials', loadChildren: 'app/pages/materials/materials.module#MaterialsModule' }
>>>>>>> origin/master
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
