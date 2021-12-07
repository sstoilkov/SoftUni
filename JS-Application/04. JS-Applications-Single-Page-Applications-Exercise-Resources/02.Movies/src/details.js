// initialization
// - find relevant section

import { showView } from './dom.js';

// - detach from DOM
const section = document.getElementById('movie-details');
section.remove();
//display logic

export function showDetails(){
    showView(section);
}