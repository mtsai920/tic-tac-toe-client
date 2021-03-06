'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const signInText = document.getElementById('sign-in')
  signInText.reset()
  const signUpText = document.getElementById('sign-up')
  signUpText.reset()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Creating array to represent game board
let gameBoard = [null, null, null, null, null, null, null, null, null]

let count = 0

let game = false

let gameOver = false

const onClick = function (event) {
  // Assigning a variable to the individual cells in the board
  const cell = event.target
  // Assigning an ID variable to the ID of each individual cell
  const id = event.target.id
  // This is called further in the click function. It's purpose is to stop the player from having to click again to trigger the win message.
  if (game === true) {
    $('.info').text('Game is over!')
    return
  }

  // Creating variable that stores whether the player is 'X' or 'O'
  const player = (count % 2 === 0) ? 'X' : 'O'

  // If a cell on the board is already taken, disallow any further activity and send the user a message
  if (gameBoard[id] !== null) {
    $('.info').addClass('neutral')
    $('.info').text('Cannot play here!')
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
    $('.info').text(`O's turn`)
    $('#message').text('')
    onUpdateGame(player, id)
  } else {
    $(cell).text('O')
    gameBoard[id] = 'O'
    $('.info').text(`X's turn`)
    $('#message').text('')
    onUpdateGame(player, id)
  }

  count++

  // If the player has won, send out message before the player has to click to trigger it
  if (checkWin(player)) {
    game = true
    gameOver = true
    $('.info').text('')
  }
}

// The updateGame api call
const onUpdateGame = function (player, id) {
  api.updateGame(player, id)
    .then(ui.updateGameSuccessful)
    .catch(ui.updateGameSuccessful)
}

// This function checks for a winner after the count has increased past 4. If there is none message "TIED"
const checkWin = function (player) {
  if (count > 4) {
    if (winGame(player) === true && player === 'X') {
      $('.game').text('PLAYER X WINS!')
      $('.game').addClass('success')
      return true
    } else if (winGame(player) === true && player === 'O') {
      $('.game').text('PLAYER O WINS!')
      $('.game').addClass('success')
      return true
    } else if (count === 9) {
      $('.game').text('TIED')
      $('.game').addClass('neutral')
      $('.info').text('')
      game = true
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
  count = 0
  game = false
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
  onStats,
  onUpdateGame
}
