const createEpisodeRow = (episode) => {
  const element = document.createElement("div");
  const link = createRowText(episode);
  element.appendChild(link);
  element.className = "episode-row";
  return element;
};

const createRowText = (episode) => {
  const element = document.createElement("span");
  element.append(episode.id + ". ");
  element.append(episode.name);
  return element;
};

const showEpisode = (episode) => {
  console.log("Episode", episode);
  const episodeDetail = document.getElementById("detail");

  episodeDetail.innerHTML = "";
  episodeDetail.appendChild(createParagraph("Name: " + episode.name));
  episodeDetail.appendChild(createParagraph("Episode: " + episode.episode));
  episodeDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

const createSeasonsMenu = (callback) => {
  const SEASONS = {
    SEASON01: "01",
    SEASON02: "02",
    SEASON03: "03",
    SEASON04: "04",
    SEASON05: "05",
  };
  const seasonsMenu = document.createElement("div");
  seasonsMenu.id = "seasonsMenu";
  createSeasonButtons(SEASONS, seasonsMenu, callback)

  return seasonsMenu
};

const handleSeasonsMenuStyles = (ev) => {
  const everySibling = ev.target.parentNode.childNodes;
  everySibling.forEach(element => element.classList.remove("seasonsMenu__a--current"));
  ev.target.classList.add("seasonsMenu__a--current");
  ev.preventDefault();
};
/* STATIC MENU, DOESN'T DEPEND ON API (as pagination does)*/
const createSeasonButtons = (seasonsList, destElement, callback) => {
  Object.entries(seasonsList).forEach((season, index) => {
    const seasonLink = document.createElement("a");
    seasonLink.className = "seasonsMenu__a";//apunta esta
    seasonLink.innerText = `Season ${index + 1}`;
    seasonLink.href = "#";
    seasonLink.setAttribute("data-season", season[1]);//[1] means "value" in entry
    seasonLink.addEventListener("mousedown", handleSeasonsMenuStyles);
    seasonLink.addEventListener("mousedown", (ev) => callback(ev.target.getAttribute("data-season")))
    destElement.appendChild(seasonLink);
    if (index === 0) seasonLink.classList.add("seasonsMenu__a--current")//
  })
  return destElement
}

export { createEpisodeRow, showEpisode, createSeasonsMenu };