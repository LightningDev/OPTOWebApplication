import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'

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
    canActivate: [AuthService],
    component: Pages,
    children: [
      { path: '', redirectTo: 'order',canActivateChild: [AuthService], pathMatch: 'full' },
      // { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      // { path: 'login',canActivateChild: [AuthService], loadChildren: 'app/pages/login/login.module#LoginModule' },
      { path: 'location',canActivateChild: [AuthService], loadChildren: 'app/pages/location/binlocation.module#BinLocationModule' },
      // { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      // { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui',canActivateChild: [AuthService], loadChildren: 'app/pages/ui/ui.module#UiModule' },
      //{ path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },

      { path: 'material',canActivateChild: [AuthService], loadChildren: 'app/pages/material/material.module#MaterialModule' },
      { path: 'materialslist/:id',canActivateChild: [AuthService], loadChildren: 'app/pages/materialslist/materialslist.module#MaterialsListModule' },
      { path: 'materialdetail/:code',canActivateChild: [AuthService], loadChildren: 'app/pages/materialdetail/materialdetail.module#MaterialDetailModule' },
      
      { path: 'part',canActivateChild: [AuthService], loadChildren: 'app/pages/part/part.module#PartModule' },
      { path: 'partlist/:id',canActivateChild: [AuthService], loadChildren: 'app/pages/partlist/partlist.module#PartListModule' },
      //{ path: 'partlist', loadChildren: 'app/pages/partlist/partlist.module#PartListModule' },
      { path: 'stock',canActivateChild: [AuthService], loadChildren: 'app/pages/stock/stock.module#StockModule'},
      { path: 'clockon',canActivateChild: [AuthService], loadChildren: 'app/pages/clockon/clockon.module#ClockOnModule'},
      { path: 'clocktiles',canActivateChild: [AuthService], loadChildren: 'app/pages/clocktiles/clocktiles.module#ClockTilesModule'},
      { path: 'productiontiles',canActivateChild: [AuthService], loadChildren: 'app/pages/productiontiles/productiontiles.module#ProductionTilesModule'},
      { path: 'clients',canActivateChild: [AuthService], loadChildren: 'app/pages/clients/clients.module#ClientsModule' },
      { path: 'suppliers',canActivateChild: [AuthService], loadChildren: 'app/pages/suppliers/suppliers.module#SuppliersModule' },
      { path: 'order',canActivateChild: [AuthService], loadChildren: 'app/pages/order/order.module#OrderModule' },
      { path: 'orderdetail/:id',canActivateChild: [AuthService], loadChildren: 'app/pages/orderdetail/orderdetail.module#OrderDetailModule' },
   

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
