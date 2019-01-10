import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formRequest } from '../../store/reducers/signin/actions';
import SignUp from '../../components/Signup';

class SigninContainer extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <SignUp {...this.props} />
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
        state: state.signin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
