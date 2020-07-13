import React from 'react';
import { Route } from 'react-router';

export default (
    // Switch is added in v4 react-router
    <Route>
        <Route path="/blog" />
        <Route path="/live" />
        <Route path="/bible" />
        <Route exact path="/chords" />
        <Route exact path="/lyrics" />

    </Route>
);