import "../../styles/components/_mail-to.scss";

interface Props{
    children: React.JSX.Element | string;
    email: string;
}

const MailTo: React.FC<Props> = (props: Props) => {

    return (
        <>
           <a href={`mailto:${props.email}`} className="email">
                {props.children}
            </a>
        </>
    )
}

export default MailTo;