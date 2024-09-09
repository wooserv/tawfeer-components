/**
 * Modal
 */

/**
 * WordPress dependencies.
 */
import { Modal as BaseComponent } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';

class Modal extends Component {
	/**
	 * Render.
	 */
	render() {
		const { className, isWide, isNarrow, ...otherProps } = this.props;
		const classes = classnames(
			'tawfeer-modal',
			isWide && 'tawfeer-modal--wide',
			isNarrow && 'tawfeer-modal--narrow',
			className
		);

		return <BaseComponent className={ classes } { ...otherProps } />;
	}
}

export default Modal;
