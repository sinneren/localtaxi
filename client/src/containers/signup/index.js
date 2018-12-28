import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signupRequest } from '../../store/reducers/signup/actions';
import SignUp from '../../components/Signup';

class SignupContainer extends Component {
    render() {
        return (
            <SignUp {...this.props} />
        )
    }
}
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({ signupRequest }, dispatch)
    }
};
function mapStateToProps (state) {
    return {
        state: state.signup
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
