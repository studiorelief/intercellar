import './index.css';

import { loadScript } from '$utils/loadscript';
import { loadModelViewerScript } from '$utils/modalviewer';

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
});
