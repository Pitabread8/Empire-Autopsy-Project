let blurbs = {
    "head": [
        "technological advances & scientific discoveries",
        "The Mauryan Empire featured the strengthening and advancement of iron technology. A rise in iron technology can be seen in archaeological dig sites around the time of the Mauryan Empire. Chanakya created the roles of <i>Akaradhyaksa</i> (head of mines), <i>Khanyadhyaksa</i> (head of digging), <i>Laksanadhyaksha</i> (head of elements), and <i>Lohadhyaksa</i> (head of iron working). In addition to advances in metalworking, there were many advancements in herbal medicine, called <i>ayurveda</i>, during the time of the Mauryan Empire."
    ],
    "arm": [
        "art, architecture, & literature",
        "Chanakya’s Arthashastra, an essay about how to manage an empire and diplomatic relations, was written in the third century BCE and is still widely read and comparable to Machiavelli’s <i>The Prince</i>. In addition to Chanakya’s literature, Asoka had lots of documentiaon of his reign. He erected several pillars/columns inscribed with his edicts all over his empire. These edicts were written in several different languages, including Greek, and serve as both a way to understand the inner workings of one of the first empires of South Asia and as the oldest Indian documents. The pillars were first made of rock and later of polished sandstone and often featured carved animals that represented the region they were in. The Sarnath pillars with its four lions was adopted into India’s emblem many centuries later and now stands for for peace and goodwill. While these pillars are the most famous of the Mauryan Empire’s architecture, it was also known for the many temples with the signature domes built during this time."
    ],
    "spine": [
        "political structure",
        "The Mauryan Empire was centered in the city of Pataliputra and headed by a monarch. The emperor was seen as a father; Asoka says in one of his edicts, “all men are my children.” He often enlisted the help of his ministers and officials, and went on long excursions to gauge public opinion. He worked with a council of administrators, the <i>Mantri-Parisat</i>, which consisted of various heads of departments, including a head priest. <i>Dharma-mahamatras</i>, literally “righteous officers,” traveled around the empire to “enforce the regulations based on compassion to humans and animals alike.” Although the Mauryan Empire relied heavily on their king, there was a lot of local autonomy, with each village being headed by a <i>gramika</i>. The system of administration in the kingdom was bureaucratic yet well developed and allowed the local governments to be linked to the central government."
    ],
    "heart": [
        "beliefs systems/religions",
        "The culture and way of life of Mauryan society were deeply influenced by Hinduism. The social hierarchy of the empire mirrored the traditional Indian caste system and many people directly practiced Hinduism as well. Later in his life, Emperor Chandragupta became spiritual and converted to Jainism. After relinquishing the throne to his son, he journeyed south with Jain monks and died by traditional Jain means. Chandragupta’s grandson Asoka was known for being liberal towards other religions and is perhaps most famous for converting to Buddhism. After making several conquests and incurring very many casualties, Asoka was filled with regret and started spreading the message of nonviolence through Buddhism. Many of his thoughts about and actions demonstrating Buddhism have been documented in his edicts."
    ],
    "left-hand": [
        "Major leaders & their accomplishments - Chandraguptya & Chanakya",
        "The Mauryan dynasty began with Chandragupta Maurya, who overthrew the previous ruling family, the Nandas, in Magadha. He then started expanding his empire throughout northern and central India. At around 305 BCE, there was some conflict between the Mauryan empire and the army of Seleucus I Nicator, one of Alexander’s former generals. It ended with a treaty and led to peaceful trade between the two kingdoms. One important contributor to Chandragupta’s success was his longtime advisor, Chanakya. He was known for his treatises on diplomacy and strategy and was known for his cunning yet effective ways of handling the kingdom. Toward the end of his reign, Chandragupta became very spiritual, some even say he converted to Jainism, and abdicated his throne in favor of his son, Bindusara."
    ],
    "right-hand": [
        "major leaders & their accomplishments - Asoka",
        "Chandragupta’s grandson was King Asoka, who became king at around 270 BCE. His reign was well-documented in a series of issued edicts. These edicts describe his battles, as well as trade relations and alliances. After a particularly bloody conquest in Kalinga around 270 BCE, Asoka realized that violence was not good nor necessary and converted to Buddhism.​​ After his 37-year long rule, the empire was significantly weakened and the dynasty ended soon after."
    ],
    "ribs": [
        "social structures",
        `According to the Greek historian Megasthenes, Mauryan society was divided into seven groups based on occupation, comparable to a caste system due to professions being hereditary and the boundaries about intermarriage and cross interaction. These seven classes consisted of:
        <ul>
            <li>Priests, monks, and philosophers</li>
            <li>Farmers</li>
            <li>Soldiers</li>
            <li>Herdsmen</li>
            <li>Artisans</li>
            <li>Spies</li>
            <li>Magistrates, councilors, and assessors</li>
        </ul>
            It is also thought that while there wasn’t any large-scale slavery, domestic slavery was quite common and there were groups of slaves called <i>dasa-bhritakas</i> (hired laborers).    
        `
    ],
    "stomach": [
        "human-environment interaction",
        "The Mauryan empire was very agriculture-focused and generated much of its revenue from farming and land revenue. This helped increase the size of the empire but also became one of the reasons for its downfall when the population grew too fast. Pastoralism was also quite common in the empire and there was even a separate caste for herdsmen. Chanakya led governmental efforts to clear wasteland and let villagers use it for farming. Irrigation systems were also present in the empire, although not widely used and privately controlled. Hydraulic systems like dams are also thought to not have been present. After converting to Buddhism, Asoka gave up hunting for pleasure and became vegetarian. He supported pilgrimages to holy Buddhist places and dug wells and built rest houses along the roads to these places. He also pushed for <i>ayurvedic</i> medicine, which is very involved with nature and mainly based on herbs and soils."
    ],
    "legs": [
        "labor systems",
        "The Mauryan Empire had a complex system of labor. While Megasthenes said there was no slavery, Indian sources say that categories of slaves called <i>dasas</i> existed and a common group of slaves was <i>dasa-bhritakas</i> (hired laborers). There was no large-scale slavery in production but domestic slavery was common. People deported from land taken over by the Mauryan government often ended up as slaves. For other kinds of labor, there was a social hierarchy based on profession. Professions were inherited, maintaining both the empire and the class system."
    ],
    "feet": [
        "trade (routes & goods)",
        "After a small war that ended with a treaty and probably a marriage alliance, the relationship between the Mauryas and the Greeks was peaceful and diplomatic. There were exchanges of envoys, one of who was the Greek historian Megasthenes, who wrote an account of his visit to India in the book <i>Indika</i>. Trade was an important contributor the the finances of the empire. They exported silk and spices to Greece, China, and other nearby kingdoms."
    ]
}

function divHover() {
    const items = document.getElementsByClassName('grid-item')
    let title = document.getElementById('subheading');
    let text = document.getElementById('text');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.addEventListener('mouseover', () => {
            if (div.classList.length > 1) {
                title.innerText = `${div.classList[1]}: ${blurbs[div.classList[1]][0]}`;
                text.innerHTML = blurbs[div.classList[1]][1];
            }
        });
    };
}