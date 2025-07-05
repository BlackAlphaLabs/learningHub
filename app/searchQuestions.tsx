import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Animated,
    Easing,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type DataItem = {
    id: string;
    main_title: string;
    subject: string;
    cetogray: string;
    desc: string;
    link?: string;
};

export default function Index() {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    // Images local import
    const images = [
        require("../assets/images/Coding1.png"),
        require("../assets/images/Coding2.png"),
        require("../assets/images/Coding3.png"),
        require("../assets/images/Coding4.png"),
        require("../assets/images/Coding5.png"),
    ];

    // Back icon import
    const backIcon = require("../assets/images/Back.png");

    useEffect(() => {
        fetch("https://learning-hub-vert.vercel.app/api/get-alldata")
            .then((res) => res.json())
            .then((json) => {
                if (json && Array.isArray(json.Result)) {
                    setData(json.Result);
                } else {
                    setData([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch data:", err);
                setLoading(false);
            });
    }, []);

    const filteredData = data.filter((item) =>
        item.main_title.toLowerCase().includes(searchText.toLowerCase())
    );

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    const renderCard = (item: DataItem, index: number) => {
        const scaleAnim = new Animated.Value(1);

        const onPressIn = () => {
            Animated.timing(scaleAnim, {
                toValue: 0.96,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.out(Easing.quad),
            }).start();
        };

        const onPressOut = () => {
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.out(Easing.quad),
            }).start();
        };

        const imgSource = images[index % images.length];

        return (
            <AnimatedTouchable
                key={item.id}
                activeOpacity={0.9}
                onPress={() => item.link && Linking.openURL(item.link)}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[styles.itemCard, { transform: [{ scale: scaleAnim }] }]}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.main_title}
                    </Text>
                    <Text style={styles.subject}>Subject: {item.subject}</Text>
                    <Text style={styles.category}>Category: {item.cetogray}</Text>
   
                    {item.link && (
                        <View style={styles.linkWrapper}>
                            <Text style={styles.link}>Go to resource →</Text>
                        </View>
                    )}
                </View>
                <Image source={imgSource} style={styles.image} resizeMode="cover" />
            </AnimatedTouchable>
        );
    };

    return (
        <View style={styles.container}>
            {/* Back icon and search input in same row */}
            <View style={styles.searchRow}>
                <Link href="/dashboard" asChild>
                    <TouchableOpacity
                        style={styles.backButton}
                    >
                        <Image source={backIcon} style={styles.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </Link>
                <TextInput
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search by title..."
                    placeholderTextColor="#999"
                    style={styles.searchInputRow}
                    autoCorrect={false}
                    autoCapitalize="none"
                    clearButtonMode="while-editing"
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 40 }} />
            ) : (
                <ScrollView
                    contentContainerStyle={styles.listContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    {filteredData.length > 0 ? (
                        filteredData.map(renderCard)
                    ) : (
                        <Text style={styles.noResultsText}>No results found.</Text>
                    )}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFC",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    backButton: {
        padding: 8,
        marginRight: 12,
        borderRadius: 10,
        backgroundColor: "#E5E7EB", // subtle bg behind icon
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
    },
    backIcon: {
        width: 18,
        height: 18,
    },
    searchInputRow: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 18,
        fontSize: 16,
        color: "#111827",
        borderWidth: 1,
        borderColor: "#D1D5DB",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    listContainer: {
        paddingBottom: 60,
    },
    itemCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        paddingRight: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: "#111827",
        marginBottom: 8,
        lineHeight: 26,
    },
    subject: {
        fontSize: 14,
        color: "#6B7280",
        fontWeight: "600",
        marginBottom: 4,
    },
    category: {
        fontSize: 13,
        fontWeight: "700",
        color: "#3B82F6",
        marginBottom: 10,
        letterSpacing: 0.4,
    },
    description: {
        fontSize: 15,
        color: "#374151",
        marginBottom: 14,
        lineHeight: 20,
    },
    linkWrapper: {
        alignSelf: "flex-start",
        backgroundColor: "#3B82F6",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 30,
        shadowColor: "#3B82F6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    link: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "700",
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 18,
        backgroundColor: "#E0E7FF",
        borderWidth: 1,
        borderColor: "#C7D2FE",
    },
    noResultsText: {
        textAlign: "center",
        marginTop: 40,
        color: "#9CA3AF",
        fontSize: 16,
    },
});
