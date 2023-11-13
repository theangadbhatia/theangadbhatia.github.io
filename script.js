const images = [
    'https://thebiaslistcom.files.wordpress.com/2023/07/jungkook-bts-seven-ft.-latto.jpg?w=610&h=425',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkpopping.com%2Fkpics%2F230122-BTS-Weverse-Update-Happy-Lunar-New-Year-2023-Jungkook&psig=AOvVaw2ehTkghBwzn_MQvkwf06Nb&ust=1699941782534000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiwj-OmwIIDFQAAAAAdAAAAABAI',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.straitstimes.com%2Flife%2Fentertainment%2Fbts-jungkook-goes-viral-after-showing-off-abs-in-promo-photos-for-upcoming-solo-single-seven&psig=AOvVaw2ehTkghBwzn_MQvkwf06Nb&ust=1699941782534000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiwj-OmwIIDFQAAAAAdAAAAABAP',
    // Add more image URLs as needed
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
