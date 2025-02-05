

function seconnecter() {
    let inscriptionDiv = document.querySelector(".signup-form");
    let seconnecterDiv = document.querySelector(".login-form");

    let inscriptionText = document.querySelector(".connection");
    let seconnecterText = document.querySelector(".inscription");
    
    inscriptionDiv.classList.add("hidden");
    seconnecterDiv.classList.remove("hidden");

    inscriptionText.classList.add("border");
    seconnecterText.classList.remove("border");

    inscriptionText.classList.add("color");
    seconnecterText.classList.remove("color");

}

function sinscrire() {
    let inscriptionDiv = document.querySelector(".signup-form");
    let seconnecterDiv = document.querySelector(".login-form");

    let inscriptionText = document.querySelector(".connection");
    let seconnecterText = document.querySelector(".inscription");
    
    inscriptionDiv.classList.remove("hidden");
    seconnecterDiv.classList.add("hidden");

    inscriptionText.classList.remove("border");
    seconnecterText.classList.add("border");

    inscriptionText.classList.remove("color");
    seconnecterText.classList.add("color");
}


function connection() {
    let inscriptionDiv = document.querySelector(".signup-form");

    if (!inscriptionDiv.classList.contains("hidden")) {
        let email = document.getElementById("signupemail").value.trim();
        let password = document.getElementById("signupmdp").value;
        let confirmPassword = document.getElementById("signupmdp2").value;
        let texterreur = document.getElementById("texterreur");

        if (email === "" || password === "" || confirmPassword === "") {
            texterreur.innerHTML = "Veuillez remplir tous les champs !";
            return;
        }

        if (password !== confirmPassword) {
            texterreur.innerHTML = "Les mots de passe ne correspondent pas !";
            return;
        }

        let userData = {
            password: password,
            connected: 0
        };


        localStorage.setItem(email, JSON.stringify(userData));

        console.log("Utilisateur inscrit avec succès !");
    } else {
        
        let email = document.getElementById("loginemail").value;
        let password = document.getElementById("loginmdp").value;
        let texterreur = document.getElementById("texterreur");


        if (email === "" || password === "") {
            texterreur.innerHTML = "Veuillez remplir tous les champs !";
            return;
        }

   
        let userData = localStorage.getItem(email);

        if (!userData) {
            texterreur.innerHTML = "Aucun compte trouvé avec cet email !";
            return;
        }

     
        let user = JSON.parse(userData);

    
        if (user.password !== password) {
            texterreur.innerHTML = "Mot de passe incorrect !";
            return;
        }

      
        user.connected = 1;
        localStorage.setItem(email, JSON.stringify(user));

        console.log("Connexion réussie !");
        texterreur.innerHTML = "Connexion réussie !";

      
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1000);
    }
}
