import React from 'react';
// import notFoundIcon from '../../images/not-found_v1.png'

function NotFound() {

  return (
    <div className="notfound">
      <image className="notfound__image" alt="not found icon" />
      <h2 className="notfound__title">Nothing Found</h2>
      <p className="notfound__text">Sorry, but nothing matched your search terms.</p>
    </div>
  )
}


export default NotFound;
