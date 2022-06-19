import categories from "../fake-data/categories.json"
import events from "../fake-data/events.json"

export function Home() {
    return (
        <div className="container">
            <div className="header">
                <h2>Home</h2>
                <div className="menu">
                    <button>Etkinlikler</button>
                    <button>Kategori</button>
                    <button>Ara</button>
                </div>
            </div>

            <div className="main">
                <div className="categories">
                    {
                        categories.map((value) => <li key={value.id}>{value.title}</li>)
                    }
                </div>
                <div className="events">
                    {
                        events.map((value) => <li key={value.id}>{value.title}</li>)
                    }
                </div>
            </div>


        </div>
    );
}


