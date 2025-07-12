//callback hell happen when multiple async operation are nested inside each other

function loginuser(username, password, callback) {
    setTimeout(() => {
        console.log("user logged in");
        callback()

    }, 1000)
}
function fetchuserdata(callback) {
    setTimeout(() => {
        console.log("user data fetched");
        callback()
    }, 1000)
}
function getorderdetails(callback) {
    setTimeout(() => {
        console.log("fetched the user order details");
        callback();

    }, 1000)
}
function processpayment(callback) {
    setTimeout(() => {
        console.log("payment processed");
        callback()
    }, 1000)
}

loginuser("nandhini", "123", function () {
    fetchuserdata(function () {
        getorderdetails(function () {
            processpayment(function () {
                console.log("order completed");

            })
        })
    })
})