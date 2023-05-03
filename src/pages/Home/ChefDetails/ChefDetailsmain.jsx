import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetailsmain = () => {
    const {id} = useParams()
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const {chefName,chefPicture, numberOfRecipes
,shortBio,totalLikes,totalRecipes,yearsOfExperience    } = chefDetails
    return (
        <div>
            details here
        </div>
    );
};

export default ChefDetailsmain;