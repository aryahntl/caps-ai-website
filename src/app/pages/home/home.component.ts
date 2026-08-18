import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

interface CapsSolution {
  name: string;
  shortName: string;
  category: string;
  title: string;
  description: string;
  businessValue: string;
  capabilities: string[];
  users: string[];
  icon: string;
  type: string;
  route: string;
  images: string[];
}

interface HowStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

interface CapsMeaning {
  letter: string;
  name: string;
  shortDescription: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('heroVideo', { static: false }) heroVideo: ElementRef;

  activeSolution = 0;
  activeImageIndex = 0;
  activeMeaning = 0;
  activeHowStep = 0;

  heroMuted = true;
  heroVideoAvailable = true;

  private solutionImageTimer: any = null;
  private heroVideoElement: HTMLVideoElement = null;

  isSolutionImagePaused = false;

  howCapsWorks: HowStep[] = [
    {
      number: '01',
      title: 'Connect',
      description: 'Bring business activity, teams and workflows into one connected environment.',
      detail: 'CAPS-AI starts by connecting the information and processes your teams already use, so work is easier to see across the business.',
      icon: '◎'
    },
    {
      number: '02',
      title: 'Automate',
      description: 'Reduce repetitive work with clear digital workflows and automation.',
      detail: 'Routine processes can follow consistent workflows, helping teams spend less time on repetitive administration.',
      icon: '↻'
    },
    {
      number: '03',
      title: 'Understand',
      description: 'Turn connected activity into useful information and insight.',
      detail: 'Once information is connected, CAPS-AI can help teams see patterns, priorities and opportunities in the activity around them.',
      icon: '◉'
    },
    {
      number: '04',
      title: 'Act',
      description: 'Move from information to faster, smarter business action.',
      detail: 'The goal is not just to show information. CAPS-AI helps teams move from insight to practical action inside their workflows.',
      icon: '→'
    }
  ];

  meanings: CapsMeaning[] = [
    {
      letter: 'C',
      name: 'Complete',
      shortDescription: 'A connected view of the business.',
      title: 'Complete business visibility',
      description: 'CAPS-AI is designed to bring important business activity together instead of leaving teams dependent on disconnected processes.'
    },
    {
      letter: 'A',
      name: 'Automation',
      shortDescription: 'Less repetitive work for your teams.',
      title: 'Automation built into workflows',
      description: 'Automation helps standardize repetitive activities and gives teams a clearer path from input to completed work.'
    },
    {
      letter: 'P',
      name: 'Production',
      shortDescription: 'Keep operational work moving.',
      title: 'Production and operations',
      description: 'CAPS-AI connects operational activity so teams can coordinate work, monitor progress and keep everyday processes moving.'
    },
    {
      letter: 'S',
      name: 'Sales',
      shortDescription: 'Turn customer activity into action.',
      title: 'Sales connected to the ecosystem',
      description: 'Sales activity can sit alongside customer, support and operational information so teams can work from a more complete picture.'
    },
    {
      letter: 'AI',
      name: 'Artificial Intelligence',
      shortDescription: 'Intelligence at the core.',
      title: 'AI-powered business intelligence',
      description: 'AI is positioned as part of the CAPS-AI ecosystem, helping teams understand information, identify opportunities and move toward action.'
    }
  ];

  solutions: CapsSolution[] = [
    {
      name: 'CRM',
      shortName: 'CRM',
      category: 'Customer relationships',
      title: 'Everything you need to build better customer relationships.',
      description: 'Keep customer information, conversations, activities and follow-ups connected in one place.',
      businessValue: 'A clearer customer view from first interaction to follow-up.',
      capabilities: ['Customer information', 'Activities & follow-ups', 'Connected conversations'],
      users: ['Sales teams', 'Customer teams'],
      icon: '◎',
      type: 'crm',
      route: '/platform/crm',
      images: ['assets/solutions/crm-1.jpg']
    },
    {
      name: 'Technical Support',
      shortName: 'Support',
      category: 'Service management',
      title: 'Make support simpler for your entire team.',
      description: 'Organize support requests, priorities and customer interactions through one clear workflow.',
      businessValue: 'A more organized support process with clearer priorities.',
      capabilities: ['Support requests', 'Priorities & workflow', 'Customer interactions'],
      users: ['Support teams', 'Service teams'],
      icon: '◌',
      type: 'support',
      route: '/platform/technical-support',
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
      description: 'Capture what your customers are saying and bring useful insights into your decision making.',
      businessValue: 'Make customer feedback easier to review and act on.',
      capabilities: ['Feedback capture', 'Customer insights', 'Actionable information'],
      users: ['Customer teams', 'Business leaders'],
      icon: '✦',
      type: 'feedback',
      route: '/platform/feedback',
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
      description: 'Manage visitor activity through a simple, organized and digital experience.',
      businessValue: 'A cleaner digital process for managing visitors.',
      capabilities: ['Visitor activity', 'Digital experience', 'Organized workflows'],
      users: ['Front desk teams', 'Operations teams'],
      icon: '◉',
      type: 'visitor',
      route: '/platform/visitor-management',
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
      description: 'Bring better visibility and control to your inventory operations.',
      businessValue: 'Better visibility into inventory activity and movement.',
      capabilities: ['Inventory visibility', 'Stock activity', 'Operational control'],
      users: ['Operations teams', 'Inventory teams'],
      icon: '▦',
      type: 'inventory',
      route: '/platform/inventory',
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
      description: 'Connect your sales activity with the wider CAPS-AI ecosystem.',
      businessValue: 'Keep transaction activity connected to wider business workflows.',
      capabilities: ['Sales transactions', 'Connected activity', 'Business visibility'],
      users: ['Sales teams', 'Operations teams'],
      icon: '▣',
      type: 'pos',
      route: '/platform/pos',
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
      description: 'Simplify attendance and workforce processes with intelligent digital workflows.',
      businessValue: 'A more consistent digital attendance workflow.',
      capabilities: ['Attendance workflows', 'Workforce visibility', 'Digital processes'],
      users: ['HR teams', 'Operations teams'],
      icon: '✓',
      type: 'attendance',
      route: '/platform/ai-attendance',
      images: [
        'assets/solutions/attendance-1.jpg',
        'assets/solutions/attendance-2.jpg'
      ]
    },
    {
      name: 'IPOD',
      shortName: 'IPOD',
      category: 'Digital operations',
      title: 'Bring everyday operations together.',
      description: 'Connect operational processes and give your teams a clearer way to work.',
      businessValue: 'A connected operational view for everyday work.',
      capabilities: ['Operational workflows', 'Process visibility', 'Team coordination'],
      users: ['Operations teams', 'Business teams'],
      icon: '⊞',
      type: 'ipod',
      route: '/platform/ipod',
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
      description: 'Use AI to simplify document-driven workflows and reduce repetitive manual work.',
      businessValue: 'Reduce manual effort in document-driven bill workflows.',
      capabilities: ['Bill processing', 'Document workflows', 'AI-assisted automation'],
      users: ['Finance teams', 'Accounts teams'],
      icon: '▤',
      type: 'billing',
      route: '/platform/ai-bill-automation',
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
      description: 'Create a smoother verification experience through connected digital workflows.',
      businessValue: 'A more structured digital verification experience.',
      capabilities: ['Digital verification', 'Identity workflow', 'Connected records'],
      users: ['Operations teams', 'Customer teams'],
      icon: 'ID',
      type: 'ekyc',
      route: '/platform/ekyc',
      images: [
        'assets/solutions/ekyc-1.png',
        'assets/solutions/ekyc-2.png'
      ]
    }
  ];

  ngOnInit(): void {
    this.startSolutionSlideshow();

    setTimeout(() => {
      this.initializeHeroVideo();
    }, 0);
  }

  ngOnDestroy(): void {
    this.stopSolutionSlideshow();
  }

  initializeHeroVideo(): void {
    if (!this.heroVideo || !this.heroVideo.nativeElement) {
      return;
    }

    this.heroVideoElement = this.heroVideo.nativeElement as HTMLVideoElement;
    this.heroVideoElement.muted = true;
    this.heroMuted = true;

    const playPromise = this.heroVideoElement.play();

    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {
        this.heroVideoAvailable = false;
      });
    }
  }

  onHeroVideoError(): void {
    this.heroVideoAvailable = false;
  }

  toggleHeroSound(): void {
    if (!this.heroVideoElement) {
      this.initializeHeroVideo();
    }

    if (!this.heroVideoElement) {
      return;
    }

    this.heroMuted = !this.heroMuted;
    this.heroVideoElement.muted = this.heroMuted;

    if (this.heroVideoElement.paused) {
      const playPromise = this.heroVideoElement.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {});
      }
    }
  }

  selectHowStep(index: number): void {
    if (index < 0 || index >= this.howCapsWorks.length) {
      return;
    }

    this.activeHowStep = index;
  }

  getActiveHowStep(): HowStep {
    return this.howCapsWorks[this.activeHowStep];
  }

  selectMeaning(index: number): void {
    if (index < 0 || index >= this.meanings.length) {
      return;
    }

    this.activeMeaning = index;
  }

  selectSolution(index: number): void {
    if (index < 0 || index >= this.solutions.length) {
      return;
    }

    this.activeSolution = index;
    this.activeImageIndex = 0;
    this.isSolutionImagePaused = false;
    this.startSolutionSlideshow();
  }

  getActiveSolution(): CapsSolution {
    return this.solutions[this.activeSolution] || this.solutions[0];
  }

  getActiveImage(): string {
    const solution = this.getActiveSolution();

    if (!solution || !solution.images || !solution.images.length) {
      return 'assets/capsai-platform.png';
    }

    return solution.images[this.activeImageIndex] || solution.images[0];
  }

  selectSolutionImage(index: number): void {
    const solution = this.getActiveSolution();

    if (!solution.images || index < 0 || index >= solution.images.length) {
      return;
    }

    this.activeImageIndex = index;
    this.startSolutionSlideshow();
  }

  nextSolutionImage(): void {
    const solution = this.getActiveSolution();

    if (!solution.images || solution.images.length <= 1) {
      return;
    }

    this.activeImageIndex =
      (this.activeImageIndex + 1) % solution.images.length;
  }

  startSolutionSlideshow(): void {
    this.stopSolutionSlideshow();

    const solution = this.getActiveSolution();

    if (!solution || !solution.images || solution.images.length <= 1) {
      return;
    }

    this.solutionImageTimer = setInterval(() => {
      if (!this.isSolutionImagePaused) {
        this.nextSolutionImage();
      }
    }, 4000);
  }

  stopSolutionSlideshow(): void {
    if (this.solutionImageTimer !== null) {
      clearInterval(this.solutionImageTimer);
      this.solutionImageTimer = null;
    }
  }

  pauseSolutionSlideshow(): void {
    this.isSolutionImagePaused = true;
  }

  resumeSolutionSlideshow(): void {
    this.isSolutionImagePaused = false;
  }

  pauseSolutionMedia(): void {
    this.pauseSolutionSlideshow();
  }

  resumeSolutionMedia(): void {
    this.resumeSolutionSlideshow();
  }

  onSolutionImageError(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (image && image.src.indexOf('capsai-platform.png') === -1) {
      image.src = 'assets/capsai-platform.png';
    }
  }

  trackByHowStep(index: number, step: HowStep): string {
    return step.number;
  }

  trackByMeaning(index: number, meaning: CapsMeaning): string {
    return meaning.letter;
  }

  trackBySolution(index: number, solution: CapsSolution): string {
    return solution.type;
  }

  trackByImage(index: number, image: string): string {
    return image;
  }
}
