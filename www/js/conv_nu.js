<!--
  function Converter() {
	var numero = document.conversor.numero.value;
	var base = document.conversor.base.value;
	var digito = new Array();
	var i = 0;
	document.conversor.resultado.value = "";

	if (isNaN(numero) || numero.indexOf(".") > -1) {
	  alert("Número inválido");
	  document.conversor.numero.value = "";
	  return false;
	}

	while (numero != 0) {
	  i++;
	  digito[i] = numero % base;
	  numero = Math.floor(numero / base);  // divisão inteira, ex.: 15 / 2 = 7
	}
	// Fonte codigofonte.net
	while (i >= 1) with (document.conversor.resultado) {
	  switch (digito[i]) {
		// Na base 16, os dígitos maiores que 10 são representados por letras:
		case 10: { value += "A"; break }
		case 11: { value += "B"; break }
		case 12: { value += "C"; break }
		case 13: { value += "D"; break }
		case 14: { value += "E"; break }
		case 15: { value += "F"; break }
		default: { value += digito[i]; break }
	  }
	  i--;
	}
  }
 //-->             
