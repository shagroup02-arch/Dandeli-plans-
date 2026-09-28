/**
 * Dandeli Plans WhatsApp and Phone Contact Utilities
 */

export const CONTACT_PHONE = '7676699234';
export const CONTACT_PHONE_INTERNATIONAL = '917676699234';

export interface WhatsAppInquiryParams {
  resort?: string;
  room?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string | number;
  activity?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(params: WhatsAppInquiryParams = {}): string {
  let message = '';

  if (params.customMessage) {
    message = params.customMessage;
  } else if (params.activity) {
    message = `Hello Dandeli Plans, I would like to enquire about ${params.activity}. Please share pricing, slots, and availability details.`;
  } else if (params.resort || params.room) {
    message = `Hello Dandeli Plans, I would like to enquire about a resort booking.\n\n` +
      `Resort: ${params.resort || 'To be decided'}\n` +
      `Room: ${params.room || 'Best available option'}\n` +
      `Check-in: ${params.checkIn || 'Dates to confirm'}\n` +
      `Check-out: ${params.checkOut || 'Dates to confirm'}\n` +
      `Guests: ${params.guests || '2 Adults'}\n\n` +
      `Please share current availability, packages, and booking details.`;
  } else {
    message = `Hello Dandeli Plans, I would like to enquire about booking a premium resort stay and water adventures in Dandeli. Please share package details.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_PHONE_INTERNATIONAL}?text=${encodedMessage}`;
}

export function getTelUrl(): string {
  return `tel:+91${CONTACT_PHONE}`;
}

export function openSafeLink(url: string): void {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    window.location.href = url;
  }
}
