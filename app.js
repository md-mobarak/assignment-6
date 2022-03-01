document.getElementById('search-button').addEventListener('click', function name(params) {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    // console.log(searchText);

    // Api start 
    let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    console.log(url);
    fetch(url)
        .then(respons => respons.json())
        .then(data => displyPhone(data.data))
});

const displyPhone = (phones) => {
    let divContainer = document.getElementById('phone-container')
    divContainer.textContent = '';
    for (let phone of phones.slice(0, 20)) {
        // console.log(phone);
        let div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card p-4">
        <img  src="${phone.image}" class="card-img-top w-50 ms-5 bg-warning" alt="...">
        <div class="card-body">
            <h4 class="card-title">${phone.brand}</h4>
            <h5>${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            <button onclick="showDetails('${phone.slug}')" class="btn btn-info">Show Details</button>
        </div>
    </div>`
        divContainer.appendChild(div);
    }
};

let showDetails = (phoneId) => {
    let url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    console.log(url);
    fetch(url)
        .then(respons => respons.json())
        .then(data => showDispleDetails(data.data))
}

let showDispleDetails = (details) => {
    console.log(details);

    let showDisplyDiv = document.getElementById('show-details')
    showDisplyDiv.textContent = '';
    showDisplyDiv.innerHTML = `
    <div class="card p-3" style="width: 18rem;">
    <img src="${details.image}" class="card-img-top w-50 mx-auto" alt="...">
    <div class="card-body">
      <p class="card-title">ChipSet: ${details.mainFeatures.chipSet}</hp>
      <p class="card-title">DisplaySize: ${details.mainFeatures.displaySize}</p>
      <p class="card-title">Demory: ${details.mainFeatures.memory}</p>
      <p class="card-text">ReleaseDate: ${details.releaseDate ? details.releaseDate : 'ReleseDate Not Found'}</p>
      <p class="card-text">Sensors: ${details.mainFeatures.sensors}</p >
    </div >
  </div >
    `;
}

let sensorShow = () => {

}