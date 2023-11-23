const API_URL = "http://localhost:3000/movies";

async function getInfo() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error en GET: ", error);
    }
}

async function createInfo() {
    try {
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: "Name of the Movie 3",
                recaudacion_millones: 121,
                ganancias_millones: 55,
                secuela: false
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error en POST: ", error);
    }
}

async function modififyInfo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: "Modified Movie Name",
                recaudacion_millones: 120,
                ganancias_millones: 60,
                secuela: false
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error en PUT: ", error);
    }
}

async function eliminateInfo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error en DELETE: ", error);
    }
}

getInfo();
