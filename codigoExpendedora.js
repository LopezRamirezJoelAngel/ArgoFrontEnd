/**
 * monedas virtuales
 */
const moneda    = 10;
const billete20 = 20;
const billete50 = 50;


/**
 * botones de compras
 */
const A01 = 'A01';
const A02 = 'A02';
const A03 = 'A03';
const A04 = 'A04';
const A05 = 'A05';
const A06 = 'A06';
const A07 = 'A07';
const A08 = 'A08';
const A09 = 'A09';
const A10 = 'A10';
const A11 = 'A11';
const A12 = 'A12';
const A13 = 'A13';
const A14 = 'A14';
const A15 = 'A15';
const A16 = 'A16';
const A17 = 'A17';
const A18 = 'A18';
const A19 = 'A19';
const A20 = 'A20';
const A21 = 'A21';
const A22 = 'A22';
const A23 = 'A23';
const A24 = 'A24';


/**
 * precio
 */


const A_ITEM = 20.00;
const B_ITEM = 34.50;
const C_ITEM = 20.50;
const D_ITEM = 15.00;



/**
 * variables
 */
let dineroInsertado = 0.0;
let codigoProduc    = '';



/**
 * mensaje de ventanas
 */
const salidaWindow_div = document.getElementById('output-window');
const dineroWindow_div = document.getElementById('money-window');
const codigoWindow_div = document.getElementById('code-window');


/**
 * Botnes
 */
const A01_button = document.getElementById('A01');
const A02_button = document.getElementById('A02');
const A03_button = document.getElementById('A03');
const A04_button = document.getElementById('A04');
const A05_button = document.getElementById('A05');
const A06_button = document.getElementById('A06');
const A07_button = document.getElementById('A07');
const A08_button = document.getElementById('A08');
const A09_button = document.getElementById('A09');
const A10_button = document.getElementById('A10');
const A11_button = document.getElementById('A11');
const A12_button = document.getElementById('A12');
const A13_button = document.getElementById('A13');
const A14_button = document.getElementById('A14');
const A15_button = document.getElementById('A15');
const A16_button = document.getElementById('A16');
const A17_button = document.getElementById('A17');
const A18_button = document.getElementById('A18');
const A19_button = document.getElementById('A19');
const A20_button = document.getElementById('A20');
const A21_button = document.getElementById('A21');
const A22_button = document.getElementById('A22');
const A23_button = document.getElementById('A23');
const A24_button = document.getElementById('A24');

const compra_button  = document.getElementById('compra');
const limpiar_button = document.getElementById('limpiar');


/**
 * botones de dinero
 */
const moneda_button = document.getElementById('dinero-10');
const billete20_button = document.getElementById('dinero-20');
const billete50_button = document.getElementById('dinero-50');
const devolver_button = document.getElementById('dinero-return');


/**
 * acciones de los botones de dinero
 */
moneda_button.addEventListener('click', function () {
    console.log('moneda insertada');
    sumDinaero(moneda);
  });
  
  billete20_button.addEventListener('click', function () {
    console.log('billete insertado');
    sumDinaero(billete20);
  });
  
  billete50_button.addEventListener('click', function () {
    console.log('billete insertado');
    sumDinaero(billete50);
  });
  
  devolver_button.addEventListener('click', function () {
    console.log('tu cambio');
    retornarDinero();
  });




  /**
 * accion de los botones de productos
 */
A01_button.addEventListener('click', function () {
    console.log(A01 + ' presionado');
    codigoProductChar(A01);
  });
  
  A02_button.addEventListener('click', function () {
    console.log(A02 + ' presionado');
    codigoProductChar(A02);
  });
  
  A03_button.addEventListener('click', function () {
    console.log(A03 + ' presionado');
    codigoProductChar(A03);
  });
  
  A04_button.addEventListener('click', function () {
    console.log(A04 + ' presionado');
    codigoProductChar(A04);
  });
  
  A05_button.addEventListener('click', function () {
    console.log(A05 + ' presionado');
    codigoProductChar(A05);
  });
  
  A06_button.addEventListener('click', function () {
    console.log(A06 + ' presionado');
    codigoProductChar(A06);
  });
  
  A07_button.addEventListener('click', function () {
    console.log(A07 + ' presionado');
    codigoProductChar(A07);
  });
  
  A08_button.addEventListener('click', function () {
    console.log(A08 + ' presionado');
    codigoProductChar(A08);
  });
  
  A09_button.addEventListener('click', function () {
    console.log(A09 + ' presionado');
    codigoProductChar(A09);
  });
  
  A10_button.addEventListener('click', function () {
    console.log(A10 + ' presionado');
    codigoProductChar(A10);
  });
  
  A11_button.addEventListener('click', function () {
    console.log(A11 + ' presionado');
    codigoProductChar(A11);
  });
  
  A12_button.addEventListener('click', function () {
    console.log(A12 + ' presionado');
    codigoProductChar(A12);
  });
  
  A13_button.addEventListener('click', function () {
    console.log(A13 + ' presionado');
    codigoProductChar(A13);
  });
  
  A14_button.addEventListener('click', function () {
    console.log(A14 + ' presionado');
    codigoProductChar(A14);
  });
  
  A15_button.addEventListener('click', function () {
    console.log(A15 + ' presionado');
    codigoProductChar(A15);
  });
  
  A16_button.addEventListener('click', function () {
    console.log(A16 + ' presionado');
    codigoProductChar(A16);
  });
  
  A17_button.addEventListener('click', function () {
    console.log(A17 + ' presionado');
    codigoProductChar(A17);
  });
  
  A18_button.addEventListener('click', function () {
    console.log(A18 + ' presionado');
    codigoProductChar(A18);
  });
  
  A19_button.addEventListener('click', function () {
    console.log(A19 + ' presionado');
    codigoProductChar(A19);
  });
  
  A20_button.addEventListener('click', function () {
    console.log(A20 + ' presionado');
    codigoProductChar(A20);
  });
  
  A21_button.addEventListener('click', function () {
    console.log(A21 + ' presionado');
    codigoProductChar(A21);
  });
  
  A22_button.addEventListener('click', function () {
    console.log(A22 + ' presionado');
    codigoProductChar(A22);
  });
  
  A23_button.addEventListener('click', function () {
    console.log(A23 + ' presionado');
    codigoProductChar(A23);
  });
  
  A24_button.addEventListener('click', function () {
    console.log(A24 + ' presionado');
    codigoProductChar(A24);
  });
  
  
  compra_button.addEventListener('click', function () {
    console.log('boton comprar presionado');
    comprarProductoActual();
  });
  
  limpiar_button.addEventListener('click', function () {
    console.log('boton limpiar presionado');
    codigoProduc = '';
    imprimirCodigoProdcuto();
  });

  
  /**
 * sumatoria de dinero insertado a la maquina  adds inserted money to total
 */
function sumDinaero(value) {
    dineroInsertado = redondeo(dineroInsertado + value);
    console.log('dinero total insertado: ' + dineroInsertado);
    imprimirDinero();
  }


/**
 * devuelve dinero y mensaje de salida para el usuario returns money, prints output message
 */
function retornarDinero() {
    printOutput(returnMoneyMessage());
    dineroInsertado = 0.0;
    imprimirDinero();
  }


/**
 * imprime el valor del dinero insertado en la ventana de dinero de la expendedora prints value of inserted money to money window
 */
function imprimirDinero() {
    dineroWindow_div.innerHTML = '$ ' + dineroInsertado;
  }



/**
 * redondeo del numero
 */
function redondeo(num) {
    return +(Math.round(num * 100) / 100).toFixed(2);
  }


/**
 * validacion del codigo del producto
 */
function codigoProductChar(char) {
    codigoProduc= codigoProduc + char;
    console.log('codigo del producto ' + codigoProduc);
    imprimirCodigoProdcuto();
    if (codigoProduc.length == 3) {
      printOutput(codigoProduc + ' seleccionado, precio del producto: $' + verPrecioProducto());
    }
  }
  
  
  

  





  /**
 * compra del producto
 */
function comprarProductoActual() {
    let mensajeCompra = '';
    if (codigoProduc.length == 3) {
      let cost = verPrecioProducto();
      if (dineroInsertado >= cost) {
        mensajeCompra += 'Porducto con clave:  ' + codigoProduc + '...<br/>';
        dineroInsertado = redondeo(dineroInsertado - cost);
        mensajeCompra += returnMoneyMessage() + '<br/>';
        dineroInsertado = 0;
        retornarDinero();
      } else {
        mensajeCompra += 'No te alcanza pa $' + cost + '<br/>';
      }
    } else {
      mensajeCompra += 'Producto invalido' + '<br/>';
    }
    printOutput(mensajeCompra);
  }



/**
 * ver precio para la compra
 */
function verPrecioProducto() {
    switch (codigoProduc) {
      case 'A01':
        return A_ITEM;
      case 'A02':
        return A_ITEM;
      case 'A03':
        return A_ITEM;
      case 'A04':
        return A_ITEM;
      case 'A05':
        return A_ITEM;
      case 'A06':
        return A_ITEM;



      case 'A07':
        return B_ITEM;
      case 'A08':
        return B_ITEM;
      case 'A09':
        return B_ITEM;
      case 'A10':
        return B_ITEM;
      case 'A11':
        return B_ITEM;
      case 'A12':
        return B_ITEM;

      case 'A13':
        return C_ITEM;
      case 'A14':
        return C_ITEM;
      case 'A15':
        return C_ITEM;
      case 'A16':
        return C_ITEM;
      case 'A17':
        return C_ITEM;
      case 'A18':
        return C_ITEM;

      case 'A19':
        return D_ITEM;
      case 'A20':
        return D_ITEM;
      case 'A21':
        return D_ITEM;
      case 'A22':
        return D_ITEM;
      case 'A23':
        return D_ITEM;
      case 'A24':
        return D_ITEM;
      default:
        return 0.0;
    }
  }

  

/**
 * imprime el codigo del producto
 */
function imprimirCodigoProdcuto() {
    codigoWindow_div.innerHTML = codigoProduc;
  }


/**
 * mensaje de salida
 */
function printOutput(message) {
    salidaWindow_div.innerHTML = message;
  }



/**
 * dinero insertado
 */
function returnMoneyMessage() {
    return '$ ' + dineroInsertado + ' regresado.';
  }