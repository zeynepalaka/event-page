import categories from "../fake-data/categories.json"
import events from "../fake-data/events.json"
import logo from "../pictures/logo.png"
import React, { useState } from 'react';

export function Home() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    return (
        <div className="container">
            <div className="header">
                <a href="#" className="logo"><img src={logo} alt="logo"></img></a>
                <div className="menu">
                    <a href="#">Etkinlikler</a>
                    <a href="#">Kategori</a>

                </div>
            </div>

            <div className="home">
                <h1 className="banner">Etkinlik Şöleni</h1>
                <h3 className="slogan">Birbirinden güzel etkinlikler...</h3>
                <a href="#"><button className="button">İncele</button></a>
            </div>

            <div className="main">
                <div className="categories">
                    <div>
                        {
                            categories.map((value) => <div class="form-check"
                            onClick={() => {
                                console.log("durum",selectedCategories.includes(value.id))
                                if (selectedCategories.includes(value.id)) {
                                    console.log("if")
                                    setSelectedCategories(() => {
                                        return selectedCategories.filter(category => category != value.id)
                                    });
                                }
                                else {
                                    console.log("else")
                                    console.log([...selectedCategories, value.id])
                                    console.log(value.id)
                                    setSelectedCategories(

                                        [...selectedCategories, value.id]
                                    );
                                }
                            }
                            }>
                                <input type="checkbox" id="flexCheckChecked"
                                    checked={selectedCategories.includes(value.id)}
                                 />
                                <label for="flexCheckChecked">
                                    {value.title}
                                </label>
                            </div>)
                        }
                    </div>
                </div>
                <div className="events">
                    {
                        events.map((value) => {

                            const category = categories.find(category => category.id == value.categoryId)
                            return <div key={value.id} className="card">
                                <div className="card__header">
                                    <a href="#" className="logo"><img className="image" src={value.pictures[0]} alt="logo"></img></a>
                                </div>
                                <div className="card__body">
                                    <span className="tag tag-red">{category.title}</span>
                                    <h4>{value.title}</h4>
                                    <p>{value.details}</p>
                                </div>
                                <div className="card__footer">
                                    <div className="user">
                                        <div className="user__info">
                                            <h5>{value.city}</h5>
                                            <small>{value.startDate}</small>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
}


