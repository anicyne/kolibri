import { Generic } from '@public-ui/core';
import { ButtonProps } from '../../types/button-link';
import { Stringified } from '../../types/common';
import { InputTypeOnDefault } from '../../types/input/types';
import { InputRequiredProps, KoliBriInputIcon } from '../input-text/types';

/**
 * API
 */
type RequiredProps = InputRequiredProps;
type OptionalProps = {
	accept: string;
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: Stringified<KoliBriInputIcon>;
	multiple: boolean;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	smartButton: ButtonProps;
	touched: boolean;
	tabIndex: number;
	value: string;
};
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = {
	id: string;
};
type OptionalStates = {
	accept: string;
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: KoliBriInputIcon;
	multiple: boolean;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	smartButton: ButtonProps;
	touched: boolean;
	tabIndex: number;
	value: string;
};

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;

export type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;

export type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
