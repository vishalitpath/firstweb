import { Input } from "@chakra-ui/core";

const TextInput = (props) => {
    return(
        <Input style={{height:20,width:50}} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    );
}

export default TextInput;