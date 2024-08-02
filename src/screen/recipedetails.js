
import Navbar from "../navbar/navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Card, Container, Row, Col,  } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const RecipeDetails = () => {
    const { RecipiId } = useParams();
    const [recipedetails, setRecipedetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, [RecipiId]);

    const fetchRecipes = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/recipes/${RecipiId}`);
            console.log(data);
            setRecipedetails(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return (
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={6} className="text-center">
                        <h4>Please wait, data is loading...</h4>
                        <Spinner animation="border" />
                    </Col>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={6} className="text-center">
                        <h4>Failed to fetch recipe details. Please try again later.</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
  
    
    return (
        
       
       <>
       <Navbar/>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center">{recipedetails.name}</Card.Title>
                            <Card.Text className="text-center">
                                <img
                                    src={recipedetails.image}
                                    alt={recipedetails.name}
                                    className="img-fluid rounded mb-3"
                                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                                />
                                <h5>Rating: {recipedetails.rating}</h5>
                                <h5>Cuisine: {recipedetails.cuisine}</h5>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <h6>ID: {recipedetails.id}</h6>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container></>
    );
};

export default RecipeDetails;
