//Funció per alternar la visibilitat de les pestanyes
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}

// [Usuari 2] Funció per modificar l'atribut 'src' d'una imatge
function canviarImatge() {
    // Obtenim l'element imatge
    const img = document.getElementById("imatge-demo");
    // Modifiquem l'atribut src directament per canviar la imatge mostrada
    img.src = "https://placehold.co/150x100/green/white?text=Verd";
    img.alt = "Quadre verd";
}
