const searchbtn = () => {

    const inputValue = document.getElementById("input-value").value;

    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => phoneDisplay(data.data.slice(0, 20)))


}

const phoneDisplay = (phones) => {
    // console.log(phones);

    for (const phone of phones) {
        // console.log(phone);
        const main = document.getElementById("main")
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
                        <button onclick="details('${phone.phone_name}')" class="btn btn-primary">See Details</button>
                    </div>
                </div>
        `;
        main.appendChild(div)
    }
};


const details = (info) => {

    fetch(`https://openapi.programming-hero.com/api/phones?search=${info}`)
        .then(res => res.json())
        .then(data => console.log(data.data[0]))

}


// const setDetails = () => {
//     const detailsContainer = document.getElementById("details-container")
//     const div = document.createElement("div");
//     div.innerHTML = `

//         `;
//     detailsContainer.appendChild(div)
// };