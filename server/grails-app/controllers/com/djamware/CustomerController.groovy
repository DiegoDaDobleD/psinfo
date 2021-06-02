package com.djamware


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured


@Secured(['ROLE_USER', 'ROLE_ADMIN'])
class CustomerController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CustomerController() {
        super(Customer)
    }

    @Secured('ROLE_ADMIN')
    def pending() {
        respond Customer.findAllByDone(false), view: 'index'
    }
}
