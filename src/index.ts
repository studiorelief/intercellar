import './index.css';

import { conceptAnimCards, videoControl } from '$utils/gsap';
import { loadScript } from '$utils/loadscript';
import { loadModelViewerScript } from '$utils/modalviewer';
import { swiperTeam } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // FS Attributes
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'),
  ]);

  // Load 3D
  loadModelViewerScript();

  // Load swiper
  swiperTeam();

  // Load gsap anim on concept
  if (window.location.href.includes('/concept')) {
    conceptAnimCards();
    videoControl();
  }
});
