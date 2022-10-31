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

document.querySelectorAll(".plat-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let plat = e.target.parentElement.parentElement;
      let platName = plat.querySelector(".plat-name").textContent;
      let platPrix = plat.querySelector(".plat-prix").textContent;
      let tmp = 1;
      
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
    <div class="cart-item">
      <div class="cart-item-name">
        <p>NOM de PLAT : ${platName}</p>
      </div>
      <div class="cart-item-prix">
        <p>PRIX : ${platPrix}</p>
      </div>
      <div class="cart-item-quantite">
        <p>QUANTITE : ${tmp}</p>
      </div>
    
      <div class="cart-item-btn">
        <button class="cart-item-btn-add">+</button>
        <button class="cart-item-btn-remove">-</button>
      </div>
    </div>
  `;
        cartItems.appendChild(cartItem);

        cartItem
        .querySelector(".cart-item-btn-add")
        .addEventListener("click", () => {
        tmp++;
        cartItem.querySelector(".cart-item-quantite").innerHTML = `
        <p>QUANTITE : ${tmp}</p>
        `;
        let total= document.querySelector(".cart-item-prix");
        let totalPrix = parseInt(total.textContent);
        totalPrix += parseInt(platPrix);
        total.textContent = totalPrix;
      });
      cartItem
      .querySelector(".cart-item-btn-remove")
      .addEventListener("click", () => {
        tmp--;
        cartItem.querySelector(".cart-item-quantite").innerHTML = `
      
      </p>QUANTITE : ${tmp}</p>
        
    `;
        if (tmp == 0) {
          cartItem.remove();
        }
        let total = document.querySelector(".cart-item-prix");
        let totalPrix = parseInt(total.textContent);
        totalPrix -= parseInt(platPrix);
        total.textContent = totalPrix;
      });
    });
});