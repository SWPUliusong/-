const P = require("./p")

function test1() {
  return new P(function(resolve, reject) {
    setTimeout(function() {
      resolve(123)
    }, 1000)
  })
}

function test2() {
  return new P(function(resolve, reject) {
    setTimeout(function() {
      reject("404")
    }, 300)
  })
}

test1().then(function(data) {
  console.log("1: " + data)
  return test1()
})
.then(function(data) {
  console.log("1: " + (data + 345))
})
.catch(function(err) {
  console.log("1: " + err)
})

test1().then(function(data) {
  console.log("2: " + data)
  return test2()
})
.then(function(data) {
  console.log("2: " + (data + 345))
})
.catch(function(err) {
  console.log("2: " + err)
})

console.log(P.author)