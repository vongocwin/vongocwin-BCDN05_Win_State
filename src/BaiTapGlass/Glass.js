import React, { Component } from 'react'

export default class Glass extends Component {

    arrGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        }
    ];

    state = {
        spChiTiet: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    };

    listGlass = () => {
        return this.arrGlass.map((sp) => {
            return <div className="col-2 img__glass" onClick={()=>{
                this.renderGlass(sp)}} key={`sp${sp.id}`}>
                <img src={sp.url} alt="" />
            </div>

        });
    };

    renderGlass = (sp) => {
        this.setState({spChiTiet: sp});

    }

    render() {
        return (
            <div>
                <div className="container bg" >
                    <div className="row">
                        <div className="col-6 mau__left">
                            <img className='img-fluid' src="./img/glassesImage/model.jpg" alt="" />
                        </div>
                        <div className="col-6 mau__right">
                            <img className='img-fluid' src="./img/glassesImage/model.jpg" alt="" />
                            <div className="content">
                                <img src={this.state.spChiTiet.url} alt="" />
                                <div className="content__info">
                                <h3>{this.state.spChiTiet.name}</h3>
                                <span>{this.state.spChiTiet.desc}</span>
                                </div>
                                </div>
                        </div>
                        <div className="col-12">
                            <div className="row ">
                                {this.listGlass()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
