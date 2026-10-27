//Funció per alternar la visibilitat de les pestanyes
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}