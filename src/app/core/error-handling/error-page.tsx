import { useNavigate } from "react-router-dom";
import "../../styles/_error-handling.scss"

export default function ErrorPage() {
  const navigate = useNavigate()
  const previousPage = () => {
    navigate(-1);
  }
  return (
    <div className={"error-page m-8 text-xl"}>
      <h1 className="text-2xl">Page not found</h1>
      <div className={"oops"}>Oops!</div>
      <div className={"message"}>Something went wrong...</div>
      <button type="button" onClick={previousPage}>Revenir en arriere</button>
    </div>
  );
}
