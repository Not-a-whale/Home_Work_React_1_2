import {observer} from "mobx-react";
import {useInjection} from "../../ioc/ioc.react";
import ownTypes from "../../ioc/ownTypes";
import React, {useEffect} from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import ResourcesStore from "../../stores/ResourcesStore";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const Resources = observer(() => {
    const store = useInjection<ResourcesStore>(ownTypes.resourcesStore);

    useEffect(() => {
        const getResponses = async () => {
            await store.init();
        }
        getResponses()
    }, [store])

    return (
        <Container>
            <Row className="justify-content-center">
                {store.isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    <>
                        {store.resources?.map((resource, key) => (
                            <Col key={key} sm={6} md={4} lg={3} xl={2} className="mb-2 mt-2">
                                <ResourceCard resource={resource} />
                            </Col>
                        ))}
                    </>
                )}

            </Row>
        </Container>
    )
});

export default Resources
