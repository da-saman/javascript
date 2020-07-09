// import { assert } from "chai";
var assert = require("chai").assert;

// import TextTransformation from "../src/index.js";
var TextTransformation = require("../src/index.js").TextTransformation;

describe("test makeImportant", () => {
  it("Makes it capitalized, trimmed with ! at the end.", () =>
    assert.strictEqual(
      new TextTransformation(" pReSiDeNt  ").makeImportant(),
      "President!"
    ));
});

describe("test makeUnimportant", () => {
  it("Makes it lowercase, trimmed with . at the end.", () =>
    assert.strictEqual(
      new TextTransformation(" pReSiDeNt  ").makeUnimportant(),
      "president."
    ));
});
