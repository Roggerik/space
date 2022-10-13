function crearDatos(valor){
    
    async function obtenerDatos(){
        const data = await fetch('data.json');
        const json = await data.json();
        const cont = json.destinations.length;
        const contA = json.crew.length;
        const contB = json.technology.length
        console.log(contB);
        if (valor!=""){
            for(i = 0 ; i < cont; i++){
            
                if(json.destinations[i]["name"] == valor){
        
                    const container = document.querySelector('.section__rigth');    
    
                    const div1 = document.createElement('div');
                        div1.classList.add('container__texto');
                
                    const titleR = document.createElement('h2');
                        titleR.innerHTML = json.destinations[i]["name"];
                        titleR.classList.add('title_rigth');
                
                    const descR = document.createElement('p');
                        descR.innerHTML = json.destinations[i]["description"];
                        descR.classList.add('description');
                
                    const sectionInfo = document.createElement('section');
                        sectionInfo.classList.add('section__info');
    
                    const divInfoLeft = document.createElement('div');
                        divInfoLeft.classList.add('info__left');
        
                    const distance = document.createElement('h2');
                        distance.innerHTML = "Avg. distance"
                        distance.classList.add('title__info');
        
                    const distanceNum = document.createElement('p');
                        distanceNum.innerHTML = json.destinations[i]["distance"];
                        distanceNum.classList.add('distance');
        
        
                    const divInfoRight = document.createElement('div');
                        divInfoRight.classList.add('info__right');
                    
                    
                    const titleTravel = document.createElement('h2');
                        titleTravel.innerHTML = "Est. Travel time"
                        titleTravel.classList.add('title__info');
        
                    const travelNum = document.createElement('p');
                        travelNum.innerHTML = json.destinations[i]["travel"];
                        travelNum.classList.add('travel');
                    
    
                    container.appendChild(div1);   
                        div1.appendChild(titleR);
                        div1.appendChild(descR);
                    
                    container.appendChild(sectionInfo);
                        sectionInfo.appendChild(divInfoLeft);
                            divInfoLeft.appendChild(distance);
                            divInfoLeft.appendChild(distanceNum);
        
                        sectionInfo.appendChild(divInfoRight);
                            divInfoRight.appendChild(titleTravel);
                            divInfoRight.appendChild(travelNum);
                };
        
            };
            
            for(i = 0 ; i < contA; i++){
            
                if(json.crew[i]["role"] == valor){

                    const contAstro = document.querySelector('.section__text');

                    const roleA = document.createElement('h2');
                        roleA.classList.add('roleA');
                        roleA.innerHTML = json.crew[i]["role"];
                    
                    const nameA = document.createElement('h3');
                        nameA.classList.add('nameA');
                        nameA.innerHTML = json.crew[i]["name"];
                    
                    const bioA = document.createElement('p');
                        bioA.classList.add('bioA');
                        bioA.innerHTML= json.crew[i]["bio"];

                        contAstro.appendChild(roleA);
                        contAstro.appendChild(nameA);
                        contAstro.appendChild(bioA);
                };
            };

            for(i= 0; i < contB; i++){
                if(json.technology[i]["name"]== valor){
                    
                    const contTech = document.querySelector('.technology__texto');

                    const nameT = document.createElement('h2');
                        nameT.classList.add('nameT');
                        nameT.innerHTML = json.technology[i]["name"];

                    const descriptionT = document.createElement('p');
                        descriptionT.classList.add('descriptionT');
                        descriptionT.innerHTML = json.technology[i]["description"];

                    contTech.appendChild(nameT);
                    contTech.appendChild(descriptionT);
                }
            }

        }

    };
    obtenerDatos();
};

const menuH = document.querySelector('.hamburguerMenu');
const navM = document.querySelector('.menu__navbar');

menuH.addEventListener('click',()=>{
    menuH.classList.toggle('activarMenu');
    navM.classList.toggle('activarNav');
    
})