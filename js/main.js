$("#katalog").click(function(){
    alert("Anastasija Jovanović 389/18");
})
$("#kontakt").click(function(){
    var userPreference;

if (confirm("Da li želite da nastavite?") == true) {
    userPreference = "Važi";
} else {
    userPreference = "Vidimo se";
}
})
