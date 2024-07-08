import { fetchCatBreeds, fetchCatsByBreed } from "api.js";
import { displayResults, displayError } from "results.js";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const breed = searchInput.value.trim().toLowerCase();

  if (breed !== "") {
    try {
      const breeds = await fetchCatBreeds();
      const breedId = breeds.find((b) => b.name.toLowerCase() === breed)?.id;

      if (breedId) {
        const cats = await fetchCatsByBreed(breedId);
        displayResults(cats);
      } else {
        displayError("Cat breed not found. Try Again");
      }
    } catch (error) {
      displayError("Error fetching data. Please try again later.");
    }
  } else {
    displayError("Enter a cat breed to search.");
  }
});
