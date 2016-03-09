
App.define 'auth', (el) ->
  requestAnimationFrame ->
    el.find('.auth__username .mdl-textfield__input').focus()
