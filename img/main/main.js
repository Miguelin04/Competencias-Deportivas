const fila = document.querySelector('.contenedor-carousel');
const deporte = document.querySelectorAll('.deporte');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
fila.scrollLeft += fila.offsetWidth;

const indicadorActivo = document.querySelector('.indicadores .activo');
if(indicadorActivo.nextSibling){
indicadorActivo.nextSibling.classList.add('activo'); 
indicadorActivo.classList.remove('activo');   
}
});
flechaIzquierda.addEventListener('click', () => {
fila.scrollLeft -= fila.offsetWidth;
const indicadorActivo = document.querySelector('.indicadores .activo');
if(indicadorActivo.previousSibling){
indicadorActivo.previousSibling.classList.add('activo'); 
indicadorActivo.classList.remove('activo');   
}
});

const numeroPaginas = Math.ceil(deporte.length / 5);
for(let i = 0; i < numeroPaginas; i++){
const indicador = document.createElement('button');

if(i === 0){
indicador.classList.add('activo');
}
document.querySelector('.indicadores').appendChild(indicador);
indicador.addEventListener('click', (e) => {
fila.scrollLeft = i * fila.offsetWidth;
document.querySelector('.indicadores .activo').classList.remove('activo');
e.target.classList.add('activo');
});

}
deporte.forEach((deporte) => {
deporte.addEventListener('mouseenter', (e) => {
 const elemento = e.currentTarget;
 setTimeout(() => {
    deporte.forEach(deporte => deporte.classList.remove('hover'));
    elemento.classList.add('hover');
 },300);
    });
});
fila.addEventListener('mouseleave', () => {
deporte.forEach(deporte => deporte.classList.remove('hover'));
});

