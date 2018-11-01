import axios from 'axios';

export function getGame(success, err) {
  console.log("in serverjs...........")
  axios({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=10",
    headers: { "content-type": "application/json" }
  })
  .then(success)
  .catch(err)

}
