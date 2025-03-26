
        // 1. Déclarer la variable globale
        let allBoldItems;

        // 2. Fonction pour collecter les éléments en gras
        function getBoldItems() {
            allBoldItems = document.querySelectorAll('#myParagraph strong');
        }

        // 3. Fonction pour mettre en bleu
        function highlight() {
            getBoldItems(); // On s'assure que allBoldItems est à jour
            allBoldItems.forEach(item => {
                item.style.color = 'blue';
            });
        }

        // 4. Fonction pour remettre en noir
        function returnItemsToDefault() {
            getBoldItems();
            allBoldItems.forEach(item => {
                item.style.color = 'black';
            });
        }

        // 5. Ajout des écouteurs d'événements
        const paragraph = document.getElementById('myParagraph');
        paragraph.addEventListener('mouseover', highlight);
        paragraph.addEventListener('mouseout', returnItemsToDefault);

        // Initialisation
        getBoldItems();
   