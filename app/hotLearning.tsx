import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HotLearning() {
    const cards = [
        { id: 1, image: require("../assets/images/Coding1.png"), title: "React Basics", description: "Learn fundamentals of React.js", topic: "Frontend" },
        { id: 2, image: require("../assets/images/Coding2.png"), title: "Node.js Guide", description: "Master backend development", topic: "Backend" },
        { id: 3, image: require("../assets/images/Coding3.png"), title: "MongoDB Essentials", description: "Understand NoSQL databases", topic: "Database" },
        { id: 4, image: require("../assets/images/Coding4.png"), title: "Express.js Intro", description: "Build RESTful APIs easily", topic: "Backend" },
        { id: 5, image: require("../assets/images/Coding5.png"), title: "JavaScript Tips", description: "Write clean and efficient JS", topic: "Programming" },
        { id: 6, image: require("../assets/images/Coding1.png"), title: "Tailwind CSS", description: "Style with utility-first CSS", topic: "Design" },
        { id: 7, image: require("../assets/images/Coding2.png"), title: "Next.js Mastery", description: "SSR & SSG with Next.js", topic: "Frontend" },
        { id: 8, image: require("../assets/images/Coding3.png"), title: "GraphQL Basics", description: "APIs with GraphQL", topic: "API" },
        { id: 9, image: require("../assets/images/Coding4.png"), title: "Redux Toolkit", description: "Manage state efficiently", topic: "Frontend" },
        { id: 10, image: require("../assets/images/Coding5.png"), title: "TypeScript Intro", description: "Type safe JavaScript", topic: "Programming" },
        { id: 11, image: require("../assets/images/Coding1.png"), title: "React Native", description: "Build mobile apps", topic: "Mobile" },
        { id: 12, image: require("../assets/images/Coding2.png"), title: "Docker Essentials", description: "Containerize applications", topic: "DevOps" },
        { id: 13, image: require("../assets/images/Coding3.png"), title: "CI/CD Pipelines", description: "Automate deployments", topic: "DevOps" },
        { id: 14, image: require("../assets/images/Coding4.png"), title: "Python Scripting", description: "Automate daily tasks", topic: "Programming" },
        { id: 15, image: require("../assets/images/Coding5.png"), title: "SEO for Developers", description: "Optimize your sites", topic: "Web" },
        { id: 16, image: require("../assets/images/Coding1.png"), title: "Figma Basics", description: "Design UI mockups", topic: "Design" },
        { id: 17, image: require("../assets/images/Coding2.png"), title: "Testing with Jest", description: "Write robust tests", topic: "Testing" },
        { id: 18, image: require("../assets/images/Coding3.png"), title: "REST API Design", description: "Best practices", topic: "API" },
        { id: 19, image: require("../assets/images/Coding4.png"), title: "SASS & SCSS", description: "Advanced CSS workflows", topic: "Design" },
        { id: 20, image: require("../assets/images/Coding5.png"), title: "Agile & Scrum", description: "Manage your projects", topic: "Management" },
    ];

    const backicon = require("../assets/images/Back.png");

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Link href="/dashboard" asChild>
                        <TouchableOpacity style={styles.backBtn}>
                            <Image source={backicon} style={styles.backIcon} />
                        </TouchableOpacity>
                    </Link>
                    <Text style={styles.headerText}>Hot Learning Topics</Text>
                </View>

                {cards.map((card) => (
                    <View key={card.id} style={styles.card}>
                        <Image source={card.image} style={styles.cardImage} />
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    backBtn: {
        marginRight: 14,
    },
    backIcon: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    headerText: {
        fontSize: 28,
        fontWeight: "900",
        color: "#222",
        letterSpacing: 0.6,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        borderRadius: 18,
        marginBottom: 18,
        padding: 16,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e6e6e6",
    },
    cardImage: {
        width: 90,
        height: 90,
        borderRadius: 12,
        resizeMode: "cover",
    },
    cardContent: {
        flex: 1,
        marginLeft: 18,
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: 19,
        fontWeight: "800",
        color: "#111",
        marginBottom: 5,
        letterSpacing: 0.3,
    },
    cardDesc: {
        fontSize: 14,
        color: "#555",
        marginBottom: 8,
    },
    topicBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#ddd",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 14,
    },
    topicText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#444",
    },
});
