const VisaButton = document.getElementById("VisaButton")
const MasterCardButton = document.getElementById("MasterCardButton")
const PayPalButton = document.getElementById("PayPalButton")
const submitButton = document.getElementById("submitButton")
const paymentresult = document.getElementById("paymentresult")

submitButton.onclick = function(){
    if(VisaButton.checked){
        paymentresult.textContent = "You are paying with Visa"
    }
    else if(MasterCardButton.checked){
        paymentresult.textContent = "You are paying with MasterCard"
    }
    else if(PayPalButton.checked){
        paymentresult.textContent = "You are paying with PayPal"
    }
    else{
        paymentresult.textContent = "Please choose payment method."
    }
}