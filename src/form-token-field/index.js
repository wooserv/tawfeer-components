/**
 * Form Token Field
 */

/**
 * WordPress dependencies.
 */
import { FormTokenField as BaseComponent } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';

class FormTokenField extends Component {
	/**
	 * Render.
	 */
	render() {
		const { className, description, hideHelpFromVision, hideLabelFromVision, ...otherProps } =
			this.props;
		const classes = classnames( 'tawfeer-form-token-field__input-container', className );
		return (
			<div
				className={ classnames(
					{
						'tawfeer-form-token-field--label-hidden': hideLabelFromVision,
						'tawfeer-form-token-field--help-hidden': hideHelpFromVision,
					},
					'tawfeer-form-token-field'
				) }
			>
				<BaseComponent className={ classes } { ...otherProps } />
				{ description && <p className="tawfeer-form-token-field__help">{ description }</p> }
			</div>
		);
	}
}

export default FormTokenField;
