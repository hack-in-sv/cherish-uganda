var ss = SpreadsheetApp.openById("ID of the form");  // to be customised
var responseSheet = "name of the sheet";  // to be customised

function submitFormFunc(e) {
  var formResponse = e.response;

  var responses = {};
  var responseRow = [];
  
  
  responseRow.push(formResponse.getTimestamp().toString());
  responseRow.push(formResponse.getId());
  
  
  var items = formResponse.getItemResponses();
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    responseRow.push(item.getResponse());
  }
  
  var activeForm = FormApp.getActiveForm(); 
  var formResponseId = formResponse.getId();
  // confused
  responseRow.push(activeForm.getResponse(formResponseId).getEditResponseUrl());
  
  var itemRowIndex = findResponseIndex(ss,formResponse.getId());
  var sheet = ss.getSheetByName(responseSheet);
 
  if (itemRowIndex < 0) {
    
    //responseRow.push(itemRowIndex);
    sheet.appendRow(responseRow);
   } else {
    var range = sheet.getRange(itemRowIndex + 2, 1, 1, responseRow.length);
  
    range.setValues([responseRow]);
    //responseRow.push(responseRow.length + 1)
    //responseRow.push(range.getNumColumns());
    //sheet.appendRow(responseRow);
    
  }
}

function findResponseIndex(ss,id){
  var ids = ss.getSheetByName(responseSheet).getRange("B2:B").getValues();
  for(var i=0; i< ids.length; i++){
    if(ids[i][0]===id){
      return(i);
    }
  }
  return(-1);
}