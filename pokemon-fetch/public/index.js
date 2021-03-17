function changeToType(type){
	document.getElementById("pokemon-card").classList="pokemon-card " + type;
  document.getElementsByClassName("select-selected")[0].classList="select-selected "+type;
  document.getElementsByClassName("select-items")[0].classList="select-items select-hide " + type ;
}

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


getPokemonByName(document.getElementById("pokemon-list").value)

var x, i, j, l, ll, selElmnt, a, b, c;

/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        getPokemonByName(document.getElementById("pokemon-list").value)
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);