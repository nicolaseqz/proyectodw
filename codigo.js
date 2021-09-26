//ARRAY de objetos - FOR OF

// const prenda1= {nombre:"Remera Rangers", precio:700};
// const prenda2= {nombre:"Buzo Sunshine", precio:500};
// const prenda3= {nombre:"Jean Cross", precio:800};
// const prenda4= {nombre:"Jogger Peter", precio:900};
// const prenda5= {nombre:"Pack 1", precio:2000};
// const prenda6= {nombre:"Pack 2", precio:3000};
// const listaProductos= [prenda1, prenda2, prenda3, prenda4, prenda5, prenda6];
// console.log(listaProductos);

// for (const prendas of listaProductos){
//     console.log(prendas.nombre);
//     console.log(prendas.precio);
// }

// DOM
// window.addEventListener('DOMContentLoaded', function () {
//     console.log('El DOM esta listo');
// });


//EVENTOS - LOCALSTORAGE
// let boton = document.getElementById("infoMayorista");
// boton.addEventListener("click",mayorista);


function mayorista () {
    let marca=prompt("Ingresa el nombre de tu marca!");
    let correo=prompt("Ingrese su correo para que podamos contactarnos en la brevedad!");
    alert("Bienvenido "+marca+", vamos a contactarnos contigo para brindarte el catálogo y precios mayoristas!");
    sessionStorage.setItem("marca", marca);
    sessionStorage.setItem("correo", correo);
}



// ---------------- JQUERY ----------------------- //

$(document).ready(function () {
    console.log("El DOM esta listo");
    let boton = $("#infoMayorista");
    boton.on("click", mayorista);
    boton.on("click", () => {
      console.log("Usted ha tocado el botón Mayorista");
    });
  });



// ----------- FADE TOGGLE ------------------ //

$ ("#muestraParrafo").click(function() {
     $("#parrafo").fadeToggle(1000, function() {
         if($("#muestraParrafo").html()=="Descubri algo importante!"){
            $("#muestraParrafo").html("Ocultar info!")
     }
    });
});

// ------------------ JQuery AJAX ------------------ //

$("#enviar").click(function(){
    $.ajax({
        method: "GET",
        url: "http://127.0.0.1:5500/newsletter.html",
        data: $("form")
    })
    .done(function() {
        console.log("success");
    })
    .fail(function(){
        console.log("error");
    })
    .always(function(){
        console.log("complete");
    })
});
