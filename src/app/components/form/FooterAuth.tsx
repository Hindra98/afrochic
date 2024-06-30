type ItemFooter = {
  name: React.JSX.Element | string;
};

type Props = {
  itemLeft: ItemFooter[];
  itemCenter: ItemFooter[];
  itemRight: ItemFooter[];
  className: string;
};

const FooterItem = ({ name }: ItemFooter) => {
  return <p>{name}</p>;
};

const FooterItems = ({ name }: ItemFooter) => {
  return <p>{name}</p>;
};

const FooterAuth = ({
  itemLeft = [],
  itemCenter = [],
  itemRight = [],
  className
}: Props) => {
  return (
    <footer className={"footerauth flex flex-row gap-2 w-full items-center px-5 py-3" + className}>
      <div className={"flex flex-row justify-start gap-2 items-center me-auto"}>
        {itemLeft.map((item, key) => (
          <>
            <FooterItem name={item.name} key={key} />
            {itemLeft.length - 1 > key && <p key={key+itemLeft.length}>|</p>}
          </>
        ))}
      </div>
      <div className={"flex flex-row justify-start gap-2 items-center mx-auto"}>
        {itemCenter.map((item, key) => (
          <>
            <FooterItem name={item.name} key={key} />
            {itemCenter.length - 1 > key && <p key={key+itemLeft.length}>|</p>}
          </>
        ))}
      </div>
      <div className={"flex flex-row justify-start gap-2 items-center ms-auto"}>
        {itemRight.map((item, key) => (
          <>
            <FooterItem name={item.name} key={key} />
            {itemRight.length - 1 > key && <p key={key+itemLeft.length}>|</p>}
          </>
        ))}
      </div>
    </footer>
  );
};

export default FooterAuth;
