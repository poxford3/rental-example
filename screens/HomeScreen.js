import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const buttonListFontSize = 16;
  const todayDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const itemsToLeaseAgain = [
    {
      img: require("../assets/drill.jpeg"),
      itemName: "Makita Cordless Drill",
      costPerHour: "$5.00 /hr",
      costPerDay: "$35.00 day",
      costPerWeek: "$160.00 week",
      distance: "4.0 km",
      id: 1,
    },
    {
      img: require("../assets/boschSander.jpeg"),
      itemName: "Bosch Sander",
      costPerHour: "$5.00 /hr",
      costPerDay: "$35.00 day",
      costPerWeek: "$160.00 week",
      distance: "4.0 km",
      id: 2,
    },
    {
      img: require("../assets/chainsaw.png"),
      itemName: "Husqvarna Chainsaw",
      costPerHour: "$5.00 /hr",
      costPerDay: "$35.00 day",
      costPerWeek: "$160.00 week",
      distance: "4.0 km",
      id: 3,
    },
  ];

  const newOfferList = [
    {
      id: 1,
      offerName: "Big Chainsaw!",
      offerImg: require("../assets/chainsaw.png"),
    },
    {
      id: 2,
      offerName: "Idea Origin!",
      offerImg: require("../assets/insp.png"),
    },
  ];

  const RoundButton = ({ text, icon, fontSize }) => {
    return (
      <TouchableOpacity style={styles.buttons}>
        {icon ? <Ionicons name={icon} size={20} /> : <></>}
        <Text style={{ fontSize: fontSize }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const ItemOption = ({ img, name, costHour, costDay, costWeek, dist }) => {
    return (
      <TouchableOpacity
        style={styles.leaseListItem}
        onPress={() => {
          console.log(name);
        }}
      >
        <Image source={img} style={styles.leaseImage} />
        <View style={styles.itemInfo}>
          <View style={styles.itemTop}>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location" size={15} color={colors.grey} />
              <Text style={{ color: colors.grey }}>{dist}</Text>
            </View>
          </View>
          <View style={styles.itemBottom}>
            <Text style={{ marginRight: 10 }}>{costHour}</Text>
            <Text style={{ marginRight: 10, color: colors.grey }}>
              {costDay}
            </Text>
            <Text style={{ marginRight: 10, color: colors.grey }}>
              {costWeek}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const NewOfferItem = ({ name, img }) => {
    return (
      <TouchableOpacity style={styles.newOfferItemView}>
        <Image source={img} style={styles.offerImage} />
        <Text style={styles.offerText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topSection}>
          <View style={{ width: 30 }}></View>
          <RoundButton icon="location" text="Los Angeles" fontSize={16} />
          <TouchableOpacity style={styles.map}>
            <Ionicons name="map-outline" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerText}>
          <View style={styles.textContainer}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              L A I N A P P I
            </Text>
            <Text style={{ color: colors.grey }}>
              Not everything needs to be owned
            </Text>
          </View>
        </View>
        <View style={styles.searchSection}>
          <Searchbar
            placeholder="Search Lainappi"
            style={{ width: "90%", borderRadius: 10 }}
          />
        </View>
      </View>
      <View style={styles.topLists}>
        <ScrollView
          style={styles.buttonContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <RoundButton text="Sports" fontSize={buttonListFontSize} />
          <RoundButton text="Electronics" fontSize={buttonListFontSize} />
          <RoundButton text="Tools" fontSize={buttonListFontSize} />
          <RoundButton text="Outdoors" fontSize={buttonListFontSize} />
          <RoundButton text="Indoors" fontSize={buttonListFontSize} />
        </ScrollView>
      </View>
      <View style={styles.body}>
        <ScrollView style={{ width: screenWidth * 0.95 }}>
          <View style={styles.leaseAgain}>
            <Text
              style={{
                fontSize: 25,
                color: colors.black,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Lease again
            </Text>
            <FlatList
              data={itemsToLeaseAgain}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ItemOption
                  img={item.img}
                  name={item.itemName}
                  costHour={item.costPerHour}
                  costDay={item.costPerDay}
                  costWeek={item.costPerWeek}
                  dist={item.distance}
                />
              )}
            />
          </View>
          <View style={styles.newOffers}>
            <Text
              style={{
                fontSize: 25,
                color: colors.black,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              New Offers
            </Text>
            <NewOfferItem
              img={newOfferList[1].offerImg}
              name={newOfferList[1].offerName}
            />
            <NewOfferItem
              img={newOfferList[0].offerImg}
              name={newOfferList[0].offerName}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    // justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
    // height: 400,
    paddingLeft: 10,
    paddingTop: 10,
  },
  buttons: {
    flexDirection: "row",
    // width: 150,
    // height: 60,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 5,
    // shadowColor: colors.black,
    borderWidth: 0.2,
    shadowRadius: 80,
    shadowOpacity: 0.55,
  },
  buttonContainer: {
    width: screenWidth * 0.95,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: "white",
  },
  header: {
    height: 220,
    marginTop: 10,
  },
  headerText: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingVertical: 10,
    marginTop: 10,
  },
  itemBottom: {
    flexDirection: "row",
    marginTop: 6,
  },
  itemTop: {
    marginTop: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leaseAgain: {
    // width: "90%",
  },
  leaseImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  leaseListItem: {
    height: 250,
    width: 250,
    marginRight: 10,
  },
  newOffers: {
    marginTop: 80,
  },
  newOfferItemView: {
    height: 250,
    width: "100%",
    paddingRight: 15,
    marginVertical: 10,
  },
  offerImage: {
    height: 180,
    width: "100%",
    borderRadius: 15,
  },
  offerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  searchSection: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "90%",
  },
  topLists: {
    alignItems: "flex-end",
  },
  topSection: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
