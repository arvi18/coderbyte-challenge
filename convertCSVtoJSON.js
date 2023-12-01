const axios = require("axios");
const csv = require("csvtojson");

// Function to sort the CSV data by the second column (Email)
function sortByEmail(a, b) {
  if (a.Email < b.Email) return -1;
  if (a.Email > b.Email) return 1;
  return 0;
}

// Perform the GET request
axios
  .get("https://coderbyte.com/api/challenges/logs/user-info-csv")
  .then((response) => {
    // Parse CSV data
    csv()
      .fromString(response.data)
      .then((csvData) => {
        // Sort CSV data by Email
        csvData.sort(sortByEmail);

        // Convert the sorted CSV data to a JSON object
        const jsonData = JSON.stringify(csvData, null, 2);

        // Console log the JSON object as a string
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error parsing CSV data:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching CSV data:", error);
  });

  // change

  