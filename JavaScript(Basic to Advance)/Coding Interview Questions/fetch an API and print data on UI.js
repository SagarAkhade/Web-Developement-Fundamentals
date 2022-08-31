
const url = "https://fakestoreapi.com/products";

async function getTitle() {
    const responce = await fetch(url);
    if (!responce.ok) {
        throw new Error("Something went wrong");
    }
    const data = await responce.json();
    return data;
}

getTitle().then((data) =>{
    data.map((element)=>{
        console.log(element.title);
        const div = document.createElement("div");
        div.innerHTML = element.title
        document.body.append(div);
    })
})
    .catch((error) => console.log(error));

//Output : All data of table are printed on Browser
