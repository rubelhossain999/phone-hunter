
// Load Data from api
const loadPhoneData = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const dataPhone = await res.json();
    getThephoneData(dataPhone.data);
}

const getThephoneData = phones =>{
    const phoneID = document.getElementById('phones-all');
    phones.forEach(phone => {
        console.log(phone.image);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
         <div class="col">
         <div class="card">
             <img src="${phone.image}" class="card-img-top p-5" alt="...">
             <div class="card-body">
             <h5 class="card-title">${phone.phone_name}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
         </div>
         </div>
        `;
        phoneID.appendChild(createDiv);
    });
}

loadPhoneData()