const fs = require('fs');

// Function to read a file, modify its content, and save the changes
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ${err}');
            return;
        }

        // Modify the content as needed
        const modifiedContent = modifyContentFunction(data, newContent);

        // Save the changes back to the file
        fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file: ${err}');
                return;
            }
            console.log('File modified and saved successfully.');
        });
    });


// Function to modify the content (customize according to your needs)
function modifyContentFunction(oldContent, newContent) {
    // Example modification: append new content to old content
    return ${oldContent}\n${newContent};
}

// Example usage
const filePath = 'example.txt'; // Replace with the actual file path
const newContent = 'This is the new content.';

modifyFile(filePath, newContent);