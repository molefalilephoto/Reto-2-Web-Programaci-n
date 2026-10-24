document.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const ci = document.getElementById("ci").value.trim();
    const password = document.getElementById("password").value;
    const confirmation = document.getElementById("confirmPassword").value;

    let errors = [];

    //Valicadion de espacios
    if(name === ""){
        errors.push("Nombre requerido.");
    }

    if(ci === ""){
        errors.push("Numero de carnet identidad requerido.");
    }

    if(password === ""){
        errors.push("Contraseña requerido.");
    }

    if(confirmation === ""){
        errors.push("COnfirmación de contraseña requerido.");
    }

    //Validacion de carnet identidad
    if(ci !== ""){

        if(!/^\d+$/.test(ci)){
            errors.push("Carnet Identidad debe tener valores numericos solamente");
        }

        if(ci.length < 11){
            errors.push("Carnet Identidad debe tener mas de 11 digitos.");
        }
    }

    // Password Validation
    if(password !== confirmation){
        errors.push("Contraseñas debe ser mismos");
    }

    const messages = document.getElementById("messages");

    if(errors.length > 0){

        messages.classList.remove("success");
        messages.innerHTML = errors.join("<br>");

    }else{

        messages.classList.add("success");
        messages.innerHTML = "Formulario enviado!";
    }

});
