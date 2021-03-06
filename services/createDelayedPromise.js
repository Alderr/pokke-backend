/*
> basically w/ a promise argument;
> return a new function that executes the promise
*/
const reflect = require('./reflect');

const createDelayedPromise = (func, params) => () => reflect(new Promise((resolve, reject) => {
  console.log('​---------------------------------------');
  console.log('created function is now ​creating a promise + running it...', params);
  console.log('​---------------------------------------');

  return func(resolve, reject, params);
}));

module.exports = createDelayedPromise;
