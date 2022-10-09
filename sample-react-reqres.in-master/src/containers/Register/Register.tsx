import {observer} from "mobx-react";
import {useInjection} from "../../ioc/ioc.react";
import LoginStore from "../../stores/LoginStore";
import ownTypes from "../../ioc/ownTypes";
import {useTranslation} from "react-i18next";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import React from "react";
import RegisterStore from "../../stores/RegisterStore";
import ButtonSpinner from "../../components/ButtonSpinner";
import ErrorMessage from "../../components/Error";

const Register = observer(() => {
    const store = useInjection<RegisterStore>(ownTypes.registerStore);
    const { t } = useTranslation(['register']);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={4} md={6} xs>
                    <Form onSubmit={(ev)=>{ ev.preventDefault();
                        store.register();
                    }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={t('placeholder.email')}
                                value={store.email}
                                onChange={(ev)=> {store.changeEmail(ev.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={t('placeholder.password')}
                                value={store.password}
                                onChange={(ev)=> {store.changePassword(ev.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={t('placeholder.password')}
                                onChange={(ev)=> {store.arePasswordsIdentical(ev.target.value)}}
                            />
                        </Form.Group>
                        <ErrorMessage />
                        <ButtonSpinner />
                        {!!store.token && (
                            <p className="mt-3 mb-3" style={{ color: 'green', fontSize: 14, fontWeight: 700 }}>{t('success', { token: store.token } )}</p>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
});

export default Register
