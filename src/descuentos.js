function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

function calcularPrecioFinal(precio, tipoCliente) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  if (tipoCliente === "estudiante") {
    return precio * 0.85; // 15% de descuento
  }
  return precio;
}

module.exports = { calcularTotal, calcularPrecioFinal };
