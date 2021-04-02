//Select ol element from page
var toc = document.getElementById("toc");

//Create Array
let contents = [
    ['Challenge #1', 'Challenge/One/index.html'],
    ['Challenge #2', '/WDD330Portfolio/Challenge/Two/index.html'],
    ['W02 Team Activity', '/WDD330Portfolio/Team/w02/index.html'],
    ['W03 Team Activity', '/WDD330Portfolio/Team/w03/index.html'],
    ['W04 Team Activity', '/WDD330Portfolio/Team/w04/index.html'],
    ['W05 Team Activity', '/WDD330Portfolio/Team/w05/index.html'],
    ['W07 Team Activity', '/WDD330Portfolio/Team/w07/index.html'],
    ['W08 Team Activity', '/WDD330Portfolio/Team/w08/index.html'],
    ['W09 Team Activity', '/WDD330Portfolio/Team/w09/index-START.html'],
    ['N2N Chapter 2 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter02.html'],
    ['N2N Chapter 3 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter03.html'],
    ['N2N Chapter 4 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter04.html'],
    ['N2N Chapter 5 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter05.html'],
    ['N2N Chapter 6 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter06.html'],
    ['N2N Chapter 7 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter07.html'],
    ['N2N Chapter 8 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter08.html'],
    ['N2N Chapter 10 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter10.html'],
    ['N2N Chapter 11 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter11.html'],
    ['N2N Chapter 12 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter12.html'],
    ['N2N Chapter 13 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter13.html'],
    ['N2N Chapter 15 Notes', '/WDD330Portfolio/Notes/JavascriptN2N/chapter15.html'],
    ['HTML5 Chapter 8 Notes', '/WDD330Portfolio/Notes/HTML5/chapter08.html'],
    ['HTML5 Chapter 12 Notes', '/WDD330Portfolio/Notes/HTML5/chapter12.html'],
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