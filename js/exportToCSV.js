document.getElementById("export-button").addEventListener("click", function () {
  exportTableToCSV("userData.csv");
});

function exportTableToCSV(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  // Create CSV file and download it
  var csvFile = new Blob([csv.join("\n")], { type: "text/csv" });

  var downloadLink = document.createElement("a");
  downloadLink.download = filename;

  var url = window.URL.createObjectURL(csvFile);
  downloadLink.href = url;

  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
  document.body.removeChild(downloadLink);
}
