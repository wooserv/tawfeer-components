/**
 * Info Button
 */

/**
 * WordPress dependencies.
 */
import { Tooltip } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { Icon, info } from '@wordpress/icons';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import './style.scss';

class InfoButton extends Component {
	/**
	 * Render.
	 */
	render() {
		const { className, ...otherProps } = this.props;
		return (
			<Tooltip { ...otherProps }>
				<span className={ classnames( 'tawfeer-info-button', className ) }>
					<Icon icon={ info } />
				</span>
			</Tooltip>
		);
	}
}

export default InfoButton;
