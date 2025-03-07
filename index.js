let grid = document.getElementById('grid');
let numImages = 6;        // TODO: for Suzie: adjust this as you add more images

for (let i = 1; i <= numImages; i++) {
    let img = document.createElement('img');
    img.src = `/gallery_images/img${i}.jpg`;
    img.id = `img${i}`;
    grid.appendChild(img);
}
