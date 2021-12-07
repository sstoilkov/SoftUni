<<<<<<< HEAD
import { showSection } from "./dom.js";

const homeSection = document.getElementById('homeSection');
homeSection.remove();

const aboutSection =  document.getElementById('aboutSection');
aboutSection.remove();

export function showHomePage(){
    showSection(homeSection);
}

export function showAboutPage(){
    showSection(aboutSection);
=======
import { showSection } from "./dom.js";

const homeSection = document.getElementById('homeSection');
homeSection.remove();

const aboutSection =  document.getElementById('aboutSection');
aboutSection.remove();

export function showHomePage(){
    showSection(homeSection);
}

export function showAboutPage(){
    showSection(aboutSection);
>>>>>>> e529c063bf1de75e3d406046c962e4fdc60827f5
}