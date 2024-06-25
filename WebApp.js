const apiKey =
  "live_K0NdRxjMUXhebZ7elkqoNCVcvqAd2lJ1zuJu12rvmVZJxKQPRe0iXM0LUqZk74qL";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchbutton");
const resultsContainer = document.getElementById("results");

async function getCats(breed) {
  const catApiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=${apiKey}`;
  try {
    const fetchData = await fetch(catApiUrl);
    const jsonData = await fetchData.json();

   
    resultsContainer.innerHTML = "";

    if (jsonData.length > 0) {
      jsonData.forEach((cat) => {
        const catCard = createCatCard(cat);
        resultsContainer.appendChild(catCard);
      });
    } else {
      let message = document.createElement("h1");
      message.textContent = "Cat breed not found";
      resultsContainer.appendChild(message);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function createCatCard(cat) {
  let div = document.createElement("div");
  div.classList.add("catCard");

  let img = document.createElement("img");
  img.src = cat.url;
  img.alt = "Cat Image";
  div.appendChild(img);

  return div;
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let breed = searchInput.value.trim().toLowerCase();
  if (breed !== "") {
    getCats(breed);
  } else {
    resultsContainer.innerHTML = "";

    let message = document.createElement("h1");
    message.textContent = "Enter a cat breed to search.";
    resultsContainer.appendChild(message);
  }
});
