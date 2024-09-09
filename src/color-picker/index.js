/**
 * WordPress dependencies.
 */
import { ColorPicker as ColorPickerComponent } from '@wordpress/components';
import { useRef, useState } from '@wordpress/element';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

/**
 * Internal dependencies.
 */
import hooks from '../hooks';
import utils from '../utils';
import './style.scss';

extend( [ a11yPlugin ] );
const { InteractiveDiv } = utils;

const ColorPicker = ( { label, color = '#fff', onChange, className } ) => {
	const [ isExpanded, setIsExpanded ] = useState( false );
	const ref = useRef();
	const colordColor = colord( color );
	hooks.useOnClickOutside( ref, () => setIsExpanded( false ) );
	return (
		<div className={ classnames( 'tawfeer-color-picker', className ) }>
			<div className="tawfeer-color-picker__label">{ label }</div>

			<InteractiveDiv
				className={ 'tawfeer-color-picker__expander' }
				onClick={ () => setIsExpanded( ! isExpanded ) }
				style={ {
					backgroundColor: color,
					color: colordColor.contrast() > colordColor.contrast( '#000' ) ? '#fff' : '#000',
				} }
			>
				{ color }
			</InteractiveDiv>

			<div className="tawfeer-color-picker__main" ref={ ref }>
				{ isExpanded && (
					<ColorPickerComponent
						color={ color }
						onChange={ hex => onChange( hex ) }
						enableAlpha={ false }
					/>
				) }
			</div>
		</div>
	);
};

export default ColorPicker;
