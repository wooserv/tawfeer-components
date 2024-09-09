/**
 * Notice
 */

/**
 * WordPress dependencies.
 */
import { Component, RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, bug, check, help, info } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';

class Notice extends Component {
	/**
	 * Render
	 */
	render() {
		const {
			className,
			debugMode,
			isError,
			isHandoff,
			isHelp,
			isSuccess,
			isWarning,
			noticeText,
			rawHTML,
			style = {},
			children = null,
		} = this.props;
		const classes = classnames(
			'tawfeer-notice',
			className,
			debugMode && 'tawfeer-notice__is-debug',
			isError && 'tawfeer-notice__is-error',
			isHandoff && 'tawfeer-notice__is-handoff',
			isHelp && 'tawfeer-notice__is-help',
			isSuccess && 'tawfeer-notice__is-success',
			isWarning && 'tawfeer-notice__is-warning'
		);
		let noticeIcon;
		if ( isHelp ) {
			noticeIcon = help;
		} else if ( isSuccess ) {
			noticeIcon = check;
		} else if ( debugMode ) {
			noticeIcon = bug;
		} else {
			noticeIcon = info;
		}
		return (
			<div className={ classes } style={ style }>
				{ <Icon icon={ noticeIcon } /> }
				<div className="tawfeer-notice__content">
					{ rawHTML ? <RawHTML>{ noticeText }</RawHTML> : noticeText }
					{ debugMode && __( 'Debug Mode', 'tawfeer-plugin' ) }
					{ children || null }
				</div>
			</div>
		);
	}
}

export default Notice;
