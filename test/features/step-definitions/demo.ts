import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  console.log(`BEfore opening browser...`);
  browser.url("https://www.google.com");
  browser.pause(70000);
  console.log(`After openning browser...`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> Search Item: ${searchItem}`);
  let ele = await $(`[name="q"]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^The URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> Expected URL is: ${expectedURL}`);
  let url = await browser.getUrl();
  console.log( `current URL is: ${url}`);
  
  chai.expect(url).to.equal(expectedURL);
});
