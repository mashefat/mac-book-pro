// update balance
function totalCalc() {
    const bestPrice = document.getElementById('best-price')
    const getBestPrice = parseInt(bestPrice.innerText)
    const extraMoney = document.getElementById('memory-cost')
    const getExtraMoney = parseInt(extraMoney.innerText)
    const extraStorage = document.getElementById('storage-cost')
    const getExtraStorage = parseInt(extraStorage.innerText)
    const deliveryCost = document.getElementById('delivery-charge')
    const getDeliveryCost = parseInt(deliveryCost.innerText)
    const totalResutl = getBestPrice + getExtraMoney + getExtraStorage + getDeliveryCost
     const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = totalResutl
     const total = document.getElementById('total')
    total.innerText = totalResutl
}

// memory input 
document.getElementById('first').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    const totalCost = memoryCost.innerText = '0';
    totalCalc()
    return totalCost

})
document.getElementById('second').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    const totalCost = memoryCost.innerText = '180';
    totalCalc()
    return totalCost;

})

// storage input 
document.getElementById('third-button').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '0';
    totalCalc()
    return storageText;
})
document.getElementById('four-button').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '100';
    totalCalc()
    return storageText;
})
document.getElementById('five-button').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '180';
    totalCalc()
    return storageText;
})

// delivery charge 

document.getElementById('six-button').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliverytext = deliveryCost.innerText = '0';
    totalCalc()
    return deliverytext;
})
document.getElementById('seven-button').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliverytext = deliveryCost.innerText = '30';
    totalCalc()
    return deliverytext;
})

