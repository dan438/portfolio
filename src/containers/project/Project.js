import React, {useContext} from "react";
import "./Project.css";
import StyleContext from "../../contexts/StyleContext";

function Project() {
  const {isDark} = useContext(StyleContext)

  console.log(isDark);
  return (
    <section className="portfolio">
      <h1 className="p-headind">Portfolio</h1>

      <div className="p-container">
      <div className={isDark ? "dark card" : "card"}>
          <div className="p-box">
            <React.Fragment>
              <div className="overlay-text">
                <h1>Amazon clone</h1>
              </div>
              <div className="flex">
                <img src="/images/amazon-logo.png" alt="amazon"></img>
              </div>
            </React.Fragment>
          </div>
          <div className="container">
            <p>Amazon clone</p>
            <button>View</button>
          </div>
        </div>

        <div className={isDark ? "dark card" : "card"}>
          <div className="p-box">
            <React.Fragment>
              <div className="overlay-text">
                <h1>Disney Clone</h1>
              </div>
              <div className="flex">
                <img src="/images/disney1.png" alt="disney"></img>
              </div>
            </React.Fragment>
          </div>
          <div className="container">
            <p>Disney clone</p>
            <button>View</button>
          </div>
        </div>

        <div className={isDark ? "dark card" : "card"}>
          <div className="p-box">
            <React.Fragment>
              <div className="overlay-text">
                <h1>Todo App</h1>
              </div>
              <div className="flex">
                <img src="/images/todolist.png" alt="todolist"></img>
              </div>
            </React.Fragment>
          </div>
          <div className="container">
            <p>Todo App</p>
            <button>View</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
