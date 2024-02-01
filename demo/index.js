import Cursor from '../cursor.js';
import {preloader} from '../preloader.js';
// import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu.js';

// menu (<nav> element)
const menuEl = document.querySelector('.menu');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
    // initialize the smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});