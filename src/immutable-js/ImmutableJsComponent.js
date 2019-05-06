import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { 
    updateFavouriteLightColor, 
    updateFavouriteDarkColor,
    addColorToList
} from './redux/actions';
import actionTypes from './redux/actionTypes';
import withImmutableToJs from './withImmutableToJs';

/**
 * This component is used to demonstrate why you should not use .toJS() in mapStateToProps.
 * 
 * If .toJS() is used, the prop will be a new object every time, and therefore the receiving component will always
 * rerender when the state tree changes (a state tree change is forced here by AnotherComponent).
 * 
 * As the dumb component i.e. ImmutableJSComponent on it's own should ideally receive availableColors as an array,
 * not as an Immutable List (if it receives the latter, the component is no longer pure as it depends on Immutable.JS), 
 * the withImmutableToJs HOC is used to make the conversion rather than .toJS().
 */
class ImmutableJsComponent extends React.Component {

    handleLightColorChange = () => this.props.dispatch(updateFavouriteLightColor('blue'));
    handleDarkColorChange = () => this.props.dispatch(updateFavouriteDarkColor('yellow'));
    handleAddColor = () => this.props.dispatch(addColorToList('test'));
    handleRemoveColor = () => this.props.dispatch({ type: actionTypes.REMOVE_COLOR_FROM_LIST });
    
    render() {
        const { favouriteLightColor, favouriteDarkColor, availableColors } = this.props;

        console.log('rendering the ImmutableJsComponent');   // show if rendering
        console.log(Object.prototype.toString.call(availableColors));   // show what type the availableColors prop is - Array or Immutable List

        return (
            <div>
                <p>{`Favourite light color is: ${favouriteLightColor}`}</p>
                <p>{`Favourite dark color is: ${favouriteDarkColor}`}</p>
                <p>{`Available colors are: ${availableColors.join(' ')}`}</p>
                <button onClick={this.handleLightColorChange}>Click</button>
                <button onClick={this.handleDarkColorChange}>Click</button>
                <button onClick={this.handleAddColor}>Click</button>
                <button onClick={this.handleRemoveColor}>Click</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favouriteLightColor: state.getIn(['favourites', 'color', 'light']),
    favouriteDarkColor: state.getIn(['favourites', 'color', 'dark']),
    availableColors: state.get('listOfColors'),
    // availableColors: state.get('listOfColors').toJS(),
});

export default compose(
    connect(mapStateToProps),
    withImmutableToJs   // Using this will convert props from ImmutableJS Objects -> JS Objects/Arrays
)(ImmutableJsComponent);