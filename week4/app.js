let button = document.getElementById("activity")

button.onclick = ()=> {
    const api_url = "http://www.boredapi.com/api/activity/"
    async function getActivity() {
        const response = await fetch(api_url);
        const data = await response.json();
        document.getElementById("result").innerHTML = data.activity;
    }
    getActivity()
}