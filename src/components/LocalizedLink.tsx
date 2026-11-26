import { forwardRef, type ComponentProps } from "react";
import { Link as RouterLink } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { localizedPath, type LocalizedPath } from "@/lib/localization";

type Props = Omit<ComponentProps<typeof RouterLink>, "to" | "params" | "from"> & {
  to: LocalizedPath;
};

/** Route-aware links retain the router's href, preloading and keyboard behavior. */
export const LocalizedLink = forwardRef<HTMLAnchorElement, Props>(function LocalizedLink({ to, ...props }, ref) {
  const { lang } = useLang();
  return <RouterLink {...props} ref={ref} to={localizedPath(to, lang)} />;
});