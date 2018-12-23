// ss = SpreadsheetService
// https://map.what3words.com/atom.eagles.melt
var ss = SpreadsheetApp.openById("1GMbOCZRaQj-tIjeWWQdSjOhDyeKFiVN7xxFD6YQo-1M");  // to be customised

// the index here is redundant
var COLUMNS = [
  { index: 0,  name: 'timestamp', label: "Timestamp" },
  { index: 1,  name: 'child_name', label: 'Child Name' },
  { index: 2,  name: 'child_id', label: 'Child ID' },
  { index: 3,  name: 'child_age', label: 'Child Age' },
  { index: 4,  name: 'child_gender', label: 'Gender' },
  { index: 5,  name: 'location_district', label: 'Location: District' },
  { index: 6,  name: 'location_ward', label: 'Location: Ward/Division' },
  { index: 7,  name: 'location_village', label: "Location: Village/Neighborhood	Caregiver's Name" },
  { index: 8,  name: 'caregiver_name', label: "Caregiver's Name" },
  { index: 9,  name: 'caregiver_relationship', label: 'Relationship to Child'},
  { index: 10, name: 'assessment_date', label: 'Assessment Date'},
  { index: 11, name: 'assessment_evaluator', label: 'Evaluator Name or ID'},
  { index: 12, name: 'assessment_information_source', label: 'Source of Information (check all that apply)'},
  { index: 13, name: 'assessment_consent', label: "Do you have the informant's consent to collect this data?" },

  { index: 14, name: 'csi_factors_1a', label: "1A. Goal: Child has sufficient food to eat at all times of the year."},
  { index: 15, name: 'csi_factors_1a_action', label: "1A. Action Taken"},
  { index: 16, name: 'csi_factors_1b', label: "1B. Goal: Child is growing well compared to others of his/her age in the community."},
  { index: 17, name: 'csi_factors_1b_action', label: "1B. Action Taken"},
  { index: 18, name: 'csi_factors_2a', label: "2A. Goal: Child has a stable shelter that is adequate, dry, and safe." },
  { index: 19, name: 'csi_factors_2a_action', label: "2A. Action Taken"},
  { index: 20, name: 'csi_factors_2b', label: "2B. Goal: Child has at least one adult (age 18 or over) who provides consistent care, attention, and support."},
  { index: 21, name: 'csi_factors_2b_action', label: "2B. Action Taken"},
  { index: 22, name: 'csi_factors_5a', label: "3A.Goal: Child is safe from any abuse, neglect, or exploitation."},
  { index: 23, name: 'csi_factors_5a_action', label: "3A. Action Taken"},
  { index: 24, name: 'csi_factors_5b', label: "3B. Goal: Child has access to legal protection services as needed."},
  { index: 25, name: 'csi_factors_5b_action', label: "3B. Action Taken"},
  { index: 26, name: 'csi_factors_5a', label: "4A. Goal: Child is physically healthy."},
  { index: 27, name: 'csi_factors_5a_action', label: "4A. Action Taken"},
  { index: 28, name: 'csi_factors_5b', label: "4B. Goal: Child can access health care services, including medical treatment whenill and preventive care."},
  { index: 29, name: 'csi_factors_5b_action', label: "4B. Action Taken"},
  { index: 30, name: 'csi_factors_5a', label: "5A. Goal: Child is happy and content with a generally positive mood and hopeful outlook."},
  { index: 31, name: 'csi_factors_5a_action', label: "5A. Action Taken"},
  { index: 32, name: 'csi_factors_5b', label: "5B. Goal: Child is cooperative and enjoys participating in activities with adultsand other children."},
  { index: 33, name: 'csi_factors_5b_action', label: "5B. Action Taken"},
  { index: 34, name: 'csi_factors_6a', label: "Goal: Child is progressing well in acquiring knowledge and life skills at home, school, job training, or an age-appropriate productive activity."},
  { index: 35, name: 'csi_factors_6a_action', label: "6A. Action Taken"},
  { index: 36, name: 'csi_factors_6b', label: "Goal: Child is enrolled and attends school or skills training or is engaged inage-appropriate play, learning activity, or job."},
  { index: 37, name: 'csi_factors_6b_action', label: "6B. Action Taken"},
  
  { index: 38, name: 'csi_significant_events', label: "Check any events that have happened since the last CSI assessment if applicable."},
  { index: 39, name: 'csi_significant_event_comments', label: "Comments"},
  { index: 40, name: 'csi_services_food_what', label: "What was provided?"},
  { index: 41, name: 'csi_services_food_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 42, name: 'csi_services_shelter_what', label: "What was provided?"},
  { index: 43, name: 'csi_services_shelter_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 44, name: 'csi_services_care_what', label: "What was provided?"},
  { index: 45, name: 'csi_services_care_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 46, name: 'csi_services_protection_what', label: "What was provided?"},
  { index: 47, name: 'csi_services_protection_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 48, name: 'csi_services_legal_what', label: "What was provided?"},
  { index: 49, name: 'csi_services_legal_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 50, name: 'csi_services_health_what', label: "What was provided?"},
  { index: 51, name: 'csi_services_health_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 52, name: 'csi_services_psychological_what', label: "What was provided?"},
  { index: 53, name: 'csi_services_psychological_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 54, name: 'csi_services_educational_what', label: "What was provided?"},
  { index: 55, name: 'csi_services_educational_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 56, name: 'csi_services_livelihood_what', label: "What was provided?"},
  { index: 57, name: 'csi_services_livelihood_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)"},
  { index: 58, name: 'csi_services_other_what', label: "What was provided?"},
  { index: 59, name: 'csi_services_other_who', label: "Who provided services?(e.g., NGO, neighbor, teacher, church, or other)" },
  { index: 60, name: 'csi_services_suggested', label: "Suggestions for other resources or services needed:"},

  { index: 61, name: 'photos', label: "Attach up to 10 photos of the child and living environment"}
]

function submitFormFunc(e) {
  var activeForm = FormApp.getActiveForm();
  var formResponse = activeForm.getResponse(e.response.getId());
  
  updateAssessmentSheet(formResponse);
  updateFactorsSheet(formResponse);
  updateActionsTaken(formResponse);
}

function updateAssessmentSheet(formResponse) {
  var responseRow = initResponseRow(formResponse);
  var items = formResponse.getItemResponses().slice(0, 13);
  for (var i = 0; i < items.length; i++) {
    responseRow.push(items[i].getResponse());
  }

  updateResponse(formResponse.getId(), "assessment_info", responseRow);
}

function updateFactorsSheet(formResponse) {
  // NOTE (20181202 neal): When we move this into a proper DB, we may want to let each factor 
  //      be a row unto itself (response_id, child_id, factor_id, score, comments) and use
  //      joins to pull things together. For now, howerver, that will complicate analysis.
  var responseRow = initResponseRow(formResponse);
  responseRow = appendDemographicColumns(formResponse, responseRow);
  
  // append factors (ignoring actions taken)
  var items = formResponse.getItemResponses();
  for (var ix = 13; ix < 36; ix += 2) {
    var itemResponse = items[ix].getResponse();
    var score = getScoreForFactor(itemResponse);
    responseRow.push(score);
  }

  updateResponse(formResponse.getId(), "factor_info", responseRow);
}

function updateActionsTaken(formResponse) {
  var responseRow = initResponseRow(formResponse);
  responseRow = appendDemographicColumns(formResponse, responseRow);
  
  // append factors (ignoring actions taken)
  var items = formResponse.getItemResponses();
  for (var ix = 39; ix < 58; ix += 2) {
    var itemResponse = items[ix].getResponse();
    responseRow.push(itemResponse);
  }

  updateResponse(formResponse.getId(), "actions_taken", responseRow);
}

/**
 * Computes a numeric score for a given factor response. 
 * 
 * @param {String} itemResponse The lable of the selected response. Should begin with a
 *   numeric value and key word (e.g, `3 - FAIR`), but on occasion omits the numeric score.
 * @return {Number} The numeric score (4: Good, 3: Fair, 2: Bad, 1: Very Bad) for this response.
 */
function getScoreForFactor(itemResponse) {
  var SCORE_MAP = {
    'GOOD': 4,
    'FAIR': 3,
    'BAD': 2,
    'VERY BAD': 1
  };

  var matched = itemResponse.match(/^\d|(GOOD|FAIR|BAD|VERY BAD)/)[0]

  var score = parseInt(matched);
  if (!score && matched) {
    score = SCORE_MAP[matched];
  }
  return score;
}

/**
 * Creates a new array for form-response values where the first three columns include the 
 * timestamp of the response, the form id, and the URL to edit the response. The remaining
 * values should be populated based on the needs of a specific sheet.
 * 
 * @param {FormResponse} formResponse The form response to be used as the basis for this row.
 * @return {Array<String>} An array for this response containing the initial identifying values.
 */
function initResponseRow(formResponse) {
  // TODO handle date_created; date_modified
  var responseRow = [];
  responseRow.push(formResponse.getTimestamp().toString());
  responseRow.push(formResponse.getId());
  responseRow.push(formResponse.getEditResponseUrl());

  return responseRow
}

/**
 * Append relevant data to support analysis basic demographic (age, gender), geographic and temporal analysis.
 * 
 * @param {FormResponse} formResponse The response from which demographic data should be retrieved
 * @param {Array<String>} responseRow  The array of response items to be updated.
 */
function appendDemographicColumns(formResponse, responseRow) {
  // child_id (2), age (3), gnder (4), district (5), ward (6), village (7), assessment date (10)
  var demographicPropertyIndices = [1, 2, 3, 4, 5, 6, 9]
  var items = formResponse.getItemResponses();
  for (var ix = 0; ix < demographicPropertyIndices.length; ix++) {
    var itemIx = demographicPropertyIndices[ix];
    responseRow.push(items[itemIx].getResponse());
  }

  return responseRow;
}

/**
 * Updates data associated with a specific form response. This updates or 
 * appends the supplied response properties to a given sheet.
 * 
 * @param {String} responseId The id of the response form
 * @param {String} sheetName the name of the sheet to be 
 * @param {Array<String>} properties The values to insert into this response.
 */
function updateResponse(responseId, sheetName, properties) {
  var ssSheet = ss.getSheetByName(sheetName)

  var responseIx = findResponseIndex(ssSheet, responseId);
  if (responseIx < 0) {
    ssSheet.appendRow(properties);
  } else {
    var range = ssSheet.getRange(responseIx + 2, 1, 1, properties.length);
    range.setValues([properties]);
  }
}

/**
 * Finds the index of the identified response within a given sheet.
 * 
 * @param {Sheet} ssSheet The spread sheet to lookup the response id. Assumes 
 * @param {Number} responseId 
 * @return {Number} The row index of the supplied 
 */
function findResponseIndex(ssSheet, responseId) {
  var ids = ssSheet.getRange("B2:B").getValues();
  for (var i = 0; i < ids.length; i++) {
    if (ids[i][0] === responseId) {
      return i;
    }
  }

  return -1;
}
