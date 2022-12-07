console.log("Hello Back to School");
let viz;

//1. create a variable to store the viz container

//2. create a variable to store the dashboard options

//3. create a variable to store the URL
// (If does not load, specify height and weidth)

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

const containerDiv = document.getElementById("vizContainer");

const url = "https://public.tableau.com/shared/YXM74H36Q?";

function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}
document.addEventListener("DOMContentLoaded", initViz);

const exportPDFbutton = document.getElementById("exportPDF");
const exportPPbutton = document.getElementById("exportPP");
exportPDFbutton.addEventListener("click", exportPDFfunction);
exportPPbutton.addEventListener("click", exportPPfunction);

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

function exportPPfunction() {
  viz.showExportPowerPointDialog();
}

function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  //   const workbook = viz.getWorkbook();
  //   const activeSheet = workbook.getActiveSheet();
  //   const sheets = activeSheet.getWorksheets();
  const sheets = viz.getWorkbook().getActiveSheet().getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Viz Filtered"));
}
document
  .getElementById("FilterButton")
  .addEventListener("click", getRangeValues);
