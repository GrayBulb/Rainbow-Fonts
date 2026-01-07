(function() {
    if (window._rainbowFontsInjected) return;
    window._rainbowFontsInjected = true;

    let hue = 0;
    let interval = null;
    let active = true;

    const SPEED = 100;

    // Start rainbow effect immediately
    interval = setInterval(() => {
        document.querySelectorAll('body *').forEach(el => {
            if (el.tagName.toLowerCase() !== 'img') {
                el.style.color = `hsl(${hue}, 100%, 50%)`;
            }
        });
        hue = (hue + 5) % 360;
    }, SPEED);

    // Optional toggle function
    window.toggleRainbowFonts = function() {
        if (active) {
            clearInterval(interval);
            document.querySelectorAll('body *').forEach(el => {
                if (el.tagName.toLowerCase() !== 'img') el.style.color = '';
            });
            active = false;
        } else {
            active = true;
            interval = setInterval(() => {
                document.querySelectorAll('body *').forEach(el => {
                    if (el.tagName.toLowerCase() !== 'img') {
                        el.style.color = `hsl(${hue}, 100%, 50%)`;
                    }
                });
                hue = (hue + 5) % 360;
            }, SPEED);
        }
    };
})();
