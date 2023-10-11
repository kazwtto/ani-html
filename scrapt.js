// Função para extrair dados do site externo
function extrairDados() {
    fetch('https://animefire.vip/animes/watashi-no-shiawase-na-kekkon-todos-os-episodios')
    .then(response => response.text())
    .then(html => {
        var temp = document.createElement('div');
        temp.innerHTML = html;
        
        var name_jp = temp.querySelector(".quicksand400 mt-2 mb-0").innerText;
        
    

        console.log(name_jp)
    })
    .catch(error => console.error('Erro:', error));
}

extrairDados()