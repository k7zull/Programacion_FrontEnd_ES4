/* core */
import React from 'react'
import {Button,Card,CardHeader,CardBody,CardTitle,CardText,CardFooter} from 'reactstrap'

/* component: view */
function ContenidoInicioFragment() {

    return (
        <>
            <Card className="my-2">
                <CardHeader>
                    Header
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </CardBody>
                <CardFooter>
                    Footer
                </CardFooter>
            </Card>
        </>
    )
}

/* exportación */
export default ContenidoInicioFragment