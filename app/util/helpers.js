class Helpers {
  // Usage: let [err, result] = await asCallBack(someAsyncFunc())
  static asCallBack (promise) {
    return promise.then(data => [null, data]).catch(err => [err])
  }
}

module.exports = Helpers;