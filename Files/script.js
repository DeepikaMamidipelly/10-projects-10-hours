/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

import BookObject from "./BookObject.js";

const bookone = new BookObject('TMAHO',124,'Jan 1 2021');
const booktwo = new BookObject('TMAHO1',200,'Jan 2 2022');
const htmlPage=`<h1>This is WebPage
</h1>
<p>${bookone.name}</p>
<p>${booktwo.name}</p>
<p>${bookone.daysCompleted()}</p>
<p>${booktwo.daysCompleted()}</p>
`
//document.body.innerHTML=htmlPage;
console.log("The book one days completed:", bookone.name);
console.log("The book one days completed:", booktwo.daysCompleted());