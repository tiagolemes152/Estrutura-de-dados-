function atualizarUltimoAtendimento(){
    const ultimo = localStorage.getItem('ultimoAtendido');
    document.getElementById('textoUltimo').textContent = ultimo;
    

}
  setInterval(atualizarUltimoAtendimento, 1000);