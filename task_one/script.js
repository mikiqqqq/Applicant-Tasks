const button = document.getElementById('button');
const text = document.getElementById('paragraph-two');

button.addEventListener('click', event => {
    toggleText();
    button.style.display = "none";
});

function toggleText() {
  text.classList.toggle("hidden");
  text.classList.toggle("visible");
}
