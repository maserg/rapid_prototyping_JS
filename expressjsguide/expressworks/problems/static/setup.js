var PassThrough = require('stream').PassThrough || require('readable-stream/passthrough')

module.exports = function(isRun) {
  var submissionOut = new PassThrough()
    , solutionOut   = new PassThrough()
  var superagent = require('superagent')
  setTimeout(function() {
    superagent
      .get('http://localhost:3000/')
      .pipe(submissionOut)
    if (!isRun) {
      superagent
        .get('http://localhost:3001/')
        .pipe(solutionOut)
    }
   }, 500)
  return {
      submissionArgs: [3000]
    , solutionArgs: [3001]
    , a : submissionOut
    , b : solutionOut
  }
}