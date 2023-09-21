import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './components/certificates/certificates.component';

const routes: Routes = [
  { path: 'certificates', component: CertificatesComponent },
  { path: '', redirectTo: '/certificates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
