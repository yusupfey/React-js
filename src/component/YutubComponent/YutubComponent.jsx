import React from 'react';
import TimeLine from './reactdong.jpg'
import './YutubComponent.css';
// import PropTypes from 'prop-types';

const YutubComponent = (props) => {
    return (
        <div>
            <div className="yutub-wrapper">
                <div className="img-thumb">
                    <img src={TimeLine} alt="" />
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    );
};

//membuat nilai default pada props
YutubComponent.defaultProps = {
    title: "Title Here", desc: "Desc Here",
};

export default YutubComponent;