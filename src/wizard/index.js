/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { category } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
    Button,
    Footer,
    HandoffMessage,
    Notice,
    PluginInstaller,
    TabbedNavigation,
    TawfeerIcon,
} from '../';
import Router from '../proxied-imports/router';
import WizardError from './components/WizardError';
import registerStore, { WIZARD_STORE_NAMESPACE } from './store';
import { useWizardData } from './store/utils';

registerStore();

const { HashRouter, Redirect, Route, Switch } = Router;

const Wizard = ( {
	sections = [],
	apiSlug,
	headerText,
	subHeaderText,
	hasSimpleFooter,
	className,
	renderAboveSections,
	requiredPlugins = [],
} ) => {
	const isLoading = useSelect( select => select( WIZARD_STORE_NAMESPACE ).isLoading() );
	const isQuietLoading = useSelect( select => select( WIZARD_STORE_NAMESPACE ).isQuietLoading() );

	// Trigger initial data fetch. Some sections might not use the wizard data,
	// but for consistency, fetching is triggered regardless of the section.
	useSelect( select => select( WIZARD_STORE_NAMESPACE ).getWizardAPIData( apiSlug ) );

	let displayedSections = sections.filter( section => ! section.isHidden );

	const [ pluginRequirementsSatisfied, setPluginRequirementsSatisfied ] = useState(
		requiredPlugins.length === 0
	);
	if ( ! pluginRequirementsSatisfied ) {
		headerText =
			requiredPlugins.length > 1
				? __( 'Required plugins', 'tawfeer-plugin' )
				: __( 'Required plugin', 'tawfeer-plugin' );
		displayedSections = [
			{
				path: '/',
				render: () => (
					<PluginInstaller
						plugins={ requiredPlugins }
						onStatus={ ( { complete } ) => setPluginRequirementsSatisfied( complete ) }
					/>
				),
			},
		];
	}

	return (
		<>
			<div
				className={ classnames(
					isLoading ? 'tawfeer-wizard__is-loading' : 'tawfeer-wizard__is-loaded',
					{
						'tawfeer-wizard__is-loading-quiet': isQuietLoading,
					}
				) }
			>
				<HashRouter hashType="slash">
					{ tawfeer_aux_data.is_debug_mode && <Notice debugMode /> }
					<div className="bg-white">
						<div className="tawfeer-wizard__header__inner">
							<div className="tawfeer-wizard__title">
								<Button
									isLink
									href={ tawfeer_urls.dashboard }
									label={ __( 'Return to Dashboard', 'tawfeer-plugin' ) }
									showTooltip={ true }
									icon={ category }
									iconSize={ 36 }
								>
									<TawfeerIcon size={ 36 } />
								</Button>
								<div>
									{ headerText && <h2>{ headerText }</h2> }
									{ subHeaderText && <span>{ subHeaderText }</span> }
								</div>
							</div>
						</div>
					</div>

					{ displayedSections.length > 1 && (
						<TabbedNavigation items={ displayedSections }>
							<WizardError />
						</TabbedNavigation>
					) }
					<HandoffMessage />

					<Switch>
						{ displayedSections.map( ( section, index ) => {
							const SectionComponent = section.render;
							return (
								<Route key={ index } path={ section.path }>
									<div
										className={ classnames(
											'tawfeer-wizard tawfeer-wizard__content',
											className
										) }
									>
										{ 'function' === typeof renderAboveSections ? renderAboveSections() : null }
										<SectionComponent />
									</div>
								</Route>
							);
						} ) }
						<Redirect to={ displayedSections[ 0 ].path } />
					</Switch>
				</HashRouter>
			</div>
			{ ! isLoading && <Footer simple={ hasSimpleFooter } /> }
		</>
	);
};

Wizard.useWizardData = useWizardData;

Wizard.STORE_NAMESPACE = WIZARD_STORE_NAMESPACE;

export default Wizard;
