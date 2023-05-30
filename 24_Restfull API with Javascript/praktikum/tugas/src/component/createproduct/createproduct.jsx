import Navbar from "../header/header";
import ListProduct from "./Productlist";
import CreateTable from "./form1";

const CreateProduct = () => {

  return ( 
<div id="create">
  <Navbar/>
  <CreateTable/>
  <ListProduct/>
</div>
  )
};

export default CreateProduct;