const Button = (props: any) => {
    console.log(props);

    return <button className={props.color}>{props.children}</button>;

    export default button;
}