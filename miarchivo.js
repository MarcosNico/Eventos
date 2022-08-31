//Tengo un emprendimiento de venta de cervezas artesanales. 
//Precios: Golden = 120 / IPA = 115 / Block = 160



//	var cantidad,precio,desc,compra,pagar;

//precio = parseFloat(prompt("Que cerveza queres ? Ingresa el precio para conocer el descuento por cantidad"));
//cantidad = parseFloat(prompt("Ingresar cantidad"));



//compra = precio * cantidad;
//desc = compra * 0.15;
//pagar = compra - desc;

//document.write("El descuento es: " + desc);

const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();

    const { name, correo, password } = event.target;

    console.log(mane.value, correo.value, password.value);
    if (name.value.length === 0) alert("Nombre no valido");
};

form.addEventListener("submit", enviarFormulario);
