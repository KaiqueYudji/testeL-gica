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
                planObject[p.id_plan] = {[country]:country};
              }else{
                  if(!planObject[p.id_plan]){
                    planObject[p.id_plan] = {[country]:country};
                  }else{
                      planObject[p.id_plan] = [planObject[p.id_plan]].concat({[country]:country});  
                  }
              } 
                          
            }); 
      }
     
    return planObject;
}





//PRECISA DE MELHORA
const betterPlans = (plans,destinyCountry) => {
  console.log(plans)
  let qtdCountries = destinyCountry.length;
  let qtdPlan = Object.keys(plans[0]).length;//this code is counting thr quantity of fields that I have in my object
  let searchPlan = [];
  

  for(let i = 0; i < qtdPlan; i++){
        if(qtdCountries === 2 && i === 2){
            searchPlan.push(...(plans[0].filter(element => console.log(element) )))
        }
        

        else if(qtdCountries === 3)
        searchPlan.push( ...(plans.filter(p => p[plans[i]] === destinyCountry[0]   &&   p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[2]  ) ) );

        else if(qtdCountries === 4)
        searchPlan.push( ...(plans.filter(p =>p[plans[i]] === destinyCountry[0]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[2]    &&   p[plans[i]] === destinyCountry[3]  ) ) );

        else if(qtdCountries === 5)
        searchPlan.push( ...(plans.filter(p =>p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]   &&    p[plans[i]] === destinyCountry[1]) ) );

        else if(qtdCountries === 6)
        searchPlan.push( ...(plans.filter(p =>p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]     &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]  ) ) );

        else if(qtdCountries === 7)
        searchPlan.push( ...(plans.filter(p => p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&   p[plans[i]] === destinyCountry[1]     &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]  ) ) );

        else if(qtdCountries === 8)
        searchPlan.push( ...(plans.filter(p => p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&   p[plans[i]] === destinyCountry[1]     &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1]    &&    p[plans[i]] === destinyCountry[1] ) ) );
  }
       

   return searchPlan;
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
}

guidedSelling(["Estados Unidos","Canada"])




