import React from 'react'
import './ServiceCard.css'
import WebIcon from '@mui/icons-material/Web';
import { Chip } from '@mui/material';

function ServiceCard({title,skil1,skill2,icon}) {
    return (
        <div>
            <div className="card-container">
                <div className="card-media">
                    <div className="media-icon">
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore facere sit, natus odio earum alias voluptatum
                        ducimus maiores sequi? Cum, voluptas! Ratione recusandae odit,
                        aliquam accusamus dolorum perferendis architecto adipisci.</p>
                    <div className="chips">
                        <Chip label={skil1} variant="outlined" color='primary' />
                        <Chip label={skill2} variant="outlined" color='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard