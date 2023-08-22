const pokemonId = document.getElementById('pokemons')
const loadButton = document.getElementById('loads')
const limit  = 6;
let offset = 0;

function pokemonListToHtml(list) {
    return `
        <ol class="lists" ${list.type}>
            <li class="list" ${list.type}>
                <span class="number">${list.numberOrder}</span>
                <span class="name">${list.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${list.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img class="image" src="${list.photo}" alt="${list.name}">
                </div>
            </li>
        </ol>
    `
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map(pokemonListToHtml).join('')
            pokemonId.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})