import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress = () => {
        const { params } = this.props.navigation.state;
        const db = firebase.firestore();
        db.collection(`users/${params.currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        }).then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
        }).catch((error) => {
            console.error('Error adding document: ', error);
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