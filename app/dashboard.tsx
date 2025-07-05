import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Image, Linking, Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Dashboard() {
    const sliderImg = require("../assets/images/SliderDash.png");
    const userImg = require("../assets/images/UserDash.png");

    const screenWidth = Dimensions.get("window").width;
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

    const cards = [
        { id: 1, image: require("../assets/images/Coding1.png"), title: "React Basics", description: "Learn fundamentals of React.js", topic: "Frontend" },
        { id: 2, image: require("../assets/images/Coding2.png"), title: "Node.js Guide", description: "Master backend development", topic: "Backend" },
        { id: 3, image: require("../assets/images/Coding3.png"), title: "MongoDB Essentials", description: "Understand NoSQL databases", topic: "Database" },
        { id: 4, image: require("../assets/images/Coding4.png"), title: "Express.js Intro", description: "Build RESTful APIs easily", topic: "Backend" },
        { id: 5, image: require("../assets/images/Coding5.png"), title: "JavaScript Tips", description: "Write clean and efficient JS", topic: "Programming" },
    ];

    const latestTopics = [
        { id: 1, image: require("../assets/images/Coding1.png"), title: "Understanding Props in React", topic: "Frontend", description: "Props help to pass data.", date: "July 2, 2025" },
        { id: 2, image: require("../assets/images/Coding2.png"), title: "Secure Node.js APIs", topic: "Backend", description: "Use JWT and middleware.", date: "July 3, 2025" },
        { id: 3, image: require("../assets/images/Coding3.png"), title: "Modeling Data with MongoDB", topic: "Database", description: "Design efficient schemas.", date: "July 4, 2025" },
        { id: 4, image: require("../assets/images/Coding4.png"), title: "Express Error Handling", topic: "Backend", description: "Handle errors gracefully.", date: "July 5, 2025" },
        { id: 5, image: require("../assets/images/Coding5.png"), title: "Optimize JS Loops", topic: "Programming", description: "Improve performance.", date: "July 6, 2025" },
        { id: 6, image: require("../assets/images/Coding1.png"), title: "Tailwind Flexbox", topic: "Design", description: "Create responsive UIs.", date: "July 7, 2025" },
        { id: 7, image: require("../assets/images/Coding2.png"), title: "Using Async/Await", topic: "Programming", description: "Simplify async code.", date: "July 8, 2025" },
        { id: 8, image: require("../assets/images/Coding3.png"), title: "Database Indexing", topic: "Database", description: "Speed up queries.", date: "July 9, 2025" },
        { id: 9, image: require("../assets/images/Coding4.png"), title: "REST vs GraphQL", topic: "API", description: "Compare the two.", date: "July 10, 2025" },
        { id: 10, image: require("../assets/images/Coding5.png"), title: "Responsive CSS Grids", topic: "Design", description: "Make layouts adapt.", date: "July 11, 2025" },
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

            {/* SEARCH BUTTON */}
            <View style={styles.searchContainer}>
                <Link href="/searchQuestions" asChild>
                    <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
                        <Text style={styles.searchButtonText}>Go to Search</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            {/* HOT LEARNING */}
            <View style={styles.cardsContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.sectionTitle}>Hot Learning Topics</Text>
                    <Link href="/hotLearning" asChild>
                        <TouchableOpacity>
                            <Text style={styles.showAllLink}>Show all</Text>
                        </TouchableOpacity>
                    </Link>
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

            {/* LATEST TOPICS */}
            <View style={styles.latestContainer}>
                <Text style={styles.sectionTitle}>Latest Topics</Text>
                <ScrollView
                    style={styles.latestScroll}
                    contentContainerStyle={styles.latestScrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {latestTopics.map((item) => (
                        <View key={item.id} style={styles.latestCard}>
                            <Image source={item.image} style={styles.latestBigImage} />
                            <View style={styles.latestContent}>
                                <Text style={styles.latestTitle}>{item.title}</Text>
                                <View style={styles.latestTopicBadge}>
                                    <Text style={styles.latestTopicText}>{item.topic}</Text>
                                </View>
                                <Text style={styles.latestDesc}>{item.description}</Text>
                                <Text style={styles.latestDate}>{item.date}</Text>
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
                        {/* Added ScrollView here for scrolling content */}
                        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 30 }}>
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

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#111827' }}>
                                    About Learning Hub
                                </Text>
                                <Text style={{ paddingTop: 10, fontSize: 14, color: '#4B5563', lineHeight: 20 }}>
                                    Learning Hub is your go-to platform for cutting-edge technology tutorials and resources. We provide carefully curated content to help developers enhance their skills in modern web and backend development. Our mission is to empower learners with practical knowledge and hands-on experience, ensuring you stay ahead in the fast-paced tech world.
                                </Text>

                                <Text style={{ marginTop: 12, fontSize: 13, color: '#6B7280', fontWeight: '600' }}>
                                    Powered by Rest API and engineered by{' '}
                                    <Text
                                        style={{ color: '#2563EB', fontWeight: '700', textDecorationLine: 'underline' }}
                                        onPress={() => Linking.openURL("https://www.blackalphalabs.com/")}
                                    >
                                        BlackAlphaLabs
                                    </Text>
                                </Text>

                                <Text style={{ marginTop: 16, fontSize: 14, color: '#374151', lineHeight: 22 }}>
                                    <Text style={{ fontWeight: '700', fontSize: 15 }}>About This Release{'\n'}</Text>
                                    Learning Hub by BlackAlphaLabs is a modern, mobile and desktop-friendly web platform designed specifically for developers, students, and tech enthusiasts. This is the initial release of Learning Hub, focusing entirely on web development using the MERN stack.
                                </Text>

                                <Text style={{ marginTop: 14, fontSize: 14, color: '#374151', lineHeight: 22 }}>
                                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Current Features{'\n'}</Text>
                                    • Browse categorized, quick-access tech resources curated by developers.{'\n'}
                                    • Instantly view guides, frameworks, database references, and deployment tutorials for MERN projects.{'\n'}
                                    • Responsive, clean and attractive UI optimized for mobile and desktop browsers.{'\n'}
                                    • Strictly view-only access for public users. Only authorized platform developers can add or manage resources for now.
                                </Text>

                                <Text style={{ marginTop: 14, fontSize: 14, color: '#374151', lineHeight: 22 }}>
                                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Planned Future Updates{'\n'}</Text>
                                    • Add support for other tech stacks like Python, Django, Java, PHP, and Go.{'\n'}
                                    • Expand categories to cover UI/UX, cloud hosting, DevOps, security, AI, and more.{'\n'}
                                    • Implement a user-submitted Q&A section.{'\n'}
                                    • Introduce public contributor access for verified developers.{'\n'}
                                    • Continuous monthly resource updates.
                                </Text>
                            </View>
                        </ScrollView>
                    </Animated.View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB" },
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
    logo: { width: 28, height: 28, resizeMode: "contain" },
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
        alignItems: "center",
    },
    searchButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 14,
        shadowColor: "#2563EB",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    },
    searchButtonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
    sectionTitle: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#1F2937",
    },
    showAllLink: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: "500",
        color: "#2563EB",
    },
    cardsContainer: { marginTop: 30 },
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
    cardContent: { flex: 1, justifyContent: "center" },
    cardTitle: { fontSize: 17, fontWeight: "700", color: "#111827" },
    cardDesc: { fontSize: 13, color: "#6B7280", marginTop: 4, marginBottom: 8 },
    topicBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#E0F2FE",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    topicText: { fontSize: 12, color: "#0284C7", fontWeight: "600" },

    latestContainer: { marginTop: 30, flex: 1, paddingHorizontal: 20 },
    latestScroll: { flex: 1 },
    latestScrollContent: { paddingBottom: 20 },
    latestCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center",
    },
    latestBigImage: {
        width: 90,
        height: 90,
        borderRadius: 14,
        marginRight: 16,
        resizeMode: "cover",
    },
    latestContent: { flex: 1 },
    latestTitle: { fontSize: 17, fontWeight: "700", color: "#111827" },
    latestTopicBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#E0F2FE",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 6,
    },
    latestTopicText: { fontSize: 12, fontWeight: "600", color: "#0284C7" },
    latestDesc: { fontSize: 13, color: "#6B7280", marginTop: 6 },
    latestDate: { fontSize: 12, color: "#9CA3AF", marginTop: 4 },

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
    menuText: { fontSize: 17, color: "#374151", fontWeight: "600" },
});
