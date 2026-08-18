import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';

interface PlatformModule {
  key: string;
  icon: string;
  name: string;
  shortDescription: string;
  headline: string;
  description: string;
  features: string[];
  route: string;

  imageSrc: string;
  videoSrc: string;
}

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements AfterViewInit {

  // ============================================================
  // HERO MEDIA
  // ============================================================

  heroImageSrc: string = '';

  heroVideoSrc: string =
    'assets/platform/heroVideoSrc.mp4';


  // ============================================================
  // WORKFLOW VIDEO
  // ============================================================

  workflowVideoSrc: string = '';


  // ============================================================
  // MODULES
  // ============================================================

  modules: PlatformModule[] = [

    {
      key: 'crm',
      icon: 'C',
      name: 'CRM',

      shortDescription:
        'Build stronger customer relationships.',

      headline:
        'Turn every lead into a relationship that lasts.',

      description:
        'Give your sales team a complete, connected view of leads, contacts, follow-ups and pipeline performance.',

      features: [
        'Lead and contact management',
        'Sales pipeline visibility',
        'Follow-up reminders and automation'
      ],

      route: '/platform/crm',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'support',
      icon: 'S',
      name: 'Technical Support',

      shortDescription:
        'Resolve issues with total visibility.',

      headline:
        'Deliver reliable support, from first request to resolution.',

      description:
        'Organise incoming requests, set priorities and keep customers informed through a transparent service workflow.',

      features: [
        'Centralised ticket management',
        'Priority-based routing',
        'Live status and service insights'
      ],

      route: '/platform/technical-support',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'feedback',
      icon: 'F',
      name: 'Feedback',

      shortDescription:
        'Listen, learn and improve continuously.',

      headline:
        'Make every customer signal a source of progress.',

      description:
        'Capture feedback in context and turn recurring themes into practical product and service improvements.',

      features: [
        'Feedback collection in one place',
        'Recognition and response workflows',
        'Trend visibility for better decisions'
      ],

      route: '/platform/feedback',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'visitor',
      icon: 'V',
      name: 'Visitor Management',

      shortDescription:
        'A better arrival experience.',

      headline:
        'Make every visitor interaction secure and seamless.',

      description:
        'Create a professional front-door experience while maintaining a clear, accountable record of every visit.',

      features: [
        'Fast visitor check-in',
        'Live visitor records',
        'Secure access workflows'
      ],

      route: '/platform/visitor-management',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'inventory',
      icon: 'I',
      name: 'Inventory',

      shortDescription:
        'Know what is moving, in real time.',

      headline:
        'Stay ahead of every stock movement.',

      description:
        'Track inventory confidently across your operation and give teams the visibility to make smarter replenishment decisions.',

      features: [
        'Real-time inventory tracking',
        'Movement and stock visibility',
        'Operational reporting'
      ],

      route: '/platform/inventory',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'pos',
      icon: 'P',
      name: 'POS',

      shortDescription:
        'Simple sales at the point of service.',

      headline:
        'Make every transaction quick, clear and connected.',

      description:
        'Equip your frontline with an intuitive point-of-sale experience that keeps transactions and business records aligned.',

      features: [
        'Fast point-of-sale workflows',
        'Connected transaction records',
        'Clear sales reporting'
      ],

      route: '/platform/pos',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'attendance',
      icon: 'A',
      name: 'AI Attendance',

      shortDescription:
        'Smarter attendance, less admin.',

      headline:
        'Create a more accurate view of your workforce.',

      description:
        'Use AI-ready attendance workflows to simplify check-ins, improve accountability and remove repetitive administration.',

      features: [
        'Smart attendance workflows',
        'Reliable team records',
        'Clear workforce insights'
      ],

      route: '/platform/ai-attendance',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'ipod',
      icon: 'D',
      name: 'IPOD',

      shortDescription:
        'Proof of delivery, made simple.',

      headline:
        'Keep every delivery visible and verifiable.',

      description:
        'Capture proof of delivery in the moment, giving customers and teams a dependable view of delivery progress.',

      features: [
        'Digital proof of delivery',
        'Real-time delivery updates',
        'Complete delivery trail'
      ],

      route: '/platform/ipod',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'billing',
      icon: 'B',
      name: 'AI Bill Automation',

      shortDescription:
        'Spend less time on manual billing.',

      headline:
        'Let intelligent automation handle the busywork.',

      description:
        'Reduce repetitive billing effort while keeping records organised, accurate and ready for review.',

      features: [
        'Automated bill workflows',
        'Reduced manual processing',
        'More consistent records'
      ],

      route: '/platform/ai-bill-automation',

      imageSrc: '',
      videoSrc: ''
    },


    {
      key: 'ekyc',
      icon: 'K',
      name: 'eKYC',

      shortDescription:
        'Trusted identity verification.',

      headline:
        'Verify identity with confidence and ease.',

      description:
        'Create a secure, streamlined verification experience that helps you onboard customers with greater confidence.',

      features: [
        'Digital identity verification',
        'Secure customer onboarding',
        'Clear verification status'
      ],

      route: '/platform/ekyc',

      imageSrc: '',
      videoSrc: ''
    }

  ];


  // ============================================================
  // SELECTED MODULE
  // ============================================================

  selectedModule: PlatformModule = this.modules[0];


  // ============================================================
  // VIEW INITIALIZATION
  // ============================================================

  ngAfterViewInit(): void {

    /*
     * Wait until Angular has finished rendering
     * the video elements.
     */
    setTimeout(() => {
      this.forceVideosMuted();
    }, 100);

  }


  // ============================================================
  // FORCE VIDEO SETTINGS
  // ============================================================

  private forceVideosMuted(): void {

    const videos =
      document.querySelectorAll(
        '.platform-page video'
      ) as NodeListOf<HTMLVideoElement>;


    videos.forEach((video: HTMLVideoElement) => {

      // --------------------------------------------------------
      // FORCE MUTED
      // --------------------------------------------------------

      video.muted = true;

      video.defaultMuted = true;

      video.volume = 0;


      // --------------------------------------------------------
      // FORCE AUTOPLAY
      // --------------------------------------------------------

      video.autoplay = true;

      video.loop = true;

      video.playsInline = true;


      // --------------------------------------------------------
      // REMOVE ALL CONTROLS
      // --------------------------------------------------------

      video.controls = false;

      video.removeAttribute('controls');


      // --------------------------------------------------------
      // DISABLE PICTURE IN PICTURE
      // --------------------------------------------------------

      video.disablePictureInPicture = true;


      // --------------------------------------------------------
      // DISABLE REMOTE PLAYBACK
      // --------------------------------------------------------

      video.disableRemotePlayback = true;


      // --------------------------------------------------------
      // PRELOAD
      // --------------------------------------------------------

      video.preload = 'auto';


      // --------------------------------------------------------
      // FORCE PLAY
      // --------------------------------------------------------

      const playPromise = video.play();


      if (playPromise !== undefined) {

        playPromise.catch(() => {
          /*
           * Browser may block autoplay.
           * Because the video is muted and volume is 0,
           * it should normally be allowed.
           */
        });

      }

    });

  }


  // ============================================================
  // MODULE SELECTION
  // ============================================================

  selectModule(module: PlatformModule): void {

    this.selectedModule = module;


    /*
     * The module video is dynamically created by *ngIf.
     *
     * Therefore we need to wait until Angular creates it
     * before applying the video settings.
     */
    setTimeout(() => {

      this.forceVideosMuted();

    }, 50);

  }

}