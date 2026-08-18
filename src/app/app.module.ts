import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { FeatureCardComponent } from './shared/feature-card/feature-card.component';
import { ModuleCardComponent } from './shared/module-card/module-card.component';
import { CtaSectionComponent } from './shared/cta-section/cta-section.component';
import { FaqComponent } from './shared/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
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
import { PlatformComponent } from './pages/platform/platform.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SectionTitleComponent,
    FeatureCardComponent,
    ModuleCardComponent,
    CtaSectionComponent,
    FaqComponent,
    HomeComponent,
    CrmComponent,
    TechnicalSupportComponent,
    FeedbackComponent,
    VisitorManagementComponent,
    InventoryComponent,
    PosComponent,
    AiAttendanceComponent,
    IpodComponent,
    AiBillAutomationComponent,
    EkycComponent,
    PlatformComponent,
    IndustriesComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
