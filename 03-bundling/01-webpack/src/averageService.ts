export function getAvg(scores:number[]) {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores:number[]) {
  return scores.reduce((score, count) => score + count);
}

// const API_BASE_URL = "http://localhost:3000/api/scores";
// const API_BASE_URL = "https://myapp.com";
const API_BASE_URL = process.env.API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);
export function getScores(){
  fetch(`${API_BASE_URL}/api/scores`)
}