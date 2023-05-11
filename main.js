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

    const defocus = () => {
      document.addEventListener('click', function(e){   
        if (!document.getElementById('nav-burger__container').contains(e.target)){
          toggleHamburger()
          rotate()
      }})
    }

    const rotate = () => {
      document.querySelector(".nav__logo-item").classList.toggle("nav__logo-item--shrink");
    }

    const init = () => {
      $on(
          $on($('.nav-burger__container'), 'click', () => (toggleHamburger())),
      )

      $on(
        $on($$('.nav__item__link'), 'click', () => (toggleHamburger())),
    )

    defocus()
  }
  init()
}