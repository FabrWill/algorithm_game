import Prism from "prismjs";

import { makeAutoObservable } from "mobx"
export default class CodeFormatter {
  codeArea: Element;

  constructor(codeArea: Element) {
    this.codeArea = codeArea;

    makeAutoObservable(this);
  }

  setCodeArea(codeArea: Element) {
    this.codeArea = codeArea;
  }

  update(event: any) {
    let text = event.target.value;

    // Handle final newlines (see article)
    if (text[text.length - 1] == "\n") {
      text += " ";
    }
    // Update code
    this.codeArea.innerHTML = text
      .replace(new RegExp("&", "g"), "&amp;")
      .replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(this.codeArea);
  }

  checkTab(event: any) {
    const element = event.target;

    let code = element.value;
    if (event.key == "Tab") {
      /* Tab key pressed */
      event.preventDefault(); // stop normal
      let before_tab = code.slice(0, element.selectionStart); // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
      let cursor_pos = element.selectionStart + 1; // where cursor moves after tab - moving forward by 1 char to after tab
      element.value = before_tab + "\t" + after_tab; // add tab char
      // move cursor
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
      this.update(element.value); // Update text to include indent
    }
  }
}
