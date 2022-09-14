
// Load Data from api
const loadPhoneData = async(searchFieldValue) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`;
    const res = await fetch(url);
    const dataPhone = await res.json();
    getThephoneData(dataPhone.data);
}

const getThephoneData = phones =>{
    const phoneID = document.getElementById('phones-all');
    phoneID.innerText = '';
    phones.forEach(phone => {
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
            <div class="container mb-3">
              <div class="row">
                <div class="col-md-6">Brand Name: <b>${phone.brand}</b></div>
                <div class="col-md-6"><button type="button" class="btn btn-info">See Details</button></div>
              </div>
            </div>
         </div>
         </div>
        `;
        phoneID.appendChild(createDiv);
    });
}

// Search Button 
document.getElementById('search-btn').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const searchFieldValue =searchField.value;
  loadPhoneData(searchFieldValue);
});

loadPhoneData()