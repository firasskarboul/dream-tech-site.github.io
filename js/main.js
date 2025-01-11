const stores = [
    {
        name: "Dream Tech Mégrine",
        maps: "https://maps.app.goo.gl/JGNmKBPkQLgh2yRt6",
        facebook: "https://www.facebook.com/dreamtechtn",
        facebookName: "Dream Tech",
        instagram: "https://www.instagram.com/dreamtechtn/",
        instagramName: "@dreamtechtn",
        tiktok: null,
        tiktokName: null,
        address: "16 Rue Ahmed Tlili, Mégrine Jawhra",
        phone: "+216 55 00 55 04",
        backgroundImage: "megrine-background.jpg"
    },
    {
        name: "Dream Tech Hammam Lif",
        maps: "https://maps.app.goo.gl/TGb4hM4jzexQmeHq7",
        facebook: "https://facebook.com/storeB",
        facebookName: "Dream Tech",
        instagram: "https://instagram.com/storeB",
        instagramName: "@dreamtechtn",
        tiktok: "https://tiktok.com/@storeB",
        tiktokName: "Dream Tech HLIF",
        address: "Avenue 20 Mars, Hammam-Lif",
        phone: "+216 28 03 21 22",
        backgroundImage: "megrine-background.jpg"
    },
    {
        name: "Dream Tech Mutuelle Ville",
        maps: "https://maps.app.goo.gl/ZTFpvSnF77JryYPm9",
        facebook: "https://www.facebook.com/dreamtech.mv",
        facebookName: "Dreamtech Mutu",
        instagram: "https://www.instagram.com/dreamtech.mv/",
        instagramName: "@dreamtech.mv",
        tiktok: null,
        tiktokName: null,
        address: "30 Rue Harroun Errachid, Mutuelle Ville",
        phone: "+216 22 03 10 31",
        backgroundImage: "megrine-background.jpg"
    }
];

const cardsContainer = document.getElementById("store-cards");

function makeCall(phoneNumber) {
    const sanitizedPhone = phoneNumber.replace(/[^+\d]/g, '');
    window.open = `tel:${sanitizedPhone}`;
}

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
    <h3>Social Media</h3
    <div class="social-media">
        <div class="clickable-card" onclick="window.open('${store.facebook}', '_blank');">
            <img src="imgs/social-media/fb.png" class="button-icon"/>
            <p class="button-text">${store.facebookName}</p>
        </div>
        <div class="clickable-card" onclick="window.open('${store.instagram}', '_blank');">
            <img src="imgs/social-media/ig.png" class="button-icon"/>
            <p class="button-text">${store.instagramName}</p>
        </div>
        ${store.tiktok ? `<div class="clickable-card" onclick="window.open('${store.tiktok}', '_blank');">
            <img src="imgs/social-media/tiktok.png" class="button-icon"/>
            <p class="button-text">${store.tiktokName}</p>
            </div>` : ""}
    </div>
    <h3>Reach us</h3>
    <div class="contact">
        <div class="clickable-card" onclick="window.open('${store.maps}', '_blank');">
            <img src="imgs/social-media/google-maps.png" class="button-icon"/>
            <p class="button-text">${store.address}</p>
        </div>
        <div class="clickable-card" onclick="makeCall('${store.phone}')">
            <img src="imgs/social-media/google-maps.png" class="button-icon"/>
            <p class="button-text">${store.phone}</p>
        </div>
    </div>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner);

    cardsContainer.appendChild(card);
});
