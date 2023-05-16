import "./styles.css";
import { getCharacterPage, getCharacter, getEpisodesList, getEpisode, getSeasonEpisodes } from "./data-business";
import { createCharacterRow, showCharacter } from "./utils.js";
import { insertPagination } from "./utils-pagination.js";
import { createEpisodeRow, showEpisode, createSeasonsMenu } from "./episodeUtils.js";

const rootDiv = document.getElementById("root");

const loadCharacters = (pageNum) => {
  rootDiv.innerHTML = "";

  const container = document.createElement('div');
  container.id = "container";
  rootDiv.insertAdjacentElement("afterbegin", container);
  rootDiv.insertAdjacentHTML("afterbegin", "<h2>Characters</h2>");

  getCharacterPage(pageNum)
    .then(data => {
      container.innerHTML = "";
      //Callback handler: reLlama a mi padre con el param que te pasarán por otro lado
      const handlerLoadPageType = (numToGo) => loadCharacters(numToGo);
      const beginingPagination = insertPagination(data.info, handlerLoadPageType, container, "beforebegin")
      const endingPagination = insertPagination(data.info, handlerLoadPageType, container, "afterend")

      data.results.forEach(element => {
        const characterRow = createCharacterRow(element);
        characterRow.addEventListener("mousedown", () =>
          getCharacter(element.id)
            .then((result) => showCharacter(result)))
        container.insertAdjacentElement("beforeEnd", characterRow);
      })


    }).catch(err => console.log(`Can't access data: ${err}`));
}

const loadEpisodes = (pageNum) => {
  // getEpisodesList(fillRange(1, 11))
  rootDiv.innerHTML = "";
  const container = document.createElement('div');
  container.id = "container";
  rootDiv.insertAdjacentElement("afterbegin", container);
  rootDiv.insertAdjacentHTML("beforeend", "<h2>Episodes</h2>")

  getEpisodesList(pageNum)
    .then(data => {
      container.innerHTML = "";
      const handlerLoadPageType = (numToGo) => loadEpisodes(numToGo);
      const beginingPagination = insertPagination(data.info, handlerLoadPageType, container, "beforebegin")

      // const endingPagination = insertPagination(data.info, handlerLoadPageType, container, "afterend")
      // data.forEach(element => {
      data.results.forEach(element => {
        const episodeRow = createEpisodeRow(element);
        episodeRow.addEventListener("mousedown", () =>
          getEpisode(element.id)
            .then((result) => showEpisode(result)))
        rootDiv.insertAdjacentElement("beforeEnd", episodeRow);
      })
    }).catch(err => console.log(`Can't access data: ${err}`));
}

const loadSeasons = () => {
  rootDiv.innerHTML = "";
  const seasonEpisodes = document.createElement("div");
  seasonEpisodes.id = "seasonEpisodes";
  rootDiv.insertAdjacentElement("beforeend", seasonEpisodes);

  const insertSeasonEpisodes = (seasonId = "01") => {
    seasonEpisodes.innerHTML = "";
    getSeasonEpisodes(seasonId)
      .then(data => {
        data.results.forEach(element => {
          const episodeRow = createEpisodeRow(element);
          episodeRow.addEventListener("mousedown", () =>
            getEpisode(element.id)
              .then((result) => showEpisode(result)))
          seasonEpisodes.insertAdjacentElement("beforeEnd", episodeRow);
        })
      }).catch(err => console.log(`Can't access data: ${err}`));
  }

  const seasonsMenu = createSeasonsMenu(insertSeasonEpisodes);
  rootDiv.insertAdjacentElement("afterbegin", seasonsMenu);
  rootDiv.insertAdjacentHTML("afterbegin", "<h2 class='title'>Seasons</h2>")
  insertSeasonEpisodes()
}


document.querySelector("[data-action=characters]").addEventListener("mousedown", loadCharacters)
document.querySelector("[data-action=episodes]").addEventListener("mousedown", loadEpisodes)
document.querySelector("[data-action=seasons]").addEventListener("mousedown", loadSeasons)

const handleMenuStyles = (ev) => {
  const everySibling = ev.target.parentNode.childNodes;
  everySibling.forEach(element => element.classList?.remove("nav__link--current"));
  ev.target.classList.add("nav__link--current");
  ev.preventDefault();
};

document.getElementsByTagName("nav")[0].childNodes.forEach(el => {
  return el.addEventListener("mousedown", handleMenuStyles);
})


// loadCharacters()
// loadEpisodes()

loadSeasons();
document.querySelector("[data-action=seasons]").classList.add("nav__link--current")