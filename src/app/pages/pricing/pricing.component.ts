import { Component } from '@angular/core';



// ============================================================
// INTERFACES
// ============================================================

interface PricingPlan {
  name: string;
  positioning: string;
  price: string;
  priceSuffix: string;
  description: string;
  cta: string;
  eyebrow: string;
  bestFor: string;
  featured?: boolean;
}

interface PricingFeature {
  name: string;
  category: string;
  startup: boolean;
  sme: boolean;
  growth: boolean;
  enterprise: boolean;
}


// ============================================================
// COMPONENT
// ============================================================

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {


  scrollToComparison(): void {

    this.showComparison = true;

    setTimeout(() => {

      const comparisonSection =
        document.querySelector('.comparison-section');

      if (comparisonSection) {

        comparisonSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      }

    }, 50);

  }

  get customPlan(): PricingPlan {
    return this.plans.find(
      plan => plan.name === 'CUSTOM'
    ) as PricingPlan;
  }

  // ============================================================
  // PRICING PLANS
  // ============================================================

  plans: PricingPlan[] = [

    {
      name: 'STARTUP',
      positioning: 'Start & Operate',
      price: '₹5,999',
      priceSuffix: '/month',
      eyebrow: 'GET STARTED',
      bestFor: 'Essential tools for day-to-day business operations.',
      description:
        'Start with the essential capabilities you need to operate your business.',
      cta: 'Get Started'
    },

    {
      name: 'SME',
      positioning: 'Manage & Control',
      price: '₹11,999',
      priceSuffix: '/month',
      eyebrow: 'GAIN CONTROL',
      bestFor: 'Growing businesses that need greater visibility.',
      description:
        'Manage operations with stronger reporting, financial visibility and workforce capabilities.',
      cta: 'Choose SME'
    },

    {
      name: 'GROWTH',
      positioning: 'Analyse & Grow',
      price: '₹24,999',
      priceSuffix: '/month',
      eyebrow: 'SCALE WITH INSIGHT',
      bestFor: 'Businesses ready for deeper analysis and planning.',
      description:
        'Unlock advanced financial planning, tax planning and growth-focused capabilities.',
      cta: 'Choose Growth',
      featured: true
    },

    {
      name: 'ENTERPRISE',
      positioning: 'Integrate & Scale',
      price: '₹49,999+',
      priceSuffix: '/month',
      eyebrow: 'ENTERPRISE SCALE',
      bestFor: 'Organisations requiring broader operational integration.',
      description:
        'Bring your business operations together with the broadest CAPS-AI capability set.',
      cta: 'Talk to Sales'
    },

    {
      name: 'CUSTOM',
      positioning: 'Build Your Own',
      price: '₹1,999',
      priceSuffix: '/module/month',
      eyebrow: 'FLEXIBLE',
      bestFor: 'Businesses that want only the modules they need.',
      description:
        'Build your own CAPS-AI package by selecting individual business modules.',
      cta: 'Build Your Package'
    }

  ];


  // ============================================================
  // FEATURES
  // ============================================================

  features: PricingFeature[] = [

    // ==========================================================
    // FINANCE
    // ==========================================================

    {
      name: 'Advanced Reporting & Analytics',
      category: 'Finance',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Expense Management',
      category: 'Finance',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Age Analysis',
      category: 'Finance',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Estimates',
      category: 'Finance',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Invoicing Management',
      category: 'Finance',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'P/L, Balance Sheet & Cash Flow',
      category: 'Finance',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Financial Planning & Analysis',
      category: 'Finance',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },

    {
      name: 'Tax Planning',
      category: 'Finance',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },


    // ==========================================================
    // HR & PEOPLE
    // ==========================================================

    {
      name: 'Performance Measurement',
      category: 'HR & People',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Training & Development',
      category: 'HR & People',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Recruitment & Onboarding',
      category: 'HR & People',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Benefit Administration',
      category: 'HR & People',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },

    {
      name: 'Payroll Management',
      category: 'HR & People',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Time & Attendance',
      category: 'HR & People',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Staff Salary & Wages',
      category: 'HR & People',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },


    // ==========================================================
    // OPERATIONS
    // ==========================================================

    {
      name: 'Customer Agreement',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Bills of Material',
      category: 'Operations',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },

    {
      name: 'Factory',
      category: 'Operations',
      startup: false,
      sme: false,
      growth: false,
      enterprise: true
    },

    {
      name: 'Work Order Management',
      category: 'Operations',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },

    {
      name: 'Maintenance & Repair',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Asset Management',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'General Repair & Maintenance',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Security & Access Control',
      category: 'Operations',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Support & Ticketing',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Travel Desk',
      category: 'Operations',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Visitor Management',
      category: 'Operations',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Communication Services',
      category: 'Operations',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Events & Announcements',
      category: 'Operations',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },


    // ==========================================================
    // INVENTORY
    // ==========================================================

    {
      name: 'Inventory Audit',
      category: 'Inventory',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Proof of Delivery',
      category: 'Inventory',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Shipment Tracking',
      category: 'Inventory',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Inventory Management',
      category: 'Inventory',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Inventory Tracking',
      category: 'Inventory',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },


    // ==========================================================
    // SALES & CUSTOMER
    // ==========================================================

    {
      name: 'Customer Management',
      category: 'Sales & Customer',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Quoting & Proposal Management',
      category: 'Sales & Customer',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Loyalty Program',
      category: 'Sales & Customer',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'POS',
      category: 'Sales & Customer',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Sales Analytics & Reporting',
      category: 'Sales & Customer',
      startup: false,
      sme: true,
      growth: true,
      enterprise: true
    },

    {
      name: 'Sales Forecasting',
      category: 'Sales & Customer',
      startup: false,
      sme: false,
      growth: true,
      enterprise: true
    },

    {
      name: 'Feedback & Recognitions',
      category: 'Sales & Customer',
      startup: true,
      sme: true,
      growth: true,
      enterprise: true
    }

  ];


  // ============================================================
  // UI STATE
  // ============================================================

  selectedPlan: string | null = null;

  selectedCategory: string = 'All';

  showComparison: boolean = true;

  showLeadForm: boolean = false;

  leadFormStep: number = 1;

  // ============================================================
  // CUSTOM MODULE BUILDER
  // ============================================================

  showCustomModulePicker: boolean = false;

  customModuleCategory: string = 'All';

  customSelectedModules: string[] = [];

  // ============================================================
  // OPEN CUSTOM MODULE PICKER
  // ============================================================

  openCustomModulePicker(): void {

    this.showCustomModulePicker = true;

  }

  // ============================================================
  // CLOSE CUSTOM MODULE PICKER
  // ============================================================

  closeCustomModulePicker(): void {

    this.showCustomModulePicker = false;

  }

  closeLeadForm(): void {
    this.showLeadForm = false;
    this.selectedPlan = null;
  }

  leadForm = {
    name: '',
    organizationName: '',
    email: '',
    phone: '',
    organizationSize: ''
  };


  comparisonCategories: string[] = [
    'All',
    'Finance',
    'HR & People',
    'Operations',
    'Inventory',
    'Sales & Customer'
  ];

  submitLead(): void {

    if (
      !this.leadForm.name.trim() ||
      !this.leadForm.organizationName.trim() ||
      !this.leadForm.email.trim() ||
      !this.leadForm.phone.trim()
    ) {

      alert('Please complete all required fields.');

      return;
    }

    console.log({
      plan: this.selectedPlanData,
      customer: this.leadForm
    });

  }

  // ============================================================
  // PLAN SELECTION
  // ============================================================
  selectPlan(plan: PricingPlan): void {

    // CUSTOM plan should open the module selector
    if (plan.name === 'CUSTOM') {

      this.openCustomModulePicker();

      return;

    }

    // Normal plans open the lead form
    this.selectedPlan = plan.name;

    this.showLeadForm = true;

  }


  // ============================================================
  // SELECTED PLAN
  // ============================================================

  get selectedPlanData(): PricingPlan | undefined {

    return this.plans.find(
      plan => plan.name === this.selectedPlan
    );

  }


  // ============================================================
  // CONTINUE WITH PLAN
  // ============================================================
  continueWithPlan(): void {

    if (!this.selectedPlanData) {
      return;
    }

    this.showLeadForm = true;

  }


  // ============================================================
  // CATEGORY SELECTION
  // ============================================================

  selectCategory(category: string): void {

    this.selectedCategory = category;

  }


  // ============================================================
  // PREMIUM PRICING UI HELPERS
  // Data remains unchanged; these helpers only improve presentation.
  // ============================================================

  featureSearchTerm: string = '';

  getPlanFeatureCount(planName: string): number {
    if (planName === 'CUSTOM') {
      return this.features.length;
    }

    const keyMap: any = {
      STARTUP: 'startup',
      SME: 'sme',
      GROWTH: 'growth',
      ENTERPRISE: 'enterprise'
    };

    const key = keyMap[planName];

    if (!key) {
      return 0;
    }

    return this.features.filter(
      (feature: any) => feature[key] === true
    ).length;
  }

  get filteredFeatures(): PricingFeature[] {

    const categoryFiltered =
      this.selectedCategory === 'All'
        ? this.features
        : this.features.filter(
          feature => feature.category === this.selectedCategory
        );

    const search = this.featureSearchTerm.trim().toLowerCase();

    if (!search) {
      return categoryFiltered;
    }

    return categoryFiltered.filter(
      feature =>
        feature.name.toLowerCase().includes(search) ||
        feature.category.toLowerCase().includes(search)
    );

  }


  // ============================================================
  // CATEGORY COUNT
  // ============================================================

  getCategoryCount(category: string): number {

    if (category === 'All') {
      return this.features.length;
    }

    return this.features.filter(
      feature => feature.category === category
    ).length;

  }


  // ============================================================
  // COMPARISON TOGGLE
  // ============================================================

  toggleComparison(): void {

    this.showComparison = !this.showComparison;

  }

  // ============================================================
  // TOGGLE CUSTOM MODULE
  // ============================================================

  toggleCustomModule(feature: PricingFeature): void {

    const index =
      this.customSelectedModules.indexOf(feature.name);

    if (index > -1) {

      // Remove module

      this.customSelectedModules.splice(index, 1);

    } else {

      // Add module

      this.customSelectedModules.push(feature.name);

    }

  }

  // ============================================================
  // CHECK MODULE
  // ============================================================

  isCustomModuleSelected(
    feature: PricingFeature
  ): boolean {

    return this.customSelectedModules.includes(
      feature.name
    );

  }

  // ============================================================
  // CUSTOM FILTERED MODULES
  // ============================================================

  get customFilteredFeatures(): PricingFeature[] {

    if (this.customModuleCategory === 'All') {

      return this.features;

    }

    return this.features.filter(
      feature =>
        feature.category === this.customModuleCategory
    );

  }

  // ============================================================
  // CUSTOM MONTHLY PRICE
  // ============================================================

  getCustomMonthlyPrice(): number {

    return (
      this.customSelectedModules.length * 1999
    );

  }

  // ============================================================
  // CONTINUE CUSTOM PACKAGE
  // ============================================================

  continueWithCustomPackage(): void {

    if (
      this.customSelectedModules.length === 0
    ) {

      return;

    }

    // Mark CUSTOM as selected

    this.selectedPlan = 'CUSTOM';

    // Close module selector

    this.showCustomModulePicker = false;

    // Open lead form

    this.showLeadForm = true;

  }
}