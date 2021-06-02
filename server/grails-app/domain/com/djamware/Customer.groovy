package com.djamware

import grails.rest.*

// @Resource(uri='/customer', formats=['json', 'xml']) // readOnly = true
class Customer {

    String name
    String address
    String city
    String postalCode
    String phone
    boolean done

    static constraints = {
        name blank: false
        address blank: false
        city blank: false
        postalCode blank: false
        phone blank: false
        done blank: false
    }

    String toString(){
        name
    }
}
