import * as Man from "/assets/js/manipulate.js"
import * as Search from "/assets/js/search.js"

window.onload = () => {
  Man.changeTitle();
  Man.changeHeader();
  Man.changeAboutMe();
  console.log(Search.findElementById("header")); // <div id="header">
  console.log(Search.findFirstElementOfTag("LI")); // <li><h3>Computer Science</h3>...</li>
  console.log(Search.findFirstElementOfClass("section")); // <div class="section"><h2>About Me</h2>...</div>
  console.log(Search.findElementsOfTag("H3")); // [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3] (length: 11)
  console.log(Search.findElementsOfClass("section")); // [div.section, div.section, div.section, div.section, div.section, div.section] (length: 6)
}
