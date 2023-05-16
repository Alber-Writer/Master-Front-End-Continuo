import axios from "axios";

const getCharacterPage = (page = 1) => {
  return axios
    .get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getCharacter = (id) => axios
  .get("https://rickandmortyapi.com/api/character/" + id)
  .then(response => response.data)
  .catch(error => console.log(error))


const getEpisodesList = (range = "") => {
  return axios
    .get(`https://rickandmortyapi.com/api/episode/?page=${range}`)
    // .get(`https://rickandmortyapi.com/api/episode/${range}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}
const getSeasonEpisodes = (season = "01") => {
  // console.log(range);
  return axios
    .get(`https://rickandmortyapi.com/api/episode/?episode=s${season}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

const getEpisode = (id) => axios
  .get("https://rickandmortyapi.com/api/episode/" + id)
  .then(response => response.data)
  .catch(error => console.log(error))


export { getCharacter, getEpisodesList, getEpisode, getCharacterPage, getSeasonEpisodes }
