import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './spa/pageone/pageone.component';
import { PagetwoComponent } from './spa/pagetwo/pagetwo.component';
import { PagethreeComponent } from './spa/pagethree/pagethree.component';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FamilyComponent } from './parent-child/family/family.component';
import { NotfoundComponent } from './spa/notfound/notfound.component';
import { AllComponent } from './directive/all/all.component';
import { InbuiltComponent } from './allpipes/inbuilt/inbuilt.component';
import { CustomComponent } from './allpipes/custom/custom.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home  ',
    pathMatch:'full'
  },
  {
    path:'one',
    component:PageoneComponent
  },
  {
    path:'two',
    component:PagetwoComponent
  },
  {
    path:'three',
    component:PagethreeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'family',
    component:FamilyComponent
  },
  {
    path:'directive',
    component:AllComponent
  },
  {
    path:'inbuiltpipe',
    component:InbuiltComponent
  },
  {
    path:'custompipe',
    component:CustomComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
