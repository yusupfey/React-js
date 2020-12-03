// liblary
import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// pages
import Blog from "./pages/blog/blog";
import LifeCyrcleComp from './pages/LifeCircleComp/LifeCyrcleComp';
// import YutubComponent from '../component/YutubComponent/YutubComponent';
import Produk from "./pages/produk/Produk";
// styling
import './Home.css';
import detail from './pages/blog/detail/detail';
//return hanya menggynakan satu parameter saja maka yutub componen harus di bungkus oleh div
class Home extends Component {
    
    render(){
        return (
            <Router>
                {/* <YutubComponent title="React js #1" desc="Pengenalan React JS" />
                                <YutubComponent title="React js #2" desc="Konsep React JS" />
                                <YutubComponent title="React js #3" desc="Instalasi React JS" />
                                <YutubComponent title="React js #4" desc="New Project React app" />
                                <YutubComponent title="React js #5" desc="StatelessComponen React and StateFullComponen React" />
                                <YutubComponent /> */}

                <Fragment>
                    <div className="navigator">
                    <Link to="/">Blog Post</Link>
                    <Link to="/produk">Product</Link>
                    <Link to="/LifeCyrcle">LifeCyrcle</Link>
                    </div>

                    <div className="home">
                        {/* exact agar setiap rout yang mengandung garismiring itu tidak di tampilkan kemabli */}
                        <Route path="/" exact component={Blog} />
                        <Route path="/detail-post/:id" component={detail} />
                        <Route path="/produk" component={Produk} />
                        <Route path="/LifeCyrcle" component={LifeCyrcleComp} />
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default Home;