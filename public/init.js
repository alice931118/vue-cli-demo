var _LoadingHtml = `<div class="rect1"></div>
<div class="rect2"></div>
<div class="rect3"></div>
<div class="rect4"></div>
<div class="rect5"></div>`

document.getElementById('spinner').innerHTML = _LoadingHtml;


document.onreadystatechange = completeLoading;

function completeLoading() {
    if (document.readyState == "complete") {
        document.body.removeChild(document.getElementById('spinner'))
    }
}