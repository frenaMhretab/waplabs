//A function that calculate tip and give the final total price
function calculateTip() {
    //getting the subtotal
    //100
    let subtotal = document.getElementById("subTotal").value;
    //getting percentage
    let percentage = document.getElementById("percentage").value;
    //25
    //parsing the value to number
    let total = parseInt(subtotal);
    let percent = parseInt(percentage);
  
    document.getElementById("total").innerHTML = (total * (percent / 100)) + parseInt(subtotal);
}

