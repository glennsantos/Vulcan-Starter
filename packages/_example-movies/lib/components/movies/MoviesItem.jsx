/* 

An item in the movies list.
Wrapped with the "withCurrentUser" container.

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

import Movies from '../../modules/movies/collection.js';

const MoviesItem = ({ movie, currentUser, refetch }) => (
  <div style={{ paddingBottom: '15px', marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
    {/* document properties */}

    <h4>
      {movie.name} ({movie.year})
    </h4>
    <p>
      {movie.review} – {movie.user && movie.user.displayName}
    </p>

    {/* edit document form */}

    {Movies.options.mutations.update.check(currentUser, movie) ? (
      <Components.ModalTrigger label="Edit Movie" title="Edit Movie">
        <Components.MoviesEditForm currentUser={currentUser} documentId={movie._id} refetch={refetch} />
      </Components.ModalTrigger>
    ) : null}
    <div>
      <Link to={'/movie/'+movie._id}>Details</Link>
    </div>
  </div>
);

registerComponent({ name: 'MoviesItem', component: MoviesItem });