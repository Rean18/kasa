import React from 'react';
import inactiveStar from '../../assets/star-inactive 1.png';
import activeStar from '../../assets/star-active 1.png';

function Rating({ rating }) {
    const totalStars = 5;
    const nbOfStars = parseInt(rating);
    const diffRating = totalStars - nbOfStars;

    const printRating = () => {
        const stars = [];

        for (let i = 0; i < nbOfStars; i++) {
            stars.push(<img key={i} src={activeStar} alt='étoile complétée' />);
        }

        for (let a = 0; a < diffRating; a++) {
            stars.push(<img key={nbOfStars + a} src={inactiveStar} alt='étoile non complétée' />);
        }

        return stars;
    };

    return (
        <div>
            {printRating()}
        </div>
    );
}

export default Rating;
