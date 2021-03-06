//Select ol element from page
var toc = document.getElementById("toc");

//Create Array
let contents = [
    ['Challenge #1', ''],
    ['W02 Team Activity', '/Team/w02/index.html'],
    ['W03 Team Activity', '/Team/w03/index.html'],
    ['W04 Team Activity', '/Team/w04/index.html'],
    ['W05 Team Activity', '/Team/w05/index.html'],
    ['N2N Chapter Two Notes', '/Notes/JavascriptN2N/chapter02.html'],
    ['N2N Chapter Three Notes', '/Notes/JavascriptN2N/chapter03.html'],
    ['N2N Chapter Four Notes', '/Notes/JavascriptN2N/chapter04.html'],
    ['N2N Chapter Five Notes', '/Notes/JavascriptN2N/chapter05.html'],
    ['N2N Chapter Six Notes', '/Notes/JavascriptN2N/chapter06.html'],
    ['N2N Chapter Seven Notes', '/Notes/JavascriptN2N/chapter07.html'],
    ['N2N Chapter Eight Notes', '/Notes/JavascriptN2N/chapter08.html'],
    ['N2N Chapter Ten Notes', '/Notes/JavascriptN2N/chapter10.html'],
    ['N2N Chapter Eleven Notes', '/Notes/JavascriptN2N/chapter11.html'],
    ['N2N Chapter Twelve Notes', '/Notes/JavascriptN2N/chapter12.html'],
    ['N2N Chapter Thirteen Notes', '/Notes/JavascriptN2N/chapter13.html'],
    ['N2N Chapter Fifteen Notes', '/Notes/JavascriptN2N/chapter15.html'],
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