function clicarNoInput() {
    const senha = document.getElementById('senha');
    const icon1 = document.getElementById('olho');
    const icon2 = document.getElementById('olhoFechado');
    if (senha.type === 'password') {
        senha.type = 'text';
        icon1.style.display = 'none';
        icon2.style.display = 'inline';
    } else {
        senha.type = 'password';
        icon1.style.display = 'inline';
        icon2.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('senha').addEventListener('click', clicarNoInput);
});
//requisição http
var xhr = new XMLHttpRequest();
// Configura a requisição: método, URL e se a requisição deve ser assíncrona
xhr.open('GET', 'https://api.exemplo.com/dados', true);
// Define uma função que será chamada quando a requisição mudar de estado
xhr.onreadystatechange = function() {
    // Verifica se a requisição foi concluída e se o status é OK (200)
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log('Resposta:', xhr.responseText);
        } else {
            console.error('Erro:', xhr.status, xhr.statusText);
        }
    }
};
// Envia a requisição
xhr.send();