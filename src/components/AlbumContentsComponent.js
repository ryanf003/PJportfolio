import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import { FadeTransform } from 'react-animation-components';

function RenderAlbumItem({contents}){
    return(
        <FadeTransform 
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card> 
                <CardImg width="100%" src={contents.image} alt={contents.name} />
            </Card> 
        </FadeTransform>
    )
}


function AlbumContents(props){
    
    const albumPhotos = props.contents.map(content => {
        return(
            <div key={content.id} className="album-contents-item">
                <RenderAlbumItem contents={content}/>
            </div>
        )
    })

    if(props.album){
        return (
            <div>
                <Header />
                <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/portfolio">Portfolio</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.album.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.album.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="album-contents-container"> 
                    {albumPhotos}
                </div>
            </div>
            </div>
            
        );
    } else {
        return(
            <div>empty</div>
        );
    }
}

export default AlbumContents;