import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { CrmComponent } from './pages/crm/crm.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { VisitorManagementComponent } from './pages/visitor-management/visitor-management.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { PosComponent } from './pages/pos/pos.component';
import { AiAttendanceComponent } from './pages/ai-attendance/ai-attendance.component';
import { IpodComponent } from './pages/ipod/ipod.component';
import { AiBillAutomationComponent } from './pages/ai-bill-automation/ai-bill-automation.component';
import { EkycComponent } from './pages/ekyc/ekyc.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'platform',
    component: PlatformComponent
  },

  {
    path: 'platform/crm',
    component: CrmComponent
  },

  {
    path: 'platform/technical-support',
    component: TechnicalSupportComponent
  },

  {
    path: 'platform/feedback',
    component: FeedbackComponent
  },

  {
    path: 'platform/visitor-management',
    component: VisitorManagementComponent
  },

  {
    path: 'platform/inventory',
    component: InventoryComponent
  },

  {
    path: 'platform/pos',
    component: PosComponent
  },

  {
    path: 'platform/ai-attendance',
    component: AiAttendanceComponent
  },

  {
    path: 'platform/ipod',
    component: IpodComponent
  },

  {
    path: 'platform/ai-bill-automation',
    component: AiBillAutomationComponent
  },

  {
    path: 'platform/ekyc',
    component: EkycComponent
  },

  {
    path: 'industries',
    component: IndustriesComponent
  },

  {
    path: 'pricing',
    component: PricingComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'blog',
    component: BlogComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }