/**
 * Grid
 */

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

const Grid = ( {
	className = '',
	columns = 2,
	gutter = 32,
	noMargin = false,
	rowGap = 0,
	...otherProps
} ) => {
	const classes = classnames(
		'tawfeer-grid',
		noMargin && 'tawfeer-grid--no-margin',
		columns && 'tawfeer-grid__columns-' + columns,
		gutter && 'tawfeer-grid__gutter-' + gutter,
		rowGap && 'tawfeer-grid__row-gap-' + rowGap,
		className
	);
	return <div className={ classes } { ...otherProps } />;
};

export default Grid;
