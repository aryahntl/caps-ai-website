import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  activeSolution = 0;

  activeImageIndex = 0;

  activeMeaning = 0;

  private solutionImageTimer: any;

  isSolutionImagePaused = false;

  solutions = [

    {
      name: 'CRM',
      shortName: 'CRM',
      category: 'Customer relationships',
      title: 'Everything you need to build better customer relationships.',
      description:
        'Keep customer information, conversations, activities and follow-ups connected in one place.',
      route: '/platform/crm',
      type: 'crm',

      images: [
        'assets/solutions/crm-1.jpg'
        
        // ,'assets/solutions/crm-2.jpg'
      ]
    },


    {
      name: 'Technical Support',
      shortName: 'Support',
      category: 'Service management',
      title: 'Make support simpler for your entire team.',
      description:
        'Organize support requests, priorities and customer interactions through one clear workflow.',
      route: '/platform/technical-support',
      type: 'support',

      images: [
        'assets/solutions/support-1.jpg',
        'assets/solutions/support-2.jpg',
        'assets/solutions/support-3.png',
        'assets/solutions/support-4.png'
      ]
    },


    {
      name: 'Feedback',
      shortName: 'Feedback',
      category: 'Customer insight',
      title: 'Turn customer feedback into meaningful action.',
      description:
        'Capture what your customers are saying and bring useful insights into your decision making.',
      route: '/platform/feedback',
      type: 'feedback',

      images: [
        'assets/solutions/feedback-1.jpg',
        'assets/solutions/feedback-2.jpg',
        'assets/solutions/feedback-3.jpg'
      ]
    },


    {
      name: 'Visitor Management',
      shortName: 'Visitors',
      category: 'Visitor experience',
      title: 'Create a smoother visitor experience.',
      description:
        'Manage visitor activity through a simple, organized and digital experience.',
      route: '/platform/visitor-management',
      type: 'visitor',

      images: [
        'assets/solutions/visitor-1.png',
        'assets/solutions/visitor-2.png'
      ]
    },


    {
      name: 'Inventory',
      shortName: 'Inventory',
      category: 'Inventory management',
      title: 'Know what you have. Know what is moving.',
      description:
        'Bring better visibility and control to your inventory operations.',
      route: '/platform/inventory',
      type: 'inventory',

      images: [
        'assets/solutions/inventory-1.jpg',
        'assets/solutions/inventory-2.jpg'
      ]
    },


    {
      name: 'POS',
      shortName: 'POS',
      category: 'Sales operations',
      title: 'Make every transaction part of your business.',
      description:
        'Connect your sales activity with the wider CAPS-AI ecosystem.',
      route: '/platform/pos',
      type: 'pos',

      images: [
        'assets/solutions/pos-1.png',
        'assets/solutions/pos-2.png'
      ]
    },


    {
      name: 'AI Attendance',
      shortName: 'Attendance',
      category: 'Workforce management',
      title: 'Make attendance smarter with AI.',
      description:
        'Simplify attendance and workforce processes with intelligent digital workflows.',
      route: '/platform/ai-attendance',
      type: 'attendance',

      images: [
        'assets/solutions/attendance-1.jpg'
        ,'assets/solutions/attendance-2.jpg'
      ]
    },


    {
      name: 'IPOD',
      shortName: 'IPOD',
      category: 'Digital operations',
      title: 'Bring everyday operations together.',
      description:
        'Connect operational processes and give your teams a clearer way to work.',
      route: '/platform/ipod',
      type: 'ipod',

      images: [
        'assets/solutions/ipod-1.png',
        'assets/solutions/ipod-2.png'
      ]
    },


    {
      name: 'AI Bill Automation',
      shortName: 'AI Bills',
      category: 'Intelligent automation',
      title: 'Turn repetitive bill processing into intelligent automation.',
      description:
        'Use AI to simplify document-driven workflows and reduce repetitive manual work.',
      route: '/platform/ai-bill-automation',
      type: 'billing',

      images: [
        'assets/solutions/billing-1.png',
        'assets/solutions/billing-2.png'
      ]
    },


    {
      name: 'eKYC',
      shortName: 'eKYC',
      category: 'Digital verification',
      title: 'Make digital verification simpler.',
      description:
        'Create a smoother verification experience through connected digital workflows.',
      route: '/platform/ekyc',
      type: 'ekyc',

      images: [
        'assets/solutions/ekyc-1.png',
        'assets/solutions/ekyc-2.png'
      ]
    }

  ];

  selectSolution(index: number): void {

    this.activeSolution = index;

    // Always start the selected solution
    // from its first screenshot.
    this.activeImageIndex = 0;

    this.isSolutionImagePaused = false;

    this.startSolutionSlideshow();
  }

  getActiveSolution() {
    return this.solutions[this.activeSolution];
  }

  startSolutionSlideshow(): void {

    this.stopSolutionSlideshow();

    const solution = this.getActiveSolution();

    if (!solution.images || solution.images.length <= 1) {
      return;
    }

    this.solutionImageTimer = setInterval(() => {

      if (this.isSolutionImagePaused) {
        return;
      }

      this.nextSolutionImage();

    }, 4000);
  }

  nextSolutionImage(): void {

  const solution = this.getActiveSolution();

  if (!solution.images || solution.images.length <= 1) {
    return;
  }

  this.activeImageIndex =
    (this.activeImageIndex + 1) %
    solution.images.length;
}

stopSolutionSlideshow(): void {

  if (this.solutionImageTimer) {

    clearInterval(
      this.solutionImageTimer
    );

    this.solutionImageTimer = null;
  }
}

pauseSolutionSlideshow(): void {
  this.isSolutionImagePaused = true;
}


resumeSolutionSlideshow(): void {
  this.isSolutionImagePaused = false;
}
ngOnInit(): void {

  this.startSolutionSlideshow();

}

ngOnDestroy(): void {

  this.stopSolutionSlideshow();

}
}
