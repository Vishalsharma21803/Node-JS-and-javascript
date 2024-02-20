const fs = require('fs');

// Specify the path to your JSON file
const filePath = 'file.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Modify the content as needed
  jsonData.someKey = 'newValue';
  // Add or modify other properties as needed

  // Convert the modified JSON back to a string
  const modifiedJsonString = JSON.stringify(jsonData, null, 2); // The third argument (2) is for indentation

  // Save the changes back to the file
  fs.writeFile(filePath, modifiedJsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('Changes saved successfully!');
  });
});