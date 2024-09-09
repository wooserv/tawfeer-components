/**
 * Waiting
 */

/**
 * WordPress dependencies.
 */
import { Spinner } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';

class Waiting extends Component {
	/**
	 * Render
	 */
	render() {
		const { className, isRight, isLeft, isCenter, ...otherProps } = this.props;
		const classes = classnames( 'tawfeer-waiting', className, {
			'is-right': isRight,
			'is-left': isLeft,
			'is-center': isCenter,
		} );
		return <Spinner className={ classes } { ...otherProps } />;
	}
}

export default Waiting;
