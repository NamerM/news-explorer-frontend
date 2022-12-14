import React, { useState } from 'react';
// import notFoundIcon from '../../images/not-found_v1.png'

function NotFound() {
  const [isNotFound, setIsNotFound] = useState(false);

  return (
    <div className="notfound">
      <p className="notfound__image" alt="not found icon" />
      <h2 className="notfound__title">Nothing Found</h2>
      <p className="notfound__text">Sorry, but nothing matched your search terms.</p>
    </div>
  )
}


export default NotFound;
