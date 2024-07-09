import { Link } from "react-router-dom";
import { banner } from "../../../assets/images";

type Props = {
  name: string;
  size: number;
  price: number;
  note: string;
  id: string;
  img?: string;
};

const Card = (props: Props) => {
  return (
    <div className="border p-1 min-w-[250px] max-w-[350px] w-full">
      <Link to={"product/"+props.id} className="group block">
        <img
          src={banner}
          alt=""
          className="h-[350px] w-full object-cover sm:h-[450px]"
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {props.name}
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-500">
              {props.size > 0 && `Taille:  ${props.size} cm`} <br/>
              Note: {props.note}
            </p>
          </div>

          <p className="text-gray-900">&euro;{props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
