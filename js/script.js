document.getElementById("search-btn").addEventListener("click", function() {
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    inputField.value = "";
    const url = `https://api.covid19api.com/total/country/${inputFieldValue}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data));
});

const displayData = (data) => {
    console.log(data);
    const latestData = data[data.length - 1];
    const searchResult = document.getElementById("covid-result");
    searchResult.innerHTML = `
     <div class="item">
         <h4>Total Cases:${latestData}</h4>
    </div>
    <div class="item">
        <h4>Total Recovery:</h4>
    </div>
    <div class="item">
         <h4>Total Deaths:</h4>
    </div>
    `;
};