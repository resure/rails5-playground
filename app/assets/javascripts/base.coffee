
@App = {}

App.define = (name, fn) ->
  modules.define "component:#{name}", (provide) ->
    provide fn

App.load = (name, el) ->
  modules.require "component:#{name}", (fn) ->
    fn(el)

$(document).on 'turbolinks:load', ->
  $('[data-component]').each (i, el) ->
    App.load el.dataset.component, $(el)
