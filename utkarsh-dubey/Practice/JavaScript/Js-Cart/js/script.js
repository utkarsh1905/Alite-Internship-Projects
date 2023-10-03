var product_total_amt = document.getElementById('product_total_amt')
var shipping_charge = document.getElementById('shipping_charge')
var total_cart_amt = document.getElementById('total_cart_amt')
var discountcode = document.getElementById('discount_code1')


const decreaseNumber =(incdec,itemprice)=>{
    var itemvl = document.getElementById(incdec)
    var itemprice = document.getElementById(itemprice)

    console.log(itemvl.value)
    console.log(itemprice.innerHTML)

    if(itemvl.value <= 0){
        itemvl.value=0
        alert("please Select a item")
    }else{
        itemvl.value = parseInt(itemvl.value) - 1
        itemvl.style.background = '#fff';
        itemvl.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 200
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 200
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
    }
}

const increaseNumber =(incdec,itemprice)=>{
    var itemvl = document.getElementById(incdec)
    var itemprice = document.getElementById(itemprice)
    console.log(itemvl.value)

    if(itemvl.value >= 5){
        itemvl.value = 5;
        alert("Max 5 items are allowed")
        itemvl.style.background = 'red'
        itemvl.style.color = '#fff'
    }else{
        itemvl.value = parseInt(itemvl.value) + 1
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 200
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 200
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)

    }
}


const discount_code = () =>{
    let totalamtcurr = parseInt(total_cart_amt.innerHTML)
    let error_trw = document.getElementById('error_trw')

    if(discountcode.value === "happyholi"){
        let newtotalamt = totalamtcurr - 50
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Congrats! Your Coupon Code is Applied"

    }
    else{
        error_trw.innerHTML = "Try Again! Valid code is happyholi"
    }
}
