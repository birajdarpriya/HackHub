import appList from "./appList.json";
import appDetails from "./appDetails.json";

export function filterApps(searchText, maxResults) {
  return appList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

export function filterAppsData(data, searchText, maxResults) {
  return data
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

export function fetchKeywords(searchText, maxResults) {
  return appList
    .filter(emoji => {
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

export function fetchApplcationDetails(searchText) {
  return appDetails
    .filter(app => {
      if (app.title.toLowerCase().includes(searchText.toLowerCase())) {


        return true;
      }
      if (app.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
}

export function filterhackhublist(data, searchText, maxResults) {
  return data
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.category.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
