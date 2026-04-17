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

    //capturar informacion de las cajas de texto:
    let componenteSueldoBase=document.getElementById("txtSueldoBase"); //nombre d la caja
    let sueldoBaseStr = componenteSueldoBase.value; // trae el valor q contiene la caja, el valor es texto
    let sueldoBase = parseFloat(sueldoBaseStr);     // convierte en numero decimal

    let componenteVenta = document.getElementById("txtVentas");  //caja 
    let numeroVentasStr = componenteVenta.value;                 //valor
    let numeroVentas = parseFloat(numeroVentasStr);              //convierte a numero decimal

    let componentePrecio = document.getElementById("txtPrecio"); //caja
    let precioProductoStr = componentePrecio.value;              //valor
    let PrecioProducto = parseFloat(precioProductoStr);          // convierte a numero decimal

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