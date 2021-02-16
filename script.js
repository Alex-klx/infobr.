window.setTimeout(carServ,0)
function carServ(){
carrArray = [
    '<li>Formatação de computadores em geral...</li>',
    '<li>Limpeza preventiva e corretiva</li>',
    '<li>Recuperação de carcaça em notebooks</li>',
    '<li>Visitas técnicas</li>',
    '<li>Suporte Remoto</li>',
    '<li>Detecção de problemas em computadores</li>',
    '<li>Remoção de vírus</li>',
    '<li>Instalação de programas</li>',
    '<li>Crack de programas</li>',
    '<li>Melhoramento de rede Wi-Fi</li>',
    '<li>Configuração de Redes de internet</li>',
    '<li>Recuperação de dados perdidos em prendrives e Hd’s</li>',
    '<li>Criação de cartões de visitas clicáveis</li>',
    '<li>Criação de banners web</li>',
    '<li>Administração conta instagram</li>',
    '<li>Criação de posts e engajamento no instagram</li>',
    '<li>Criação de logos</li>',
    '<li>Upgrades desempenho, notebooks e computadores</li>',
]
carrArray.sort()
baseUl = document.getElementById('insUl')
baseUl.innerHTML=carrArray
}