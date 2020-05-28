import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FamilyComponent } from './parent-child/family/family.component';
import { AncestorComponent } from './parent-child/ancestor/ancestor.component';
import { RelativesComponent } from './parent-child/relatives/relatives.component';
import { FatherComponent } from './parent-child/father/father.component';
import { MotherComponent } from './parent-child/mother/mother.component';
import { PageoneComponent } from './spa/pageone/pageone.component';
import { PagetwoComponent } from './spa/pagetwo/pagetwo.component';
import { PagethreeComponent } from './spa/pagethree/pagethree.component';
import { NotfoundComponent } from './spa/notfound/notfound.component';
import { AllComponent } from './directive/all/all.component';
import { InbuiltComponent } from './allpipes/inbuilt/inbuilt.component';
import { CustomComponent } from './allpipes/custom/custom.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    FamilyComponent,
    AncestorComponent,
    RelativesComponent,
    FatherComponent,
    MotherComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    NotfoundComponent,
    AllComponent,
    InbuiltComponent,
    CustomComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
