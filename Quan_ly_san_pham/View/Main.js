let store = new Store();
// function main(){
//     let product = new Product (1, "Laptop", 5, 10000);
//     store.add(product);
//     console.log(store)
// }
// main()

function showAll(){
    let productOfstore = store.findAll();
    let str = ``;
    for (let i = 0; i < productOfstore.length ; i++) {
        str += `
        <tr>
        <td>${productOfstore[i].id}</td>
        <td>${productOfstore[i].name}</td>
        <td>${productOfstore[i].quantity}</td>
        <td>${productOfstore[i].price}</td>
        <td><button style="background: #e01818" onclick="remove(${i})">Remove</button></td>
        <td><button style="background: #1616a4"  onclick="showFormEdit(${i})">Edit</button></td>
        </tr>
        `
    }
    document.getElementById("product").innerHTML = str;
}

function add(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let quatity = document.getElementById("quatity").value;
    let price = document.getElementById("price").value;
    let newProduct = new Product (id, name, quatity, price);
    store.add(newProduct);
    console.log(store)
    alert("Add Success");
    showAll()
    document.getElementById('form-add').innerHTML = '';
}

function showFormAdd(){
    document.getElementById("form-add").innerHTML = `<center>
    <h1>Add Product</h1>
    <table>
        <tr>
            <td>ID</td>
            <td><input type="number" id="id"></td>
        </tr>
        <tr>
            <td>Name</td>
            <td><input type="text" id="name"></td>
        </tr>
        <tr>
            <td>Quatity</td>
            <td><input type="number" id="quatity"></td>
        </tr>
        <tr>
            <td>Price</td>
            <td><input type="number" id="price"></td>
        </tr>
        <tr>
            <th colspan="2" onclick="add()"><button>Add</button></th>
        </tr>
    </table>
</center>`;
}

function remove(index){
    let isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm này?")
    if (isConfirm){
        store.remove(index)
        showAll()
    }
}

function edit(index){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let quatity = document.getElementById("quatity").value;
    let price = document.getElementById("price").value;
    let newProduct = new Product (id, name, quatity, price);
    store.edit(index, newProduct);
    alert("Edit Success");
    showAll();
    document.getElementById('form-edit').innerHTML = '';

}

function showFormEdit(index){ // 0
    let listProduct = store.findAll();
    console.log(listProduct[index])
    let productEdit = listProduct[index];
    document.getElementById("form-edit").innerHTML = `<center>
    <h1>Edit Product</h1>
    <table>
        <tr>
            <td>ID</td>
            <td><input type="number" id="id" value="${productEdit.id}"></td>
        </tr>
        <tr>
            <td>Name</td>
            <td><input type="text" id="name" value="${productEdit.name}"></td>
        </tr>
        <tr>
            <td>Quatity</td>
            <td><input type="number" id="quatity" value="${productEdit.quantity}"></td>
        </tr>
        <tr>
            <td>Price</td>
            <td><input type="number" id="price" value="${productEdit.price}"></td>
        </tr>
        <tr>
            <th colspan="2" onclick="edit(${index})"><button>Edit</button></th>
        </tr>
    </table>
</center>`;

}
