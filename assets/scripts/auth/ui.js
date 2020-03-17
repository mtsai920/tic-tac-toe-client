'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#new-game').hide()
  $('.game').hide()
  $('.stats').hide()
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('.stats').show()
  $('.game').show()
  $('.info').show()
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failed to sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = function () {
  const passText = document.getElementById('change-password')
  passText.reset()
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFailure = function () {
  $('#message').text('Failed to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.box').hide()
  $('#new-game').hide()
  $('.stats').hide()
  $('.info').hide()
  $('.game').hide()
}

const signOutFailure = function () {
  $('#message').text('Failed to  out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const newGameSuccess = function (data) {
  $('#message').text('New game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').show()
  $('.box').text('')
  $('.game').text('')
  $('.info').text('')
  store.game = data.game.id
}

const newGameFailure = function () {
  $('#message').text('Error creating new game')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const getStatsSuccessful = function (data) {
  if (data.games.length === 1) {
    $('.info').text('1 game played')
  } else ($('.info').text(data.games.length + ' games played'))
}

const getStatsFailure = function (data) {
  $('.info').text('Failed to retrieve game info')
}

const updateGameSuccessful = function (data) {}

const updateGameFailure = function (data) {
  $('.info').text('Failed to update game')
  $('.info').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  getStatsSuccessful,
  getStatsFailure,
  updateGameSuccessful,
  updateGameFailure
}
