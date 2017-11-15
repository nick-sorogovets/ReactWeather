// function getTemplCallback(location, callback) {

//   callback(undefined, 8);
//   callback('City not found');
// }

// getTemplCallback('Minsk', function (err, temp) {
//   if (err) {
//     console.error('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise(location) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(7);     
//       reject('City not found');
//     }, 1000)

//   });
// }

// getTempPromise('Minsk')
//   .then(temp => {
//     console.log('succcess', temp);
//   })
//   .catch(err => {
//     console.error('Error ', err);
//   })

function addPromise(a, b) {
  const isNumber = (val) => (typeof val === 'number');

  if (isNumber(a) && isNumber(b)) {
    return Promise.resolve(a + b);
  } else {
    return Promise.reject('Arguments is not valid');
  }
}

addPromise(2, 4).then((res) => {
  console.log('success', res);
}, (err) => {
  console.error('error', err);
});

addPromise('test', 4).then((res) => {
  console.log('success', res);
}, (err) => {
  console.error('error', err);
});

