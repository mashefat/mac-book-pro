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
document.getElementById('btn-8gb').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    const totalCost = memoryCost.innerText = '0';
    totalCalc()
    return totalCost

})
document.getElementById('btn-16gb').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    const totalCost = memoryCost.innerText = '180';
    totalCalc()
    return totalCost;

})

// storage input 
document.getElementById('btn-256ssd').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '0';
    totalCalc()
    return storageText;
})
document.getElementById('btn-512ssd').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '100';
    totalCalc()
    return storageText;
})
document.getElementById('btn-1tb').addEventListener('click', function () {
    const storagCost = document.getElementById('storage-cost');
    const storageText = storagCost.innerText = '180';
    totalCalc()
    return storageText;
})

// delivery charge 

document.getElementById('btn-free').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliverytext = deliveryCost.innerText = '0';
    totalCalc()
    return deliverytext;
})
document.getElementById('btn-express').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliverytext = deliveryCost.innerText = '20';
    totalCalc()
    return deliverytext;
})

