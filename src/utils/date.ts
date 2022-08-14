import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formattedDateTitle(date: Date) {
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
}

export function publishedDateRelativeToNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
