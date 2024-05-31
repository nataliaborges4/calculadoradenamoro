function Calcular() {
  var anos1 = document.getElementById("anos1").value;
  var meses1 = document.getElementById("meses1").value;
  var anos2 = document.getElementById("anos2").value;
  var meses2 = document.getElementById("meses2").value;
  var anostrisal = document.getElementById("anostrisal").value;
  var mesestrisal = document.getElementById("mesestrisal").value;

  if (anostrisal != "" && mesestrisal != "") {
    if (meses1 != "" && meses1 >= 6) {
      anos1++
    }
    if (meses1 != "" && meses1 >= 6) {
      anos2++
    }
    if (mesestrisal !="" && mesestrisal >= 6) {
      anostrisal++
    }
    var trisal1 = PodeNamorarTrisal(anos1, anos2, anostrisal, 1)
    var trisal2 = PodeNamorarTrisal(anos2, anos1, anostrisal, 2)
    var trisal3 = PodeNamorarTrisal(anostrisal, anos1, anos2, 3)
    console.log(trisal1, trisal2, trisal3)
    if ((trisal1 == true) && (trisal2 == true) && (trisal3 == true)) {
      alert("Vocês podem namorar!!!")
    } else {
      alert("Vocês não podem namorar.")
    }
  } else {
    if (meses1 != "" && meses1 >= 6) {
      anos1++
    }
    if (meses2 != "" && meses2 >= 6) {
      anos2++
    }
    var podenamorar1 = PodeNamorar(anos1, anos2, 1)
    var podenamorar2 = PodeNamorar(anos2, anos1, 2)
    if (podenamorar1 == true && podenamorar2 == true) {
      alert("Vocês podem namorar!")
    } else {
      alert("Vocês não podem namorar.")
    }
  }
}

function PodeNamorar(idade, parceiro, numeroPretendente) {
  var min = (idade / 2) + 7;
  var max = (idade - 7) * 2;
  if (min % 2 != 0) {
    min = Math.floor(min);
  }
  if (idade <= 13) {
    alert(`O parceiro ${numeroPretendente} não tem idade para namorar!`)
    return false

  }
  if (idade >= 100) {
    alert(`Curta sua aposentadoria!!! Parceiro${numeroPretendente}`)
    return false
  }
  else if (parceiro >= min && parceiro <= max) {
    return true
  }
  else {
    return false
  }
}

function PodeNamorarTrisal(idade, parceiro1, parceiro2, numeroPretendente) {
  var min = (idade / 2) + 7;
  var max = (idade - 7) * 2;
  if (min % 2 != 0) {
    min = Math.floor(min);
  }
  if (idade <= 13) {
    alert(`O parceiro ${numeroPretendente} não tem idade para namorar!`)
    return false
  } else
    if (idade >= 100) {
      alert(`Curta sua aposentadoria!!! Parceiro${numeroPretendente}`)
      return false
    }
    else if ((parceiro1 >= min && parceiro1 <= max) && (parceiro2 >= min && parceiro2 <= max)) {
      return true
    }
    else {
      return false
    }
}

function buttonCasal() {
  document.getElementById("formulariotrisal").hidden = true
  document.getElementById("anostrisal").required = false
  document.getElementById("mesestrisal").required = false
}
function buttonTrisal() {
  document.getElementById("formulariotrisal").hidden = false
  document.getElementById("anostrisal").required = true
}

