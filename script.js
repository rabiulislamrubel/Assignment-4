document.getElementById('firstClass-increase-btn').addEventListener('click', function(){
    var firstClassTicketPrice = IncreaseDecreaseBtn(true, 'firstClass-ticket-count', 150);
    document.getElementById('f-per-ticket-price').innerText = firstClassTicketPrice;
    totalCalculation();
});
document.getElementById('firstClass-decrease-btn').addEventListener('click', function(){
    var firstClassTicketPrice = IncreaseDecreaseBtn(false, 'firstClass-ticket-count', 150);
    document.getElementById('f-per-ticket-price').innerText = firstClassTicketPrice;
    totalCalculation();
});
document.getElementById('economy-increase-btn').addEventListener('click', function(){
    var economyTicketPrice = IncreaseDecreaseBtn(true, 'economy-ticket-count', 100);
    document.getElementById('e-per-ticket-price').innerText = economyTicketPrice;
    totalCalculation();
});
document.getElementById('economy-decrease-btn').addEventListener('click', function(){
    var economyTicketPrice = IncreaseDecreaseBtn(false, 'economy-ticket-count', 100);
    document.getElementById('e-per-ticket-price').innerText = economyTicketPrice;
    totalCalculation();
})


function IncreaseDecreaseBtn(plusBtn,id,price){
    const ticketCount = document.getElementById(id);
    const ticketCountNum = parseInt(ticketCount.value);
    let ticketNewCount;
    if(plusBtn == true){
        ticketNewCount = ticketCountNum + 1;
    }
    else if(plusBtn == false){
        ticketNewCount = ticketCountNum - 1;
    }
    if(ticketNewCount < 0){
        ticketNewCount = 0;
    }
    document.getElementById(id).value = ticketNewCount;
    const ticketPrice = ticketNewCount * price;
    return ticketPrice;
}

function totalCalculation(){
    const firstClassTotal = document.getElementById('f-per-ticket-price');
    const firstClassTotalNum = parseInt(firstClassTotal.innerText);
    const economyTotal = document.getElementById('e-per-ticket-price');
    const economyTotalNum = parseInt(economyTotal.innerText);

    let subTotal = firstClassTotalNum + economyTotalNum;
    document.getElementById('sub-total').innerText = '$'+ subTotal;
    let tax = subTotal * 10 / 100;
    document.getElementById('tax').innerText = '$' + tax;

    let total = subTotal + tax;
    document.getElementById('total').innerText = '$'+ total;
}

document.getElementById('book-details').addEventListener('click', function(){
    getId('book-form').style.display = 'none';
    getId('booking-order-list').style.display = 'block';

    getValue('firstClass-ticket-count','f-ticket-quantity');
    getValue('economy-ticket-count','e-ticket-quantity');

    getInnerText('f-per-ticket-price','f-amount');
    getInnerText('e-per-ticket-price','e-amount');
    getInnerText('total', 'booking-total');
});

function getId (id){
    var docReturn = document.getElementById(id);
    return docReturn;
}
function getValue(id1,id2){
    var getValue1 = getId(id1).value;
    getId(id2).innerText = getValue1;
}
function getInnerText(id1,id2){
    var innerTxt = getId(id1).innerText;
    getId(id2).innerText ='$'+innerTxt;
}