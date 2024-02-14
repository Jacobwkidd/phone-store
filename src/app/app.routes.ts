import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'phone/all', component: PhoneListComponent},
    // {path: 'phone/:phoneId', component: PhoneComponent},
    
    {path: '**', component: PageNotFoundComponent}
];
