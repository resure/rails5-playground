
@App ||= {}

App.initComponents = ->
  $('[data-component]').each (i, el) ->
    elem = $(el)
    App.load el.dataset.component, elem

App.define = (name, fn) ->
  modules.define "component:#{name}", (provide) ->
    provide fn

App.load = (name, elem) ->
  modules.require "component:#{name}", (fn) ->
    fn(elem)

modules.require 'i-bem__dom', (dom) ->
  App.dom = dom

  page = $('.page')

#  $(document).on 'turbolinks:load', ->
#    App.initComponents()
#    dom.init()

  $(document).on 'ready', ->
    App.initComponents()