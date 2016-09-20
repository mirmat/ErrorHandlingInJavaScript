(function (handler, boom) {
    var badButton = document.getElementById('bad');

    if (badButton) {
        badButton.addEventListener('click', function () {
            handler(boom);
            console.log('Imagine, getting promoted for hiding mistakes');
        });
    }
}(badHandler, error));
