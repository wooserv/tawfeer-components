/**
 * Tawfeer Icon.
 */

/**
 * WordPress dependencies.
 */
import { Path, SVG } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import './style.scss';

class TawfeerIcon extends Component {
	/**
	 * Render
	 */
	render() {
		const { className, simple, size, white } = this.props;
		const classes = classnames(
			'tawfeer-icon',
			simple && 'tawfeer-icon--simple',
			white && 'tawfeer-icon--white',
			className
		);
		return (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				height={ size }
				width={ size }
				viewBox="0 0 32 32"
				className={ classes }
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M32 16c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16S7.164 0 16 0s16 7.164 16 16zm-10.732.622h1.72v-1.124h-2.823l1.103 1.124zm-3.249-3.31h4.97v-1.124h-6.072l1.102 1.124zm-3.248-3.31h8.217V8.877h-9.32l1.103 1.125zM9.01 8.877l13.977 14.246h-4.66l-5.866-5.98v5.98h-3.45V8.877z"
				/>
			</SVG>
		);
	}
}

TawfeerIcon.defaultProps = {
	size: 32,
};

export default TawfeerIcon;
