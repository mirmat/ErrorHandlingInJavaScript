(function (boom) {
    var properButton = document.getElementById('proper');

    if (properButton) {
        properButton.addEventListener('click', function () {
            boom();
        });
    }
}(error));
