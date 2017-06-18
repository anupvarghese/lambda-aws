if (!global._babelPolyfill) {
   require('babel-polyfill');
}

export const hello = (event, context, cb) => {
  const p = new Promise((resolve, reject) => {
    resolve('success');
  });
  p
    .then(r => cb(null, {
      message: 'Serveless using webpack & babel',
      event,
    }))
    .catch(e => cb(e));
};