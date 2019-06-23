(() => {
    const $outsideItem = document.querySelector('.animate-promo__circle-item_outside');
    const $insideItem = document.querySelector('.animate-promo__circle-item_inside');
    const $logo = document.querySelector('.logo');

    const { x, y } = $logo.getBoundingClientRect();

    $outsideItem.setAttribute("cx",x + ($logo.clientWidth / 2));
    $outsideItem.setAttribute("cy",y + ($logo.clientHeight / 2));

    $insideItem.setAttribute("cx",x + ($logo.clientWidth / 2));
    $insideItem.setAttribute("cy",y + ($logo.clientHeight / 2));



})();
