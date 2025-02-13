var productName=document.getElementById("name");
var productPrice=document.getElementById("price");
var productCategory=document.getElementById("category");
var productDesc=document.getElementById("desc");
var productSearch=document.getElementById("search");
var mainBtn=document.getElementById("mainBtn");
var allProduct;


if(localStorage.getItem("product")==null){
    allProduct=[];
}else{
    allProduct=JSON.parse(localStorage.getItem("product"));
    displayProduct(allProduct);
}

// localStorage.removeItem("product");


function addProduct(array){
    
    if(mainBtn.innerHTML=="Update Product"){
        addUpdate();
        
    }else{

    if(productName.value!=""){

    var product={
        pName:productName.value,
        pPrice:productPrice.value,
        pCategory:productCategory.value,
        pDesc:productDesc.value
    }

    array.push(product);

    localStorage.setItem("product",JSON.stringify(array));
    
    mainBtn.innerHTML="Add";

    displayProduct(array);
    // clear();
}
    }
}

addProduct(allProduct);

function displayProduct(array){

    var storage=``;

    for(var i=0;i<array.length;i++){
                storage+=`<tr>
                <td>${(i+1)}</td>
                <td>${array[i].pName}</td>
                <td>${array[i].pPrice}</td>
                <td>${array[i].pCategory}</td>
                <td>${array[i].pDesc}</td>
                <td><button style="border-style: none; background-color: orange;" onclick=updatePro(${i})>Update</button></td>
                <td><button style="background-color: red; border-style: none;" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;
    }

    document.getElementById("tbody").innerHTML=storage;

}

displayProduct(allProduct);


function clear(){

    productName.value='';
    productPrice.value='';
    productCategory.value='';
    productDesc.value='';

}

function deleteProduct(index){
    allProduct.splice(index,1);
    localStorage.setItem("product",JSON.stringify(allProduct));
    displayProduct(allProduct);
}


function searchPro(term){

    term=term.toLowerCase();
    var searchContianer=[];

        for(var i=0;i<allProduct.length;i++){
            if(allProduct[i].pName.toLowerCase().includes(term)==true){
                searchContianer.push(allProduct[i]);
            }
        }
        displayProduct(searchContianer);
    
}


function updatePro(index){
    
    var update=``;

    for(var i=0;i<allProduct.length;i++){
        if(allProduct[index]==allProduct[i]){
            productName.value=allProduct[index].pName;
            productPrice.value=allProduct[index].pPrice;
            productCategory.value=allProduct[index].pCategory;
            productDesc.value=allProduct[index].pDesc;

            mainBtn.innerHTML="Update Product";

            allProduct[index].pName="";
            allProduct[index].pPrice="";
            allProduct[index].pCategory="";
            allProduct[index].pDesc="";
            displayProduct(allProduct);
        }
    }
    
}


function addUpdate(){
    
    for(var i=0;i<allProduct.length;i++){
        if(allProduct[i].pName==""){
            console.log("66666666");
        }else{
            console.log("55555555");
            
        }
    
    }

}

