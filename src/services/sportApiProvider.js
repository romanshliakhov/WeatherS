const baseUrl = 'https://weatherapi-com.p.rapidapi.com/';
const commonHeaders = {
  'X-RapidAPI-Key': '1501fcfbbemsh8ffa29cf4634d92p186d76jsn3ce87c2db154',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
};

const performRequest = async ({ method, path }) => {
  const response = await fetch(baseUrl + path, { headers: commonHeaders, method });
  console.log('response: ', response);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return await response.json();
};

export const getSportsSchedule = async () => await performRequest(
  {
    method: 'GET',
    path: 'sports.json?q=London',
  },
);
