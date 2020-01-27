import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } });
  }
  
  renderLyrics() {
    return this.props.lyrics.map(({ content, id, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i>{likes}</i>
            <i className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
          </div>
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

const likeLyricMutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

export default graphql(likeLyricMutation)(LyricList);