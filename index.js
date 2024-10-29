const url = "https://fakestoreapi.com/products"

let table = document.createElement("table")
let thead = document.createElement("thead")
let tr1 = document.createElement("tr")
let arr = ["id", "title", "price", "description", "category", "image",  "rating" ]

for(let element of arr){
    let th = document.createElement("th")
    th.innerText = element
    tr1.appendChild(th)
}
let tbody = document.createElement("tbody")

let getData = async () => {
    let res = await fetch(url)
    let data = await res.json()
    for(let obj of data){
        let tr2 = document.createElement("tr")
        for(let key in obj){
            let td = document.createElement("td")
            if(key === "rating"){
                 td.innerText = `${obj[key]["rate"]}- (${obj[key]["count"]})`
            }
            else if(key === "image"){
                let img = document.createElement("img")
                img.src = obj[key];
                td.appendChild(img);
            }
            else{
                td.innerText=obj[key]
            }
            tr2.appendChild(td)
        }
        tbody.appendChild(tr2)
    }
    appendData();
}
getData();

function appendData(){
thead.append(tr1);
table.append(thead,tbody);
document.body.appendChild(table);

}