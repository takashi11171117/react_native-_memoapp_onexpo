import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch(() => {
            });
    }

    handlePress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ログイン</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Adderess"
                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor="#c70f66">
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress}>
                    <Text style={styles.signupTitle}>メンバー登録する</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        height: 48,
        marginBottom: 16,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
    signup: {
        marginTop: 16,
        alignSelf: 'center',
    },
    signupTitle: {
        fontSize: 16,
    },
});

export default LoginScreen;
