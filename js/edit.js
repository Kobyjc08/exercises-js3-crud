const title = document.getElementById("title");
const href = document.getElementById("href");
const submitButon = document.getElementById("submit");
let object = function(title, href) {
    this.title = title;
    this.href = href;
}

function SubmitValidation() {
    if (title.innerText.length === 0 && href.innerText.length === 0) {
        alert("The Title and href must not be empty")
    } else {
        //add the object//
    }

}
submitButon.addEventListener("click", SubmitValidation);