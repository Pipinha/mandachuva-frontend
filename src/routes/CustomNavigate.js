import React from 'react';
import { Router } from 'react-router-dom';

const CustomNavigate = ({ basename, children, history }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            history={history}
        />
    );
};

export default CustomNavigate;