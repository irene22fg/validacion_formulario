const DOM = {
    form: document.getElementById("frm1"),
    fieldset: document.querySelector("fieldset"),
    info: document.getElementById("info"),
    email: document.getElementById("email"),
    tel: document.getElementById("telefono"),
    edad: document.getElementById("edad"),
    hidden: document.getElementById("hidden"),
    span1: document.getElementById("span1"),
    span2: document.getElementById("span2"),
    enviar: document.getElementById("enviar")
}

DOM.info.addEventListener('change', () => { DOM.info.checked ? DOM.fieldset.disabled = false : DOM.fieldset.disabled = true });
DOM.enviar.addEventListener('click', validarAntesDeEnviar);


function validarAntesDeEnviar(event) {
    if (!DOM.email.validity.valid) {
        DOM.span1.textContent = DOM.email.validationMessage;
        event.preventDefault();
    }

    if (!DOM.tel.validity.valid) {
        if (DOM.tel.validity.valueMissing) {
            DOM.span2.textContent = DOM.tel.validationMessage;
            event.preventDefault();
        }
        if (DOM.tel.validity.patternMismatch) {
            DOM.span2.textContent = DOM.tel.validationMessage;
            event.preventDefault();
        }
    }

    DOM.edad.checked ? DOM.hidden.value = "si" : DOM.hidden.value = "no"
}