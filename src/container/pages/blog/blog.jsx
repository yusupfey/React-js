import React, { Component,Fragment } from 'react';
import './blog.css';
import Post from '../../../component/post/Post';
import axios from 'axios';

class Blog extends React.Component{
    state = {
        post:[],
        formBlog:{
            id:'',
            title:'',
            body:'',
            userId:1
        },
        isUpdate:false
    }
    getApi =()=>{
        // this.cleanForm();
        axios.get('http://localhost:3004/posts?_sort=id&_order=Desc')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }
    // function form input data api
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlog).then((res) => {
            this.getApi();
            this.setState({
                formBlog: {
                    id: '',
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        });
    }
    // function for remove data api
    handleremove =(data) =>{
        let test = {data};
        let url = 'http://localhost:3004/posts/'+test.data;
        // console.log(test.data);
        axios.delete(url).then((res)=>{
            this.getApi();
        })
    }
    //function put atau update data api
    putDataToAPI=()=>{
        axios.put('http://localhost:3004/posts/'+this.state.formBlog.id, this.state.formBlog).then((res)=>{
            this.getApi();
            this.setState({
                isUpdate:false,
                formBlog:{
                    id: '',
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        });
    }
    FormPostChange = (even) => {
        //mengmambil state formblog
        let newFormPost = {...this.state.formBlog};
        //memanipulasi formblog berdasarkan name even targetname
        // name input harus sesuai dengan name state->formblog
        // yang berfungsi untuk mengambil/mensasar sebuah inputan dinamis
        newFormPost[even.target.name] = even.target.value;
        // console.log(even.target.name)=>melihat name dari form;
        // melihat value objek distate
        // let title = even.target.value =>melihat value dari form;
        // console.log(title);
        //ngambil data manual
        //this.state.title
        // console.log('ini:',this.state.formBlog) =>cek data form blog;
        // console.log('inibaru:', newState)=>cek datea variable newstate>
        //mengambildata bersamaan

        //membuat id unik berdaksrkan waktu
        let timpstamp = new Date().getTime();
        
        console.log(this.state.isUpdate)
        if(this.state.isUpdate == false){
            //karena id bersipat statis hanya satu data kita hanya menggunakan field id saja
            newFormPost['id'] = timpstamp;
        }
        // merubah isi state
        this.setState({
            formBlog: newFormPost
        },()=>{
                // console.log(even.target.value);

        });
    }
    actForm=()=>{
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }

    }

    // menampilkan data pada form memanggil state dan menampilkan data pada state lalu di tampilkan pada form value
    updatePost=(data)=>{
        this.setState({
            formBlog:data,
            isUpdate:true
        });

    }

    handledetail=(id)=>{
        this.props.history.push(`detail-post/${id}`);
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post:json
        //         });
        //     });
        this.getApi()
    }
    render(){
        return <Fragment>
            Halman Blogpost
            <hr/>
            <p className="section-title">Blog</p>
            <div className="formPost">
                <div className="group-form">
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" name="title" value={this.state.formBlog.title} className="input" placeholder="Title.." onChange={this.FormPostChange} />
                </div>
                <div className="group-form">                    
                    <label htmlFor="body">Body</label><br/>
                    <textarea name="body" id="" value={this.state.formBlog.body} className="textarea" cols="30" rows="10" placeholder="body.." onChange={this.FormPostChange}></textarea>
                </div>
                <div className="group-form">
                    <button className="btn-submit" onClick={this.actForm}>Create</button>
                </div>
            </div>


            {/* maping array atau looping */}
            {/* update dan remove maping lalu di tangkap oleh funtion handleremove untuk remove dan update post untuk update */}
            {
                this.state.post.map( post =>{
                    return <Post key={post.id} data={post} remove={this.handleremove} update={this.updatePost} goDetail={this.handledetail}/>
                })
            }

        </Fragment>
    }
}

export default Blog