// Automatically update copyright year block
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Automatically parse and output the document update stamp
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
