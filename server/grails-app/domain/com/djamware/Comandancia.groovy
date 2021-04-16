package com.djamware


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
