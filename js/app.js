
// global "var" num 
// 'let" ja vem com valor 

//base de dados
function dados() {
    //Array (vetor)
    //let ds = ["laranja","maça","banana","abacaxi"]
    //JSON = JavaScript Object Notation
     let ds = [
        
     ]

    console.log(ds[0])
}


//função para logar
function logon() {
    //criação de variavel e query para pegar da caixinnha no index
    let lg = document.querySelector("#login").value
    let ps = document.querySelector("#pass").value

    //criação da variavel da senha certa e do login certo
    let loginpadrao = "fatec"
    let senhapadrao = "fatec217"

    //então se a variavel lg for igual a loginpadrao (e) ps for igual a semhapadrao aparece o alert e o console
    //se não, aparece o outro alert e o console
    if (lg == loginpadrao && ps == senhapadrao) {
        alert("logado!" + "\n Seu usuário é " + lg + "\n sua senha é: " +ps)
        console.log("logado!")
    } else {
        alert("não encontrado!")
        console.log("não encontrado!")
    }
        
}









// função simples
function hello() {
    console.log("Olá poderoso JS!")
    alert("Olá poderoso JS!")
}

//soma
function soma() {
   
   //promoção/conversão
   let num1 = parseFloat(document.querySelector("#login").value)
   let num2 = parseFloat(document.querySelector("#pass").value)

   // const bom para senhas pois n pode mudar o valor 
   const soma = num1 + num2

   console.log("a soma é: " + soma)
   alert("a soma é: " + soma)
}
  // alert(lg)
   //onsole.log(lg)