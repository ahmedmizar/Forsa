import React from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./topBarList.style";
import { SIcon, SText } from "components/index";
import { icons } from "src/utils/icons";
function topBarList({
  list,
  selectedSector,
  contentContainerStyle,
  scrollEnabled = true,
  onPress,
}) {
  return (
    <View style={{ alignItems: "flex-start" }}>
      <FlatList
        horizontal
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
        data={[
          {
            value: "1",
            label: "Electronics",
            slug: "Electronics",
            image:
              "https://forsabackend.blob.core.windows.net/media/a84e1be6-baa4-4273-97e7-e8887fcdd6cf.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "2",
            label: "Car Services",
            slug: "CarServices",
            image:
              "https://forsabackend.blob.core.windows.net/media/94c2bcfa-5259-4e7e-84f7-25d6937f65ef.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "3",
            label: "Optics",
            slug: "Optics",
            image:
              "https://forsabackend.blob.core.windows.net/media/eccf268b-8eea-47e4-a909-f3b583b0095f.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "8",
            label: "Entertainment",
            slug: "Entertainment",
            image:
              "https://forsabackend.blob.core.windows.net/media/3bfda67a-812c-4f2f-a134-0516335d1436.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description:
              '<p><span style="background-color: transparent; font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Mercedes </span>Sna<span style="background-color: transparent; color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap;"> celebrated its fiftieth anniversary in 2017 in Affalterbach, AMG and these letters stand for automotive performance, exclusivity, efficiency, and highly dynamic driving pleasure. The company has worked on developing car models to keep pace with global technological development. The company also provides many <a href="https://www.forsaegypt.com/stores/CarServices" target="_blank"><span style="font-weight: 700;">Mercedes service centers</span></a> around the world to provide all Mercedes services, as it is interested in providing professional technical support teams at the highest level and original spare parts at distinguished prices.</span></p><p dir="ltr" style="margin-top: 0pt; margin-bottom: 0pt; line-height: 1.38;"><span style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline; white-space: pre-wrap;">Forsa Egypt offers the possibility to deal with <span style="font-variant-numeric: normal; font-variant-east-asian: normal; background-color: transparent; font-size: 11pt; vertical-align: baseline;">Mercedes</span> through it and in installments through the <a href="https://www.forsaegypt.com/" target="_blank"><span style="font-weight: 700;">installment payment</span></a> systems offered by the site to suit all customers, in addition to paying the installments over the longest possible period and without a down payment. Contact us now for more details or download the Forsa Egypt app.</span></p>',
          },
          {
            value: "14",
            label: "Fashion",
            slug: "Fashion",
            image:
              "https://forsabackend.blob.core.windows.net/media/2201cdbe-7d6d-47ae-80da-8fbfc1debc66.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "15",
            label: "Stationary",
            slug: "Stationary",
            image:
              "https://forsabackend.blob.core.windows.net/media/c131d26f-d784-4945-a8b8-497e6967d833.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "17",
            label: "Wheelers",
            slug: "Wheelers",
            image:
              "https://forsabackend.blob.core.windows.net/media/e7663ae5-238b-426d-9357-0206d1ee71e3.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "18",
            label: "Jewellery",
            slug: "Jewellery",
            image:
              "https://forsabackend.blob.core.windows.net/media/d61a73fe-1e20-47b3-b5b8-1c6c7354cf09.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "19",
            label: "Furniture",
            slug: "Furniture",
            image:
              "https://forsabackend.blob.core.windows.net/media/ca97216d-eba0-4396-9d68-c3b07758c45c.jpg",
            meta_tag: "Furniture Meta tag2",
            meta_title: "Furniture Meta tag title2",
            meta_description: "Furniture Meta tag for testing description2",
            description: null,
          },
          {
            value: "20",
            label: "Grocery",
            slug: "Grocery",
            image: null,
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "23",
            label: "Mega Stores",
            slug: "MegaStores",
            image:
              "https://forsabackend.blob.core.windows.net/media/3d5c2b5b-e7f9-408c-b53e-a4475157dc37.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "30",
            label: "Health & Beauty",
            slug: "HealthBeauty",
            image:
              "https://forsabackend.blob.core.windows.net/media/41e84af6-b8c4-4ac9-be0d-00895994f4c2.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "36",
            label: "Education",
            slug: "Education",
            image:
              "https://forsabackend.blob.core.windows.net/media/319fd4b4-366e-434a-9ffc-ee286251d1fc.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "37",
            label: "Events & Weddings",
            slug: "EventsWeddings",
            image:
              "https://forsabackend.blob.core.windows.net/media/ba590046-a71f-42c7-9e50-d51e8bd3aab3.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "38",
            label: "Fitness",
            slug: "Fitness",
            image:
              "https://forsabackend.blob.core.windows.net/media/9f5f968e-a4a0-4b5c-910a-142b77f70203.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description: null,
          },
          {
            value: "43",
            label: "Resturant",
            slug: "Resturant",
            image:
              "https://forsabackend.blob.core.windows.net/media/961c8c98-0040-4d96-814b-5d804a3f64c7.jpg",
            meta_tag: null,
            meta_title: null,
            meta_description: null,
            description:
              '<p><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; white-space: pre-wrap;">Forsa Egypt offers the possibility to deal with </span><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline;">Mercedes</span><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; white-space: pre-wrap;"> through it and in installments through the </span><a href="https://www.forsaegypt.com/" target="_blank" style="background-color: rgb(255, 255, 255); font-family: Arial; font-size: 14.6667px; white-space: pre-wrap;"><span style="font-weight: 700;">installment payment</span></a><span style="color: rgb(0, 0, 0); font-family: Arial; font-size: 14.6667px; white-space: pre-wrap;"> systems offered by the site to suit all customers, in addition to paying the installments over the longest possible period and without a down payment. Contact us now for more details or download the Forsa Egypt app.</span><br></p>',
          },
          {
            value: "45",
            label: "Others",
            slug: "Others",
            image:
              "https://forsabackend.blob.core.windows.net/media/9f433f65-6c72-4eb5-83bb-e53907e40e0b.jpeg",
            meta_tag: "Pedro EN",
            meta_title: "Pedro Meta title en",
            meta_description: "Pedro Meta description en",
            description:
              '<p><span style="-webkit-tap-highlight-color: rgba(26, 26, 26, 0.3); caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</span><br></p>',
          },
        ]}
        renderItem={({ item, index }) => {
          // Alert.alert("Item", JSON.stringify(Item));
          return (
            <TouchableOpacity
              style={[
                styles.container,
                item.value == selectedSector && styles.selectedContainer,
              ]}
              onPress={() => onPress(item, index)}
            >
              <SText
                text={item.label}
                preset={"footnote"}
                color={item.value == selectedSector ? "#FFFFFF" : "#072040"}
              />
            </TouchableOpacity>
          );
        }}
        extraData={selectedSector}
        keyExtractor={(item) => item?.value}
      />
    </View>
  );
}

export default topBarList;
