/**
   * KirbyDance.js
   * Copyright (c) 2021 Andreas Nylin
   * @version 2.0
   * @license WTFPL
   */

function KirbyDance(element, mode = 'wrap', speed = 500) {
    const animation = "(>'.')>;<('.'<);^( '.' )^;v( '.' )v;<('.'<);(>'.')>;^( '.' )>;<( '.' )^;<( '.' )>;(>'.'<)".split(";");
    const animationLength = animation.length;
    const originalText = element.textContent;
    let index = Math.floor(Math.random() * animationLength);

    function dance() {
        const frame = animation[index];

        if (mode === "append") {
            element.innerText = `${originalText} ${frame}`;
        }
        else if (mode === "prepend") {
            element.innerText = `${frame} ${originalText}`;
        }
        else {
            element.innerText = `${frame} ${originalText} ${frame}`;
        }

        index++;

        if (index >= animationLength) {
            index = 0;
        }

        setTimeout(dance, speed);
    }

    dance();
}
