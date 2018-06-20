import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Select, Menu, Breadcrumb, Row, Tabs, Col, Button, Modal, Divider, Checkbox, Form, AutoComplete, Input, Icon } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actioncreators from '../../Redux/actions';
import NumberFormat from 'react-number-format';

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
                //     value: values.value,
                // }
                // this.props.actions.registration(data, this.props.history)        //FOR NEW USER REGISTRATION
            }
        });
    }
    handleSelectChange = (value) => {
        console.log(value);
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
                                        <FormItem
                                        >
                                            {getFieldDecorator('usertype', {
                                                rules: [{ required: true, message: 'Please select your user type!' }],
                                            })(
                                                <Select
                                                    placeholder="User Type"
                                                    onChange={this.handleSelectChange}
                                                >
                                                    <Option value="email">Email</Option>
                                                    <Option value="sms">SMS</Option>
                                                    <Option value="notification">Notification</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                        <FormItem {...formItemLayout}>
                                            <p >Value :</p>
                                            <div >
                                                {getFieldDecorator('value', {
                                                    rules: [{ required: true, message: 'Please input your value!' }]
                                                })
                                                    (
                                                    <NumberFormat format="################" />

                                                    )}
                                            </div>

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
const Asset = Form.create()(WrappedRegistration);
export default connect(mapStateToProps, mapDispatchToProps)(Asset);