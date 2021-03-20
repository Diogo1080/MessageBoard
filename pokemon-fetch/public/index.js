function changeToType(type){
	document.getElementById("pokemon-card").classList="pokemon-card " + type;
  document.getElementsByClassName("select-selected")[0].classList="select-selected "+type;
  document.getElementsByClassName("select-items")[0].classList="select-items " + type ;
}

function getPokemonByName(pokemonName){
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName + "/")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      //Put info of pokemon on card
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
      //Handle type for background and small black box
      let type=body.types[0].type.name
      document.getElementById("pokemon-card-type").innerHTML=type.toUpperCase();
      changeToType(type)
    });
}


getPokemonByName(document.getElementById("pokemon-list").value)

function closeAllSelect(element) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let arrNo = [];
  let selectItems = document.getElementsByClassName("select-items");
  let selectedOption = document.getElementsByClassName("select-selected");
  
  for (let i = 0; i < selectedOption.length; i++) {
    if (element == selectedOption[i]) {
      arrNo.push(i)
    } else {
      selectedOption[i].classList.remove("select-arrow-active");
    }
  }
  for (let i = 0; i < selectItems.length; i++) {
    if (arrNo.indexOf(i)) {
      document.querySelector('#select_selecter').style.height = 0;
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//open drop down and togle arrow
function openDropDown(evt,element){
  evt.stopPropagation();
  closeAllSelect(element);
  element.classList.toggle("select-arrow-active");
  if(element.classList.contains("select-arrow-active")){
    document.querySelector('#select_selecter').style.height = document.querySelectorAll("#pokemon-list option").length * document.querySelector('#select_selecter div').offsetHeight;
  }else{
    document.querySelector('#select_selecter').style.height = 0;
  }
}


//auto assign of click event when chosing option
function setEventHandlersForOptions(optionsElement){
  let options = optionsElement.getElementsByTagName("*");

  for (let option of options) {
    option.addEventListener("click", function(e) {
      //get parent elements for value changing
      let selectElement = option.parentNode.parentNode.getElementsByTagName("select")[0];
      let selectedOption = optionsElement.previousElementSibling;
      
      //check which element was clicked and update original select
      for (i = 0; i < selectElement.length; i++) {
        if (selectElement.options[i].innerHTML == option.innerHTML) {
          selectElement.selectedIndex = i;
          selectedOption.innerHTML = option.innerHTML;

          let lastSelectedDiv = option.parentNode.getElementsByClassName("same-as-selected")[0];
          lastSelectedDiv.removeAttribute("class");
          
          option.setAttribute("class", "same-as-selected");
          break;
        }
      }
      //make request to Poke API so that the information goes on card
      getPokemonByName(document.getElementById("pokemon-list").value);
      selectedOption.click();
    });
  };
};

setEventHandlersForOptions(document.getElementById("select_selecter"))
