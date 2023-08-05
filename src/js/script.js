import scrolling from './modules/pageup.js';
import accordion from './modules/accordion.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	accordion('.edu22-box', '.edu22-btn', '.edu22-btn-arrow', '.edu22-title-box');
});

