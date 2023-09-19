const languageContent = {
    en: {
        home: "Home",
        material: "Material",
        reference: "Reference",
        quarry: "Quarry",
        contact: "Contact Us"
    },
    sl: {
        home: "Domov",
        material: "Material",
        reference: "Reference",
        quarry: "Kamnolom",
        contact: "Kontaktiraj nas"
    },
    gr: {
        home: "Startseite",
        material: "Material",
        reference: "Referenz",
        quarry: "Steinbruch",
        contact: "Kontaktiere uns"
    }
};

function updateLanguage(lang) {
    const content = languageContent[lang];
    const links = document.querySelectorAll('.header .donji .desno a');
    
    links[0].textContent = content.home;
    links[1].textContent = content.material;
    links[2].textContent = content.reference;
    links[3].textContent = content.quarry;
    links[4].textContent = content.contact;
}

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', () => {
    const selectedLang = languageSelect.value;
    updateLanguage(selectedLang);
});

updateLanguage('en');