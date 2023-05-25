
$(document).ready(function () {
  var csvFileInput = document.getElementById("csvFileInput");
  var loadButton = document.getElementById("loadButton");
  var processButton = document.getElementById("processButton");
  var backButton = document.getElementById("backCsv");
  var csvData;

  loadButton.addEventListener("click", function () {
    var file = csvFileInput.files[0];
    var reader = new FileReader();
    if (!file) {
      alert("Please load a CSV file first!")
    }
    reader.onload = e => {
      csvData = e.target.result;
      alert("CSV file loaded successfully!");
    };

    reader.readAsText(file);
  });

  processButton.addEventListener("click", function () {
    if (csvData) {
      alert("Processing CSV data...");
      console.log(csvData);
    } else {
      alert("Please load a CSV file first!");
    }
  });

  backButton.addEventListener("click", function () {
    window.open("../welcome/welcome.html", "_blank");
  });
});
