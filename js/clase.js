'use strict'
class Edificio{
    constructor(nplantas,nhabitaciones,superficie){
        this.nplantas=nplantas;
        this.nhabitaciones=nhabitaciones;
        this.superficie=superficie;
    }
}
class Casa extends Edificio{
    constructor(nplantas,nhabitaciones,superficie,ndormitorios,nbanyos){
        super()
        this.nplantas=nplantas;
        this.nhabitaciones=nhabitaciones;
        this.superficie=superficie;
        this.ndormitorios= ndormitorios;
        this.nbanyos= nbanyos;
    }

}
class Oficina extends Edificio{
    constructor(nplantas,nhabitaciones,superficie,nextintores,ntelefonos,){
        super()
        this.nplantas=nplantas;
        this.nhabitaciones=nhabitaciones;
        this.superficie=superficie;
        this.nextintores=nextintores;
        this.ntelefonos=ntelefonos;
    }
}

document.write('<h1>Inicio del programa</h1>')
let miCasa= new Casa(2,6,'100 m2',3,1)
let laCasaDelVecino= new Casa(3,10,'300 m2',6,2)
let miOficina= new Oficina(4,1,'500 m2',10,4)
let laOficinaDeEnfrente= new Oficina(2,3,'1000 m2',6,3)
let CajaExtremadura= new Edificio(10,100,'1000 m2')
let CajaAndalucia= new Edificio(9,120,'1300 m2')

document.write(`mi casa tiene ${miCasa.superficie}<br />`)
document.write(`mi casa tiene ${miCasa.nplantas} plantas<br />`)

document.write(`la casa del vecino ${laCasaDelVecino.superficie}<br />`)
document.write(`la casa del vecino ${laCasaDelVecino.nbanyos} de baños<br />`)

document.write(`mi oficina tiene ${miOficina.nplantas} plantas<br />`)
document.write(`mi oficina tiene ${miOficina.nextintores} extintores<br />`)

document.write(`la oficina de enfrente tiene ${laOficinaDeEnfrente.superficie}<br />`)
document.write(`la oficina de enfrente tiene ${laOficinaDeEnfrente.ntelefonos} telefonos<br />`)

document.write(`La Caja extremadura tiene ${miCasa.superficie}<br />`)
document.write(`La Caja extremadura tiene ${miCasa.nplantas} plantas<br />`)

document.write(`La Caja Andalucia tiene ${miCasa.superficie}<br />`)
document.write(`mi casa Andalucia ${miCasa.nplantas} plantas<br />`)