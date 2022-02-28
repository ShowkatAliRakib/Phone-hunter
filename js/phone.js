const searchbtn = () => {

    const input = document.getElementById("input-value");
    const inputValue = input.value;







    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => phoneDisplay(data))


}





const phoneDisplay = (data) => {
    console.log(data);
}