import React from "react";
import Card from "./Card";

class ListRepos extends React.Component {
  render() {
    return (
      <div id="repos">
        {this.props.data.map((repo, index) => {
          if (index >= this.props.start && index <= this.props.end) {
            return (
                <div class="card ">
                  <Card
                    key={index}
                    avatar={repo.owner.avatar_url}
                    login={repo.owner.login}
                    url={repo.html_url}
                    name={repo.name}
                  />
                </div>
            
            );
          }
        })}
      </div>
    );
  }
}

export default ListRepos;
