  /*  console.log(localStorage.length) // não possui nada salvo, então o  retorno é o valor: 0
		localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
		localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
		console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
		console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
		localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
		console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
		localStorage.clear() // limpa todas as entradas salvas em localStorage
		console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
    delete localStorage.nomeDaChave; */
    
// As pessoas devem ter o poder de alterar:
//Cor de fundo da tela;
//Cor do texto;
//Tamanho da fonte;
//Espaçamento entre as linhas do texto;
//Tipo da fonte ( Font family ).


window.onload = function(){

  //Cor de fundo da tela
  function changeBackgroundColor(color) {
    let setBackGroundColor = document.getElementById('main-container');
    setBackGroundColor.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }  

  let getBackgroundButtons = document.querySelectorAll('#background-color>button');
  getBackgroundButtons[0].addEventListener('click', function() {
    changeBackgroundColor('black');
  })
  getBackgroundButtons[1].addEventListener('click', function() {
    changeBackgroundColor('white');
  })
  //

  //Cor do texto
  function changeTextColor(color) {
    let setTextColor = document.getElementById('main-container');
    setTextColor.style.color = color;
    localStorage.setItem("textColor", color);
  }

  let getTextColorButtons = document.querySelectorAll('#font-color>button');
  getTextColorButtons[0].addEventListener('click', function() {
    changeTextColor('black');
  })
  getTextColorButtons[1].addEventListener('click', function() {
    changeTextColor('white');
  })
  //

  //Tamanho da fonte
  function changeFontSize(size) {
    let setFontSize = document.querySelectorAll('.paragraph');
    for (let index = 0; index < setFontSize.length; index += 1) {
      setFontSize[index].style.fontSize = size;
    }
    //setFontSize.style.fontSize = size;
    localStorage.setItem('fontSize', size);
  }

  let getTextSizeButtons = document.querySelectorAll('#font-size>button');
  getTextSizeButtons[0].addEventListener('click', function() {
    changeFontSize('10px');
  })
  getTextSizeButtons[1].addEventListener('click', function() {
    changeFontSize('16px');
  })
  getTextSizeButtons[2].addEventListener('click', function() {
    changeFontSize('24px');
  })
  //

  //Espaçamento entre as linhas do texto
  function changeLineHeight(height) {
    let setLineHeight = document.querySelectorAll('.paragraph');
    for (let index = 0; index < setLineHeight.length; index += 1) {
      setLineHeight[index].style.lineHeight = height;
    }
    localStorage.setItem("lineHeight", height);
  }
  let getLineHeightButtons = document.querySelectorAll("#line-height>button");
  getLineHeightButtons[0].addEventListener('click', function() {
    changeLineHeight('1');
  })
  getLineHeightButtons[1].addEventListener('click', function() {
    changeLineHeight('normal');
  })
  getLineHeightButtons[2].addEventListener('click', function() {
    changeLineHeight('2');
  })

  //Tipo da fonte ( Font family )
  function changeFontFamily(family) {
    let setFontFamily = document.querySelectorAll('.paragraph');
    for (let index = 0; index < setFontFamily.length; index += 1) {
      setFontFamily[index].style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family);
  }
  let getFontButtons = document.querySelectorAll('#font-family>button');
  getFontButtons[0].addEventListener('click', function() {
    changeFontFamily('Arial');
  });
  getFontButtons[1].addEventListener('click', function() {
    changeFontFamily('Times New Roman');
  });



  function recoverConfigs() {
    let recoverBackgroundColor = localStorage.getItem('backgroundColor');
    changeBackgroundColor(recoverBackgroundColor);
    
    let recoverTextColor = localStorage.getItem('textColor');
    changeTextColor(recoverTextColor);

    let recoverTextSize = localStorage.getItem('textSize');
    changeTextSize(recoverTextSize);

    let recoverLineHeight = localStorage.getItem('lineHeight');
    changeLineHeight(recoverLineHeight);

    let recoverFontFamily = localStorage.getItem('fontFamily');
    changeFontFamily(recoverFontFamily);
  }
  recoverConfigs();
}
