/* window.onload = function() {
    const burger = document.querySelector('#burgerid');
    burger.style.position = 'absolute';
    burger.style.marginTop = '10px';
    burger.style.marginRight = '10px';
}
*/

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


document.querySelectorAll('.li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.li').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        loadSection(section);
    });
});

// Fonction pour charger une section HTML/CSS/JS dynamiquement
async function loadSection(section) {
    const content = document.getElementById('content');

    // Charger le fichier HTML de la section
    const response = await fetch(`./sections/${section}/${section}.html`);
    const html = await response.text();
    content.innerHTML = html;

    // Charger le CSS de la section
    const existingStyle = document.querySelector(`#style-${section}`);
    if (!existingStyle) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `./sections/${section}/${section}.css`;
        link.id = `style-${section}`;
        document.head.appendChild(link);
    }

    // Charger le JS de la section
    const script = document.createElement('script');
    script.src = `./sections/${section}/${section}.js`;
    script.type = 'module';
    document.body.appendChild(script);

}