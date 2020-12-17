import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

function DefaulLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
}

DefaulLayout.protoTypes = {
    children: PropTypes.element.isRequired,
};

export default DefaulLayout;
