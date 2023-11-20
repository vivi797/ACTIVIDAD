const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaShort = document.createElement("div");
    nuevaShort.classList = "tarjeta-producto";
    nuevaShort.innerHTML = `
      <img src="./img/productos/${producto.id}.jpg">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaShort);
    nuevaShort.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
  });
}

getShorts().then(shorts => {
  crearTarjetasProductosInicio(shorts);
})