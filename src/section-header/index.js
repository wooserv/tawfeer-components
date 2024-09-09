/**
 * Section Header
 */

/**
 * WordPress dependencies
 */
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Grid } from '..';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

const SectionHeader = ( {
	centered = false,
	className = null,
	description = '',
	heading = 2,
	isWhite = false,
	noMargin = false,
	title,
	id = null,
} ) => {
	// If id is in the URL as a scrollTo param, scroll to it on render.
	const ref = useRef();
	useEffect( () => {
		const params = new Proxy( new URLSearchParams( window.location.search ), {
			get: ( searchParams, prop ) => searchParams.get( prop ),
		} );
		const scrollToId = params.scrollTo;
		if ( scrollToId && scrollToId === id ) {
			// Let parent scroll action run before running this.
			window.setTimeout( () => ref.current.scrollIntoView( { behavior: 'smooth' } ), 250 );
		}
	}, [] );

	const classes = classnames(
		'tawfeer-section-header',
		centered && 'tawfeer-section-header--is-centered',
		isWhite && 'tawfeer-section-header--is-white',
		noMargin && 'tawfeer-section-header--no-margin',
		className
	);

	const HeadingTag = `h${ heading }`;

	return (
		<div id={ id } className="tawfeer-section-header__container" ref={ ref }>
			<Grid columns={ 1 } gutter={ 8 } className={ classes }>
				{ typeof title === 'string' && <HeadingTag>{ title }</HeadingTag> }
				{ typeof title === 'function' && <HeadingTag>{ title() }</HeadingTag> }
				{ description && typeof description === 'string' && <p>{ description }</p> }
				{ typeof description === 'function' && <p>{ description() }</p> }
			</Grid>
		</div>
	);
};

export default SectionHeader;
