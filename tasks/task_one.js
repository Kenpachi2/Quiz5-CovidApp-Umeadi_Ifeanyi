
// Write something
let container = document.getElementById('genCon')

let api = 'https://disease.sh/v3/covid-19/countries'
let list = []

async function getCovidData(){
    try{
        let response = await fetch(api)
        const data = await response.json()

        // list.push(data)

        data.forEach(country =>{
            let card = document.createElement('div')
            let flag = document.createElement('img')
            let name = document.createElement('h2')
            let continent = document.createElement('h3')

            let overlay = document.createElement('div')

            flag.src = country.countryInfo.flag
            name.textContent = `Country:${country.country}`
            continent.innerText = `Continent:${country.continent}`
            
            card.append(flag,name,continent,overlay)
            card.className = 'card'
            flag.className = 'flag'
            
            container.append(card)
            
            overlay.className = 'overlay'
            
            flag.addEventListener('click',()=>{
                overlay.style.display = 'block'
            })


            let overCon = document.createElement('div')
            overCon.className = 'overCon'
            let country2 = document.createElement('h1')
            let countryPop = document.createElement('p')
            let reported = document.createElement('p')
            let totalReported = document.createElement('p')
            let deathCount = document.createElement('p')
            let recovered = document.createElement('p')
            let btn = document.createElement('button')
            btn.textContent = 'X'
            btn.className = 'closeBtn'

            btn.addEventListener('click',()=>{
                overlay.style.display = 'none'
            })

            country2.innerText = `Country:${country.country}`
            countryPop.innerText = `Population : ${country.population}`
            reported.innerText = `Reported cases: ${country.todayCases}`
           totalReported.innerText = `Reported cases: ${country.cases}`
            deathCount.innerText = `Reported cases: ${country.deaths}`
           recovered.innerText = `Reported cases: ${country.recovered}`

           overCon.append(country2,countryPop,reported,totalReported,deathCount,recovered,btn)

           overlay.appendChild(overCon)

        })



    }catch(error){

    }


}
getCovidData()