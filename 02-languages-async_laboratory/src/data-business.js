import axios from "axios";

const getCharactersList = () => axios
  .get("https://rickandmortyapi.com/api/character")
  .then(response => response.data.results)
  .catch(error => console.log(error))
  
  const getCharacter = (id) => axios
  .get("https://rickandmortyapi.com/api/character/" + id)
  .then(response => response.data)
  .catch(error => console.log(error))
  
  const getEpisodesList = () => axios
    .get("https://rickandmortyapi.com/api/episode")
    .then(response => response.data.results)
    .catch(error => console.log(error))

    const getEpisode = (id) => axios
    .get("https://rickandmortyapi.com/api/episode/" + id)
    .then(response => response.data)
    .catch(error => console.log(error))


export { getCharactersList, getCharacter, getEpisodesList, getEpisode }