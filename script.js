var d = document.getElementById("date");
d.value = "sdf";
function validateForm() {
  console.log("submitted");
}
function checkAll() {
  var server = document.getElementById("server");
  server.checked = true;
  var backupServer = document.getElementById("backupServer");
  backupServer.checked = true;
  var tab = document.getElementById("tab");
  tab.checked = true;
  var till1 = document.getElementById("till1");
  till1.checked = true;
  var till2 = document.getElementById("till2");
  till2.checked = true;
  var till3 = document.getElementById("till3");
  till3.checked = true;
  var led = document.getElementById("led");
  led.checked = true;
  var handScanner = document.getElementById("handScanner");
  handScanner.checked = true;
  var a4Printer = document.getElementById("a4Printer");
  a4Printer.checked = true;
  var a4Scanner = document.getElementById("a4Scanner");
  a4Scanner.checked = true;
  var upsLights = document.getElementById("upsLights");
  upsLights.checked = true;
  var upsBatteries = document.getElementById("upsBatteries");
  upsBatteries.checked = true;
  var internet = document.getElementById("internet");
  internet.checked = true;
  var footFall = document.getElementById("footFall");
  footFall.checked = true;
  var antenas = document.getElementById("antenas");
  antenas.checked = true;
  var cctv = document.getElementById("cctv");
  cctv.checked = true;
  var dvr = document.getElementById("dvr");
  dvr.checked = true;

  var serverRemarks = document.getElementById("serverRemarks");
  serverRemarks.style.display = "none";
  var backupServerRemarks = document.getElementById("backupServerRemarks");
  backupServerRemarks.style.display = "none";
  var tabRemarks = document.getElementById("tabRemarks");
  tabRemarks.style.display = "none";
  var till1Remarks = document.getElementById("till1Remarks");
  till1Remarks.style.display = "none";
  var till2Remarks = document.getElementById("till2Remarks");
  till2Remarks.style.display = "none";
  var till3Remarks = document.getElementById("till3Remarks");
  till3Remarks.style.display = "none";
  var ledRemarks = document.getElementById("ledRemarks");
  ledRemarks.style.display = "none";
  var handScannerRemarks = document.getElementById("handScannerRemarks");
  handScannerRemarks.style.display = "none";
  var a4PrinterRemarks = document.getElementById("a4PrinterRemarks");
  a4PrinterRemarks.style.display = "none";
  var a4ScannerRemarks = document.getElementById("a4ScannerRemarks");
  a4ScannerRemarks.style.display = "none";
  var upsLightsRemarks = document.getElementById("upsLightsRemarks");
  upsLightsRemarks.style.display = "none";
  var upsBatteriesRemarks = document.getElementById("upsBatteriesRemarks");
  upsBatteriesRemarks.style.display = "none";
  var internetRemarks = document.getElementById("internetRemarks");
  internetRemarks.style.display = "none";
  var footFallRemarks = document.getElementById("footFallRemarks");
  footFallRemarks.style.display = "none";
  var antenasRemarks = document.getElementById("antenasRemarks");
  antenasRemarks.style.display = "none";
  var cctvRemarks = document.getElementById("cctvRemarks");
  cctvRemarks.style.display = "none";
  var dvrRemarks = document.getElementById("dvrRemarks");
  dvrRemarks.style.display = "none";
}
function myFunction() {
  // Get the checkbox
  var server = document.getElementById("server");
  var backupServer = document.getElementById("backupServer");
  var tab = document.getElementById("tab");
  var till1 = document.getElementById("till1");
  var till2 = document.getElementById("till2");
  var till3 = document.getElementById("till3");
  var led = document.getElementById("led");
  var handScanner = document.getElementById("handScanner");
  var a4Printer = document.getElementById("a4Printer");
  var a4Scanner = document.getElementById("a4Scanner");
  var upsLights = document.getElementById("upsLights");
  var upsBatteries = document.getElementById("upsBatteries");
  var internet = document.getElementById("internet");
  var footFall = document.getElementById("footFall");
  var antenas = document.getElementById("antenas");
  var cctv = document.getElementById("cctv");
  var dvr = document.getElementById("dvr");
  // Get the output text
  var serverRemarks = document.getElementById("serverRemarks");
  var backupServerRemarks = document.getElementById("backupServerRemarks");
  var tabRemarks = document.getElementById("tabRemarks");
  var till1Remarks = document.getElementById("till1Remarks");
  var till2Remarks = document.getElementById("till2Remarks");
  var till3Remarks = document.getElementById("till3Remarks");
  var ledRemarks = document.getElementById("ledRemarks");
  var handScannerRemarks = document.getElementById("handScannerRemarks");
  var a4PrinterRemarks = document.getElementById("a4PrinterRemarks");
  var a4ScannerRemarks = document.getElementById("a4ScannerRemarks");
  var upsLightsRemarks = document.getElementById("upsLightsRemarks");
  var upsBatteriesRemarks = document.getElementById("upsBatteriesRemarks");
  var internetRemarks = document.getElementById("internetRemarks");
  var footFallRemarks = document.getElementById("footFallRemarks");
  var antenasRemarks = document.getElementById("antenasRemarks");
  var cctvRemarks = document.getElementById("cctvRemarks");
  var dvrRemarks = document.getElementById("dvrRemarks");

  // server
  if (server.checked == true) {
    serverRemarks.style.display = "none";
  }
  if (server.checked == false) {
    serverRemarks.style.display = "block";
  }
  // backupserver
  if (backupServer.checked == true) {
    backupServerRemarks.style.display = "none";
  }
  if (backupServer.checked == false) {
    backupServerRemarks.style.display = "block";
  }
  //tab
  if (tab.checked == true) {
    tabRemarks.style.display = "none";
  }
  if (tab.checked == false) {
    tabRemarks.style.display = "block";
  }
  //till1
  if (till1.checked == true) {
    till1Remarks.style.display = "none";
  }
  if (till1.checked == false) {
    till1Remarks.style.display = "block";
  }
  //till2
  if (till2.checked == true) {
    till2Remarks.style.display = "none";
  }
  if (till2.checked == false) {
    till2Remarks.style.display = "block";
  }
  //till3
  if (till3.checked == true) {
    till3Remarks.style.display = "none";
  }
  if (till3.checked == false) {
    till3Remarks.style.display = "block";
  }
  //led
  if (led.checked == true) {
    ledRemarks.style.display = "none";
  }
  if (led.checked == false) {
    ledRemarks.style.display = "block";
  }
  //handScanner
  if (handScanner.checked == true) {
    handScannerRemarks.style.display = "none";
  }
  if (handScanner.checked == false) {
    handScannerRemarks.style.display = "block";
  }
  //a4Printer
  if (a4Printer.checked == true) {
    a4PrinterRemarks.style.display = "none";
  }
  if (a4Printer.checked == false) {
    a4PrinterRemarks.style.display = "block";
  }
  //a4Scanner
  if (a4Scanner.checked == true) {
    a4ScannerRemarks.style.display = "none";
  }
  if (a4Scanner.checked == false) {
    a4ScannerRemarks.style.display = "block";
  }
  //upsLights
  if (upsLights.checked == true) {
    upsLightsRemarks.style.display = "none";
  }
  if (upsLights.checked == false) {
    upsLightsRemarks.style.display = "block";
  }
  //upsbatteris
  if (upsBatteries.checked == true) {
    upsBatteriesRemarks.style.display = "none";
  }
  if (upsBatteries.checked == false) {
    upsBatteriesRemarks.style.display = "block";
  }
  //internet
  if (internet.checked == true) {
    internetRemarks.style.display = "none";
  }
  if (internet.checked == false) {
    internetRemarks.style.display = "block";
  }
  //football
  if (footFall.checked == true) {
    footFallRemarks.style.display = "none";
  }
  if (footFall.checked == false) {
    footFallRemarks.style.display = "block";
  }
  //antenas
  if (antenas.checked == true) {
    antenasRemarks.style.display = "none";
  }
  if (antenas.checked == false) {
    antenasRemarks.style.display = "block";
  }
  //cctv
  if (cctv.checked == true) {
    cctvRemarks.style.display = "none";
  }
  if (cctv.checked == false) {
    cctvRemarks.style.display = "block";
  }
  //dvr
  if (dvr.checked == true) {
    dvrRemarks.style.display = "none";
  }
  if (dvr.checked == false) {
    dvrRemarks.style.display = "block";
  }
}
