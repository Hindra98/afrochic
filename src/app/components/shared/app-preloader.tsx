import Image from "../form/Image";
import octopusfx from "../../assets/octopusfx.png";
import UILoader from "./ui-loader";


export default function AppPreloader () {

    return(
        <div className="form-base flex flex-col justify-center w-full">
            <div className="flex flex-col gap-6 justify-center min-h-[490px]">
            <div className="logo mx-auto py-4">
            <Image
                src={octopusfx}
                alt="OCTOPUSFX"
                title=""
                className=""
            />
            </div>
            <div className="child flex justify-center items-center">
                <UILoader/>
            </div>
          </div>
        </div>
    );
};