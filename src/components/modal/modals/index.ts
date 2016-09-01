import { AlertDialog } from './alert-dialog';
import { ConfirmDialog } from './confirm-dialog';
import { DateDialog } from './date-dialog';
import { TimeDialog } from './time-dialog';

export * from './alert-dialog';
export * from './confirm-dialog';
export * from './date-dialog';
export * from './time-dialog';

export const ACA_WIDGET_MODALS = [
	AlertDialog,
	ConfirmDialog,
	DateDialog,
	TimeDialog
]