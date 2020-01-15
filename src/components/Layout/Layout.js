import React, {Fragment} from 'react';

const Layout = props => {
    return (
        <Fragment>
            <nav>
                toolbar
            </nav>
            <main className='Layout-Content'>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
