import {StatusBar, TextInput, TouchableOpacity} from "react-native";
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {useState} from "react";
import {loginStyle} from "./loginStyle";
import {NavContext} from "../../context/navigattionContext";

// СТРАНИЦА ВХОДА В АККАУНТ
export function HomeScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { index, setIndex } = React.useContext(NavContext);

    const handlerButtonClick = () => {
        setIndex(1)
    }

    return (
        <View style={loginStyle.wrapper}>
            <View style={loginStyle.container}>
                <View style={loginStyle.image_container}>
                    <Image style={loginStyle.image} source={require('../../assets/MTC_logo.png')}/>
                </View>
                <Text style={loginStyle.text_login}>Введите логин</Text>
                <TextInput
                    style={loginStyle.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="+375 (__) ___-__-__"
                />
                <Text style={loginStyle.text_password}>Введите пароль</Text>
                <TextInput
                    style={loginStyle.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Пароль"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={loginStyle.button}
                    onPress={() => handlerButtonClick()}
                >
                    <Text style={loginStyle.button_text}>Войти</Text>
                </TouchableOpacity>
                <StatusBar barStyle="dark-content" />
            </View>
        </View>
    );
}
