import {useState} from 'react';
import Chip from "../Chip/Chip";

const ChipsInput = () => {
    const [chips, addChips] = useState<String[]>([]);
    const addChip = (event : any)=>{
        if(event.key === 'Enter' &&  event.target.value.trim() != ''){
          addChips([...chips, event.target.value]);
            // console.log("adding chip to list",   event.target.value);
            event.target.value = '';
        }
    }

    const removeChip = (item : string) => {
        // const index = chips.indexOf(item);
        const updatedChips = chips.filter(chip => chip != item);
        // chips.splice(index, 1);
        addChips(updatedChips);

    }
    return <>
        <h2>Chips Input</h2>
        <input type = "text"  placeholder=" Type a chip and press enter " onKeyDown={addChip}/>
        <div className='chip-list'>
        { chips.length > 0 && chips.map((e) => (
            // <div>{item}</div>
            <Chip item = {e} removeItem = {removeChip} key = {e}/>
        ))}
        </div>
    </>
}

export default ChipsInput;