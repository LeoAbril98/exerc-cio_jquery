$(document).ready(function () {
    // Adiciona tarefa ao enviar o formulário
    $("#taskForm").submit(function (event) {
        event.preventDefault();
        var taskName = $("#taskInput").val();
        if (taskName !== "") {
            var listItem = $("<li>").text(taskName);
            var deleteButton = $("<button>").addClass("delete-button").text("Remover");
            listItem.append(deleteButton);
            $("#taskList").append(listItem);
            $("#taskInput").val("");
        }
    });

    // Marca/desmarca tarefa como concluída
    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // Remove tarefa ao clicar no botão "Remover"
    $("#taskList").on("click", ".delete-button", function (event) {
        event.stopPropagation(); // Evita que o clique se propague para o item da lista
        $(this).closest("li").remove();
    });
});
