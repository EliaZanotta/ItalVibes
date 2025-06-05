import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { DesignComponent } from './design/design.component';
import { ProdottiDetailComponent } from './prodotti-detail/prodotti-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'prodotti',
        component: ProdottiComponent,
    },
    {
        path: 'prodotti/:id',
        component: ProdottiDetailComponent, 
    },
    {
        path: 'design',
        component: DesignComponent,
    },

];
