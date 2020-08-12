import React from 'react';

class Manga extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        name: "",
        author: ""
      };
    }

    componentDidMount() {
        const url = `http://localhost:3000/api/${this.props.match.params.id}.json`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                this.setState({
                  name: json.name,
                  author: json.author
                })
            });
    }

    componentDidUpdate( name, author ) {
      const url = `http://localhost:3000/api/${this.props.match.params.id}.json`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                  name: json.name,
                  author: json.author
                })
            });
    }

  render() {
    return (
      <div>
        <p>name: {this.state.name}</p>
        <p>author: {this.state.author}</p>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Manga;