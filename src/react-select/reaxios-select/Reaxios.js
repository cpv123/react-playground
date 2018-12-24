import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Reaxios extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            response: null,
            isLoading: true,
            error: null, 
        };
    }

    componentWillMount() {
        this.makeRequest();
    }

    async makeRequest(props) {
        try {
            const res = await axios.get(this.props.url);
            this.setState({
                isLoading: false,
                response: res.data,
            });
        } catch(error) {
            this.setState({
                error,
                isLoading: false,
            })
        }
    }

    render() {
        return this.props.children(this.state);
    }
}

Reaxios.propTypes = {
    children: PropTypes.func,
    url: PropTypes.string.isRequired,
};

export default Reaxios;