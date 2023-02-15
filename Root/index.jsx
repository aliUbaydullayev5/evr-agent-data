import React from 'react'
import Container from "@/Root/style";

const Root = ({children}) => {
    return(
        <Container>
            <Container.Inset>
                {children}
            </Container.Inset>
        </Container>
    )
}

export default Root