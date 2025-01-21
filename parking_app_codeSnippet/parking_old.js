// 2. Logic for calculation
const calcuateParkingRate = () => {
    // a. Get the values from the textbox
    const lpFromUI = document.querySelector("#txt-lp").value
    const hoursFromUI = document.querySelector("#txt-hours").value
 
 
    // b. Calculate the parking rate
 
 
    // - parking rate (num of hours x hourly rate)
    // - subtotal
    // - tax (13%)
    // - total
    let subTotal = parseFloat(hoursFromUI) * 4.25

    if (subTotal > 20) {
        subTotal = 20
    }
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