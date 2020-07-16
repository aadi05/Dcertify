import React, {Component} from "react";
import DigitalCertificationInstance from '../instances/DigitalCertificationInstance';
import {Container, Form, Button, Input, Segment} from 'semantic-ui-react';
import Head from 'next/head';
import Layout from '../components/Layout';

const formStyle = {
    fontSize:"25px"
}

class AdminLogin extends Component{

    render(){
        return  (<Container>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <style>{'body { background-color: "white"; }'}</style>
                </Head>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <label style={{fontSize:"50px",marginLeft:"400px"}}>Admin Panel</label><br></br><br></br><br></br><br></br><br></br><br></br>
                <Segment inverted>
                <Form inverted>
                  <Form.Field>
                    <Input label="Username"/>
                  </Form.Field>
                  <Form.Field>
                    <Input label="Password"/>
                  </Form.Field>
                  <Button fluid primary type='submit'>Submit</Button>
                </Form>
                </Segment>
                </Container>
                );
    }

}

export default AdminLogin;