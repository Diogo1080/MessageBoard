function changeToType(type){
	let element = document.getElementById("pokemon-card");
	element.classList="pokemon-card " + type;
}

changeToType("normal");

function getPokemonByName(pokemonName){
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName + "/")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
      let pokemon_stats=document.getElementsByClassName("pokemon-stat");
      document.getElementById("pokemon-image").src=body.sprites.other["official-artwork"].front_default;
      document.getElementById("pokemon-name").innerHTML=body.name.charAt(0).toUpperCase() + body.name.slice(1);
      document.getElementById("pokemon-height").innerHTML=body.height;
      document.getElementById("pokemon-weight").innerHTML=body.weight;
      document.getElementById("pokemon-ability").innerHTML=" " + body.abilities[0].ability.name.charAt(0).toUpperCase()
       + body.abilities[0].ability.name.slice(1);
      
      if(body.abilities.length > 1) {
        document.getElementById("pokemon-ability-hidden").innerHTML=" " + body.abilities[1].ability.name.charAt(0).toUpperCase()
        + body.abilities[1].ability.name.slice(1);
      }else{
        document.getElementById("pokemon-ability-hidden").innerHTML="None";
      }
      for(let i = 0; i < body.stats.length; i++){
        pokemon_stats[i].innerHTML=body.stats[i].base_stat;
      }

      let type=body.types[0].type.name
      document.getElementById("pokemon-card-type").innerHTML=type.toUpperCase();
      changeToType(type)
    });
}

document.getElementById("pokemon-list").addEventListener("change", () =>{
  getPokemonByName(document.getElementById("pokemon-list").value)
});

getPokemonByName(document.getElementById("pokemon-list").value)
/*
  estilos de css
  ajustamento de texto
  fazer caixa do do type de pokemon e o background
  fazer caixa dos stats
*/