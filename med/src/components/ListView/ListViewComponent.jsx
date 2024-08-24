import React from 'react';
import PropTypes from 'prop-types';


// ListViewComponent Component
const ListViewComponent = ({ items, renderItem }) => {
  return (
    <div className="list-view">
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {renderItem ? renderItem(item) : item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

// PropTypes for validation
ListViewComponent.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func
};

// Default Props
ListViewComponent.defaultProps = {
  renderItem: null
};

export default ListViewComponent;