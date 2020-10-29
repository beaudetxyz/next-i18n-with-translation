import NavBar from "../components/NavBar";
import useTranslation from "../utils/useTranslation";

export default function About(props) {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div>
        <h1>{t("about")}</h1>
      </div>
    </>
  );
}
