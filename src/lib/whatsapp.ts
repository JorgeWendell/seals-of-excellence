export const WHATSAPP_NUMBER = "55119958862669";

export function whatsAppUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function cotacaoMessage(produto: string, categoria: string) {
  return `Olá! Gostaria de solicitar uma cotação do ${produto} (${categoria}).`;
}
