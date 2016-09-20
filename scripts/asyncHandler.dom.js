(function (handler, boom) {
    var asyncButton = document.getElementById('async');

    if (asyncButton) {
        asyncButton.addEventListener('click', function () {
            handler(boom);
        });
    }
}(asyncHandler, error));
