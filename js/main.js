//Select ol element from page
var toc = document.getElementById("toc");

//Create Array
let contents = [
    ['W02 Team Activity', 'Team Activities/w02/index.html'],
    ['Exercise 2', 'https://www.facebook.com'],
    ['Exercise 3', 'https://www.youtube.com']
];

//Read list of links from array and call function 
for (let i = 0; i < contents.length; i++)
    {
        //Get label
        var a = contents[i][0];
        //Get URL
        var b = contents[i][1];
        //Call function
        dynamicTOC(a, b);
    }

//Fuction that creates and adds content to table.
function dynamicTOC(label, url) {
    //Create li element
    var li = document.createElement("li");
    //Create a element
    var a = document.createElement("a");
    a.textContent = label;
    a.setAttribute('href', url);
    //Add a element to li element
    li.appendChild(a);
    //Add li to ol
    document.getElementById("toc").appendChild(li);
};