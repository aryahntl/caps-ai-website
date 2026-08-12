import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  activeSolution = 0;

  solutions = [
    {
      name: 'CRM',
      shortName: 'CRM',
      category: 'Customer relationships',
      title: 'Everything you need to build better customer relationships.',
      description:
        'Keep customer information, conversations, activities and follow-ups connected in one place.',
      route: '/platform/crm',
      type: 'crm'
    },

    {
      name: 'Technical Support',
      shortName: 'Support',
      category: 'Service management',
      title: 'Make support simpler for your entire team.',
      description:
        'Organize support requests, priorities and customer interactions through one clear workflow.',
      route: '/platform/technical-support',
      type: 'support'
    },

    {
      name: 'Feedback',
      shortName: 'Feedback',
      category: 'Customer insight',
      title: 'Turn customer feedback into meaningful action.',
      description:
        'Capture what your customers are saying and bring useful insights into your decision making.',
      route: '/platform/feedback',
      type: 'feedback'
    },

    {
      name: 'Visitor Management',
      shortName: 'Visitors',
      category: 'Visitor experience',
      title: 'Create a smoother visitor experience.',
      description:
        'Manage visitor activity through a simple, organized and digital experience.',
      route: '/platform/visitor-management',
      type: 'visitor'
    },

    {
      name: 'Inventory',
      shortName: 'Inventory',
      category: 'Inventory management',
      title: 'Know what you have. Know what is moving.',
      description:
        'Bring better visibility and control to your inventory operations.',
      route: '/platform/inventory',
      type: 'inventory'
    },

    {
      name: 'POS',
      shortName: 'POS',
      category: 'Sales operations',
      title: 'Make every transaction part of your business.',
      description:
        'Connect your sales activity with the wider CAPS-AI ecosystem.',
      route: '/platform/pos',
      type: 'pos'
    },

    {
      name: 'AI Attendance',
      shortName: 'Attendance',
      category: 'Workforce management',
      title: 'Make attendance smarter with AI.',
      description:
        'Simplify attendance and workforce processes with intelligent digital workflows.',
      route: '/platform/ai-attendance',
      type: 'attendance'
    },

    {
      name: 'IPOD',
      shortName: 'IPOD',
      category: 'Digital operations',
      title: 'Bring everyday operations together.',
      description:
        'Connect operational processes and give your teams a clearer way to work.',
      route: '/platform/ipod',
      type: 'ipod'
    },

    {
      name: 'AI Bill Automation',
      shortName: 'AI Bills',
      category: 'Intelligent automation',
      title: 'Turn repetitive bill processing into intelligent automation.',
      description:
        'Use AI to simplify document-driven workflows and reduce repetitive manual work.',
      route: '/platform/ai-bill-automation',
      type: 'billing'
    },

    {
      name: 'eKYC',
      shortName: 'eKYC',
      category: 'Digital verification',
      title: 'Make digital verification simpler.',
      description:
        'Create a smoother verification experience through connected digital workflows.',
      route: '/platform/ekyc',
      type: 'ekyc'
    }
  ];

  selectSolution(index: number): void {
    this.activeSolution = index;
  }

  getActiveSolution() {
    return this.solutions[this.activeSolution];
  }

  ngOnInit() {
  }
}
