import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ResultTextComponent } from './result-text/result-text.component';

const routes: Routes = [
  { path: '', redirectTo: 'UploadImageComponent', pathMatch: 'full' },
  { path: 'result', component: ResultTextComponent}, 
  { path: 'upload-image', component: UploadImageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
