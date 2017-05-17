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
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      // { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
      { path: 'location', loadChildren: 'app/pages/location/binlocation.module#BinLocationModule' },
      // { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      // { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      //{ path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },

      { path: 'material', loadChildren: 'app/pages/material/material.module#MaterialModule' },
      { path: 'materialslist/:id', loadChildren: 'app/pages/materialslist/materialslist.module#MaterialsListModule' },
      { path: 'materialdetail/:code', loadChildren: 'app/pages/materialdetail/materialdetail.module#MaterialDetailModule' },
      
      { path: 'part', loadChildren: 'app/pages/part/part.module#PartModule' },
      { path: 'partlist/:id', loadChildren: 'app/pages/partlist/partlist.module#PartListModule' },
      //{ path: 'partlist', loadChildren: 'app/pages/partlist/partlist.module#PartListModule' },
      { path: 'stock', loadChildren: 'app/pages/stock/stock.module#StockModule'},
      { path: 'clockon', loadChildren: 'app/pages/clockon/clockon.module#ClockOnModule'},
      { path: 'clocktiles', loadChildren: 'app/pages/clocktiles/clocktiles.module#ClockTilesModule'},
      { path: 'productiontiles', loadChildren: 'app/pages/productiontiles/productiontiles.module#ProductionTilesModule'},
      { path: 'clients', loadChildren: 'app/pages/clients/clients.module#ClientsModule' },
      { path: 'suppliers', loadChildren: 'app/pages/suppliers/suppliers.module#SuppliersModule' },
      { path: 'order', loadChildren: 'app/pages/order/order.module#OrderModule' },
      { path: 'orderdetail/:id', loadChildren: 'app/pages/orderdetail/orderdetail.module#OrderDetailModule' },
   

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
