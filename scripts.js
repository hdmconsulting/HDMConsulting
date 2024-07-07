document.addEventListener('DOMContentLoaded', function() {
    let currentBannerIndex = 0;
    const banners = document.querySelectorAll('.banner');

    function showNextBanner() {
        banners[currentBannerIndex].style.display = 'none';
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        banners[currentBannerIndex].style.display = 'block';
    }

    setInterval(showNextBanner, 5000); // Change banner every 5 seconds
});
