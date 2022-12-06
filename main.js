$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const tarefa = $('#acrecenta-Tarefa').val();
        const listaDeTarefa = $('#Lista-Tarefa');
        const novaTarefa = $(`<li>${tarefa}</li>`);

        $(novaTarefa).appendTo(listaDeTarefa);
        $('#acrecenta-Tarefa').val('');

        $(novaTarefa).click(function () {
            $(this).toggleClass('risca');
        });
    });
});
