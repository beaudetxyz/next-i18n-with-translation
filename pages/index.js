import NavBar from "../components/NavBar";
import useTranslation from "../utils/useTranslation";

export default function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div>
        <h1>{t("home")}</h1>
      </div>
    </>
  );
}
