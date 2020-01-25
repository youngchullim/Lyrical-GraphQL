import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.conent,
        songId: this.props.songId
      }
    });
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input 
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
        />
      </form>
    )
  }
}

const createLyricMutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default LyricCreate;