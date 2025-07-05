import { Link } from "expo-router";
import { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
    const sliderImg = require("../assets/images/SliderDash.png");
    const userImg = require("../assets/images/UserDash.png");

    const screenWidth = Dimensions.get("window").width;
    const sidebarWidth = screenWidth * 0.85;

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-sidebarWidth)).current;

    // Search input state
    const [searchText, setSearchText] = useState("");

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

    // Sample card data
    const cards = [
        {
            id: 1,
            image: require("../assets/images/Coding1.png"),
            title: "React Basics",
            description: "Learn fundamentals of React.js",
            topic: "Frontend",
        },
        {
            id: 2,
            image: require("../assets/images/Coding2.png"),
            title: "Node.js Guide",
            description: "Master backend development",
            topic: "Backend",
        },
        {
            id: 3,
            image: require("../assets/images/Coding3.png"),
            title: "MongoDB Essentials",
            description: "Understand NoSQL databases",
            topic: "Database",
        },
        {
            id: 4,
            image: require("../assets/images/Coding4.png"),
            title: "Express.js Intro",
            description: "Build RESTful APIs easily",
            topic: "Backend",
        },
        {
            id: 5,
            image: require("../assets/images/Coding5.png"),
            title: "JavaScript Tips",
            description: "Write clean and efficient JS",
            topic: "Programming",
        },
        {
            id: 6,
            image: require("../assets/images/Coding1.png"),
            title: "Tailwind CSS",
            description: "Style with utility-first CSS",
            topic: "Design",
        },
    ];

    return (
        <View style={styles.container}>
            {/* TOP BANNER */}
            <View style={styles.topbanner}>
                <TouchableOpacity
                    onPress={toggleSidebar}
                    activeOpacity={0.7}
                    style={styles.iconButton}
                >
                    <Image source={sliderImg} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.appTitle}>Learning Hub</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
                    <Image source={userImg} style={styles.userimg} />
                </TouchableOpacity>
            </View>

            {/* SEARCH INPUT */}
            <View style={styles.searchContainer}>
                <TextInput
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search Questions"
                    placeholderTextColor="#888"
                    style={styles.searchInput}
                    returnKeyType="search"
                />
            </View>

            {/* HORIZONTAL CARDS SLIDER */}
            <View style={styles.cardsContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 15, fontWeight: 'bold' }}>
                        Hot Learning Topics
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 15, fontWeight: '500' }}>
                            Show all
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    {cards.map((card) => (
                        <View key={card.id} style={styles.card}>
                            <Image source={card.image} style={styles.cardImageLeft} />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardTitle}>{card.title}</Text>
                                <Text style={styles.cardDesc}>{card.description}</Text>
                                <View style={styles.topicBadge}>
                                    <Text style={styles.topicText}>{card.topic}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* SIDEBAR + OVERLAY */}
            {sidebarVisible && (
                <>
                    <Pressable style={styles.overlay} onPress={toggleSidebar} />
                    <Animated.View
                        style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
                    >
                        <Text style={styles.sidebarTitle}>Menu</Text>

                        <View style={styles.menuItem}>
                            <Link href="/">
                                <Text style={styles.menuText}>Home</Text>
                            </Link>
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
        backgroundColor: "#fff",
    },
    topbanner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    iconButton: {
        padding: 8,
        borderRadius: 12,
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    userimg: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    appTitle: {
        fontSize: 22,
        fontWeight: "900",
        color: "#111",
        letterSpacing: 1,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchInput: {
        backgroundColor: "#f0f0f0",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#222",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardsContainer: {
        marginTop: 25,
    },
    card: {
        flexDirection: "row",
        width: 290,
        backgroundColor: "#fff",
        borderRadius: 14,
        marginRight: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    cardImageLeft: {
        width: 100,
        height: 100,
        borderRadius: 12,
        resizeMode: "cover",
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111",
    },
    cardDesc: {
        fontSize: 14,
        color: "#666",
        marginVertical: 6,
    },
    topicBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#eee",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    topicText: {
        fontSize: 12,
        color: "#555",
        fontWeight: "600",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    sidebar: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get("window").width * 0.85,
        backgroundColor: "#fff",
        paddingVertical: 40,
        paddingHorizontal: 25,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    sidebarTitle: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#222",
        letterSpacing: 1.2,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    menuText: {
        fontSize: 18,
        color: "#333",
        fontWeight: "600",
    },
});
