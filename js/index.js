function alquilarAuto(vehiculo, cantidadDias){
vehiculo = prompt("Ingrese que vehiculo desea(auto, van, camioneta):")
cantidadDias = parseInt(prompt("Ingrese cantidad de dias (max10):"))
precioPorDia = 1000
monto = (cantidadDias * precioPorDia)
if (vehiculo == 'auto' ){ vehiculo = 2500}
else
if (vehiculo == 'van'){vehiculo = 3500}
else
if (vehiculo== 'camioneta'){vehiculo = 4500}
return "precio total:" + (vehiculo + monto)
while
    (vehiculo =! 'auto' || 'van' || 'camioneta')
    return window.alert ('Ingresaste un vehiculo incorrecto')

}