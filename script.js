const images = [
    'https://staticg.sportskeeda.com/editor/2023/09/7b49a-16935438486732-1920.jpg?w=840',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQka3o7T8HMui7wTpqlFy5N7TJw4qXeLmN2Yw&usqp=CAU',
    'https://imageio.forbes.com/specials-images/imageserve/6205bb6753b3a0eb82ad246b/BTS-s-Digital-Single--Butter--Release-Press-Conference/0x0.jpg?format=jpg&crop=1942,1457,x0,y62,safe&width=960',
    'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/05/05/81959f5c-815d-4fc5-a175-49c7e7f38993_7c621477.jpg?itok=3u6pSDR9&v=1683263610',
    'https://www.hindustantimes.com/ht-img/img/2023/11/09/550x309/bts_1699494149328_1699494150199.jpg',
    'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/10/12093234/2023-mtv-emas-jungkook-bts-performance.jpg',
    'https://www.allkpop.com/upload/2023/10/content/030652/1696330377-20231003-jungkook.jpg',
    'https://6.soompi.io/wp-content/uploads/image/20231018175039_Jungkook-10.jpg?s=900x600&e=t',
    'https://people.com/thmb/h9tyGwEDnFu9ki9sROwWhfBR1F4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(700x154:702x156)/jungkook-072423-36e39f05176c4a0e97c81bd9b88b9aef.jpg'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Set a new image on page load
document.addEventListener('DOMContentLoaded', function () {
    const jungkookImage = document.getElementById('jungkookImage');
    jungkookImage.src = getRandomImage();
});
