import ProductDetail from "../features/product/components/ProductDetail";
import Navbar from "../features/navbar/Navbar";


function ProductDetailPage(){
    return(
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
    )
}

export default ProductDetailPage;