package com.djamware

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class ComandanciaServiceSpec extends Specification {

    ComandanciaService comandanciaService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Comandancia(...).save(flush: true, failOnError: true)
        //new Comandancia(...).save(flush: true, failOnError: true)
        //Comandancia comandancia = new Comandancia(...).save(flush: true, failOnError: true)
        //new Comandancia(...).save(flush: true, failOnError: true)
        //new Comandancia(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //comandancia.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        comandanciaService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Comandancia> comandanciaList = comandanciaService.list(max: 2, offset: 2)

        then:
        comandanciaList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        comandanciaService.count() == 5
    }

    void "test delete"() {
        Long comandanciaId = setupData()

        expect:
        comandanciaService.count() == 5

        when:
        comandanciaService.delete(comandanciaId)
        datastore.currentSession.flush()

        then:
        comandanciaService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Comandancia comandancia = new Comandancia()
        comandanciaService.save(comandancia)

        then:
        comandancia.id != null
    }
}
