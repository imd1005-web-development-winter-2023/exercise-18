// Array of pokemons
pokemons = ["Pikachu", "Meowth", "Charizard", "Gyarados", "Growlithe"];

// Get a reference to the list already on the page
const pokeList = document.querySelector(".poke-items");

// Loop through the array of pokemons items
// For each item:
//  Create an a new list item element
//  Add text content to the list item that is from the array
//  Add the new item to the list on the page
for (let i = 0; i < pokemons.length; i++) {
  const pokemonListItem = document.createElement("li");
  pokemonListItem.textContent = pokemons[i];

  pokeList.appendChild(pokemonListItem);
}
