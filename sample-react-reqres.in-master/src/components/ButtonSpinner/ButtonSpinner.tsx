import {Button, Spinner} from "react-bootstrap";
import React from "react";
import {useInjection} from "../../ioc/ioc.react";
import RegisterStore from "../../stores/RegisterStore";
import ownTypes from "../../ioc/ownTypes";
import {useTranslation} from "react-i18next";

const ButtonSpinner = () => {
    const store = useInjection<RegisterStore>(ownTypes.registerStore);
    const { t } = useTranslation(['register']);
    return (
    <Button variant="primary" type="submit">
        {store.isLoading ? (
            <Spinner animation="border" size="sm" />
        ) : (
            `${t('submit')}`
        )}
    </Button>)
}

export default ButtonSpinner;
