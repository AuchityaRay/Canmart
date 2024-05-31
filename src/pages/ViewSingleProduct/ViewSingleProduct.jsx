import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../commonComponents/Footer";
import ViewProduct from "../ViewProduct/ViewProduct";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInitialData } from "../../actions/initialDataAction";
import { useEffect } from "react";
import SimilarProducts from '../../components/Product/SimilarProducts'

const ViewSingleProduct = () => {

  const {id} = useParams();

  return (
    <div>
      <Navbar showSearchBar={false} />
      <ViewProduct id={id} />
      <SimilarProducts/>
      <Footer />
    </div>
    // <div></div>
  );
};
export default ViewSingleProduct;
