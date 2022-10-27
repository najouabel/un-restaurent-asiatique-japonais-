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

var livreur = document.querySelector(".livreur");
var platName = document.querySelector(".plat-name");
var platPrix = document.querySelector(".plat-prix");
var platBtn = document.querySelectorAll(".plat-btn");
var tmp=1;
var p ;
platBtn.forEach(btn => {
    btn.onclick = () => {
        livreur.innerHTML = `<p> ${tmp}  - ${platName.innerText}   -  ${tmp*platPrix.innerText} Dhs </p>`;
        tmp+=1;
       /* livreur.ELEMENT_NODE.forEach(elmenet =>{
            p += elmenet;
        });
        console.log(p);*/
    };
});