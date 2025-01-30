/* window.onload = function() {
    const burger = document.querySelector('#burgerid');
    burger.style.position = 'absolute';
    burger.style.marginTop = '10px';
    burger.style.marginRight = '10px';
}
*/

function seconnecter(){
    console.log("test");
}

function toggleMenu() {
    const navbar = document.querySelector('.endnavbar');
    navbar.classList.toggle('active');

    const barhaut = document.querySelector('.haut');
    const barmilieu = document.querySelector('.milieu');
    const barbas = document.querySelector('.bas');

    if (navbar.classList.contains('active')) {
        barmilieu.style.opacity = "0"; // Cache la barre du milieu
        barhaut.style.transform = "translateY(8px) rotate(45deg)"; 
        barbas.style.transform = "translateY(-8px) rotate(-45deg)";
    } else {
        barmilieu.style.opacity = "1"; // Ré-affiche la barre du milieu
        barhaut.style.transform = "translateY(0) rotate(0)";
        barbas.style.transform = "translateY(0) rotate(0)";
    }
}
