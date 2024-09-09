/**
 * Card
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';

class Card extends Component {
	/**
	 * Render
	 */
	render() {
		const {
			buttonsCard,
			className,
			headerActions,
			isNarrow,
			isMedium,
			isSmall,
			isWhite,
			noBorder,
			...otherProps
		} = this.props;
		const classes = classNames(
			'tawfeer-card',
			className,
			buttonsCard && 'tawfeer-card__buttons-card',
			headerActions && 'tawfeer-card__header-actions',
			isMedium && 'tawfeer-card__is-medium',
			isNarrow && 'tawfeer-card__is-narrow',
			isSmall && 'tawfeer-card__is-small',
			isWhite && 'tawfeer-card__is-white',
			noBorder && 'tawfeer-card__no-border'
		);
		return <div className={ classes } { ...otherProps } />;
	}
}

export default Card;
