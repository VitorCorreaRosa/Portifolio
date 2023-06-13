$(document).ready(function() {
    // Nome da tabela a ser retornada
    let tabela = "projetos";

    // Requisição AJAX para buscar os valores da tabela
    $.getJSON("https://vitorcorrearosa.000webhostapp.com/enviaInfo.php", { tabela: tabela })
        .done(function(data) {
            // Armazena o JSON retornado em uma variável
            var resultado = data;

            // Manipule os dados recebidos conforme necessário
            // Neste exemplo, estamos apenas exibindo os resultados no console
            console.log(resultado);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log("Erro na requisição AJAX: " + textStatus + " - " + errorThrown);
        });
});
