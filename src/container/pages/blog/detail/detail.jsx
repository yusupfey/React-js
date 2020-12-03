import React from 'react';
import Axios from 'axios';

import './detail.css'


class detail extends React.Component{
    state={
        post:{
            title:'',
            body:''
        }
    }
    componentDidMount(){
        console.log(this.props);
        //mengambil data dari props yang kita kirimkan cara cek props menggunakan this.props
        // mengambil id dengan cara mensasar props
        let id = this.props.match.params.id;
        // console.log(id); cek id berhasil di get atau tidak
        // setelah itu mengambil data post dari api berdasarka id yang kita ambli tadi
        Axios.get(`http://localhost:3004/posts/${id}`).then(res=>{
            // console.log(res); cek data
            // sebelum di tampikan kita mesti membuat state dulu agar data nya bisa di tampilkan

            // menampilkan data dengan cara merumbah state dan memiliki objek post yang masih kosng
            //res adalah parameter ketika berhasil di update
            // data adalah data yang diambil dari api yang ditampung pada objek data
            // cara mencek data res.data
            let post = res.data 
            this.setState({
                title: post.title,
                body: post.body
            });
        });

    }




    render(){
        return(
            <div>
                <h3>Detail Post</h3>
                <p class="title">{this.state.title}</p>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default detail