 export const exerciseOptions =(api) => {
    return{
  method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': api,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }
  };





  export const blogOptions = (searchQuery,api) => {
    return {
      method: 'GET',
      url: 'https://g-search.p.rapidapi.com/search',
      params: {
        q: searchQuery
      },
      headers: {
        'x-rapidapi-key': api,
        'x-rapidapi-host': 'g-search.p.rapidapi.com'
      }
    };
  };
  



  

export const youtubeOptions = (query,api) => {
  return {
  method: 'GET',
  url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  params: {q: query},
  headers: {
    'X-RapidAPI-Key': api,
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
}
};

  