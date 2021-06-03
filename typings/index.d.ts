import * as React from 'react';
import {
	InputProps,
	MenuProps,
	ButtonProps,
	FormControlProps,
	CollapseProps,
	SwitchProps,
	TooltipProps,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { AutocompleteProps } from '@material-ui/lab';
import { SvgIconComponent } from '@material-ui/icons';
import { Props as MaterialUIChipInput } from 'material-ui-chip-input';
import { ValidatorFormProps } from 'react-material-ui-form-validator';
import { DatePickerProps } from '@material-ui/pickers';

declare module '@date-io/type' {
	export type DateType = Date;
}

interface ValidatorProps {
	validators?: Array<string>;
	errorMessages?: Array<string>;
}

interface LoadingProps {
	isLoading?: boolean;
}
export interface InputEnglobityProps
	extends InputProps,
		ValidatorProps,
		LoadingProps {
	icon?: SvgIconComponent;
	isLoading?: boolean;
	skeletonHeight?: 48;
	skeletonClassName?: string;
	validators?: Array<string>;
	errorMessages?: Array<string>;
}

export interface AsyncInputAutocompleteEnglobityProps
	extends AutocompleteProps,
		ValidatorProps,
		LoadingProps {
	validators?: Array<string>;
	errorMessages?: Array<string>;
	icon?: SvgIconComponent;
	requestAction: Promise<object>;
	defaultInputValue: string;
	skeletonHeight?: 48;
}

export interface AvatarEnglobityProps extends MenuProps {
	id: string;
	onLogOut: Function;
	userName: string;
	letters: string;
	userEmail: string;
	userThumbnai?: string;
	logOutText: string;
	myAccountText: string;
	myAccountLink: string;
}

export interface ButtonEnglobityProps extends ButtonProps {
	type: 'primary' | 'secondary';
	tooltip: TooltipProps;
	rootClassName: string;
}

export interface ChipInputEnglobityProps
	extends MaterialUIChipInput,
		LoadingProps {
	skeletonHeight: 48;
	icon?: SvgIconComponent;
}

export interface DateTimePickerEnglobityProps
	extends DatePickerProps,
		LoadingProps {
	withHours: boolean;
	value: string;
	icon?: SvgIconComponent;
	inputClassName: string;
	skeletonHeight?: 48;
}

type ButtonsObj = {
	id: string;
	onClick: Function;
	text: string;
	children: JSX.Element;
	type: 'primary' | 'secondary';
};

export interface DialogModalEnglobityProps {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: Function;
	buttons: Array<ButtonsObj>;
}

export interface DropzoneEnglobityProps extends LoadingProps {
	onDrop: Function;
	file: string;
	accept: string;
	onDeleteFile: Function;
	labelDrop: string;
	skeletonHeight?: 48;
}

export interface FormEnglobityProps extends ValidatorFormProps {
	errors: { message: string; detail: string };
	elementRef: React.RefObject<HTMLFormElement>;
}

type SelectElement = {
	value: Array<any>;
	icons: SvgIconComponent;
	name: string;
};
export interface SelectEnglobityProps extends FormControlProps, LoadingProps {
	title;
	elements: Array<SelectElement>;
	menuItemRender: Function;
	skeletonHeight?: 48;
}

export interface SummaryEnglobityProps extends CollapseProps {
	text: string;
	detail: string;
	seeMoreText: string;
	severity: 'error' | 'warning' | 'info' | 'success';
}

export interface SwitchEnglobityProps extends SwitchProps, LoadingProps {
	label: string;
	skeletonHeight?: 48;
}

type TabElement = {
	name: string;
	icon: SvgIconComponent;
	children: JSX.Element;
};

export interface TabsEnglobityProps {
	tabs: Array<TabElement>;
	defaultPosition?: 0;
	classNameContent: string;
}

export interface TextAreaEnglobityProps extends InputProps {
	rows?: 4;
}

declare const Input: React.ComponentType<InputEnglobityProps>;
declare const AsyncInputAutocomplete: React.ComponentType<AsyncInputAutocompleteEnglobityProps>;
declare const Avatar: React.ComponentType<AvatarEnglobityProps>;
declare const Button: React.ComponentType<ButtonEnglobityProps>;
declare const ChipInput: React.ComponentType<ChipInputEnglobityProps>;
declare const DateTimePicker: React.ComponentType<DateTimePickerEnglobityProps>;
declare const DialogModal: React.ComponentType<DialogModalEnglobityProps>;
declare const Dropzone: React.ComponentType<DropzoneEnglobityProps>;
declare const Form: React.ComponentType<FormEnglobityProps>;
declare const Select: React.ComponentType<SelectEnglobityProps>;
declare function createEnglobaMaterialTheme(
	color: object,
	globals: object,
	fontFamily: object
): Theme;
declare const Summary: React.ComponentType<SummaryEnglobityProps>;
declare const Switch: React.ComponentType<SwitchEnglobityProps>;
declare const Tabs: React.ComponentType<TabsEnglobityProps>;
declare const TextArea: React.ComponentType<TextAreaEnglobityProps>;
declare function useHandleOpen(open?: false): {
	isOpen: boolean;
	handleOpen: Function;
	handleClose: Function;
};

export {
	Input,
	AsyncInputAutocomplete,
	Avatar,
	Button,
	ChipInput,
	DateTimePicker,
	DialogModal,
	Dropzone,
	Form,
	Select,
	createEnglobaMaterialTheme,
	Summary,
	Switch,
	Tabs,
	TextArea,
	useHandleOpen,
};
