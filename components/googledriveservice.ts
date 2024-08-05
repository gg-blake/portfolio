import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.CLIENT_SECRET;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.readonly";

export default function GoogleDriveService() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      "apiKey": "YOUR_API_KEY",
      "discoveryDocs": ["https://people.googleapis.com/$discovery/rest"],
      // clientId and scope are optional if auth is not required.
      "clientId": "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
      "scope": "profile",
  }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
          resourceName: "people/me",
          personFields: "name",
      });
  }).then(function(response) {
      console.log(response.result);
  }, function(reason) {
      console.log("Error: " + reason.result.error.message);
  });
}