function canBalance(arr){
   let count= 0;
   let counters = 0;
   let countall=0;
   
   
   
   
      
      for(let i=0; i<arr.length; i++){
   count+=arr[i];
   } 
   for(let j=0 ;j<arr.length; j++){
   counters+=arr[j];
   countall=count-counters;
   
   
   
   if(counters===countall){
   return true
   
   }}
     return false;
}   



