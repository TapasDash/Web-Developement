import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* change the code below to display name prop */}
        <div className='language-name'>{ this.props.name }</div>
        {/* we  have to write this in div coz we have to make it a block element */}
        {/* change value of src attribute to display image prop */}
        <img 
          className='language-image'
          src={ this.props.image }
          {/* we don't have to write this in div coz img itself is a block element */}
        />
        
      </div>
    );
  }
}

export default Language;
