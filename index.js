const tb_eSim_roof = require("./datas.json")
const valuePlans = require("./plan.json")


function FilteringPlans(destinyCountry){
   let planObject = new Object();
   let count = destinyCountry.length;
   
   let i2 = 0;
    for(let i = 0; i < count; i++){
          let plan = tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[i].toLowerCase()) !== -1) ;
    
          plan.forEach(p => {
              let country = destinyCountry[i].toString().toLowerCase();
              i2++;
              
              if(i2 === 1){
                planObject[p.id_plan] = [country];
              }

              else{
                  if(!planObject[p.id_plan]){
                    planObject[p.id_plan] = [country];
                  }else{
                      planObject[p.id_plan] = planObject[p.id_plan].concat(country);  
                  }
              } 
                          
            }); 
      }
     
      //console.log(planObject)
    return planObject;
}





//PRECISA DE MELHORA

const betterPlans = (plans,destinyCountry) => {
  let qtdCountries = destinyCountry.length;
  let betterPlan = [];
 
  let execut= ""


       for(let i = 0; i < qtdCountries; i++){
         execut += `plans[0][cobertura].indexOf(destinyCountry[${i}].toLowerCase()) !== -1 &&`;
         
         if(i === (qtdCountries - 1) ){
         let request = execut.slice(0,-2);

             Object.keys(...plans).forEach(cobertura => {
                 if(eval(request)){
                   betterPlan.push(cobertura);
                 }
               });
         }
         
       }
       
       
   return betterPlan;
 }



function guidedSelling(destinyCountry){
  let searchPlan = [];
  let theBestPrice = new Array();
  let values = new Array();


      if(destinyCountry.length === 1){
        searchPlan.push(FilteringPlans(destinyCountry));
        let result = betterPlans(searchPlan,destinyCountry);
        let betters = tb_eSim_roof.find((item) => {return (item.id_country === destinyCountry[0].toLowerCase()  &&  item.priority === true)});

        if(!result.find(p => p === "max")){
          return [betters.id_plan]
        }else{
          return ["max", betters.id_plan]
        }
        
      }  
      else{
          searchPlan.push(FilteringPlans(destinyCountry));
          let result = betterPlans(searchPlan,destinyCountry);

           
          result.forEach(element => {
            theBestPrice.push(
              valuePlans.find(p => p.planName === element)
            )
          })  

          
          theBestPrice.map(p => values.push(p.value));
          console.log( theBestPrice.filter(p => p.value === Math.min(...values)  ||  p.planName === "max") ); 
           
      }                          
  
}

let vl = guidedSelling(["canada","estados unidos"]);
console.log(vl)