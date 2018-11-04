import axios from "axios";

export function getGame(success, err) {
  axios({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=10&type=multiple",
    headers: { "content-type": "application/json" }
  })
    .then(success)
    .catch(err);
}
