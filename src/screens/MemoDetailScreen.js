import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                    <Text style={styles.memoHeaderDate}>2017/10/17</Text>
                </View>
                <View style={styles.memoContent}>
                    <Text>あいあい居合アイアイいあ</Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>+</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        backgroundColor: '#17313C',
        height: 100,
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        padding: 20,
        paddingTop: 30,
        flex: 1,
    },
    editButton: {
        top: 77,
        backgroundColor: '#fff',
    },
});

export default MemoDetailScreen;
