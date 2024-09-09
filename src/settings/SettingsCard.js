/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import { ActionCard, Grid } from '../';

const SettingsCard = ( { children, className, columns, gutter, noBorder, rowGap, ...props } ) => {
	const classes = classnames(
		'tawfeer-settings__card',
		noBorder && 'tawfeer-settings__no-border',
		className
	);

	return (
		<ActionCard { ...props } className={ classes } notificationLevel="info" noBorder={ noBorder }>
			<Grid columns={ columns } gutter={ gutter } rowGap={ rowGap }>
				{ children }
			</Grid>
		</ActionCard>
	);
};

SettingsCard.defaultProps = {
	columns: 3,
	gutter: 32,
};

export default SettingsCard;
