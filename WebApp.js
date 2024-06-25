const url = 'https://imdb146.p.rapidapi.com/v1/name/?id=nm0000093';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '36b9f0b38dmshcf023b0d585d4cep177cf7jsn7999f672937a',
		'x-rapidapi-host': 'imdb146.p.rapidapi.com'
	}
};
async function 
try {
	const response = await fetch(url, options);

	const result = await response.json();
	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

list.map((item) => {
  const name = item.l;
  const movie =  '<li><ing src ="${poster}"> <h2>${name}</h2></li>
  document.querySelector('.searchresults').innerHTMl +=
})

const form = document.querySelector('form');
const search-results = document.querySelector("search-results")

form.addEventListener('submit,(e) => {
  event.preventDefault();
  let query = form.querySelector('input').value;
  console.log(query);
})
catch (error) {
  	console.error(error);
  }
