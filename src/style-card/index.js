/**
 * Style Card
 */

/**
 * WordPress dependencies.
 */
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { WebPreview } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

class StyleCard extends Component {
	/**
	 * Render.
	 */
	render() {
		const { ariaLabel, className, cardTitle, url, image, imageType, isActive, onClick, id } =
			this.props;
		const classes = classnames(
			'tawfeer-style-card',
			isActive && 'tawfeer-style-card__is-active',
			className
		);
		return (
			<div className={ classes } id={ id }>
				<div className="tawfeer-style-card__image">
					{ imageType === 'html' ? (
						<div dangerouslySetInnerHTML={ image } />
					) : (
						<img src={ image } alt={ cardTitle + ' ' + __( 'Thumbnail', 'tawfeer-plugin' ) } />
					) }
					<div className="tawfeer-style-card__actions">
						{ isActive ? (
							<span className="tawfeer-style-card__actions__badge">
								{ __( 'Selected', 'tawfeer-plugin' ) }
							</span>
						) : (
							<Button
								variant="link"
								onClick={ onClick }
								aria-label={
									ariaLabel ? ariaLabel : __( 'Select', 'tawfeer-plugin' ) + ' ' + cardTitle
								}
								tabIndex="0"
							>
								{ __( 'Select', 'tawfeer-plugin' ) }
							</Button>
						) }
						{ url && (
							<WebPreview
								url={ url }
								label={ __( 'View Demo', 'tawfeer-plugin' ) }
								variant="link"
							/>
						) }
					</div>
				</div>
				{ cardTitle && <div className="tawfeer-style-card__title">{ cardTitle }</div> }
			</div>
		);
	}
}

export default StyleCard;
