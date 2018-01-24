import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress = () => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        db.collection(`users/${currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        }).then(() => {
            this.props.navigation.goBack();
        }).catch(() => {
        });
    }

    // this.props.navigation.goBack();
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoCreateInput}
                    value={this.state.body}
                    multiline
                    onChangeText={(text) => { this.setState({ body: text }); }}
                />
                <CircleButton onPress={() => { this.handlePress(); }}>
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
    memoCreateInput: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
        paddingTop: 32,
        fontSize: 16,
    },
});

export default MemoCreateScreen;
