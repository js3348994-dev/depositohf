
  const caixa = document.getElementById("caixa" );
  const btn = document.getElementById("btn");
const btnSair = document.getElementById("btn-sair");

  btn.addEventListener("click", function () {
    if (caixa.style.display === "none") {
      caixa.style.display = "none";
      
      caixa.style.display = "flex";
    } else {
        caixa.style.display = "flex";
        
      
    }
    });
  btnSair.addEventListener("click", function () {
    if (caixa.style.display === "none") {
      caixa.style.display = "none";
      caixa.style.background = "lime";
      
    } else {
        caixa.style.display = "none";
        
      
    }
  });