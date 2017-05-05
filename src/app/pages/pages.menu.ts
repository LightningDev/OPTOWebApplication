export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      /*{
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },*/
      {
        path: 'order',
        data: {
          menu: {
            title: 'Order',
            icon: 'ion-ios-cart',
            selected: false,
            expanded: false,
            order: 50
          }
        }
      },
      {
        path: 'part',
        data: {
          menu: {
            title: 'Part',
            icon: 'ion-wrench',
            selected: false,
            expanded: false,
            order: 50
          }
        }
      },
      {
        path: 'location',
        data: {
          menu: {
            title: 'Location',
            icon: 'ion-ios-box',
            selected: false,
            expanded: false,
            order: 50
          }
        }
      },
      {
        path: 'stock',
        data: {
          menu: {
            title: 'Stock',
            icon: 'ion-cube',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'material',
        data: {
          menu: {
            title: 'Material',
            icon: 'ion-pricetag',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'clients',
        data: {
          menu: {
            title: 'Clients',
            icon: 'ion-android-contact',
            pathMatch: 'details',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'suppliers',
        data: {
          menu: {
            title: 'Suppliers',
            icon: 'ion-android-contacts',
            pathMatch: 'details',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'clocktiles',
        data: {
          menu: {
            title: 'Clock Tiles',
            icon: 'ion-ios-clock',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'productiontiles',
        data: {
          menu: {
            title: 'Production Tiles',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 900
          }
        }
      }
    ]
  }
];
