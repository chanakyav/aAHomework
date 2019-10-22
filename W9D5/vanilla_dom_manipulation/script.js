document.addEventListener("DOMContentLoaded", () => {
  
  // toggling restaurants
  const toggleLi = (e) => {
    const li = e.target;
    li.className = li.className === "visited" ? "" : "visited";
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {    
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items
  document.querySelector(".favorite-submit").addEventListener("click", (e) => {
    e.preventDefault();
    let ul = document.getElementById("sf-places");
    let li = document.createElement("li");
    li.innerText = document.querySelector(".favorite-input").value;
    ul.appendChild(li)
  });

  // toggle photo form
  document.querySelector(".photo-show-button").addEventListener("click", e => {
    e.preventDefault();
    let photoForm = document.querySelector(".photo-form-container")
    photoForm.className = photoForm.className.endsWith("hidden")
    ? photoForm.className.replace(" hidden", "")
    : photoForm.className.concat(" hidden");
  });
  
  // adding new photos
  document.querySelector(".photo-url-submit").addEventListener("click", (e) => {
    e.preventDefault();
    let ul = document.querySelector(".dog-photos");
    let img = document.createElement("img")
    img.src = document.querySelector(".photo-url-input").value;
    let li = document.createElement("li");
    ul.appendChild(li).appendChild(img);
  })

});
