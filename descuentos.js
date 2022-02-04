//const precioOriginal = 120;
//const descuento = 18;

const coupons = [
    {name:"Visa" , discount: 30},
    {name:"Master" , discount: 15},
    {name:"American" , discount: 7.5}
    ];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioConCupon(precioC, descuentoC){
    const porcentajePrecioConCupon = 100 - descuentoC;
    const precioConDescuentoC = (precioC * porcentajePrecioConCupon) / 100;
    return precioConDescuentoC;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue , discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function onClickButtonPriceCoupon(){
    const inputPriceC = document.getElementById("InputPriceC");
    const priceCValue = inputPriceC.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const findCoupon = coupons.find(
        function(coupon){
            return coupon.name === couponValue
        });

    if (findCoupon == undefined){
        alert("El cupón " + couponValue +" no es válido");
        const precioConDescuentoC = calcularPrecioConCupon(priceCValue , 0);
        const resultPC = document.getElementById("ResultPC");
        resultPC.innerText = "No se genera descuento. El precio es de: $" + precioConDescuentoC;
    }else{
        const discountCoupon = findCoupon.discount;
        const precioConDescuentoC = calcularPrecioConCupon(priceCValue , discountCoupon);
        const resultPC = document.getElementById("ResultPC");
        resultPC.innerText = "El precio con descuento es de: $" + precioConDescuentoC;
    }
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/