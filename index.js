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
                planObject[p.id_plan] = [country];
              }else{
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
  let qtdPlan = Object.keys(plans[0]).length;//this code is counting thr quantity of fields that I have in my object
  let betterPlan = [];

  for(let i = 0; i < qtdPlan; i++){


            if(qtdCountries === 1 && i === 0){
              Object.keys(...plans).forEach(cobertura => {
            
              if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1 )
              betterPlan.push(cobertura)

            })
          }
    

          if(qtdCountries === 2 && i === 2){
              Object.keys(...plans).forEach(cobertura => {
            
              if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1 && plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1 )
              betterPlan.push(cobertura)

            })
          }
          

          else if(qtdCountries === 3 && i === 3){
              Object.keys(...plans).forEach(cobertura => {
            
              if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1 )
              betterPlan.push(cobertura)

            })
          }


          else if(qtdCountries === 4 && i === 4){
            Object.keys(...plans).forEach(cobertura => {
          
            if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1 &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1 &&   plans[0][cobertura].indexOf(destinyCountry[3].toLowerCase()) !== -1 )
            betterPlan.push(cobertura)

          })
        }


          else if(qtdCountries === 5 && i === 5){
            Object.keys(...plans).forEach(cobertura => {
          
            if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[3].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[4].toLowerCase()) !== -1 )
            betterPlan.push(cobertura)

          })
        }


          else if(qtdCountries === 6 && i === 6){
            Object.keys(...plans).forEach(cobertura => {
          
            if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[3].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[4].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[5].toLowerCase()) !== -1 )
            betterPlan.push(cobertura)

          })
        }


          else if(qtdCountries === 7 && i === 7){
            Object.keys(...plans).forEach(cobertura => {
          
            if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[3].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[4].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[5].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[6].toLowerCase()) !== -1 )
            betterPlan.push(cobertura)

          })
        }

        
          else if(qtdCountries === 8 && i === 8){
            Object.keys(...plans).forEach(cobertura => {
          
            if(plans[0][cobertura].indexOf(destinyCountry[0].toLowerCase()) !== -1   &&   plans[0][cobertura].indexOf(destinyCountry[1].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[2].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[3].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[4].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[5].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[6].toLowerCase()) !== -1  &&   plans[0][cobertura].indexOf(destinyCountry[7].toLowerCase()) !== -1 )
            betterPlan.push(cobertura)

          })
        }

  }
       

   return betterPlan;
}




function guidedSelling(destinyCountry){
  let searchPlan = [];

      if(destinyCountry.length === 1){
        searchPlan.push(FilteringPlans(destinyCountry))
      }  
      else{
        searchPlan.push(FilteringPlans(destinyCountry));
      }                          
  
  let result = betterPlans(searchPlan,destinyCountry);
  console.log(result)
}

guidedSelling(["Estados unidos"])




