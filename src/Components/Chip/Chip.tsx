const Chip = (props : any)=> {
    const removeListItem = () => {
        props.removeItem(props.item);
    }
    return (
        <div className="chip" key={props.item}>
            {props.item + "  "}
            <a onClick={ removeListItem}>x</a>
        </div>)
}

export default Chip;