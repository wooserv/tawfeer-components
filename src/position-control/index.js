/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

export default function PositionControl( {
	allowedPositions,
	value,
	label,
	help,
	onChange,
	size,
	...props
} ) {
	/**
	 * Set layout options
	 */
	const options =
		size === 'full-width'
			? [
				{
					value: 'top',
					/* translators: Overlay Position */
					label: __( 'Top', 'tawfeer-plugin' ),
				},
				{
					value: 'center',
					/* translators: Overlay Position */
					label: __( 'Center', 'tawfeer-plugin' ),
				},
				{
					value: 'bottom',
					/* translators: Overlay Position */
					label: __( 'Bottom', 'tawfeer-plugin' ),
				},
			] : [
				{
					value: 'top_left',
					/* translators: Overlay Position */
					label: __( 'Top Left', 'tawfeer-plugin' ),
				},
				{
					value: 'top',
					/* translators: Overlay Position */
					label: __( 'Top Center', 'tawfeer-plugin' ),
				},
				{
					value: 'top_right',
					/* translators: Overlay Position */
					label: __( 'Top Right', 'tawfeer-plugin' ),
				},
				{
					value: 'center_left',
					/* translators: Overlay Position */
					label: __( 'Center Left', 'tawfeer-plugin' ),
				},
				{
					value: 'center',
					/* translators: Overlay Position */
					label: __( 'Center', 'tawfeer-plugin' ),
				},
				{
					value: 'center_right',
					/* translators: Overlay Position */
					label: __( 'Center Right', 'tawfeer-plugin' ),
				},
				{
					value: 'bottom_left',
					/* translators: Overlay Position */
					label: __( 'Bottom Left', 'tawfeer-plugin' ),
				},
				{
					value: 'bottom',
					/* translators: Overlay Position */
					label: __( 'Bottom Center', 'tawfeer-plugin' ),
				},
				{
					value: 'bottom_right',
					/* translators: Overlay Position */
					label: __( 'Bottom Right', 'tawfeer-plugin' ),
				},
			];
	return (
		<div className={ classnames( 'tawfeer-position-placement-control', 'size-' + size ) }>
			<p className="components-base-control__label">{ label }</p>
			<ButtonGroup aria-label={ __( 'Select Position', 'tawfeer-plugin' ) } { ...props }>
				{ options.map( ( option, index ) => {
					return (
						<div
							key={ `tawfeer-position-placement-item-${ index }` }
							className={ option.value === value ? 'is-selected' : null }
						>
							<Button
								isSmall
								title={ option.label }
								aria-label={ option.label }
								isPrimary={ option.value === value }
								onClick={ () => {
									onChange( option.value );
								} }
								disabled={ allowedPositions?.length && ! allowedPositions.includes( option.value ) }
							/>
						</div>
					);
				} ) }
			</ButtonGroup>
			<p className="components-base-control__help">{ help }</p>
		</div>
	);
}
