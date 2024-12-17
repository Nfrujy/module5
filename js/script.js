(function (global) {
    var dc = {};


    var categories = ["L", "D", "SP", "S", "A", "VG"];


    function getRandomCategory() {
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }


    document.addEventListener("DOMContentLoaded", function (event) {
        var specialsTile = document.querySelector("a[href='#']");
        if (specialsTile) {
            specialsTile.setAttribute("onclick", "$dc.loadMenuItems('" + getRandomCategory() + "');");
        }
    });


    global.$dc = dc;

})(window);
