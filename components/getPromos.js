import React from 'react'

const GetPromos = ({ promos }) => {
    return (
    <div>
        <center><h1>Liste des promos</h1></center>
        {promos.map((promo) => (
        <div class="promo">
            <div class="promo-body">
            <h5 class="promo-name">{promo.codePromo}</h5>
            <p class="promo-info">{promo.reduction}</p>
            </div>
        </div>
        ))}
    </div>
    )
};

export default GetPromos;