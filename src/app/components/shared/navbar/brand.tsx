import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import Image from "../../form/Image";
import octopusfx from "../../../assets/image-octopusfx/Logo Octopus-col_Plan de travail 1.png";

const Brand = () => {
  const goToHome = () => {
    window.location.href = "/dashboard";
  }
  return (
    <ButtonComponent cssClass="e-inherit logo e-appbar-menu h-full" onClick={goToHome} title="Aller à l'acueil">
      <Image
        src={octopusfx}
        alt="OCTOPUSFX"
        title=""
        className="w-44 p-0 m-0"
      />
    </ButtonComponent>
  );
};

export default Brand;
