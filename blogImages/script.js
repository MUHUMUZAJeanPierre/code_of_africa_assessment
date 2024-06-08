const galleryData = [
    {
        id: 1,
        name: "FENNEC FOX",
        location: "india",
        image: "./images/fox.jpeg",
    },
    {
        id: 2,
        name: "HUMPBACK WHALE",
        location: "South Africa",
        image: "./images/whale.jpeg",
    },
    {
        id: 3,
        name: "COMMON BROWN BABOON",
        location: "South Africa",
        image: "./images/baboon.jpeg",
    },
    {
        id: 4,
        name: "SPOTTED DEAR",
        location: "Amazon",
        image: "./images/deer.jpeg",
    },
];

const container = document.getElementById('box');

galleryData.forEach(ele => {
    const subBox = document.createElement('div');
    subBox.classList.add('subBox');
    subBox.style.backgroundImage = `url(${ele.image})`;

    const hoverOverlay = document.createElement('div');
    hoverOverlay.classList.add('hover-overlay');

    const smallInfo = document.createElement('div');
    smallInfo.classList.add('smallInfo');
    smallInfo.innerHTML = `
        <p class="name">${ele.name}</p>
        <p class="location">${ele.location}</p>
        <a href="">Know more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
    `;

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
        <div class="slideout">
            <p class="name">${ele.name}</p>
            <p class="location">${ele.location}</p>
        </div>
        <a href="">Know more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
    `;

    subBox.appendChild(hoverOverlay);
    subBox.appendChild(smallInfo);
    subBox.appendChild(info);

    container.appendChild(subBox);
});
