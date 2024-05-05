async function getPokemonData(query) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    return data;
}

async function fetchData(event) {
    event.preventDefault();
    const query = document.getElementById("pokemonName").value;
    const data = await getPokemonData(query);
    console.log(data);
    displayPokemon(data);
}

count = 0;
async function displayPokemon(pokemon) {
    if (count == 5) {
        return;
    }
    count++;

    const html = `<div id="pokemonCon" class="card m-3 flex-column">    
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <div id="pokemonDiv">
                            <h1>${pokemon.name}</h1>
                            <p>Order: ${pokemon.order}</p> 
                            <p>Type: ${pokemon.types[0].type.name}</p>
                        <div>
                  </div>`;
    const div = document.getElementById("pokemonContainer");

    div.insertAdjacentHTML("beforeend", html);
}

function resetButton() {
    count = 0;
    document.getElementById("pokemonContainer").innerHTML = "";
}
