import React from "react";
import {useInjection} from "../../ioc/ioc.react";
import RegisterStore from "../../stores/RegisterStore";
import ownTypes from "../../ioc/ownTypes";

const ErrorMessage = () => {
    const store = useInjection<RegisterStore>(ownTypes.registerStore);
    if(!!store.error) { return (
        <p style={{ color: 'red', fontSize: 14 }}>{store.error}</p>
    )} else {
        return (<p></p>)
    }
}

export default ErrorMessage
