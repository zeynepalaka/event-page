import categories from "../fake-data/categories.json";
import events from "../fake-data/events.json";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  const pastFilteredEvents = useMemo(() => {
    let eventList = events;
    if (selectedCategories.length > 0) {
      eventList = events.filter((event) =>
        selectedCategories.includes(event.categoryId)
      );
    }

    if (searchText !== "") {
      eventList = events.filter((event) => {
        const { city, title, place, activity } = event;
        if (city.toLowerCase().includes(searchText)) return true;
        if (title.toLowerCase().includes(searchText)) return true;
        if (place.toLowerCase().includes(searchText)) return true;
        if (activity.toLowerCase().includes(searchText)) return true;
        return false;
      });
    }

    return eventList.filter((event) => new Date(event.startDate) < new Date());
  }, [selectedCategories, searchText]);

  const upcomingFilteredEvents = useMemo(() => {
    let eventList = events;
    if (selectedCategories.length > 0) {
      eventList = events.filter((event) =>
        selectedCategories.includes(event.categoryId)
      );
    }

    if (searchText !== "") {
      eventList = events.filter((event) => {
        const { city, title, place, activity } = event;
        if (city.toLowerCase().includes(searchText)) return true;
        if (title.toLowerCase().includes(searchText)) return true;
        if (place.toLowerCase().includes(searchText)) return true;
        if (activity.toLowerCase().includes(searchText)) return true;
        return false;
      });
    }

    return eventList.filter((event) => new Date(event.startDate) > new Date());
  }, [selectedCategories, searchText]);

  return (
    <div className="container">
      <Header />
      <div className="home">
        <h1 className="banner">Etkinlik Şöleni</h1>
        <h3 className="slogan">Birbirinden güzel etkinlikler...</h3>
        <a href="#">
          <button className="button">İncele</button>
        </a>
      </div>
      <div className="main">
        <div className="categories">
          <div>
            <h2>Etkinlikler</h2>
            {categories.map((value) => (
              <div key={value.id} className="form-check">
                <input
                  type="checkbox"
                  id={`category-${value.id}`}
                  checked={selectedCategories.includes(value.id)}
                  onChange={() => {
                    if (selectedCategories.includes(value.id)) {
                      setSelectedCategories(
                        selectedCategories.filter(
                          (category) => category != value.id
                        )
                      );
                    } else {
                      setSelectedCategories([...selectedCategories, value.id]);
                    }
                  }}
                />
                <label htmlFor={`category-${value.id}`}>{value.title}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="events">
          <h1>Aktif Etkinlikler</h1>
          <div className="searchInput_Container">
            <div>
              <label>Etkinlik ara</label>
              <input
                id="searchInput"
                type="text"
                placeholder="Etkinlik ara"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="event-list">
            {upcomingFilteredEvents.length === 0 ? (
              <div className="empty-event">
                <p>Gösterilecek event bulunamadı</p>
              </div>
            ) : (
              upcomingFilteredEvents.map((value) => {
                const category = categories.find(
                  (category) => category.id == value.categoryId
                );
                return (
                  <Link
                    to={`/event/${value.id}`}
                    key={value.id}
                    className="logo"
                  >
                    <div className="card">
                      <div className="card__header">
                        <img
                          className="image"
                          src={value.pictures[0]}
                          alt="logo"
                        ></img>
                      </div>
                      <div className="card__body">
                        <span className="tag tag-red">{category.title}</span>
                        <h4>{value.title}</h4>
                        <p>{value.details}</p>
                      </div>
                      <div className="card__footer">
                        <div className="user">
                          <div className="user__info">
                            {}

                            <h5>{value.city}</h5>
                            <small>{value.startDate}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
          <h1>Geçmiş Etkinlikler</h1>
          <div className="event-list">
            {pastFilteredEvents.length === 0 ? (
              <div className="empty-event">Gösterilecek event bulunamadı</div>
            ) : (
              pastFilteredEvents.map((value) => {
                const category = categories.find(
                  (category) => category.id == value.categoryId
                );
                return (
                  <Link
                    to={`/event/${value.id}`}
                    key={value.id}
                    className="logo"
                  >
                    <div className="card">
                      <div className="card__header">
                        <img
                          className="image"
                          src={value.pictures[0]}
                          alt="logo"
                        ></img>
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
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
