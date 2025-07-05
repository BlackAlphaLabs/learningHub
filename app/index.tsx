import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    const logoNew = require("../assets/images/LogoApp.png");
    return (
        <View style= { styles.container } >
            <View style={ styles.maincontent}>
                <Text style= {styles.maintitle}>
                    Learning Hub
                </Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    maincontent: {
        marginTop: 30
    },
    maintitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});