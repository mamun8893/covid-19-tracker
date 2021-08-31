const message = document.getElementById("message");

document.getElementById("search-btn").addEventListener("click", function() {
    const loading = document.getElementById("loading");
    const inputField = document.getElementById("input-field");
    const countryName = inputField.value;
    inputField.value = "";
    const url = `https://api.covid19api.com/total/country/${countryName}`;

    if (countryName == "") {
        message.innerText = "Please Enter Your Country Name";
        message.style.color = "red";
    } else {
        loading.style.display = "block";
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayData(data, countryName));
    }
});

const displayData = (data, countryName) => {
    const latestData = data[data.length - 1];
    console.log(latestData);
    const loading = document.getElementById("loading");
    const searchResult = document.getElementById("covid-result");
    if (Array.isArray(data) == false) {
        message.innerText = `Sorry ${countryName}  is not found.`;
        message.style.color = "red";
        loading.style.display = "none";
    } else if (Array.isArray(data)) {
        message.innerText = `Result: ${latestData.Country}`;
        message.style.color = "yellow";
        searchResult.innerHTML = `
    <div class="item">
         <h4>Country: ${latestData.Country}</h4>
    </div>
     <div class="item">
         <h4>Total Cases: ${latestData.Confirmed}</h4>
    </div>
    <div class="item">
        <h4>Total Recovery: ${latestData.Active}</h4>
    </div>
    <div class="item">
         <h4>Total Deaths: ${latestData.Deaths}</h4>
    </div>
    `;
        loading.style.display = "none";
    }
};