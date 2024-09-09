/**
 * Select Control
 */

/**
 * WordPress dependencies
 */
import { SelectControl as BaseComponent } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import ButtonGroupControl from './ButtonGroupControl';
import GroupedSelectControl from './GroupedSelectControl';
import './style.scss';

class SelectControl extends Component {
	/**
	 * Render.
	 */
	render() {
		const { className, optgroups, buttonOptions, buttonSmall, ...otherProps } = this.props;
		const classes = classNames(
			'tawfeer-select-control',
			optgroups && 'tawfeer-grouped-select-control',
			buttonOptions && 'tawfeer-buttons-select-control',
			className
		);
		return (
			<div className={ classes }>
				{ /* eslint-disable no-nested-ternary */ }
				{ optgroups ? (
					<GroupedSelectControl optgroups={ optgroups } { ...otherProps } />
				) : buttonOptions ? (
					<ButtonGroupControl
						buttonOptions={ buttonOptions }
						buttonSmall={ buttonSmall }
						{ ...otherProps }
					/>
				) : (
					<BaseComponent { ...otherProps } />
				) }
				{ /* eslint-enable no-nested-ternary */ }
			</div>
		);
	}
}

export default SelectControl;
