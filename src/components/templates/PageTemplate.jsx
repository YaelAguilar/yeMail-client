import PropTypes from 'prop-types';

const PageTemplate = ({ children }) => {
    return (
        <div>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
};

PageTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTemplate;