const inscriptionScroll = () => {
    document.getElementById("inscription").scrollIntoView();
}

const sendForm = () => {
    const firstname = document.getElementById("firstname");
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const phone = document.getElementById("phone");

    if (firstname.value == "" || name.value == "" || mail.value == "") {

        createToast("error", "fa-circle-xmark", "Un ou des champs sont manqants");
        return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(mail.value);

    if (!isValidEmail) {
        createToast("error", "fa-circle-xmark", "L'adresse mail est invalide");
        return;
    }

    if (!phone.value.lenght == 0) {
        if (phone.value.lenght != 10) {

            var text = phone.value;
    
            for (const c of text) {
                if (/^\d+$/.test(c) == false) {
                    createToast("error", "fa-circle-xmark", "Numéro de téléphone invalide");
                    return;
                }
            }
    
            createToast("error", "fa-circle-xmark", "Numéro de téléphone invalide");
            return;
        }
        else {
            phone.value = "0";
        }
    }
    else {
        phone.value = "0";
    }

    
    var request_data = $('#form');
    $.post('send_form.php', request_data);

    createToast("success", "fa-circle-check", "Formulaire d'inscription envoyé !");

    firstname.value = "";
    name.value = "";
    mail.value = "";
    phone.value = "";
}

const notifications = document.querySelector(".notifications")

const createToast = (id, icon, text) => {
    const toast = document.createElement("li");
    toast.className = `toast ${id}`
    toast.innerHTML = ` <div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`

    notifications.appendChild(toast);

    toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
}

const removeToast = (toast) => {
    toast.classList.add("hide");

    if (toast.timeoutId) clearTimeout(toast.timeoutId);

    setTimeout(() => toast.remove(), 500);
}

const shadow = document.querySelector('.shadow');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
})