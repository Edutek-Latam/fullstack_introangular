import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateComponent } from './page/form-template/form-template.component';
import { FormRactiveComponent } from './page/form-ractive/form-ractive.component';
import { VerComponent } from './page/ver/ver.component';

const routes: Routes = [
  {path:'form-template', component:FormTemplateComponent},
  {path:'form-reactive', component: FormRactiveComponent},
  {path:'ver',component: VerComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
