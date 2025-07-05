import { useRef, useState } from "react";
import { Animated, Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const sliderImg = require("../assets/images/SliderDash.png");
    const userImg = require("../assets/images/UserDash.png");

    const screenWidth = Dimensions.get('window').width;
    const sidebarWidth = screenWidth * 0.85;

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-sidebarWidth)).current;

    const toggleSidebar = () => {
        if (sidebarVisible) {
            Animated.timing(slideAnim, {
                toValue: -sidebarWidth,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setSidebarVisible(false));
        } else {
            setSidebarVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <View style={styles.container}>
            {/* TOP BANNER */}
            <View style={styles.topbanner}>
                <TouchableOpacity onPress={toggleSidebar} activeOpacity={0.7} style={styles.iconButton}>
                    <Image source={sliderImg} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.appTitle}>Learning Hub</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
                    <Image source={userImg} style={styles.userimg} />
                </TouchableOpacity>
            </View>

            {/* SIDEBAR + OVERLAY */}
            {sidebarVisible && (
                <>
                    <Pressable style={styles.overlay} onPress={toggleSidebar} />
                    <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
                        <Text style={styles.sidebarTitle}>Menu</Text>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Home</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Courses</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Profile</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Settings</Text>
                        </View>
                    </Animated.View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topbanner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    iconButton: {
        padding: 8,
        borderRadius: 12,
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    userimg: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    appTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#111',
        letterSpacing: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width * 0.85,
        backgroundColor: '#fff',
        paddingVertical: 40,
        paddingHorizontal: 25,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    sidebarTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#222',
        letterSpacing: 1.2,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
    },
});
