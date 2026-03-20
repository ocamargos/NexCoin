document.getElementById('cpf').addEventListener('input', function(e) {
    let cpf = e.target.value;

    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Adiciona o ponto e o hífen conforme o padrão do CPF
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
    }

    // Atualiza o valor do input com a formatação
    e.target.value = cpf;
});