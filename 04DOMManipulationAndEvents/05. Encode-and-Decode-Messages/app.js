function encodeAndDecodeMessages() {

    const [encodeBtn, decodeBtn] = Array.from(
        document.querySelectorAll("#main button")
    );

    const textContainers = Array.from(document.querySelectorAll("main textarea"));

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    function transform(text, cb) {
        return text.split('').map(cb).join('');
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function encodeAndSend() {
        textContainers[1].value = transform(textContainers[0].value, nextChar);
        textContainers[0].value = '';
    }

    function decodeAndRead() {
        textContainers[1].value = transform(textContainers[1].value, prevChar);
    }
}