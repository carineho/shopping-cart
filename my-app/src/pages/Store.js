import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard';

// the () parenthesis in map means expecting to return jsx element
// product is the property and {product} is the one we are mapping over
function Store() {
    return (
        <>
        <h1 align="center" className="p-3"> Welcome to the store! </h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Store;