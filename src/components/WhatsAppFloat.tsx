import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "./site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Vitality Pilates Manaus no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lift transition-all duration-300 hover:scale-105 hover:bg-primary/90 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.6} />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}