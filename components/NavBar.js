import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../utils/useTranslation";

export default function NavBar() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation(locale, defaultLocale);

  return (
    <ul>
      <li key="home">
        <Link href="/">
          <a>{t("home")}</a>
        </Link>
      </li>
      <li key="about">
        <Link href="/about">
          <a> {t("about")}</a>
        </Link>
      </li>
      {locales.map((l, i) => (
        <li key={i}>
          <Link href={l + router.pathname} locale={l}>
            <a> {l.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
