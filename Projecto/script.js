function toggleArticulos() {
    const lista = document.getElementById("listaArticulos");
    if (!lista) return console.warn("toggleArticulos: #listaArticulos no encontrado");
    lista.style.display = lista.style.display === "none" || lista.style.display === "" ? "block" : "none";
}

console.log("script.js cargado");

document.addEventListener('DOMContentLoaded', function() {

    // ----- LOGIN -----
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('error-msg');

    // PERFIL OCULTO
    const profileSection = document.getElementById('profileSection');
    const profileUsername = document.getElementById('profile-username');
    const profilePassword = document.getElementById('profile-password');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const profileMsg = document.getElementById('profile-msg');
    const loginSection = document.getElementById('loginSection');

    if (loginBtn && username && password && errorMsg) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (username.value.trim() === '' || password.value.trim() === '') {
                alert("Por favor, completa todos los campos.");
                errorMsg.textContent = "Por favor, completa todos los campos.";
                errorMsg.style.visibility = "visible";
            } else {
                alert(`Bienvenido ${username.value}!`);
                errorMsg.style.visibility = "hidden";

                // Mostrar perfil oculto
                if (profileSection && loginSection) {
                    loginSection.style.display = 'none';
                    profileSection.style.display = 'grid'; // mismo estilo que login
                    profileUsername.value = username.value;
                    profilePassword.value = password.value;
                }

                // Limpiar login
                username.value = '';
                password.value = '';
            }
        });
    }

    // GUARDAR CAMBIOS PERFIL
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const newUsername = profileUsername.value.trim();
            const newPassword = profilePassword.value.trim();

            if (newUsername === '' || newPassword === '') {
                profileMsg.textContent = "Los campos no pueden estar vacíos.";
                profileMsg.style.visibility = "visible";
                return;
            }
            alert("¡Perfil actualizado correctamente!");

            console.log("Perfil actualizado:", {
                usuario: newUsername,
                contraseña: newPassword
            });
        });
    }

    // ----- FORMULARIO DE CONTACTO -----
    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente. Te responderemos pronto.");
            formContacto.reset();
        });
    }

    console.log("Sistema de login, perfil y contacto cargado");
});
