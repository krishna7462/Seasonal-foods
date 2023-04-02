//show more about seasons
function showmore(){
    alert("it will update soon");
}


// summer season
function summer(){
   // document.getElementById("matterS").setAttribute("class","dis");
    document.getElementById("matter").setAttribute("class","disp");
  var svh = document.getElementById("vegh3");
  var svp = document.getElementById("vegp");
  var sfh = document.getElementById("fruh3");
  var sfp = document.getElementById("frup");
  var sah = document.getElementById("ayurh3");
  var sap = document.getElementById("ayurp");
  svh.innerText = "Vegetables in Summer:";
  svp.innerText = "Cucumber,Tomatoes,Bottle gourds,snake gourds,bitter gourds,green beans,corn,egg plant(bringal),okra(lady finger).";
  sfh.innerText="Fruits in Summer:";
  sfp.innerText="Mangoes,Watermelon,Muskmelon(karbuja),Grapes, Papayas,Pineapple,Litchis, Jackfruit,Plums.";
  sah.innerText ="Ayurveda Recommends :";
  sap.innerText ="During the hot summer months, Ayurveda recommends eating cooling and hydrating foods such as watermelon,cucumber, coconut water, mint, coriander, fennel, and cilantro. These foods can help to balance the Pitta dosha,which tends to become aggravated during the summer.";
}
// monsoon season
function monsoon(){
    document.getElementById("matter").setAttribute("class","disp")
  var mvh = document.getElementById("vegh3");
  var mvp = document.getElementById("vegp");
  var mfh = document.getElementById("fruh3");
  var mfp = document.getElementById("frup");
  var mah = document.getElementById("ayurh3");
  var map = document.getElementById("ayurp");
  mvh.innerText = "Vegetables in Monsoon:";
  mvp.innerText = "Cauliflower, cabbage, carrots, peas, spinach, fenugreek leaves, and radishes.";
  mfh.innerText="Fruits in Monsoon:";
  mfp.innerText="Jamuns, cherries, peaches, pears, and apples.";
  mah.innerText ="Ayurveda Recommends :";
  map.innerText ="During the rainy monsoon season, Ayurveda recommends eating warming and nourishing foods such as ginger, garlic, black pepper, turmeric, and ghee. These foods can help to balance the Vata dosha, which tends to become aggravated during the monsoon."
}

// winter season
function winter(){
    document.getElementById("matter").setAttribute("class","disp")
  var wvh = document.getElementById("vegh3");
  var wvp = document.getElementById("vegp");
  var wfh = document.getElementById("fruh3");
  var wfp = document.getElementById("frup");
  var wah = document.getElementById("ayurh3");
  var wap = document.getElementById("ayurp");
  wvh.innerText = "Vegetables in winter:";
  wvp.innerText = "Carrots, beetroot, turnips, sweet potatoes, radishes, and various leafy greens such as spinach, mustard greens, and collard greens.";
  wfh.innerText="Fruits in winter:";
  wfp.innerText="Oranges, guavas, pomegranates, strawberries, and kiwis.";
  wah.innerText ="Ayurveda Recommends :";
  wap.innerText ="During the cold winter months, Ayurveda recommends eating warming and grounding foods such as root vegetables (carrots, beets, sweet potatoes), soups and stews, nuts, and warming spices like cinnamon, cardamom, and cloves. These foods can help to balance the Kapha dosha, which tends to become aggravated during the winter."
}
