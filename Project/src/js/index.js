const data = require('../data/card-data.json');

const pokemon = data.pokemon.forEach(render);

function render(pokemon) {
    const markup = `
    <div class="col-lg-5ths col-md-4 col-sm-6 col-xs-12 animated fadeInUp slow">
        <div class="card">
            <img src="${pokemon.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${pokemon.name}</h5>
            <div class="row">
            <div class="col-md-6 text-center">
                <ul>
                <li class="underline">Moves:</li>
                    <li>${pokemon.moves[0]}</li>
                    <li>${pokemon.moves[1]}</li>
                    <li>${pokemon.moves[2]}</li>
                </ul>
            </div>
            <div class="hr-vertical"></div>
            <div class="col-md-6 card-text text-center">
                <ul>
                <li class="underline">Stats:</li>
                    <li>Speed: ${pokemon.stats.speed}</li>
                    <li>Attack: ${pokemon.stats.attack}</li>
                    <li>Defense: ${pokemon.stats.defense}</li>
                </ul>
            </div>
            </div> 
        </div>
        </div>
        </div>`;
    document.querySelector('#pokemon').insertAdjacentHTML('afterbegin', markup);
};

const show = document.querySelector('#pokemon');
const button = document.querySelector('.btn-primary');

button.addEventListener('click', () => {
    if (show.style.display == 'none') {
        show.style.display = 'block';
    } else {
        show.style.display = 'none';
    }
    button.setAttribute('href', '#pokemon');
}); 