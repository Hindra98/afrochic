import { json } from "react-router-dom";
import { loadTranslationResources } from "../Localization/load-language-resource";
import { ControllerApi } from "../../features/common/languages/locale/controller-api";

const controllerApi = new ControllerApi();

export const loader = async () => {

 await loadTranslationResources();
 const response = (await controllerApi.getLanguages());
 return json({languages: response.payload});
}
