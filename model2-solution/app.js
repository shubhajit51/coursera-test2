(function(){
angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService)

ToBuyController.$inject=["ShoppingListCheckOffService"]
AlreadyBoughtController.$inject=["ShoppingListCheckOffService"]

function ToBuyController(ShoppingListCheckOffService){
ctrl1=this

ctrl1.itemstobuy=ShoppingListCheckOffService.getitemstobuy();

ctrl1.additemsbought=ShoppingListCheckOffService.getitemstobuy();
ctrl1.additemsbought=function(index){
    
    ShoppingListCheckOffService.additemsbought(index);

}
}
function AlreadyBoughtController(ShoppingListCheckOffService){

ctrl2=this


ctrl2.itemsbought=ShoppingListCheckOffService.getitemsbought();



}



function ShoppingListCheckOffService(){
service=this

var itemstobuy=[
{


    name:"cookies",
    quantity:"10"
},
{


    name:"chips",
    quantity:"20"
},
{


    name:"pepsi",
    quantity:"30"
},
{


    name:"sprite",
    quantity:"40"
},
{


    name:"wafers",
    quantity:"45"
}

]
var itemsbought=[]

service.getitemstobuy=function(){

return itemstobuy
console.log(itemstobuy.length)

}
service.getitemsbought=function(){

    return itemsbought
    console.log(itemsbought.length)
    
    }

service.additemsbought=function(index){


    var item=itemstobuy.splice(index,1)
   
    itemsbought.push(item[0])

}


}

})();