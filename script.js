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

// [Usuari 3] Funció per modificar directament els estils CSS en línia
function canviarEstil() {
    // Accedim a l'element pel seu identificador
    const element = document.getElementById("text-estil");
    // Modifiquem les propietats CSS mitjançant l'objecte style
    element.style.color = "#ffffff";
    element.style.backgroundColor = "#e53e3e";
    element.style.borderRadius = "4px";
}

// [Usuari 1] Hotfix: Millora en la funció per admetre etiquetes HTML i confirmació visual
function canviarText() {
    const element = document.getElementById("paragraf-canviant");
    // Millora amb format HTML ric
    element.innerHTML =
        "<strong>Text millorat (v1.0.1):</strong> Contingut actualitzat amb etiquetes <em>HTML</em> i estil dinàmic.";
    element.style.borderLeft = "4px solid #38a169";
    element.style.paddingLeft = "8px";
}
