// template strings

const title = 'Best reads of 2019'
const author = 'Muhammad';
const likes = 30;

// concatenation way
let concatWay = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
console.log(concatWay)


// template strings way
let tempWay = `The blog called  ${title} by ${author} has ${likes} likes.`
console.log(tempWay);



// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This <em>blog</em> has ${likes} likes</span>
`;
console.log(html);

document.getElementById('myLabel').innerHTML = html;