// script.js

// Function to get the current date and time in UTC
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

// Display the current date and time
console.log('Current Date and Time (UTC):', getCurrentDateTime());