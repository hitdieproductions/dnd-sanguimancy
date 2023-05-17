'use strict'

{
    const $ = q => document.querySelector(q)
    const $$ = q => Array.from(document.querySelectorAll(q))
    const $on = (el, ev, fn) => {
        Array.isArray(el)
            ? el.forEach(o => $on(o, ev, fn))
            : el.addEventListener(ev, fn)
        return el
    }

    // Show or hide menu
    const toggleHamburger = () => {
      $('.nav-burger__container').classList.toggle('nav-burger__container--toggle')
    }

    // Handle click outside of menu
    const clickOutsideBurgerMenu = e => {
      const navButton = document.getElementById('nav-button__container')
      const navMenu = document.getElementById('nav-burger__container')

      if (navButton.contains(e.target) || 
      (!navMenu.contains(e.target) && navMenu.classList.contains('nav-burger__container--toggle')))
        toggleHamburger()
    }

    const init = () => {
      $on($('.nav-burger__container'), 'click', () => (toggleHamburger()))
      $on(window, 'click', e => (clickOutsideBurgerMenu(e)))
    }

  init()
}
