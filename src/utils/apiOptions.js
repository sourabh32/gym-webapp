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





  export const blogOptions = (searchQuery) => {
    return {
      method: 'GET',
      url: 'https://g-search.p.rapidapi.com/search',
      params: {
        q: searchQuery
      },
      headers: {
        'x-rapidapi-key': '4d19a9ab41msh58a1ed59668e8e6p1a2c6ajsnb665bac6d28f',
        'x-rapidapi-host': 'g-search.p.rapidapi.com'
      }
    };
  };
  



  

export const youtubeOptions = (query) => {
  return {
  method: 'GET',
  url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  params: {q: query},
  headers: {
    'X-RapidAPI-Key': '6f46eb57f6mshbc4e9bb2b8db7bbp1395a4jsn061c0d85af66',
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
}
};

  