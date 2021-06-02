package com.djamware

class BootStrap {

    def init = { servletContext ->
        new Customer(phone:"123456789", address:"Lago Alto", postalCode:"11111", name:"Diego Canales", city:"Totana").save()
        new Customer(phone:"987654321", address:"Lago Bajo", postalCode:"55555", name:"Ernesto Castro", city:"Pinto").save()
        new Customer(phone:"916905643", address:"Lago Medio", postalCode:"44444", name:"Gema Canal", city:"Madrid", done:1).save()

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
