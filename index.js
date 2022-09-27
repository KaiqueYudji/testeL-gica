let tb_eSim_roof = [
    {
      id_eSim_roof:1,
      id_country:"Estados Unidos",
      id_plan:"MegaPack",
      priority:"****"
    },

    {
        id_eSim_roof:1,
        id_country:"Estados Unidos",
        id_plan:"MAX20GB",
        priority:"**"
      },

      {
        id_eSim_roof:1,
        id_country:"Estados Unidos",
        id_plan:"ESPECIAL",
        priority:"**"
      },

      {
        id_eSim_roof:1,
        id_country:"Brasil,Argentina,Canadá,Chile,Costa Rica,Colômbia,El Salvador,Equador,Estados Unidos,Guadalupe,Guatemala,Honduras,México,Nicarágua,Panamá,Peru,Paraguai,Porto Rico,República Dominicana,Uruguai,Alemanha,Albania,Áustria,Belarus,Bélgica,Bulgária,Chipre,Croácia,Dinamarca,Eslováquia,Eslovênia,Espanha,Estônia,Finlândia,França,Grécia,Gibraltar,Holanda,Hungria,Islândia,Ilhas Faroe,Irlanda,Itália,Letônia,Liechtenstein,Lituânia,Luxemburgo,Malta,Montenegro,Noruega,Portugal,Polônia,Inglaterra,Escócia,País de Gales,República Checa,Romênia,Suíça,Suécia,Austrália,Azerbaidjão,Cazaquistão,Coreia do Sul,China,Emirados Árabes,Georgia,Hong Kong,Indonésia,Israel,Malásia,Qatar,Rússia,Singapura,Tailândia,Taiwan,Turquia,Ucrânia,Uzbequistão,Vietnam,Egito", 
        id_plan:"TOP DESTINO",
        priority:"**"
      },

      {
        id_eSim_roof:1,
        id_country:"Estados Unidos,Canadá",
        id_plan:"Global",
        priority:"*"
      },
      {
        id_eSim_roof:1,
        id_country:"Canadá",
        id_plan:"TOP DESTINO",
        priority:"****"
      },
      {
        id_eSim_roof:1,
        id_country:"Canadá",
        id_plan:"ESPECIAL",
        priority:"**"
      },
];


function FilteringPlans(destinyCountry){
   let qtdCountries = destinyCountry.length;
   let searchPlan = [];
      
        if(qtdCountries === 2)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1  ) ) );

        else if(qtdCountries === 3)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1  ) ) );

        else if(qtdCountries === 4)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1    &&    plan.id_country.indexOf(destinyCountry[3]) !== -1  ) ) );
   
        else if(qtdCountries === 5)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1    &&    plan.id_country.indexOf(destinyCountry[3]) !== -1    &&    plan.id_country.indexOf(destinyCountry[4]) !== -1 ) ) );
   
        else if(qtdCountries === 6)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1    &&    plan.id_country.indexOf(destinyCountry[3]) !== -1     &&    plan.id_country.indexOf(destinyCountry[4]) !== -1    &&    plan.id_country.indexOf(destinyCountry[5]) !== -1  ) ) );
        
        else if(qtdCountries === 7)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1    &&    plan.id_country.indexOf(destinyCountry[3]) !== -1     &&    plan.id_country.indexOf(destinyCountry[4]) !== -1    &&    plan.id_country.indexOf(destinyCountry[5]) !== -1    &&    plan.id_country.indexOf(destinyCountry[6]) !== -1  ) ) );

        else if(qtdCountries === 8)
        searchPlan.push( ...(tb_eSim_roof.filter(plan => plan.id_country.indexOf(destinyCountry[0]) !== -1    &&    plan.id_country.indexOf(destinyCountry[1]) !== -1    &&    plan.id_country.indexOf(destinyCountry[2]) !== -1    &&    plan.id_country.indexOf(destinyCountry[3]) !== -1     &&    plan.id_country.indexOf(destinyCountry[4]) !== -1    &&    plan.id_country.indexOf(destinyCountry[5]) !== -1    &&    plan.id_country.indexOf(destinyCountry[6]) !== -1    &&    plan.id_country.indexOf(destinyCountry[7]) !== -1 ) ) );
   
    
    return searchPlan;
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
  let searchPlan;


      if(destinyCountry.length === 1){
        searchPlan = FilteringPlans(destinyCountry);
      }  
      else{
        searchPlan = FilteringPlans(destinyCountry);
      }                          

   console.log(searchPlan)
  let result = betterPlans(searchPlan,destinyCountry);
  console.log(result);  

}

guidedSelling(["Estados Unidos","Canadá"])




