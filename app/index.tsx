import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const logoNew = require("../assets/images/LogoApp.png");

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <Text style={styles.appTitle}>Learning Hub</Text>

                <Image source={logoNew} style={styles.logo} />

                <Text style={styles.mainTitle}>
                    Everything{"\n"}You Learn In One App
                </Text>

                <Text style={styles.shortDesc}>
                    All your courses, tutorials, and guides in one place.
                </Text>
            </View>

            <Link href="/dashboard" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    mainContent: {
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60,
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    shortDesc: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
