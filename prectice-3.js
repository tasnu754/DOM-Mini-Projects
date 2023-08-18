let isBold = false;
let isItalic = false;
let isUnderline = false;


function getTextStyleChange(styleId){
    const textArea = document.getElementById('text-area');
    if(styleId == 'bold-btn'){
        isBold = !isBold;
        if(isBold)
            textArea.style.fontWeight = '900';
        else
            textArea.style.fontWeight = 'normal'
    }
    else if(styleId == 'italic-btn'){
        isItalic = !isItalic;
        if(isItalic)
           textArea.style.fontStyle = 'italic';
        else
           textArea.style.fontStyle = 'normal';
    }
    else{
        isUnderline = !isUnderline;
        if(isUnderline)
            textArea.style.textDecoration = 'underline';
        else
        textArea.style.textDecoration = 'none';
    }

}

document.getElementById('bold-btn').addEventListener('click', function(){

    document.getElementById('bold-btn').classList.toggle(getTextStyleChange('bold-btn'));
})

document.getElementById('italic-btn1').addEventListener('click', function(){
    
    getTextStyleChange('italic-btn');

})

document.getElementById('underline-btn').addEventListener('click', function(){

    getTextStyleChange('underline-btn');

})


document.getElementById('right-align').addEventListener('click', function(){

    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'right';
})

document.getElementById('left-align').addEventListener('click', function(){

    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'left';
})

document.getElementById('center-equal-align').addEventListener('click', function(){

    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'justify';
})

document.getElementById('center-align').addEventListener('click', function(){

    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'center';
})

document.getElementById('font-size').addEventListener('click' , function(){

    const fontNum = document.getElementById('font-size');
    const fontNumInt = parseInt(fontNum.value) + 20 + 'px';
    const textArea = document.getElementById('text-area');
    textArea.style.fontSize = fontNumInt ;
})

document.getElementById('color-input').addEventListener('click' , function(){
    const colorInput = document.getElementById('color-input');
    const colorValue = colorInput.value;
    // console.log(colorValue)
    const textArea = document.getElementById('text-area');
    textArea.style.color = colorValue ;
})