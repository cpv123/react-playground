import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Reaxios extends React.PureComponent {
    
    state = {
        response: null,
        isLoading: true,
        error: null,
    };

    CancelToken = axios.CancelToken;

    componentDidMount() {
        this.makeRequest(this.props);
    }

    // componentWillUnmount() {
    //     if (typeof this.cancel === 'function') {
    //         this.cancel();
    //     }
    // }

    async makeRequest(props) {
        try {
            const res = await axios.get(props.url);
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