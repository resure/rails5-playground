
@App ||= {}

App.components = {}

App.initComponents = ->
  componentHandler.upgradeDom()

  $('[data-component]').each (i, el) ->
    elem = $(el)
    App.load el.dataset.component, elem

App.define = (name, fn) ->
  @components[name] = fn

App.load = (name, elem) ->
  @components[name](elem)
