/*
This script adds all images from /gallery_images/ as children to Gallery's grid div.
Each image in this directory must be named following the convention: 'img#.jpg'.

To add a new image to the gallery:
    1. Add image to gallery_images
    2. Rename image to img#.jpg
    3. Increment variable (below) numImages by 1.
*/


let grid = document.getElementById('grid');
let numImages = 6;

for (let i = 1; i <= numImages; i++) {
    let img = document.createElement('img');
    img.src = `/gallery_images/img${i}.jpg`;
    img.id = `img${i}`;
    grid.appendChild(img);
}
