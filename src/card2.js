
import "./card2.css";
import BasicProgress from "./components/bootstrap/progress";

const Card2 = () => {
    // Sample data (you can replace this with props or state if needed)
    const product = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    };
    const Calucalator=(input)=>{
        const base=1000
        let percentage=(input/base)*100
        return percentage;
    }

    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-description">{product.description}</p>
                <p className="card-category">{product.category}</p>
                <p className="card-price">${product.price.toFixed(2)}</p>
                <div className="card-rating">
                    <span>Rating: {product.rating.rate}</span> 
                    <span>({product.rating.count} reviews)</span>
                </div>
            </div>
            <BasicProgress scale = {Calucalator(product.price.toFixed(2)) }></BasicProgress>
        </div>
    );
};

export default Card2;