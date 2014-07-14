(function (document, window) {
    if (!/yelotv.be\/tv/.test(window.location.href.toLowerCase())) return false;

    var container = document.querySelector('#me_silverlight_0_container'),
        position = container.style.position,
        fs = (position === 'fixed');

    container.style.position = (fs) ? 'relative' : 'fixed';
    container.style.top = (fs) ? 'initial' : 0;
    document.querySelector('#page>header').style.zIndex = (fs) ? 50 : 0;
    document.querySelector('html').style.overflowY = (fs) ? 'visible' : 'hidden';
})(document, window);