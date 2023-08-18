document.getElementById('apply-btn1').addEventListener('click', function(){
    const input = document.getElementById('input-text');
    const inputText = input.value;
    input.value = '';
    
    // console.log(inputText);

    if(inputText == 'DISC30'){
        const mainPrice = document.getElementById('main-price');
        const mainPriceInt = parseFloat(mainPrice.innerText);
        const discountPrice = mainPriceInt - (mainPriceInt * 0.3);

        const pay = document.getElementById("pay");
        pay.innerText = discountPrice;

    }
    else{
        alert("Not valid code");
    }

})
