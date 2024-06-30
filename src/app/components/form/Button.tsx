import "../../styles/components/_button.scss"
type Props = {
  param?: ParamsButton;
};

export default function Button({ param = null }: Props) {
  return (
    <>
      <button
        type={param.type}
        className={`p-2 rounded-md ${param?.css}`}
        disabled={param?.disabled}
        onClick={param.handleClick}
      >
        {param.name}
      </button>
    </>
  );
}
