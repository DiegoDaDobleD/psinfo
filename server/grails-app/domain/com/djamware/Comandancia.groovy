package com.djamware
import grails.rest.*

@Resource(uri='/comandancia')
class Comandancia {

    String nombre
    String direccion
    String codigoPostal

    static constraints = {
        nombre blank:false
        direccion blank:false
        codigoPostal blank:false
    }

    String toString() {
        nombre
    }
}
