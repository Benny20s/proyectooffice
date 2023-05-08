const nombre = document.getElementById("nom")
const correo = document.getElementById("email")
const celular = document.getElementById("cel")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let ragexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.Value.length <5){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(!ragexEmail.test(email.Value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(celular.Value.length < 9){
        warnings += 'El el numero de celular no es valido <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

})