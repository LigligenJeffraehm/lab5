import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KantoRegionComponent } from './kanto-region/kanto-region.component';
import { JohtoRegionComponent } from './johto-region/johto-region.component';
import { HoennDisplayComponent } from './hoenn-display/hoenn-display.component';

export const routes: Routes = [ 
    {path:'home', component: HomeComponent},
    {path:'kanto', component:KantoRegionComponent},
    {path:'johto', component:JohtoRegionComponent},
    {path:'hoenn', component:HoennDisplayComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}
];
