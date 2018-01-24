import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
    state = {
        body: '',
        key: '',
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            body: params.memo.body,
            key: params.memo.key,
        });
    }

    handlePress = () => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        const { body, key } = this.state;
        db.collection(`users/${currentUser.uid}/memos`).doc(key)
            .update({ body })
            .then(() => {
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { body } = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput}
                    value={body}
                    multiline
                    onChangeText={(text) => { this.setState({ body: text }); }}
                />
                <CircleButton onPress={this.handlePress}>
                    {'\uf00c'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
        paddingTop: 32,
        fontSize: 16,
    },
});

export default MemoEditScreen;
