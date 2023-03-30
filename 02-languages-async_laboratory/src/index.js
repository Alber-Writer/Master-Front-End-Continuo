import "./styles.css";
import { getCharactersList, getCharacter, getEpisodesList, getEpisode } from "./data-business";
import { createCharacterRow, showCharacter } from "./utils.js";
import { createEpisodeRow, showEpisode } from "./episodeUtils.js";

const rootDiv = document.getElementById("root");



const loadCharacters = () => {
  getCharactersList()
    .then(collection => {
      rootDiv.innerHTML = "";
      rootDiv.insertAdjacentHTML("beforeend", "<h2>Characters</h2>")
      collection.forEach(element => {
        const characterRow = createCharacterRow(element);
        characterRow.addEventListener("mousedown", () =>
          getCharacter(element.id)
            .then((result) => showCharacter(result)))
        rootDiv.insertAdjacentElement("beforeEnd", characterRow);
      })
    }).catch(err => console.log(`Can't access data: ${err}`));
}

const loadEpisodes = () => {
  getEpisodesList()
    .then(collection => {
      rootDiv.innerHTML = "";
      rootDiv.insertAdjacentHTML("beforeend", "<h2>Episodes Season 1</h2>")
      collection.forEach(element => {
        const episodeRow = createEpisodeRow(element);
        episodeRow.addEventListener("mousedown", () =>
          getEpisode(element.id)
            .then((result) => showEpisode(result)))
        rootDiv.insertAdjacentElement("beforeEnd", episodeRow);
      })
    }).catch(err => console.log(`Can't access data: ${err}`));
}

document.querySelector("[data-action=characters]").addEventListener("mousedown", loadCharacters)
document.querySelector("[data-action=episodes]").addEventListener("mousedown", loadEpisodes)

loadEpisodes()