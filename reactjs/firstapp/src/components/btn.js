function Btn(props) {
    return <>
        <button onClick={props.btnClick}>{props.text}</button>
    </>
}

export default Btn