var elParent = '';
var elDelete = '';


// Criando botão undo
const buttonUndo = document.createElement('button');
var cssString = "position:absolute; right: 0;";
buttonUndo.style.cssText = cssString;
buttonUndo.setAttribute('class', 'btn-undo');
buttonUndo.innerHTML = 'Undo';
document.body.appendChild(buttonUndo);

// Evento para desfazer
buttonUndo.addEventListener("click", function() {

    if(elParent != '' && elDelete != ''){
        elParent.appendChild(elDelete);
    }
});


// Captura o evento click e deleta elemento html
document.addEventListener("click", function(e){

    if(e.srcElement.className != 'btn-undo' && e.srcElement.localName != 'html' && e.srcElement.localName != 'body'){
        var el = e.target || e.srcElement;
        console.log(e);
        elParent = el.parentNode;
        elDelete = elParent.removeChild(el);
    }
});



// Evento 'mouseover' e adiciona opacidade no elemento
document.addEventListener("mouseover", function(e){

     if(e.srcElement.className != 'btn-undo' && e.srcElement.localName != 'html' && e.srcElement.localName != 'body'){
        var el = e.target || e.srcElement;
        el.style.cssText = "opacity: 0.4";
     }
      
});

// Evento 'mouseout' e retira opacidade no elemento
document.addEventListener("mouseout", function(e){

    if(e.srcElement.className != 'btn-undo' && e.srcElement.localName != 'html' && e.srcElement.localName != 'body'){
        var el = e.target || e.srcElement;
        el.style.cssText = "opacity: 1";
    }
});

