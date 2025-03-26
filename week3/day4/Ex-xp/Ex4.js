
            document.getElementById('MyForm').addEventListener('submit', function(e) {
                e.preventDefault(); // Empêche l'envoi du formulaire
                
                // Récupération du rayon
                const radius = parseFloat(document.getElementById('radius').value);
                
                // Calcul du volume (V = 4/3 * π * r³)
                const volume = (4/3) * Math.PI * Math.pow(radius, 3);
                
                // Affichage du résultat (arrondi à 2 décimales)
                document.getElementById('volume').value = volume.toFixed(2);
            });
       