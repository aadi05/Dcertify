import React, {Component} from "react";
import DigitalCertificationInstance from '../instances/DigitalCertificationInstance';
import {Container, Form, Button, Input, Segment, Checkbox, Message} from 'semantic-ui-react';
import Head from 'next/head';
import { Tab } from 'semantic-ui-react';
import AdminHeader from '../components/AdminHeader';
import web3 from '../instances/web3';
const SHA256 = require("crypto-js/sha256");
import swal from "sweetalert";

class Admin extends Component{

    state={
        merkleRoot:"",
        creationStatus:false,
        certificateHash:""
    };

    onSubmitDeploy = async (event) => {
        event.preventDefault();
        const resultArray = this.state.merkleRoot.split("/");
        const mRoot = resultArray[0];
        const batchCount = parseInt(resultArray[1]);

        const accounts = await web3.eth.getAccounts();
        try{
          const merkleStatus = await DigitalCertificationInstance.methods.checkMerkleRoot(mRoot).call();
          if(merkleStatus){
            swal("Merkle Root already exists",mRoot,"warning");
            return;
          }
        }
        catch(err){
          console.log(err);
        }

        try{
            await DigitalCertificationInstance.methods.storeMerkleRoot(mRoot,batchCount).send({gas:"1000000",from:accounts[0]});
        }
        catch(err){
            console.log(err)
        }
        this.setState({creationStatus:true});

        swal("Merkle Root Deployed", mRoot, "success");

    };

    setValues = (obj) => {
      const data = obj.CertificateData;
      const cert = JSON.stringify(data);
      const certiHash = SHA256(cert).toString();
      this.setState({merkleRoot:obj.MerkleRoot,certificateHash:certiHash});

    }

    handleFile = (selectorFiles) => {
        const reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(selectorFiles[0]);
    }

    onReaderLoad = (event) => {
        var obj = JSON.parse(event.target.result);
        this.setValues(obj);
        
    }

    onSubmitRevoke = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts(); 

        swal({
            title: "Are you sure?",
            text: "Once revoked, the certificate will be permanently removed!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
              swal("Certificate succesfully revoked!", {
                icon: "success",
              });
              try{
                await DigitalCertificationInstance.methods.revokeCertificate(this.state.certificateHash).send({
                    gas:"1000000",from:accounts[0]
                });
                console.log("Revoked!");
                }
                catch(err){
                    console.log("revoke unsuccessfull");
                }
            } else {
              swal("Certificate is safe!");
            }
          });
        
    }

    generateJSX = (<Segment style={{background:"white"}}>
                        <Form onSubmit={this.onSubmitDeploy}>
                            <Form.Field required>
                            <label>Merkle Root</label>
                            <input placeholder='Merkle Root'
                            onChange={event => this.setState({merkleRoot: event.target.value})} />
                            </Form.Field>
                            <Button loading={this.state.loading} fluid primary type="submit">Deploy</Button>
                        </Form>
                    </Segment>);

    revokeJSX = (<Form style={{marginTop:"10px"}} onSubmit={this.onSubmitRevoke}>
                    <Form.Field>
                    <label style={{fontSize:"15px"}}>Revoking certificate will permanently remove the copy of certificate.</label><br></br>
                    <Input type="file" labelPosition="right" style={{color:"red"}}
                    onChange={event =>this.handleFile(event.target.files)} />
                    </Form.Field>
                    <Button type='submit' fluid style={{background:"red",color:"white"}}>Revoke</Button>
                  </Form>);

    panes = [
        { menuItem: 'Deploy Merkle root', render: () => <Tab.Pane>{this.generateJSX}</Tab.Pane> },
        { menuItem: 'Revoke Certificate', render: () => <Tab.Pane>{this.revokeJSX}</Tab.Pane> },
        { menuItem: 'Create Account', render: () => <Tab.Pane>Unimplemented</Tab.Pane> },
      ]

    render(){
        return  (<div>
                <AdminHeader/>
                <Container>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <style>{'body { background-color: "white"; }'}</style>
                </Head>
                <Tab panes={this.panes}/>
                </Container>
                </div>
                );
    }

}

export default Admin;