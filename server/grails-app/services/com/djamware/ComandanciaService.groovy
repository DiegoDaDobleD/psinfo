package com.djamware

import grails.gorm.services.Service

@Service(Comandancia)
interface ComandanciaService {

    Comandancia get(Serializable id)

    List<Comandancia> list(Map args)

    Long count()

    Comandancia delete(Serializable id)

    Comandancia save(Comandancia comandancia)

}
