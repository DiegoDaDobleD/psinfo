package com.djamware

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class ComandanciaController {

    ComandanciaService comandanciaService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond comandanciaService.list(params), model:[comandanciaCount: comandanciaService.count()]
    }

    def show(Long id) {
        respond comandanciaService.get(id)
    }

    @Transactional
    def save(Comandancia comandancia) {
        if (comandancia == null) {
            render status: NOT_FOUND
            return
        }
        if (comandancia.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond comandancia.errors
            return
        }

        try {
            comandanciaService.save(comandancia)
        } catch (ValidationException e) {
            respond comandancia.errors
            return
        }

        respond comandancia, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Comandancia comandancia) {
        if (comandancia == null) {
            render status: NOT_FOUND
            return
        }
        if (comandancia.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond comandancia.errors
            return
        }

        try {
            comandanciaService.save(comandancia)
        } catch (ValidationException e) {
            respond comandancia.errors
            return
        }

        respond comandancia, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || comandanciaService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
