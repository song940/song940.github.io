import { ready } from 'https://lsong.org/scripts/dom.js';
import { registerServiceWorker } from 'https://lsong.org/scripts/sw.js';
import { render as renderProjects } from './projects.js';
import './application.js';

registerServiceWorker("sw.js");

ready(() => {
  renderProjects('#projects ul');
});