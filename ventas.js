const VENTAS_BASE = 5;

function calcularComision(numeroVenta, precioProducto) {
    let comision = 0;
    if (numeroVenta > VENTAS_BASE) {
        let ventasExtra = numeroVenta - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}


function calcular(){

    // capturar informacion de las cajas de texto:    
    // llama a utilitarios recuperarFloat("idComponente")
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");    
    let PrecioProducto = recuperarFloat("txtPrecio");

    //calcular comision
    let comision = calcularComision(numeroVentas,PrecioProducto);

    // suelto total, sueldo mas la comision
    let total = sueldoBase + comision;
    
    // mostrar los valores en pantalla
    let spSueldoBase = document.getElementById("spSueldoBase");
    spSueldoBase.textContent=sueldoBase;
    
    let spComision = document.getElementById("spComision");
    spComision.textContent=comision;

    let spTotal = document.getElementById("spTotal");
    spTotal.textContent=total;

}