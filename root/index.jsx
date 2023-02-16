import React from 'react'
import Container from "@/root/style";

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