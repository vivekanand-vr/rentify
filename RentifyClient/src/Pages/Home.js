import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/properties');
    }
    return (
        <body className="background">
            <div className="landing-page">
                <div className="text-content">
                    <h1>Renting Made Simple</h1>
                    <p>
                        We simplify the rental process for both property owners and tenants. 
                        In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. <br />
                        RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.
                    </p>
                    <button onClick={handleOnClick}>View Properties</button>
                </div>
            </div>
        </body>
      );
};

export default Home;
