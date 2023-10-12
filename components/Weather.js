import { Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather({ latitude, longitude }) {
    const [temp, setTemp] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
            const url = api.url +  
            'lat=' + latitude +  
            '&lon=' + longitude +  
            '&units=metric' +  
            '&lang=fi' + 
            '&appid=' + api.key

            fetch(url)
            .then(res => res.json()) 
            .then((json) => {
                setTemp(json.main.temp)
                setDescription(json.weather[0].description)
                setIcon(api.icons + json.weather[0].icon + '@2x.png')
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>   
                <Text style={styles.label}>Sää</Text>    
                <Text>{temp} &#x2103;</Text>  
                { icon && 
                    <Image source={{uri: icon}} style={{width: 100, height: 100}}/>
                }
                <Text>{description}</Text> 
        </>
    
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 4,
    }
});