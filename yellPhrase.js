let yellPhrase = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please input a string.'
  }
  return string.toUpperCase()
}

let bot = {
  message: function(msg) {
    let command = msg.split(' ')
    if (command[0] == 'Add') {
      return Number(command[1]) + Number(command[3])
    }
    if (command[0] == 'Subtract') {
      return Number(command[3]) - Number(command[1])
    }
    if (command[0] == 'What') {
      return getWeather(command)
    }
  }
};

function getWeather(command) {
  let fullSplit = command[5].split(':')
  let hour = Number(fullSplit[0])
  let minute = Number(fullSplit[1][0] + fullSplit[1][1])
  let timeOfDay = fullSplit[1][2] + fullSplit[1][3]

  if (timeOfDay === 'am') {
    if (hour > 6) {
      return 'sunny'
    }
  } else if (timeOfDay === 'pm') {
    if (hour <= 6 || hour === 12) {
      if (hour === 6 && minute[0] + minute[1] === 0) {
        return 'sunny'
      }
      return 'sunny'
    }
  }
  return 'raining'
}
module.exports = {
  yellPhrase,
  bot,
}
