// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    
 //this gets initialised to zero 
    uint256 public number ;
    People public person = People({ _number : 2 , name : "prabhdeep"}) ; // here we set the object called people to be public and then we named it as person and gave the input of the data  
   
    function store(uint256  favouriteNumber) public virtual { // virtual means that the finction is overidable 
        number = favouriteNumber ;  // higher the stuff to be computed (inside function), more gas fees will be charged 
    }                  
    

    function retrieve() public view returns( uint256){
        return number ; // it calls a function , gas is not charged when a function is readed only 
    }
 
  
     struct People {     // here we create a object(collection of data ) which will contain 2 variables , ie name and number 
       uint256 _number ; 
       string name ; 
    }

   People[] public dataofpeople ; // here we created a list named "dataofpeople"
  //NOW WE WILL CREATE A FUNCTION TO ADD THE DATA TO THE LIST
  //public keyword is used so that it displayed publically 

    //mapping is another way  of storing data 

   mapping( string => uint256) public nameToNumber ; 
   //in this mapping every string points to a particular integer , name of this is nameToNumber
   

   function addpersons(string memory name , uint256 _number) public {
     People memory newinput = People(_number , name) ;//taking input whose name is newinput , we take 2 variable as input ie _number and _name
      dataofpeople.push(newinput) ; //inserting the newinput in the list(name of list is dataofpeople ) 
     nameToNumber[name] = _number ; // here we take the input in map and we map name to a number 
   }                                // this is similar to dictionary in python 
   
  



 
}