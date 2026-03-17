// --- Menu responsive (mobile toggle) ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo");

    // Exemple : clic sur le logo pour ouvrir/fermer le menu
    logo.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
// POUR ACCEUIL //
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU FORMULAIRE DE DON ---
    const donationBtn = document.querySelector('.btn-donation');
    const donationInputs = document.querySelectorAll('.don-form input');

    if (donationBtn) {
        donationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            let isValid = true;
            let amount = "";

            // Vérification simple si les champs sont remplis
            donationInputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = "red";
                    isValid = false;
                } else {
                    input.style.borderColor = "#ddd";
                    if (input.type === "number") amount = input.value;
                }
            });

            if (isValid) {
                alert(`Merci pour votre générosité ! Votre don de ${amount} CFA a été simulé avec succès.`);
                // Ici, vous pourriez normalement envoyer les données à un serveur
            } else {
                alert("Veuillez remplir tous les champs du formulaire de don.");
            }
        });
    }

    // --- 2. ANIMATION DES ARTICLES AU DÉFILEMENT (Scroll Reveal) ---
    const articles = document.querySelectorAll('.article-card');
    
    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        articles.forEach(article => {
            const articleTop = article.getBoundingClientRect().top;

            if (articleTop < triggerBottom) {
                article.style.opacity = "1";
                article.style.transform = "translateY(0)";
            }
        });
    };

    // Initialisation du style pour l'animation
    articles.forEach(article => {
        article.style.opacity = "0";
        article.style.transform = "translateY(20px)";
        article.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Vérification initiale au chargement

    // --- 3. EFFET DE NAVIGATION (Changement de couleur au scroll) ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "#ffffff";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";
        }
    });

    // --- 4. CONSEIL DU JOUR ALÉATOIRE (Optionnel) ---
    const tips = [
        "Déconnectez vos appareils au moins une heure avant de dormir.",
        "Privilégiez la lecture d'un livre papier le soir.",
        "Fixez-vous des zones 'sans écran' dans la maison.",
        "Prenez 10 minutes de méditation au lieu de consulter vos réseaux."
    ];
    
    const tipText = document.querySelector('.tip-card p');
    if (tipText) {
        // Change le conseil aléatoirement à chaque chargement
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipText.textContent = randomTip;
    }
});

// POUR ACTIVITES //
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU MENU MOBILE (BURGER) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Fermer le menu mobile lorsqu'on clique sur un lien
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

    // --- 2. INTERACTION SUR LE CALENDRIER ---
    const calendarCells = document.querySelectorAll('.calendrier td');
    
    calendarCells.forEach(cell => {
        // On vérifie si la cellule contient un événement
        if (cell.querySelector('.event-mark')) {
            cell.style.cursor = 'pointer';
            
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = '#f0f7ff';
                cell.style.transition = 'background 0.3s';
            });
            
            cell.addEventListener('mouseleave', () => {
                cell.style.backgroundColor = 'transparent';
            });

            cell.addEventListener('click', () => {
                const eventName = cell.querySelector('.event-mark').innerText;
                const day = cell.childNodes[0].textContent.trim();
                alert(`Événement : ${eventName}\nDate : ${day} Mars 2026\nLieu : École ESDD`);
            });
        }
    });

    // --- 3. ANIMATION D'APPARITION DES TABLEAUX (V-TABLE) ---
    const vTables = document.querySelectorAll('.v-table');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    vTables.forEach(table => {
        // Style initial pour l'animation
        table.style.opacity = '0';
        table.style.transform = 'translateY(30px)';
        table.style.transition = 'all 0.8s ease-out';
        observer.observe(table);
    });

    // --- 4. EFFET SUR LE HEADER AU SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
});

// POUR MEDIATHEQUE //
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DES LIKES (BOUTON CŒUR) ---
    const heartButtons = document.querySelectorAll('.btn-heart');

    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Basculer la classe pour le style (rouge si liké)
            this.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.style.color = '#e74c3c'; // Rouge
                this.style.fontWeight = 'bold';
                console.log("Réaction enregistrée");
            } else {
                icon.style.color = ''; // Retour au style original
                this.style.fontWeight = 'normal';
            }
        });
    });

    // --- 2. GESTION DES COMMENTAIRES ---
    const commentButtons = document.querySelectorAll('.btn-comment');

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const userComment = prompt("Laissez votre commentaire pour ESDD :");
            if (userComment && userComment.trim() !== "") {
                alert("Merci ! Votre commentaire a été soumis pour modération.");
            }
        });
    });

    // --- 3. LECTURE MÉDIA (SIMULATION) ---
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const mediaTitle = thumb.querySelector('img').alt;
            // Ici, vous pourriez ouvrir une "Lightbox" ou une vidéo réelle
            alert(`Ouverture du média : ${mediaTitle}\n(Simulation du lecteur vidéo ESDD)`);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    
    // Gestion du lecteur vidéo
    const playVideo = (id) => {
        const thumb = document.getElementById(`thumb-${id}`);
        const video = document.getElementById(`video-${id}`);
        const overlay = document.getElementById(`play-${id}`);

        if (video && thumb) {
            // Masquer l'image et l'icône Play
            thumb.style.display = 'none';
            overlay.style.display = 'none';
            
            // Afficher et lancer la vidéo
            video.style.display = 'block';
            video.play();
        }
    };

    // Ecouteur sur le conteneur de la miniature
    const videoContainer = document.getElementById('video-container-1');
    if (videoContainer) {
        videoContainer.addEventListener('click', () => {
            playVideo('1');
        });
    }
});

    // --- 4. NAVIGATION MOBILE (AUTO-FERMETURE) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.checked = false;
        });
    });

    // --- 5. EFFET AU SURVOL DES CARTES ---
    const mediaCards = document.querySelectorAll('.media-card');
    mediaCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
// POUR A PROPOS //
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. VALIDATION DU FORMULAIRE DE CONTACT ---
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Simulation d'envoi
                const btn = contactForm.querySelector('.btn-send');
                btn.textContent = "Envoi en cours...";
                btn.disabled = true;

                setTimeout(() => {
                    alert(`Merci ${name}, votre message a bien été envoyé à l'équipe ESDD !`);
                    contactForm.reset();
                    btn.textContent = "Envoyer";
                    btn.disabled = false;
                }, 1500);
            }
        });
    }

    // --- 2. INTERACTION DES DOCUMENTS OFFICIELS ---
    const docCards = document.querySelectorAll('.doc-card');
    const docPreview = document.querySelector('.doc-preview img');

    docCards.forEach(card => {
        card.style.cursor = "pointer";
        
        card.addEventListener('click', () => {
            const docName = card.querySelector('span').textContent;
            alert(`Ouverture du document : ${docName}`);
            // Ici, vous pourriez faire : window.open('chemin/vers/votre/pdf.pdf');
        });

        // Petit effet de survol pour changer la miniature (optionnel)
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = "rgba(0, 123, 255, 0.1)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = "";
        });
    });

    // --- 3. ANIMATION DE LA GRILLE DES MEMBRES ---
    const memberPhotos = document.querySelectorAll('.member-photo');
    
    memberPhotos.forEach((photo, index) => {
        photo.style.opacity = "0";
        photo.style.transform = "scale(0.8)";
        photo.style.transition = `all 0.4s ease ${index * 0.1}s`;

        // Animation quand la section est visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    photo.style.opacity = "1";
                    photo.style.transform = "scale(1)";
                }
            });
        });
        observer.observe(photo);
    });

    // --- 4. GESTION DU MENU BURGER (RAPPEL) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.checked) menuToggle.checked = false;
        });
    });
});
