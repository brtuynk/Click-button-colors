import React from "react";

const getRandomElFormArr =  (arr) => {
    const randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem;
};

const renkler = [{
   renk: "kirmizi",
   style: "red"
},
    {
        renk: "yesil",
        style: "green"
    },
    {
        renk: "mavi",
        style: "blue"
    },
    {
        renk: "kahverengi",
        style: "brown"
    },
    {
        renk: "sari",
        style: "yellow"
    },
];

function RenkliButon(props) {
    const butonunRengi = getRandomElFormArr(renkler);
    let butonClassi = "renkli-buton ";
    butonClassi += butonunRengi.style;
    return (
        <button className={butonClassi} onClick={(e) => {
            e.preventDefault();
            props.renkDegistir(butonunRengi);
        }}>
            {butonunRengi.renk} Buton
        </button>
    );
}

export default  RenkliButon;