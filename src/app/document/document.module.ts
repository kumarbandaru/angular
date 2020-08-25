import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DocumentComponent
}];
@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentModule { }
