function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.body.innerHTML = `The client wants a ${size} drink juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'banana', 'orange');
}

makeJuice('medium');
//partie2

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        document.body.innerHTML = `The client wants a ${size} drink juice, containing ${ingredients.join(', ')}.`;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'mango');
    displayJuice();
}

makeJuice('large');
