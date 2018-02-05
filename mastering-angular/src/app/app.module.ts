import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestTypescriptComponent } from './test-typescript/test-typescript.component';
import { EvenBindingComponent } from './event-binding.componet';
import { EvenFilteringComponent } from './event-filtering.component';
import { AliasInputComponent } from './alias-input/alias-input.component';
import { HttpServicesComponent } from './http-services/http-services.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReduxTestComponent } from './redux-test/redux-test.component';

import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './redux-test/simple.reducer';



const APP_ROUTES : Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    //path: 'dashboard/:id' , component: DashboardComponent // A way to get ID when param pass through path
    path: 'dashboard' , component: DashboardComponent // A way to get ID when param pass through path
  },
  {
    path: 'testtypescriptcomponent' , component: TestTypescriptComponent // A way to get ID when param pass through path
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    TestTypescriptComponent,
    EvenBindingComponent,
    EvenFilteringComponent,
    SummaryPipe,
    AliasInputComponent,
    HttpServicesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ReduxTestComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule , FormsModule, RouterModule.forRoot(APP_ROUTES), ReactiveFormsModule,
      StoreModule.forRoot({message: simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
