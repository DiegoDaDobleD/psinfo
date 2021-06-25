package com.djamware

class BootStrap {

    def init = { servletContext ->
        new Customer(phone:"123456789", address:"Lago Alto", postalCode:"11111", name:"Diego Canales", city:"Totana").save()
        new Customer(phone:"987654321", address:"Lago Bajo", postalCode:"55555", name:"Ernesto Castro", city:"Pinto").save()
        new Customer(phone:"916905643", address:"Lago Medio", postalCode:"44444", name:"Gema Canal", city:"Madrid", done:1).save()

        def cities = ["Parla", "Fuenlabrada", "Baeza", "Barcelona", "Lugo"]
        def names = ["Paula Barcelona", "Rita La Cantaora", "Maria Sarmiento", "Hugo Silva", "Nacho Cano"]
        def address = ["Calle Paraiso, 5", "Calle Luna, 5", "Calle Milan, 8", "Calle Miel, sn", "Avenida Italia, 115"]
        (1..5).each {
            new Customer(phone:"${it}"+"123456789", address:address.getAt("${it}".toInteger()), postalCode:"1111"+"${it}",
                    names:address.getAt("${it}".toInteger()), cities:address.getAt("${it}".toInteger())).save()
        }

        new Comandancia(codigo_postal:"28400", nombre:"Comandancia de Madrid", direccion:"C/ Los Álamos, sn, Alcobendas").save()
        new Comandancia(codigo_postal:"30400", nombre:"Comandancia de Murcia", direccion:"C/ Los Lorca, sn, Murcia").save()

        def role1 = new Role(authority:"ROLE_USER").save()
        def user1 = new User(username:"user1",password:"pwd1").save()
        UserRole.create(user1,role1)
        def role2 = new Role(authority:"ROLE_ADMIN").save()
        def user2 = new User(username:"user2",password:"pwd2").save()
        UserRole.create(user2,role2)
    }
    def destroy = {
    }
}
