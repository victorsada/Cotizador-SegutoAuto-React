//obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
  //if (marca === "americano") {
  //  return (incremento = 1.15);
  // } else if (marca === "europeo") {
  //  return (incremento = 1.3);
  // } else if (marca === "asiatico") {
  //  return (incremento = 1.05);
  // }
}

export function obtenerPlan(plan) {
  let incr;

  if (plan === "basico") {
    return (incr = 1.2);
  } else if (plan === "completo") {
    return (incr = 1.5);
  }
}

//poner la primera en mayuscula

export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
