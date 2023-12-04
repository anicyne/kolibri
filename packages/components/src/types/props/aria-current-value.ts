/* types */
import { Generic } from '@a11y-ui/core';
import { watchValidator } from '../../utils/prop.validators';

/**
 * Defines the value for the aria-current attribute.
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
 * @see https://www.aditus.io/aria/aria-current/
 */
const ariaCurrentValuePropTypeOptions = ['date', 'location', 'page', 'step', 'time', 'true', 'false'] as const;
export type AriaCurrentValuePropType = (typeof ariaCurrentValuePropTypeOptions)[number];

export type PropAriaCurrentValue = {
	ariaCurrentValue: AriaCurrentValuePropType;
};

/* validator */
export const validateAriaCurrentValue = (component: Generic.Element.Component, value?: AriaCurrentValuePropType): void => {
	watchValidator(
		component,
		`_ariaCurrentValue`,
		(value) => typeof value === 'string' && ariaCurrentValuePropTypeOptions.includes(value),
		new Set([`AriaCurrentValue {${ariaCurrentValuePropTypeOptions.join(', ')}`]),
		value,
		{
			defaultValue: 'page',
		}
	);
};