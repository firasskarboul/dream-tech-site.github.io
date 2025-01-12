const cardsContainer = document.getElementById("store-cards");

stores.forEach(store => {
    const card = document.createElement("div");
    card.className = "card";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    cardFront.style.backgroundImage = `url(imgs/${store.backgroundImage})`;
    cardFront.innerHTML = `
    <h3>${store.name.replace("Dream Tech", "Dream Tech<br>")}</h3>
    <img src="imgs/touch.svg" alt="Click me" class="cursor-icon" />
  `;

    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.innerHTML = `
    <h2>${store.name}</h2>
    <h3>Social Media</h3>
    <div class="social-media">
        <a class="clickable-card" href="${store.facebook}" target="_blank">
            <img src="imgs/social-media/fb.png" class="button-icon"/>
            <p class="button-text">${store.facebookName}</p>
        </a>
        <a class="clickable-card" href="${store.instagram}" target="_blank">
            <img src="imgs/social-media/ig.png" class="button-icon"/>
            <p class="button-text">${store.instagramName}</p>
        </a>
        ${store.tiktok ? `<a class="clickable-card" href="${store.tiktok}" target="_blank">
            <img src="imgs/social-media/tiktok.png" class="button-icon"/>
            <p class="button-text">${store.tiktokName}</p>
            </a>` : `<a class="clickable-card" href="https://dream-tech.tn/" target="_blank">
            <img src="imgs/social-media/website.svg" class="button-icon"/>
            <p class="button-text">www.dream-tech.tn</p>
            </a>`}
    </div>
    <h3>Our Team</h3>
    <div class="team">
        ${store.team.map(member => `
            <div class="team-member">
                <img src="imgs/team/${member.photo}" alt="${member.fullName}" class="team-photo">
                <p class="team-name">${member.fullName.replace(" ", "<br>")}</p>
                <p class="team-role">${member.role}</p>
            </div>
        `).join("")}
    </div>
    <h3>Reach us</h3>
    <div class="contact">
        <a class="clickable-card" href="${store.maps}" target="_blank">
            <img src="imgs/social-media/google-maps.png" class="button-icon"/>
            <p class="button-text">${store.address}</p>
        </a>
        <a class="clickable-card" href="tel:${store.phone.replace(/[^+\d]/g, '')}" target="_self">
            <img src="imgs/social-media/phone.png" class="button-icon"/>
            <p class="button-text">${store.phone}</p>
        </a>
    </div>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner);

    cardsContainer.appendChild(card);
});
