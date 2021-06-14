import React from "react";
import axios from "axios";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: 0,
      end: 100,
    };
  }
  search() {
    let text = document.getElementById("search-text").value;

    if (text !== "") {
      let sort = document.getElementById("sort-item").value;
      let url = "https://api.github.com/search/repositories?q=" + text;

      if (sort === "stars") url += "&sort=" + sort;

      if (sort === "forks") url += "&sort=" + sort;

      if (sort === "followers") url += "&sort=" + sort;

      axios(url)
        .then((response) => {
          if (response.data.items.length !== 0)
            this.setState(() => {
              return {
                data: response.data.items,
              };
            });
          else alert("Не найдено.");
        })
        .catch((error) => {
          alert("Ошибка");
        });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="container ">
            <div className="d-flex justify-content-start ">
              <div className="p-2 mt-1 ">
                <select id="sort-item" class="custom-select">
                  <option value="none">None</option>
                  <option value="stars">Stars</option>
                  <option value="forks">Forks</option>
                  <option value="followers">Followers</option>
                </select>
              </div>
              <div className="p-2 w-50">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with radio button"
                  id="search-text"
                />
              </div>{" "}
              <div className="p-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => this.search()}
                >
                  Поиск
                </button>
              </div>
            </div>
          </div>
        </div>
        <List
          data={this.state.data}
          start={this.state.start}
          end={this.state.end}
        />
      </div>
    );
  }
}

export default App;
