import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';

class SagaExample extends Component {

    handleClick = dispatch => {
        this.props.dispatch({
            type: 'GET_TODOS_BEGIN',
        })
    };

    render() {
        const { todos } = this.props;
        return (
            <div>
                <Button variant="contained" onClick={this.handleClick}>Get Todos</Button>
                <div>
                    {
                        todos.length > 0 && todos.map(todo => (
                            <div key={todo.todo} style={{ margin: 20 }}>
                                <Typography>{todo.todo}</Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps)(SagaExample);