import React from 'react';
import { Card, CardBody, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import Header from './HeaderComponent';

function RenderPortfolioItem({album}){
    return(
        <FadeTransform 
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card> 
                <Link to={`/portfolio/${album.id}`}>
                <CardImg width="100%" src={album.image} alt={album.name} /></Link>
                <CardBody>
                    <Link to={`/portfolio/${album.id}`}><CardTitle>{album.name}</CardTitle></Link>
                </CardBody>
            </Card> 
        </FadeTransform>
    );
}

function Portfolio(props){

    const portfolio = props.albums.map(album => {
        return( 
            <div key={album.id} className="portfolio-grid-item">
                <RenderPortfolioItem album={album} />
            </div>
        );
    });

    return(
        <div>
            <Header />
            <div className="container">
                <div className="row row-center">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Portfolio</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="portfolio-grid-container">
                    {portfolio}
                </div>
            </div>
        </div>
    )  
}

export default Portfolio;