import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {auth, db } from '../../firebase-config'
import {createWriteEmailAndPassword} from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";


export default function() {

    const[ email, setEmail] = useState('')
    const[ pwd, setPwd] = useState('')
    const[ name, setName] = useState('')

    const handleRegister = async () => {
        createWriteEmailAndPassword(auth, email, pwd)
        .then(async userCredentials =>{
            const currentUser = userCredentials.user;

            connst docUser = await addDoc(collection(db, "users"),{
                userId: currentUser.uid,
                name: name,
                eamil: currentUser.email,
            });
            console.log('Registered with:' currentUser);
            alert('Registered')
        })
        .catch(error => alert(error.message))
    }
    return(
        <View style={StyleSheet.container}>
            <StatusBar style='light'/>
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontsize: 90,
                        color: 'white',
                    }} > Register</Text>
            </View>
        </View>
        <View>
            <View style={{
                margin: 40
            }}>
                <TextInput
                    style={{
                        hight: 40,
                        borderColor :'gray',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        boderRadius: 20,
                        paddingHorizontal: 10,
                        placeholderTextColor: 'gray',
                        margin: 10
                    }}
                    onChangeText={setName}
                    value={name}
                    placeholder="votre Nom"
                />
                <TextInput
                    style={{
                        hight: 40,
                        borderColor :'gray',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        boderRadius: 20,
                        paddingHorizontal: 10,
                        placeholderTextColor: 'gray',
                        margin: 10
                    }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="votre Email"
                />
                <TextInput
                    style={{
                        hight: 40,
                        borderColor :'gray',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        boderRadius: 20,
                        paddingHorizontal: 10,
                        placeholderTextColor: 'gray',
                        margin: 10
                    }}
                    onChangeText={setPwd}
                    value={pwd}
                    placeholder="votre mot de passe !"
                />
            </View>

            <TouchableOpacity
            style={{
                alignItems: 'center',
                backgroundColor '#97DFC3',
                padding: 10,
                boderRadius: 20,
                width: 130,
                alignSelf: 'center'
            }}
            onPress={() => handleRegister()}
            >
                <Text>create account</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0324C'
        flexDirection: 'column'
        justifyContent: 'center'
        padding: 10
    },
});