import React from 'react';

const Post = (props) =>{
    return <div className="post">
        <div className="img-thumb">
            <img src="https://placeimg.com/250/150/tech" alt="" srcset="" />
        </div>
        <div className="content">
            <div className="title" onClick={()=> props.goDetail(props.data.id)}>{props.data.title}</div>
            <div className="desc">{props.data.body}</div>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            {/* membuat button update sama seperti pada umumnya namun keunikannya update tidak meng get id tetapi meng get data semuanya */}
            <button className="update" onClick={()=>props.update(props.data)}>Update</button>
        </div>
    </div>
}

export default Post