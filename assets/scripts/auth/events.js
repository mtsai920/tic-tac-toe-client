'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changing password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signing out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const count = {
//   0: 0,
//   1: 0,
//   2: 0,
//   3: 0,
//   4: 0,
//   5: 0,
//   6: 0,
//   7: 0,
//   8: 0
// }

// Creating array to represent game board
let gameBoard = [null, null, null, null, null, null, null, null, null]

let count = 0

// Creating variable that stores whether the player is 'X' or 'O'
const player = (count % 2 === 0) ? 'X' : 'O'

const onClick = function (event) {
  // const cellId = event.target.id

  // Assigning a variable to the individual cells in the board
  const cell = event.target
  // Assigning an ID variable to the ID of each individual cell
  const id = event.target.id

  // If a cell on the board is already taken, disallow any further activity and send the user a message
  if (gameBoard[id] !== null) {
    $('.info').text('Cannot play here!')
    $('.info').addClass('failure')
    return
  }

  // Clearing the error text after they play a valid cell
  if (gameBoard[id] === null) {
    $('.info').text('')
  }

  // After we ensure that players cannot select already played cells, check for a winner
  if (checkWin(player) === true) {
    return
  }

  // This if statement allows the player to add Xs and Os to the board, while also updating the gameBoard array
  if (count % 2 === 0) {
    $(cell).text('X')
    gameBoard[id] = 'X'
    $('.game').text(`O's turn`)
  } else {
    $(cell).text('O')
    gameBoard[id] = 'O'
    $('.game').text(`X's turn`)
  }

  console.log(gameBoard)
  count++
}

// This function checks for a winner after the count has increased past 4. If there is none message "TIED"
const checkWin = function (player) {
  if (count > 4) {
    if (winGame(player) === true) {
      $('.game').text('YOU WIN!')
      $('.game').addClass('success')
      return true
    } else {
      $('.game').text('TIED')
    }
  }
}

// Creating all win conditions
const winGame = function (player) {
  if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) {
    return true
  } if (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) {
    return true
  } if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) {
    return true
  } if (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) {
    return true
  } if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) {
    return true
  } if (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) {
    return true
  } if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) {
    return true
  } if (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player) {
    return true
  }
}

// Creating a button that will clear the board
const onNewGame = function (event) {
  event.preventDefault()
  gameBoard = [null, null, null, null, null, null, null, null, null]
  $('.box').text('')
  $('.game').text('')
  $('.info').text('')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onStats = function (event) {
  event.preventDefault()
  api.getStats()
    .then(ui.getStatsSuccessful)
    .catch(ui.getStatsFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClick,
  onNewGame,
  onStats
}
