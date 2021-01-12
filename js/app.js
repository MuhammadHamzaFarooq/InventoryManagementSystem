console.log("Welcome To Inventory Mangement System!");

// grab the element with id 
let ItemName = document.getElementById('ItemName').value;
let ItemPrice = document.getElementById('ItemPrice').value;
let MinimumStock = document.getElementById('MinimumStock').value;

console.log(ItemPrice);


function GetSelectedValue(){
    // var e = document.getElementById("country");
    let itemCategory = document.getElementById('itemCategory').value;
    // var result = e.options[e.selectedIndex].value;
    let itemCategorySelected = itemCategory.options[itemCategory.selectedIndex].value;
    console.log(itemCategory);
    
    // document.getElementById("result").innerHTML = result;
}

// function GetSelectedText(){
//     var e = document.getElementById("country");
//     var result = e.options[e.selectedIndex].text;
    
//     document.getElementById("result").innerHTML = result;
// }