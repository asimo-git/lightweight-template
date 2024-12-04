import "./style.css";

const scrollButton = document.getElementById("scroll-button");

window.addEventListener("scroll", () => {
  if (scrollButton) {
    if (window.scrollY > 200) {
      scrollButton.classList.add("show-scroll-button");
    } else {
      scrollButton.classList.remove("show-scroll-button");
    }
  }
});

scrollButton &&
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

function onEntry(entry) {
  entry.forEach((change) => {
    console.log(change.target);
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let observer = new IntersectionObserver(onEntry, {
  threshold: [0.1],
  rootMargin: "100px",
});
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  console.log("obs", elm);
  observer.observe(elm);
}
