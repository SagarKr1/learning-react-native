import React from "react";
import { Button,Text,View } from "react-native";

export default function UseEffectHook(){
    const [count,setCounter] = React.useState(0);

    React.useEffect(()=>{
        alert(count);
    },[])
    return(
        <View>
            <Text>Use Effect Hook</Text>
            <Text> Count : {count}</Text>
            <Button title="press" onPress={()=>setCounter(count+1)}></Button>
        </View>
    )
}