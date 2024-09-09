/**
 * WordPress dependencies.
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { Button, Card, Modal, Notice } from '../..';
import { WIZARD_STORE_NAMESPACE } from '../store';

const parseError = ( { data, message, code } ) => {
	let level = 'fatal';
	if ( !! data && 'level' in data ) {
		level = data.level;
	} else if ( 'rest_invalid_param' === code ) {
		level = 'notice';
	}
	return {
		message,
		level,
	};
};

const WizardError = () => {
	const error = useSelect( select => select( WIZARD_STORE_NAMESPACE ).getError() );
	if ( ! error ) {
		return null;
	}

	const { level, message } = parseError( error );
	if ( 'fatal' === level ) {
		const fallbackURL = typeof tawfeer_urls !== 'undefined' && tawfeer_urls.dashboard;
		return (
			<Modal
				title={ __( 'Unrecoverable error' ) }
				onRequestClose={ fallbackURL ? () => ( window.location = fallbackURL ) : undefined }
			>
				<Notice noticeText={ message } isError rawHTML />
				{ fallbackURL && (
					<Card buttonsCard noBorder className="justify-end">
						<Button isPrimary href={ fallbackURL }>
							{ __( 'Return to Dashboard', 'tawfeer-plugin' ) }
						</Button>
					</Card>
				) }
			</Modal>
		);
	}

	return (
		<Notice isError className="tawfeer-wizard__above-header" noticeText={ message } rawHTML />
	);
};

export default WizardError;
