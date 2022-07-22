import React from "react";
import Entry from "./Entry"

export default function Entries() {
    return (
        <div className="entries">
            <Entry 
                imgSrc="https://source.unsplash.com/WLxQvbMyfas"
                country="Japan"
                linkToMaps="https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525599999998%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed"
                location="Mount Fuji"
                period="12 Jan, 2021  24 Jan, 2021"
                description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
            <Entry 
                imgSrc="https://source.unsplash.com/JmuyB_LibRo"
                country="Australia"
                linkToMaps="https://www.google.com/maps/d/embed?mid=1NYBTZlF3StQEf65_sVbpMlskCoo&ie=UTF8&hl=en&msa=0&ll=-33.862148%2C151.21521899999996&spn=0.035636%2C0.042915&z=14&output=embed"
                location="Sydney Opera House"
                period="27 May, 2021 - 8 Jun, 2021"
                description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />
            <Entry 
                imgSrc="https://source.unsplash.com/3PeSjpLVtLg"
                country="Norway"
                linkToMaps="https://www.google.com/maps/d/viewer?ie=UTF8&t=h&oe=UTF8&msa=0&mid=1r9iHu_NaY348ww7vQhCYC8wq-UA&ll=62.09023513589082%2C7.168744081213161&z=9"
                location="Geirangerfjord"
                period="01 Oct, 2021 - 18 Nov, 2021"
                description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            />
        </div>
    )
}