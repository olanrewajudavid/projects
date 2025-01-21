// 2. Logic for calculation
const calcuateParkingRate = () => {
    // a. Get the values from the textbox
    const lpFromUI = document.querySelector("#txt-lp").value
    const hoursFromUI = document.querySelector("#txt-hours").value
 // 2. Logic for calculation
const calcuateParkingRate = () => {
    // a. Get the values from the textbox
    const lpFromUI = document.querySelector("#txt-lp").value
    const hoursFromUI = document.querySelector("#txt-hours").value
 
    // Validation
    // - fields cannot be empty
    if (lpFromUI === "" || hoursFromUI === "") {
        // alert("ERROR: Form fields cannot be empty!")
        document.querySelector("#error-label").innerText = "ERROR: Form fields cannot be empty"
        // STOP
        // STOP the code exit
        // EXIT this function
        // DO NOT PROCEED TO lines 30+
        return
    }


    // - license plate must be 7 characters long
    if (lpFromUI.length !== 7) {
        document.querySelector("#error-label").innerText = "ERROR: License plate must be minimum 7 characters long"
        // stop, exit, do not proceed
        return
    }


    // After validation
    // - Assuming the user types in correct information, then
    // proceed with the calculation

    // - remove any error messages
    document.querySelector("#error-label").innerText = ""

 
    // b. Calculate the parking rate
 
 
    // - parking rate (num of hours x hourly rate)
    // - subtotal
    // - tax (13%)
    // - total
    let subTotal = parseFloat(hoursFromUI) * 4.25

    if (subTotal > 20) {
        subTotal = 20
    }
    let tax = 0.13 * subTotal
    let total = subTotal + tax
 
    // c. output to the screen
    document.querySelector("#span-lp").innerText = lpFromUI
    document.querySelector("#span-hrs").innerText = `${hoursFromUI} hours`
    document.querySelector("#span-subtotal").innerText = subTotal.toFixed(2)
    document.querySelector("#span-tax").innerText = tax.toFixed(2)
    document.querySelector("#span-total").innerText = total.toFixed(2)

 
 
 }
 // 1. detect clicks on the button
 document.querySelector("button").addEventListener("click", calcuateParkingRate)
 
    // b. Calculate the parking rate
 
 
    // - parking rate (num of hours x hourly rate)
    // - subtotal
    // - tax (13%)
    // - total
    const subTotal = parseFloat(hoursFromUI) * 4.25
    const tax = 0.13 * subTotal
    const total = subTotal + tax
 
    // c. output to the screen
    document.querySelector("#span-lp").innerText = lpFromUI
    document.querySelector("#span-hrs").innerText = `${hoursFromUI} hours`
    document.querySelector("#span-subtotal").innerText = subTotal.toFixed(2)
    document.querySelector("#span-tax").innerText = tax.toFixed(2)
    document.querySelector("#span-total").innerText = total.toFixed(2)

 
 
 }
 // 1. detect clicks on the button
 document.querySelector("button").addEventListener("click", calcuateParkingRate)