import axios from "axios";

export default async function fetchData(num) {
  const baseUrl = "https://reqres.in/api/users/" + num;
  var data = [];
  await axios
    .get(baseUrl)
    .then((res) => {
      const val = res.data.data;
      const name = val["first_name"];
      const email = val["email"];
      const image = val["avatar"];
      data = [email, name, image];
    })
    .catch((e) => {
      alert("Failed to fetch data");
    });
  return data;
}
