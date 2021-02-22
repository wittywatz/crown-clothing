import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
      },
      {
        title: 'women',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id: 4,
      },
      {
        title: 'Men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id: 5,
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => {
          return <MenuItem key={id} title={title} image={imageUrl} />;
        })}
      </div>
    );
  }
}
export default Directory;
