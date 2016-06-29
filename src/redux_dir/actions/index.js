export const CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE';

export function changePaymentType(newVal){
	return {
		type: CHANGE_PAYMENT_TYPE,
		newVal
	}
}