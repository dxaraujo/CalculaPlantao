import {provideRouter, RouterConfig} from '@angular/router';
import {SideBarComponent, FeriadoListComponent, FeriadoFormComponent} from './component';

const routes: RouterConfig = [
    {
        path: 'feriado',
        component: FeriadoListComponent
    }, {
        path: 'feriadoDetail',
        component: FeriadoFormComponent
    }, {
        path: '',
        redirectTo: '/feriado',
        pathMatch: 'full'
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
