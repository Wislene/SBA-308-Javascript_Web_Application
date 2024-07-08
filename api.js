const apiKey =
  "live_K0NdRxjMUXhebZ7elkqoNCVcvqAd2lJ1zuJu12rvmVZJxKQPRe0iXM0LUqZk74qL";
const apiUrl = "https://api.thecatapi.com/v1";

export async function fetchCatBreeds() {
  const response = await fetch(`${apiUrl}/breeds`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchCatsByBreed(breedId) {
  const response = await fetch(
    `${apiUrl}/images/search?limit=10&breed_ids=${breedId}&api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
