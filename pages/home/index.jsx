import React from 'react'
import Container, {Form} from "@/pages/home/style";
import Root from "@/Root";

const Home = () => {
    return(
        <Root>
            <Container>
                <Form>
                    <input type="text"/>
                    <input type="password"/>
                    <input type="submit" value="LOGIN" className={'submit'} />
                </Form>
            </Container>
        </Root>
    )
}


export default Home
