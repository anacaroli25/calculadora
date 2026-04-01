function calcular(operacao) {
  let v1 = parseFloat(document.getElementById("valor1").value);
  let v2 = parseFloat(document.getElementById("valor2").value);
  let resultado;

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById("resultado").innerText =
      "Preencha os dois valores!";
    return;
  }

  if (operacao === "+") {
    resultado = v1 + v2;
  } else if (operacao === "-") {
    resultado = v1 - v2;
  } else if (operacao === "*") {
    resultado = v1 * v2;
  } else if (operacao === "/") {
    if (v2 !== 0) {
      resultado = v1 / v2;
    } else {
      resultado = "Não é possível dividir por zero";
    }
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
