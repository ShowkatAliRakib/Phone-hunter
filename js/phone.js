const main = document.getElementById("main")
const searchbtn = () => {
    document.getElementById("details-container").innerHTML = "";
    main.innerHTML = ""
    const inputValue = document.getElementById("input-value").value;
    const error = document.getElementById("error");





    if (inputValue == " ") {
        error.innerText = "Please Search Phone";


        input.value = " ";
        main.innerHTML = "";
    } else {
        main.innerHTML = "";
        error.innerHTML = "";
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
            .then(res => res.json())
            .then(data => phoneDetails(data.data.slice(0, 20)))


        input.value = " ";
        error.innerHTML = "";
    }

}

const phoneDetails = (phones) => {
    // console.log(phones);

    for (const phone of phones) {
        // console.log(phone);

        const div = document.createElement("div");
        div.classList.add("cols-1")
        div.classList.add("col-lg-4")
        div.classList.add("cols-md-6")



        div.innerHTML = `
        <div class="col mt-3">
                <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top " alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> Name: ${phone.phone_name}</h5>
                        <p class="card-text"> <h5>Brand: ${phone.brand}</h5> </p>
                        <button onclick="details('${phone.slug}')" class="btn btn-primary">See Details</button>
                    </div>
                </div>
        `;
        main.appendChild(div)
    }
};


const details = (phoneId) => {

    const error = document.getElementById("error").innerHTML = "";

    // console.log(phoneId);

    fetch(` https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => setDetails(data.data))

    document.getElementById("details-container").innerHTML = "";

}


const setDetails = (phone) => {
    // console.log(phone);

    const detailsContainer = document.getElementById("details-container")
    const div = document.createElement("div");

    div.innerHTML = `
        <div class="col mt-3 ">
                <div class="card" style="width: 40rem;">
                    <img src="${phone.image}" class="card-img-top "style="width: 18rem;" alt="...">
                    <!-- <div class="">
                        <h5 class="card-title"></h5>
                        <p class="card-text"> <h5>Brand: ${phone.brand}</h5> </p>
                        <p>storage: ${phone.mainFeatures.storage}</p> -->
                        
                        
                        <table class="table caption-top ">

<tbody>
    <tr>
        <th scope="row"> Name: </th>
        <td>${phone.name}</td>

    </tr>
    <tr>
        <th scope="row">Brand: </th>
        <td>${phone.brand}</td>

    </tr>
    <tr>
        <th scope="row">Storage:</th>
        <td>${phone.mainFeatures.storage}</td>

    </tr>
    <tr>
        <th scope="row">DisplaySize:</th>
        <td>${phone.mainFeatures.displaySize}</td>

    </tr>
    <tr>
        <th scope="row">ChipSet:</th>
        <td>${phone.mainFeatures.chipSet}</td>

    </tr>
    <tr>
        <th scope="row">Memory:</th>
        <td>${phone.mainFeatures.memory}</td>

    </tr>
    <tr>
        <th scope="row">ReleaseDate:</th>
        <td>
            (${phone.mainFeatures.releaseDate?phone.mainFeatures.releaseDate:'no found'})

        </td>
       

    </tr>
    <tr>
        <th scope="row">Sensors:</th>
        <td>${phone.mainFeatures.sensors}</td>

    </tr>
    <tr>
        <th scope="row">Others:</th>
        <td><p>
           WLAN: (${phone.others.WLAN?phone.others.WLAN:'no found'})<br>
      Bluetooth: (${phone.others.WLAN?phone.others.Bluetooth:'no found'})<br>
            GPS: (${phone.others.WLAN?phone.others.GPS:'no found'})<br>
            NFC: (${phone.others.WLAN?phone.others.NFC:'no found'})<br>
          Radio: (${phone.others.WLAN?phone.others.Radio:'no found'})<br>
          USB: (${phone.others.WLAN?phone.others.USB:'no found'})<br>
     
           
        </p>
        </td>

    </tr>
   
</tbody>
</table>
                      
                    </div>
                </div>
        `;
    detailsContainer.appendChild(div)
};