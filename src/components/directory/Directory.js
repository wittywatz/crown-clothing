import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/MenuItem';
import { directorySection } from '../../redux/directory/directorySelector';
import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, linkUrl }) => {
        return (
          <MenuItem key={id} title={title} image={imageUrl} linkUrl={linkUrl} />
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: directorySection,
});
export default connect(mapStateToProps)(Directory);
