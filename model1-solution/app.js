(function(){
    
var LunchCheck=angular.module("LunchCheck",[]);
LunchCheck.controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=["$scope"];
function LunchCheckController($scope){

$scope.lunch_menu="";
$scope.message="";

$scope.menu_check=function(){

var menu=$scope.lunch_menu.split(",");

$scope.message=calculate($scope.lunch_menu);


};

function calculate(menu){

    if(menu.length==0){

        return "Please enter data first";
    }

   else{
       var menu2=menu.split(",");

       if(menu2.length>3){
           return "Too much!";



       }

       else{

        return "Enjoy!" ;
       }







   }


   /* if(menu.length==0){

        return "Please enter data first"
    }

      else if(menu.length>3){
        return "Too much!";
        
        }
        else{
        
            return "Enjoy!" ;
        }*/
}

}})();
