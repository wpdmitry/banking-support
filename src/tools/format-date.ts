import format from "date-fns/format";
import { ru } from "date-fns/locale";

export default (dateString: string, pattern: string = "d MMMM HH:mm") =>
  format(new Date(dateString), pattern, { locale: ru });
