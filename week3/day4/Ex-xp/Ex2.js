
        // 1. Récupérer le formulaire et l'afficher dans la console
        const form = document.getElementById('myForm');
        console.log("Formulaire:", form);

        // 2. Récupérer les entrées par leur id et les afficher
        const fnameInput = document.getElementById('fname');
        const lnameInput = document.getElementById('lname');
        console.log("Input prénom (par id):", fnameInput);
        console.log("Input nom (par id):", lnameInput);

        // 3. Récupérer les entrées par leur name et les afficher
        const fnameByName = document.querySelector('[name="firstname"]');
        const lnameByName = document.querySelector('[name="lastname"]');
        console.log("Input prénom (par name):", fnameByName);
        console.log("Input nom (par name):", lnameByName);

        // 4. Gestion de la soumission du formulaire
        form.addEventListener('submit', function(event) {
            // Empêche le rechargement de la page
            event.preventDefault();
            
            // Récupère les valeurs des champs
            const firstName = fnameInput.value.trim();
            const lastName = lnameInput.value.trim();
            
            // Vérifie que les champs ne sont pas vides
            if (!firstName || !lastName) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Crée les éléments li et les ajoute à la liste
            const usersAnswerList = document.querySelector('.usersAnswer');
            usersAnswerList.innerHTML = ''; // Vide la liste avant d'ajouter
            
            const firstNameItem = document.createElement('li');
            firstNameItem.textContent = firstName;
            usersAnswerList.appendChild(firstNameItem);
            
            const lastNameItem = document.createElement('li');
            lastNameItem.textContent = lastName;
            usersAnswerList.appendChild(lastNameItem);
            
            // Réinitialise le formulaire
            form.reset();
        });