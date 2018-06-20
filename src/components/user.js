import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Select, Menu, Breadcrumb, Row, Tabs, Col, Button, Modal, Divider, Checkbox, Form, AutoComplete, Input, Icon } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actioncreators from '../../Redux/actions';


const FormItem = Form.Item;
const Option = Select.Option;

class WrappedRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // let data = {
                //     firstname: values.firstname,
                //     lastname: values.lastname,
                // }
                // this.props.actions.registration(data, this.props.history)        //FOR NEW USER REGISTRATION
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },

                sm: {
                    span: 8
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                }
            }
        };
        const { Header, Content, Footer } = Layout;
        return (
            <div>
                <Layout >
                    <Row >
                        <Row>
                            <div >
                                <Row >
                                    <h1 >User</h1>
                                </Row>
                                <Row>
                                    <Form onSubmit={this.handleSubmit} >
                                        <FormItem>
                                            <p >First Name :</p>
                                            {getFieldDecorator('firstname', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Please enter your firstname!'
                                                    }
                                                ]
                                            })(<Input type="name" placeholder="firstname"/>)}

                                        </FormItem>
                                        <FormItem>
                                            <p >Last Name :</p>
                                            {getFieldDecorator('lastname', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Please enter your lastname!'
                                                    }
                                                ]
                                            })(<Input type="name" placeholder="lastname"/>)}

                                        </FormItem>
                                        <FormItem>
                                            <div >

                                                <div >
                                                    <Button type="primary" htmlType="submit">
                                                        Submit
                                                    </Button>
                                                </div>
                                            </div>
                                        </FormItem>

                                    </Form>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                        </Row>
                    </Row>

                </Layout>
            </div>
        );
    }
}

// export default Registration;

const mapStateToProps = (state) => {
    console.log('Registration screen info', state)
    return state

}

function mapDispatchToProps(dispatch, state) {
    return ({
        actions: bindActionCreators(actioncreators, dispatch)
    })
}
const User = Form.create()(WrappedRegistration);
export default connect(mapStateToProps, mapDispatchToProps)(User);