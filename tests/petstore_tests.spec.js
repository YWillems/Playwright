const { test, expect } = require('@playwright/test');
const { Console } = require('console');
let page;

test('basic test', async ({ page }) => {
  
  await page.goto('https://petstore3.swagger.io');

  let pet = {
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}

  const options = {body: JSON.stringify(pet), method: "post"}

  await page.goto("https://petstore3.swagger.io/pet",options);

  //fetchRequest.post("https://petstore3.swagger.io/pet",options)
  //fetchResponse.status();
  //alert(fetchResponse.status());

  await page.screenshot({path:'screenshot.png', fullPage: true});
});
