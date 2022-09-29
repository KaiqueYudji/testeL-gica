const tb_eSim_roof = require("./datas.json")


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
                planObject[p.id_plan] = {[country]:p.priority};
              }else{
                  if(!planObject[p.id_plan]){
                    planObject[p.id_plan] = {[country]:p.priority};
                  }else{
                      planObject[p.id_plan] = [planObject[p.id_plan]].concat(  {[country]:p.priority});  
                  }
              } 
                          
            }); 
      }
 
      //I don´t need return aa array, but i want to use the operator spread so I'll return an array
    let final = [planObject]
    return final;
}





//PRECISA DE MELHORA
const betterPlans = (plans,destinyCountry) => {
  let betters = [];
  let priorities = []

    if(destinyCountry.length === 1){
        plans.forEach(plan => {
          betters.push({
            priority:plan.priority.length,
            id_plan:plan.id_plan
          })

          priorities.push(plan.priority.length)
        })

        let theBest = Math.max(...priorities);
        return betters.find(plan => plan.priority === theBest)
    }  

    else{
        plans.forEach(plan => {
          betters.push({
            priority:plan.priority.length,
            id_plan:plan.id_plan
          })

          priorities.push(plan.priority.length)
        })

        let theBest = Math.max(...priorities);
        return betters.find(plan => plan.priority === theBest)
      }

 
}




function guidedSelling(destinyCountry){
  let searchPlan = [];

      if(destinyCountry.length === 1){
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0].toLowerCase()) !== -1 )) )
      }  
      else{
        searchPlan.push( ...FilteringPlans(destinyCountry) );
      }                          

  console.log(searchPlan);    
  //let result = betterPlans(searchPlan,destinyCountry);
  

}

guidedSelling(["Estados Unidos","Canada"])




