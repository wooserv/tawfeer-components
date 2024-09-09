/**
 * Footer
 */

/**
 * WordPress dependencies.
 */
import { ExternalLink } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { PatronsLogo } from '../';
import './style.scss';

const Footer = ( { simple } ) => {
	const {
		components_demo: componentsDemo = false,
		support = false,
		setup_wizard: setupWizard = false,
		reset_url: resetUrl = false,
		plugin_version: pluginVersion = { label: 'Tawfeer' },
		remove_starter_content: removeStarterContent = false,
		support_email: supportEmail,
	} = window.tawfeer_urls || {};

	const footerElements = [
		{
			label: pluginVersion.label,
			url: 'https://tawfeer.me/category/release-notes/',
			external: true,
		},
		{
			label: __( 'About', 'tawfeer-plugin' ),
			url: 'https://tawfeer.me/',
			external: true,
		},
		{
			label: __( 'Documentation', 'tawfeer-plugin' ),
			url: support,
			external: true,
		},
	];
	if ( componentsDemo ) {
		footerElements.push( {
			label: __( 'Components Demo', 'tawfeer-plugin' ),
			url: componentsDemo,
		} );
	}
	if ( setupWizard ) {
		footerElements.push( {
			label: __( 'Setup Wizard', 'tawfeer-plugin' ),
			url: setupWizard,
		} );
	}
	if ( resetUrl ) {
		footerElements.push( {
			label: __( 'Reset Tawfeer', 'tawfeer-plugin' ),
			url: resetUrl,
		} );
	}
	if ( removeStarterContent ) {
		footerElements.push( {
			label: __( 'Remove Starter Content', 'tawfeer-plugin' ),
			url: removeStarterContent,
		} );
	}
	if ( supportEmail ) {
		footerElements.push( {
			label: __( 'Contact Support', 'tawfeer-plugin' ),
			url: `mailto:${ supportEmail }`,
		} );
	}
	return (
		<div className="tawfeer-footer">
			{ ! simple && (
				<div className="tawfeer-footer__inner">
					<ul>
						{ footerElements.map( ( { url, label, external }, index ) => (
							<li key={ index }>
								{ external ? (
									<ExternalLink href={ url }>{ label }</ExternalLink>
								) : (
									<a href={ url }>{ label }</a>
								) }
							</li>
						) ) }
					</ul>
				</div>
			) }
			<div className="tawfeer-footer__logo">
				<PatronsLogo />
			</div>
		</div>
	);
};

export default Footer;
