import React from "react";

import Checkout from './pages/Checkout';
import Tickets from './pages/Tickets';

const routes = {
    '/': () => <Tickets />,
    '/checkout': () => <Checkout />,
};

export default routes;