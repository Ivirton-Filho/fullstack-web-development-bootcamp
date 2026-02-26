nomes = ["Ivirton", "Biel", "Bia", "Nanda"]

prompt = window.prompt("Digite o nome: ")

verificador = nomes.includes(prompt)

if (verificador == true){
    window.alert("Bem vindo")
}else{
    window.alert("Tente novamente mais tarde!")
}