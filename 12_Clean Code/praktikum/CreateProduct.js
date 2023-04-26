document.getElementById("selesai").addEventListener("click", function () {
    var productName = document.getElementById("namaproduk").value;
    var productCategory = document.getElementById("kategoriproduk").value;
    var imageProduct = document.getElementById("gambarproduk").value;
    var productFreshness = document.querySelector(
      'input[name="kondisiproduk"]:checked'
    );
    var additionalDescription = document.getElementById(
      "deskripsiproduk"
    ).value;
    var productPrice = document.getElementById("hargaproduk").value;
  
    if (productName == "" || productPrice == "") {
      alert("Please enter a valid Product name and price.");
    } else {
      if (productName.length > 25) {
        alert("Product Name must not exceed 25 characters.");
      }
    }
  
    if (productName === "") {
      alert("The Product Name field must be filled in.");
      return;
    } else if (/[**@/#{}**]/.test(productName)) {
      alert("Name must not contain symbols.");
      return;
    }
  
    if (productCategory === "") {
      alert("The Product Category field must be filled in.");
      return;
    }
    if (imageProduct === "") {
      alert("The Image of Product field must be filled in.");
      return;
    }
    if (!productFreshness) {
      alert("The Product Freshness field must be filled in.");
      return;
    }
    if (additionalDescription === "") {
      alert("The Additional Description field must be filled in.");
      return;
    }
    if (productPrice === "") {
      alert("The Product Price field must be filled in.");
      return;
}})