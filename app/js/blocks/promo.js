(() => {
    const $images = document.querySelectorAll('.promo__media');
    let counter = 0;

    setInterval(() => {
        counter = counter === $images.length - 1 ? 0 : counter + 1;

        $images.forEach(image => image.classList.remove('promo__media_active'));
        $images[counter].classList.add('promo__media_active');
    }, 3000)
})();
