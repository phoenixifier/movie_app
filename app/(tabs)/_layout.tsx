import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import type React from "react";
import {
	Image,
	ImageBackground,
	ImageSourcePropType,
	Text,
	View,
} from "react-native";

interface TabIconProps {
	focused: boolean;
	icon: ImageSourcePropType;
	title: string;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, title }) => {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				className="flex flex-row min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden flex-1 w-full"
			>
				<Image source={icon} tintColor="#151312" className="size-5" />
				<Text className="text-secondary text-base font-semibold ml-2">
					{title}
				</Text>
			</ImageBackground>
		);
	}
	return (
		<View className="size-full justify-center items-center rounded-full mt-4">
			<Image source={icon} tintColor="#A8B5DB" className="size-5" />
		</View>
	);
};

const Layout: React.FC = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarStyle: {
					backgroundColor: "#0f0D23",
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					position: "absolute",
					overflow: "hidden",
					borderColor: "#0f0D23",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<>
							<TabIcon focused={focused} icon={icons.home} title="Home" />
						</>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<>
							<TabIcon focused={focused} icon={icons.search} title="Search" />
						</>
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<>
							<TabIcon focused={focused} icon={icons.save} title="Saved" />
						</>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<>
							<TabIcon focused={focused} icon={icons.person} title="Profile" />
						</>
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;
