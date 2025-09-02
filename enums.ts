//enums existen para enumerar distintos elementos 

enum RoleEnum {
    ADMIN = "admin", //agregamos valores diferentes al predeterminado
    USER = "user",
    WORKER = "worker"
}

enum WelcomeMessageEng {
    MESSAGE = "This is my welcome message"
}

enum WelcomeMessageEsp {
    MESSAGE = "Este es mi mensaje de bienvenida :D"
}

console.log(RoleEnum.WORKER)

console.log(WelcomeMessageEng.MESSAGE)