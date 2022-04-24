function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
    namedFunction();
}
function returnsAnAnonymousFunction() {
    return function() {};
}