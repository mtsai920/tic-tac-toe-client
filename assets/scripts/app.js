'use strict'

const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#0').on('click', authEvents.onClick)
  $('#1').on('click', authEvents.onClick)
  $('#2').on('click', authEvents.onClick)
  $('#3').on('click', authEvents.onClick)
  $('#4').on('click', authEvents.onClick)
  $('#5').on('click', authEvents.onClick)
  $('#6').on('click', authEvents.onClick)
  $('#7').on('click', authEvents.onClick)
  $('#8').on('click', authEvents.onClick)

  $('#new-game').on('submit', authEvents.onNewGame)
})
