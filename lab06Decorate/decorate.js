function biggerDecoration() {
    let decorateText = document.getElementById("decorate-text");
    let style = window.getComputedStyle(decorateText, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    decorateText.style.fontSize = (fontSize+2).toString() + 'pt';
    setInterval(biggerDecoration, 500)
}

function bling() {
    let decorateText = document.getElementById("decorate-text");
    if (document.getElementById('decorate-bling').checked) {
        decorateText.style.color = "green";
        decorateText.style.textDecoration = "underline"
        document.body.style.backgroundImage = "url('https://smuckersales.com/wp-content/uploads/2016/06/Body-Background-1.jpg')";
    } else {
        decorateText.style.color = "black";
        decorateText.style.textDecoration = "none"
        document.body.style.backgroundImage = "none";
    }
}