const fs = require('fs');

// question 1
// ( --> go up 1 floor
// ) --> down 1 floor
function q1 () {
    fs.readFile('./SantasHelper.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
          if (currentValue === '(') {
              return acc += 1
          }   else if (currentValue === ')') {
              return acc -= 1
          }
        }, 0)
        console.timeEnd('santa-time');
        console.log(answer);
    })
}
q1();


// question 2

