(function (handler, boom) {
    var uglyButton = document.getElementById('ugly');

    if (uglyButton) {
        uglyButton.addEventListener('click', function () {
            handler(boom);
        });
    }
}(uglyHandler, error));
