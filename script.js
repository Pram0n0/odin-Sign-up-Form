document.addEventListener('DOMContentLoaded', function() {
    const set_password = document.querySelector('#set-password');
    const confirm_password = document.querySelector('#confirm-password');

    set_password.addEventListener("input", function() {
        if (set_password.value === confirm_password.value) {
            set_password.classList.add("match")
            confirm_password.classList.add("match")
        } else if (set_password.value !== confirm_password.value) {
            set_password.classList.remove("match")
            confirm_password.classList.remove("match")
        }
    });
    
    confirm_password.addEventListener("input", function() {
        if (set_password.value === confirm_password.value) {
            set_password.classList.add("match")
            confirm_password.classList.add("match")
        } else if (set_password.value !== confirm_password.value) {
            set_password.classList.remove("match")
            confirm_password.classList.remove("match")
        }
    });
});