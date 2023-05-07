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

    //Show or hide menu
    const toggleHamburger = () => {
      $('.nav-burger__container').classList.toggle('nav-burger__container--toggle')
    }

    const init = () => {
      $on(
          $on($('.nav-button'), 'click', () => (toggleHamburger())),
      )
  }
  init()
}