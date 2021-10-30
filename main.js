var num1 = 0;
var num2 = 0;
var operacion = $(".btn_op").html();

$(document).ready(function () {
  $(".btn_num").click(function (e) {
    if (textoPantalla.innerHTML == "0") {
      textoPantalla.innerHTML = e.target.value;
      textoPantalla.focus();
    } else if ((textoPantalla.innerHTML += e.target.value)) {
      $("#igualar").on("click", function () {
        focus();
      });
    } else {
      num1 = $("#textoPantalla").html();
      historial.innerHTML = num1;
      $("#textoPantalla").html("");
    }
  });

  let flag = false;
  $("#btn_historia").click(() => {
    if (flag) $(".history").fadeIn();
    else $(".history").fadeOut();

    flag = !flag;
  });

  $(".btn_punto").on("click", function (e) {
    if (!textoPantalla.innerHTML.includes(".") && e.target.value == ".") {
      textoPantalla.innerHTML += e.target.value;
    }
  });

  $("#resetear").on("click", function () {
    resetear();
  });

  $("#mas").on("click", function () {
    num1 = $("#textoPantalla").html();
    operacion = "+";
    historial.innerHTML = "+";
    limpiar();
  });

  $("#menos").on("click", function () {
    num1 = $("#textoPantalla").html();
    operacion = "-";
    historial.innerHTML = "-";
    limpiar();
  });

  $("#multi").on("click", function () {
    num1 = $("#textoPantalla").html();
    operacion = "*";
    historial.innerHTML = "*";
    limpiar();
  });

  $("#divi").on("click", function () {
    num1 = $("#textoPantalla").html();
    operacion = "/";
    historial.innerHTML = "/";
    limpiar();
  });

  $("#igualar").on("click", function () {
    num2 = $("#textoPantalla").html();
    operar();
  });
});

function limpiar() {
  $("#textoPantalla").html("0");
}

function resetear() {
  $("#historial").html("0");
  $("#textoPantalla").html("0");
  num1 = 0;
  num2 = 0;
  operacion = "";
}
function operar() {
  num2 = $("#textoPantalla").html();
  resultado = 0;
  switch (operacion) {
    case "+":
      resultado = parseFloat(num1) + parseFloat(num2);
      break;

    case "-":
      resultado = parseFloat(num1) - parseFloat(num2);
      break;

    case "/":
      resultado = parseFloat(num1) / parseFloat(num2);
      break;

    case "*":
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
  }

  $("#textoPantalla").html(resultado);

  sessionStorage.setItem(resultado, operacion);
  historial.innerHTML = resultado;
}

function igualar() {
  if (
    textoPantalla.innerHTML != "" &&
    igualar.value != "" &&
    igualar.value != "="
  ) {
    operar();
  } else {
    resetear();
    textoPantalla.focus();
  }
}
