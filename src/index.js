class TextTransformation {
  constructor(text) {
    this.text = text;
  }
  makeImportant() {
    this.text = this.text.trim(); // trim
    this.text = this.text.toLowerCase(); // make lowercase
    this.text = this.text.charAt(0).toUpperCase() + this.text.slice(1); // capitalize
    this.text = this.text + "!"; // add !
    return this.text;
  }
  makeUnimportant() {
    this.text = this.text.trim(); // trim
    this.text = this.text.toLowerCase(); // make lowercase
    this.text = this.text + "."; // add .
    return this.text;
  }
}

// export default TextTransformation;
exports.TextTransformation = TextTransformation;
