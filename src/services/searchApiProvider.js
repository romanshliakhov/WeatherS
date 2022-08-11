const baseUrl = 'https://weatherapi-com.p.rapidapi.com/';
const headers = {
  'X-RapidAPI-Key': '1501fcfbbemsh8ffa29cf4634d92p186d76jsn3ce87c2db154',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
};

const performRequest = async ({ method, path }) => {
  const response = await fetch(baseUrl + path, { headers, method });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return await response.json();
};

// export const getSearchValue = async (value) => {
//     return await performRequest(
//         {
//         method: 'GET',
//         path:'search.json' + value,
//         }
//     );
// }
