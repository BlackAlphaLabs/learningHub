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
                <TouchableOpacity onPress={toggleSidebar} activeOpacity={0.7} style={styles.iconButton}>
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

            {/* HORIZONTAL CARDS */}
            <View style={styles.cardsContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#1F2937' }}>
                        Hot Learning Topics
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 15, fontWeight: '500', color: '#2563EB' }}>
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
                    <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
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
        backgroundColor: "#F9FAFB",
    },
    topbanner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        paddingHorizontal: 24,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        backgroundColor: "#fff",
    },
    iconButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#F3F4F6",
    },
    logo: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    userimg: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#D1D5DB",
    },
    appTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: "#1F2937",
        letterSpacing: 0.5,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchInput: {
        backgroundColor: "#F3F4F6",
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        color: "#111827",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    cardsContainer: {
        marginTop: 30,
    },
    card: {
        flexDirection: "row",
        width: 290,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginRight: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    cardImageLeft: {
        width: 90,
        height: 90,
        borderRadius: 12,
        resizeMode: "cover",
        marginRight: 14,
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111827",
    },
    cardDesc: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 4,
        marginBottom: 8,
    },
    topicBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#E0F2FE",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    topicText: {
        fontSize: 12,
        color: "#0284C7",
        fontWeight: "600",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    sidebar: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get("window").width * 0.85,
        backgroundColor: "#ffffff",
        paddingVertical: 50,
        paddingHorizontal: 25,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    sidebarTitle: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 25,
        color: "#111827",
    },
    menuItem: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
    },
    menuText: {
        fontSize: 17,
        color: "#374151",
        fontWeight: "600",
    },
});
