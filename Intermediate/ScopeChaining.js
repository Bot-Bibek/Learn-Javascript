//Scope Chain
var name = "ABC";

console.log("Line no. 3 ", name)

function sayName() {
    var name = "XYZ";
    console.log("Line no. 6 ", name);

    //we can declear function whenever and whereever we like
    sayNameTwo()
    function sayNameTwo() {
        var name = "EFG"
        console.log(`Line no. 7 ${name}`);
    }

    //we can go as up as above but you can't ask to the lower guys.
    //
}
//Note
{
    //Scope
    //This how scope is created
    //but in if else it does not consider as scope 
    // it only consider scope which is element that is direct to the function
}



sayName()
