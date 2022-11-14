var categorySect = document.querySelector("#menu");

document.getElementById("SOUPES").style.display="block";
document.getElementById("SUSHI & CO").style.display="block";
document.getElementById("YAKITORIS").style.display="block";
document.getElementById("SALADES").style.display="block";
categorySect.addEventListener("change",()=>{
    var value = categorySect.value;
    var text = categorySect.options[categorySect.selectedIndex].text;
    switch(text)
    {
        case "SOUPES":
            document.getElementById("SOUPES").style.display="block";
            document.getElementById("SUSHI & CO").style.display="none";
            document.getElementById("YAKITORIS").style.display="none";
            document.getElementById("SALADES").style.display="none";
            break;
        case "SUSHI & CO":
            document.getElementById("SOUPES").style.display="none";
            document.getElementById("SUSHI & CO").style.display="block";
            document.getElementById("YAKITORIS").style.display="none";
            document.getElementById("SALADES").style.display="none";
            break;
        case "YAKITORIS":
            document.getElementById("SOUPES").style.display="none";
            document.getElementById("SUSHI & CO").style.display="none";
            document.getElementById("YAKITORIS").style.display="block";
            document.getElementById("SALADES").style.display="none";
            break;
        case "SALADES":
            document.getElementById("SOUPES").style.display="none";
            document.getElementById("SUSHI & CO").style.display="none";
            document.getElementById("YAKITORIS").style.display="none";
            document.getElementById("SALADES").style.display="block";
            break;
    }



});

let cartItems = document.querySelector(".cart-items");
var platName = document.querySelector(".plat-name");
var platPrix = document.querySelector(".plat-prix");
var platBtn = document.querySelectorAll(".plat-btn");
var tmp=1;
let totaltotal = document.querySelector(".totaltotal");
var total=0;

let items = [];

function itemExist(id){
  for (let i = 0; i < items.length; i++) {
    if(items[i].id == id) return true;
  }

  return false;
}

function calculateTotal(){
  let total = 0;
  items.forEach(function(item){
    total = total + parseInt(item.prix)
  })

  return total;
}
function increeseQte(id){
  items.forEach(function(item){
    if(item.id==id){
      item.qte++;
      item.prix= item.initPrix*item.qte;
    }
  })
}

function decreeseQte(id){
  items.forEach(function(item,i){
    if(item.id==id){
      item.qte--;
      item.prix= item.initPrix*item.qte;
      if(item.qte == 0){
        items.splice(i,1);
      }
    }
  })
}

function updateCard(){
 
  totaltotal.textContent = calculateTotal();

  let itemsOutput = ``;
  
    items.forEach(item => {
      itemsOutput+= `
      <div class="cart-item">
        <div class="cart-item-name">
          <p>NOM de PLAT : ${item.name}</p>
        </div>
        <div class="cart-item-prix">
          <p>PRIX : ${item.prix}</p>
        </div>
        <div class="cart-item-quantite">
          <p>QUANTITE : ${item.qte}</p>
        </div>
    
        <div class="cart-item-btn">
          <button class="cart-item-btn-add" data-id="${item.id}">+</button>
          <button class="cart-item-btn-remove" data-id="${item.id}">-</button>
        </div>
      </div>
      `         
    });

    cartItems.innerHTML = itemsOutput;
   
    document.querySelectorAll('.cart-item-btn-add').forEach(addBtn=>{
      addBtn.addEventListener('click',(e)=>{
        increeseQte(addBtn.dataset.id);
        updateCard();
      });
    });

    document.querySelectorAll('.cart-item-btn-remove').forEach(removeBtn=>{
      removeBtn.addEventListener('click',(e)=>{
        decreeseQte(removeBtn.dataset.id);
        updateCard();
      });
    });
}

document.querySelectorAll('.plat-btn').forEach(btn=>{
  btn.addEventListener('click',(e)=>{

    if(!itemExist(btn.dataset.id)){
      let newItem = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        prix: btn.dataset.prix,
        initPrix: btn.dataset.prix,
        qte: 1
      };

      items.push(newItem);
    }else{
      increeseQte(btn.dataset.id);
    }

    updateCard();
  });
});
