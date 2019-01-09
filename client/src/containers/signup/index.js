import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formRequest } from '../../store/reducers/signup/actions';
import SignUp from '../../components/Signup';

class SignupContainer extends Component {
    render() {
        return (
            <SignUp {...this.props} pageTitle="Регистрация" />
        )
    }
}
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({ formRequest }, dispatch)
    }
};
function mapStateToProps (state) {
    return {
        state: state.signup
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
