document.getElementById('search-button').addEventListener('click', function name(params) {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    // Api start 
    let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(respons => respons.json())
        .then(data => displyPhone(data.data))

});

const displyPhone = (phones) => {

    // error case 
    if (phones == false) {
        document.getElementById('error-case').style.display = 'block'
    }
    else {
        document.getElementById('error-case').style.display = 'none'
        let divContainer = document.getElementById('phone-container')
        divContainer.textContent = '';
        for (let phone of phones.slice(0, 20)) {
            let div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `<div class="card p-4 rounded-3">
        <img  src="${phone.image}" class="card-img-top w-50 mx-auto bg-warning" alt="...">
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
    }
};

let showDetails = (phoneId) => {
    let url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(respons => respons.json())
        .then(data => showDispleDetails(data.data))
}

//  showDetails disply 
let showDispleDetails = (details) => {
    console.log(details);

    let showDisplyDiv = document.getElementById('show-details')
    showDisplyDiv.textContent = '';
    showDisplyDiv.innerHTML = `
        <div class="card p-3" style="width: 18rem;">
        <img src="${details.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
          <p class="card-title"><span class="fw-bold">ChipSet:</span> ${details.mainFeatures.chipSet}</hp>
          <p>${details.mainFeatures.displaySize}</p>
          <p> <span class="fw-bold">Demory:</span>${details.mainFeatures.memory}</p>
          <p> <span class="fw-bold"> ReleaseDate: </span> ${details.releaseDate ? details.releaseDate : 'ReleseDate Not Found'}</p>
          <p><span class="fw-bold">Sensors:</span> ${details.mainFeatures.sensors}</p >
          <p><span class="fw-bold">Bluetooth:</span> ${details.others?.Bluetooth ? details.others.Bluetooth : 'Not Found'}</p >
          <p><span class="fw-bold">GPS:</span> ${details.others?.GPS ? details.others.GPS : 'Not Found'}</p >
          <p><span class="fw-bold">NFC:</span> ${details.others?.NFC ? details.others.NFC : 'Not Found'}</p >
          <p><span class="fw-bold">Radio:</span> ${details.others?.Radio ? details.others.Radio : 'Not Found'}</p >
          <p><span class="fw-bold">USB:</span> ${details.others?.USB ? details.others.USB : 'Not Found'}</p >
          <p><span class="fw-bold">WLAN:</span> ${details.others?.WLAN ? details.others.WLAN : 'Not Found'}</p >


        </div >
      </div >
        `;
}
