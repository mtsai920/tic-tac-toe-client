'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show()
  $('#change-password').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.box').show()
  $('#new-game').show()
  $('.stats').show()
  console.log('signUpSuccess data is ', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.box').show()
  $('#new-game').show()
  $('.stats').show()
  console.log('signInSuccess data is ', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure error is ', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Password changed!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure error is ', error)
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
  $('#new-game').show()
  console.log('Signed out!')
}

const signOutFailure = function () {
  $('#message').text('Error signing out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('Failed to sign out!')
}

const newGameSuccess = function () {
  $('#message').text('New game!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const newGameFailure = function () {
  $('#message').text('Error creating new game')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const getStatsSuccessful = function (data) {
  console.log(data)
}

const getStatsFailure = function (data) {
  $('.info').text('Failed to retrieve game info')
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
  getStatsFailure
}
