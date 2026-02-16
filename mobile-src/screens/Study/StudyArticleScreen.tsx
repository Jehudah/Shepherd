import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import { WoolyTip } from '../../components/Wooly';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'StudyArticle'>;

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: number;
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  keyTakeaways: string[];
  verses: string[];
}

// Sample articles - in production, this would come from data files
const articles: Record<string, Article> = {
  'names-moses': {
    id: 'moses',
    title: 'Moses: The Deliverer',
    subtitle: 'From prince to prophet',
    category: 'Names & People',
    readTime: 8,
    introduction:
      'Moses stands as one of the most significant figures in biblical history. His life story spans 120 years and takes us from the palace of Egypt to the wilderness of Sinai, from murderer to friend of God, from stuttering shepherd to powerful deliverer of God\'s people.',
    sections: [
      {
        title: 'Early Life in Egypt',
        content:
          'Born during a time when Pharaoh ordered all Hebrew baby boys to be killed, Moses was hidden by his mother for three months. When she could hide him no longer, she placed him in a basket among the reeds of the Nile River. Pharaoh\'s daughter found him and raised him as her own son in the royal palace. Moses received the finest education Egypt could offer, yet he never forgot his Hebrew heritage.',
      },
      {
        title: 'Flight to Midian',
        content:
          'At age 40, Moses witnessed an Egyptian beating a Hebrew slave. In a moment of anger, he killed the Egyptian and buried him in the sand. When this became known, Moses fled to Midian where he lived as a shepherd for 40 years. This period of obscurity was God\'s training ground, preparing Moses for the greatest task of his life.',
      },
      {
        title: 'The Burning Bush',
        content:
          'God appeared to Moses in a burning bush that was not consumed by the flames. This extraordinary encounter marked the beginning of Moses\' ministry. Despite his protests about his speaking ability, God commissioned Moses to return to Egypt and demand that Pharaoh release the Israelites from slavery.',
      },
      {
        title: 'Exodus and the Law',
        content:
          'Through ten devastating plagues, God demonstrated His power over Egypt and its gods. The final plague - the death of the firstborn - led to the first Passover and Israel\'s hasty departure. God parted the Red Sea, allowing Israel to escape while destroying Pharaoh\'s army. At Mount Sinai, Moses received the Ten Commandments and the Law that would govern Israel.',
      },
      {
        title: 'Wilderness Leadership',
        content:
          'For 40 years, Moses led a complaining, rebellious people through the wilderness. He interceded for them repeatedly when God\'s anger burned against their sin. Though Moses himself sinned and was forbidden from entering the Promised Land, he remained faithful to the end, preparing Joshua to lead the next generation.',
      },
    ],
    keyTakeaways: [
      'God can use anyone, regardless of their past or perceived limitations',
      'True leadership requires patience, humility, and intercession',
      'God\'s timing and preparation are perfect, even when they seem long',
      'Obedience to God sometimes requires great personal sacrifice',
      'God desires an intimate relationship with His people',
    ],
    verses: [
      'Exodus 3:14',
      'Numbers 12:3',
      'Deuteronomy 34:10',
      'Hebrews 11:24-27',
    ],
  },
  'names-david': {
    id: 'david',
    title: 'David: Man After God\'s Heart',
    subtitle: 'From shepherd to king',
    category: 'Names & People',
    readTime: 10,
    introduction: 'David\'s story is one of remarkable highs and devastating lows. From humble shepherd boy to Israel\'s greatest king, from giant-slayer to adulterer, David\'s life demonstrates both the heights of faith and the depths of human failure—yet through it all, God called him "a man after my own heart."',
    sections: [
      { title: 'The Shepherd Boy', content: 'While his brothers served in Saul\'s army, David tended his father\'s sheep in Bethlehem. These quiet years prepared him for kingship, as he learned to depend on God\'s protection against lions and bears. When the prophet Samuel came seeking Israel\'s next king, God looked past David\'s impressive brothers to the youngest son, teaching us that "the Lord looks at the heart."' },
      { title: 'Giant Faith', content: 'When the Philistine champion Goliath taunted Israel\'s army, David alone stepped forward in faith. Armed only with a sling and five smooth stones, he declared, "The battle is the Lord\'s." His faith wasn\'t in his weapons but in the God who had delivered him from wild beasts. One stone, one giant, one testimony to God\'s power.' },
      { title: 'Years of Waiting', content: 'Though anointed as king, David spent years fleeing from Saul\'s jealous rage. He had opportunities to kill Saul but refused, trusting God\'s timing. These wilderness years refined David\'s character and deepened his worship, producing many of the Psalms. God was preparing a king who would rule with both strength and compassion.' },
      { title: 'Kingdom Established', content: 'At age 30, David finally became king, first over Judah, then all Israel. He conquered Jerusalem, making it his capital, and brought the Ark of the Covenant home with joyful celebration. God promised that David\'s throne would be established forever—a promise ultimately fulfilled in Jesus Christ, the Son of David.' },
      { title: 'Sin and Repentance', content: 'David\'s greatest failure came when he committed adultery with Bathsheba and arranged her husband\'s death. When confronted by the prophet Nathan, David didn\'t make excuses but cried out, "I have sinned against the Lord." His genuine repentance, expressed in Psalm 51, shows us how to return to God after we\'ve fallen.' },
    ],
    keyTakeaways: [
      'God values the condition of our heart above all else',
      'Faith means trusting God in impossible situations',
      'Waiting on God\'s timing develops godly character',
      'True repentance leads to restoration, though consequences may remain',
      'Worship should be central to our relationship with God',
    ],
    verses: ['1 Samuel 16:7', '1 Samuel 17:47', '2 Samuel 7:12-16', 'Psalm 51:10', 'Acts 13:22'],
  },
  'names-abraham': {
    id: 'abraham',
    title: 'Abraham: Father of Faith',
    subtitle: 'Journey of trust and promise',
    category: 'Names & People',
    readTime: 9,
    introduction: 'Abraham\'s faith journey transformed him from a childless nomad into the father of nations. His story reveals how God builds faith through tests, how He keeps His promises against all odds, and how one person\'s obedience can impact millions of lives throughout history.',
    sections: [
      { title: 'The Call', content: 'At age 75, Abraham heard God\'s call: "Leave your country, your people, and your father\'s household and go to the land I will show you." Without a map, without guarantees, Abraham obeyed. This is the essence of biblical faith—trusting God enough to step into the unknown because He said so.' },
      { title: 'The Promise', content: 'God promised Abraham he would become a great nation, though he and Sarah were childless and elderly. Year after year, they waited. Abraham\'s faith wavered at times (resulting in Ishmael), but God remained faithful. At age 100, Abraham finally held Isaac—proof that nothing is impossible with God.' },
      { title: 'The Test', content: 'God\'s ultimate test came when He asked Abraham to sacrifice Isaac, the very son through whom the promises would come. Early in the morning, Abraham set out to obey, trusting that God could even raise the dead. God provided a ram as substitute, foreshadowing the ultimate sacrifice of Jesus.' },
      { title: 'The Legacy', content: 'Through Abraham, all nations have been blessed. His faith made him righteous before God, establishing the pattern of salvation by faith that extends to us today. Jews, Christians, and Muslims all look to Abraham as their spiritual father. His story teaches us that God\'s promises may take longer than we expect, but they will always come to pass.' },
    ],
    keyTakeaways: [
      'Faith means obeying God even when we don\'t understand',
      'God\'s promises may be delayed but are never denied',
      'Righteousness comes through faith, not works',
      'Our obedience impacts generations after us',
      'God tests our faith to strengthen it, not destroy it',
    ],
    verses: ['Genesis 12:1-3', 'Genesis 15:6', 'Genesis 22:14', 'Romans 4:20-21', 'Hebrews 11:8'],
  },
  'names-peter': {
    id: 'peter',
    title: 'Peter: The Rock',
    subtitle: 'From fisherman to foundation',
    category: 'Names & People',
    readTime: 9,
    introduction: 'Simon Peter\'s journey from impulsive fisherman to bold apostle shows us that Jesus can transform anyone. His story includes both tremendous faith and spectacular failure, yet Jesus built His church on this transformed man. Peter\'s life encourages us that our past doesn\'t determine our future when we follow Christ.',
    sections: [
      { title: 'The Call', content: 'When Jesus first called Simon, he was washing nets after a fruitless night of fishing. Jesus told him to let down his nets again. The resulting catch was so large it nearly sank two boats. Simon fell at Jesus\' knees, saying, "Go away from me, Lord; I am a sinful man!" But Jesus said, "Don\'t be afraid; from now on you will fish for people." Simon left everything and followed.' },
      { title: 'The Confession', content: 'When Jesus asked, "Who do you say I am?" Peter boldly declared, "You are the Messiah, the Son of the living God." Jesus responded, "You are Peter, and on this rock I will build my church." This confession became the foundation of Christian faith—Jesus is God\'s Son, our Savior and Lord.' },
      { title: 'The Denial', content: 'Peter\'s boldest moment led to his darkest hour. After promising to die with Jesus, Peter denied even knowing Him—three times. Yet this failure didn\'t disqualify him. Jesus later restored Peter by the same charcoal fire, asking three times, "Do you love me?" and commissioning him to feed His sheep. Failure isn\'t final when we truly repent.' },
      { title: 'Pentecost Power', content: 'Fifty days after Jesus\' resurrection, Peter—once too afraid to admit knowing Jesus—stood up at Pentecost and boldly preached to thousands. Three thousand people believed and were baptized. The coward became a lion, transformed by the Holy Spirit. This same power is available to us today.' },
    ],
    keyTakeaways: [
      'Jesus calls ordinary people to do extraordinary things',
      'Bold confession of faith is essential to following Christ',
      'Our failures can become our greatest testimonies when we repent',
      'The Holy Spirit transforms cowards into champions',
      'Restoration is always available through Jesus',
    ],
    verses: ['Luke 5:8', 'Matthew 16:16-18', 'Luke 22:61-62', 'John 21:15-17', 'Acts 2:14-41'],
  },
  'names-paul': {
    id: 'paul',
    title: 'Paul: Apostle to the Gentiles',
    subtitle: 'From persecutor to preacher',
    category: 'Names & People',
    readTime: 11,
    introduction: 'No transformation in Scripture is more dramatic than Saul\'s conversion on the Damascus road. From zealous persecutor of Christians to passionate apostle of Christ, Paul\'s ministry took the gospel to the Gentile world. His letters form the theological foundation of Christianity, and his life exemplifies wholehearted devotion to Jesus.',
    sections: [
      { title: 'The Persecutor', content: 'Saul of Tarsus was a Pharisee\'s Pharisee—educated under Gamaliel, zealous for the Law, and violently opposed to the growing Christian movement. He stood approving as Stephen was stoned and sought to destroy the church, dragging believers off to prison. In his mind, he was serving God. This reminds us that sincerity doesn\'t equal truth.' },
      { title: 'The Encounter', content: 'On the road to Damascus, a blinding light struck Saul down. Jesus asked, "Saul, why do you persecute me?" In that moment, Saul realized he\'d been fighting against God Himself. Three days of blindness led to spiritual sight. When Ananias laid hands on him, scales fell from his eyes—both physical and spiritual. The greatest persecutor became Christianity\'s greatest missionary.' },
      { title: 'The Ministry', content: 'Paul took three missionary journeys, planting churches across the Roman Empire. He endured beatings, shipwrecks, imprisonment, and constant danger—yet counted it all joy for Christ. He wrote 13 letters that explain Christian doctrine, tackle practical issues, and reveal the depth of God\'s grace. To Paul, living was Christ and dying was gain.' },
      { title: 'The Legacy', content: 'Paul\'s theology shaped Christianity. He explained justification by faith, the role of the Law, the nature of the church, and the mystery of Christ. His life proved that God\'s grace is sufficient, His power is made perfect in weakness, and nothing can separate us from the love of Christ. Paul finished his race and kept the faith—an example for all believers.' },
    ],
    keyTakeaways: [
      'No one is beyond the reach of God\'s grace',
      'True conversion changes everything about us',
      'Suffering for Christ is a privilege, not just a hardship',
      'God\'s grace is sufficient for every weakness',
      'Finishing well matters more than starting strong',
    ],
    verses: ['Acts 9:3-6', 'Philippians 3:7-8', '2 Corinthians 12:9', '2 Timothy 4:7', 'Romans 8:38-39'],
  },
  'names-joseph': {
    id: 'joseph',
    title: 'Joseph: Dreamer and Deliverer',
    subtitle: 'From pit to palace',
    category: 'Names & People',
    readTime: 10,
    introduction: 'Joseph\'s story is one of the most compelling in Scripture. Betrayed by his brothers, sold into slavery, falsely accused and imprisoned—yet through it all, God was positioning him to save nations. Joseph\'s life teaches us that God is sovereign over our suffering and can use it for purposes we cannot imagine.',
    sections: [
      { title: 'The Dreamer', content: 'Joseph was Jacob\'s favorite son, given a richly ornamented coat that symbolized his father\'s love. God gave him dreams showing his family bowing to him—which his brothers resented deeply. Sometimes God\'s gifts make us a target. Joseph\'s dreams weren\'t pride; they were prophecy. But the path to their fulfillment would be painful.' },
      { title: 'The Slave', content: 'Joseph\'s jealous brothers threw him in a pit, then sold him to traders headed to Egypt. From favored son to slave in one day—yet Scripture says "the Lord was with Joseph." Even in slavery, Joseph prospered because God was preparing him. Potiphar put him in charge of everything. God can bless us even in our worst circumstances.' },
      { title: 'The Prisoner', content: 'When Potiphar\'s wife falsely accused Joseph, he was thrown in prison. But again, "the Lord was with Joseph." He interpreted dreams for Pharaoh\'s cupbearer and baker, asking only to be remembered. The cupbearer forgot him for two years. Sometimes God\'s promises are long delayed, but they\'re never denied.' },
      { title: 'The Prime Minister', content: 'When Pharaoh had troubling dreams, the cupbearer finally remembered Joseph. At age 30, Joseph interpreted Pharaoh\'s dreams and was instantly made second-in-command of Egypt. What Satan meant for evil, God meant for good. Joseph\'s suffering positioned him to save Egypt, his family, and the entire Israelite nation from famine.' },
    ],
    keyTakeaways: [
      'God is working even when we can\'t see it',
      'Faithfulness in small things prepares us for big things',
      'God can turn our worst trials into our greatest triumphs',
      'Forgiving those who hurt us reflects God\'s character',
      'Our suffering may be the path to someone else\'s salvation',
    ],
    verses: ['Genesis 37:28', 'Genesis 39:2', 'Genesis 41:39-40', 'Genesis 50:20', 'Psalm 105:17-19'],
  },
  'names-esther': {
    id: 'esther',
    title: 'Esther: For Such a Time',
    subtitle: 'Courage in the palace',
    category: 'Names & People',
    readTime: 8,
    introduction: 'Esther\'s story reads like a thriller. A Jewish orphan becomes queen of Persia, then risks her life to save her people from genocide. Though God\'s name never appears in the book of Esther, His providential hand is evident throughout. Esther teaches us that God places us where we are for His purposes.',
    sections: [
      { title: 'Beauty and Providence', content: 'When Queen Vashti refused the king\'s summons, she was deposed. A search began for a new queen, and Esther, a Jewish orphan raised by her cousin Mordecai, was taken to the palace. She won favor with everyone and became queen—but kept her Jewish identity secret. God was positioning her for a crisis no one could foresee.' },
      { title: 'The Plot', content: 'Haman, the king\'s second-in-command, hated Mordecai and plotted to destroy all Jews. He manipulated the king into signing a decree for their annihilation. It looked like the end of God\'s people. But Mordecai challenged Esther: "Who knows but that you have come to your royal position for such a time as this?" Sometimes our greatest challenges reveal our true purpose.' },
      { title: 'The Risk', content: 'Approaching the king uninvited could mean death, even for the queen. Esther asked the Jews to fast for three days, then said, "If I perish, I perish." True courage isn\'t absence of fear; it\'s doing what\'s right despite the fear. Esther risked everything because saving her people mattered more than saving herself.' },
      { title: 'The Deliverance', content: 'Esther revealed Haman\'s plot to the king, who had him executed on the very gallows Haman had built for Mordecai. The Jews were given permission to defend themselves, and Purim is still celebrated today as a memorial of this great deliverance. One woman\'s courage saved a nation. God still uses ordinary people for extraordinary purposes.' },
    ],
    keyTakeaways: [
      'God\'s providence works through everyday circumstances',
      'We are positioned where we are for divine purposes',
      'Courage means acting despite our fear',
      'God can turn the enemy\'s plans against them',
      'One person\'s obedience can save many',
    ],
    verses: ['Esther 2:17', 'Esther 4:14', 'Esther 4:16', 'Esther 7:3-6', 'Proverbs 21:1'],
  },
  'names-daniel': {
    id: 'daniel',
    title: 'Daniel: Faithful in Exile',
    subtitle: 'Integrity in Babylon',
    category: 'Names & People',
    readTime: 9,
    introduction: 'Daniel maintained his integrity in Babylon for over 70 years, serving under multiple kings while never compromising his faith. From the royal academy to the lion\'s den, from interpreting dreams to receiving visions, Daniel shows us how to live faithfully in a hostile culture.',
    sections: [
      { title: 'Purpose in the Heart', content: 'As a teenager, Daniel was taken captive to Babylon and enrolled in the king\'s academy. He could have abandoned his faith to advance his career. Instead, he "purposed in his heart" not to defile himself with the royal food. He asked permission to eat vegetables instead—and God blessed his faithfulness with wisdom ten times greater than all the wise men of Babylon.' },
      { title: 'God-Sized Problems', content: 'When King Nebuchadnezzar demanded his dream be interpreted without telling anyone what he dreamed, all the wise men faced execution. Daniel asked for time, gathered his friends to pray, and God revealed both the dream and its meaning. Daniel gave God all the glory, demonstrating that impossible problems are opportunities for God to display His power.' },
      { title: 'The Lions\' Den', content: 'Daniel\'s integrity made him powerful but also made him enemies. They tricked the king into passing a law forbidding prayer to anyone but the king for 30 days. Daniel kept praying three times daily with his windows open. Thrown into the lions\' den, Daniel was protected by God\'s angel. The king declared, "The God of Daniel is the living God!" Faithfulness in small things prepares us for big tests.' },
      { title: 'Prophetic Vision', content: 'God gave Daniel visions of future kingdoms and the coming Messiah. He revealed the timeline of Israel\'s future and the ultimate triumph of God\'s kingdom. Daniel\'s prophecies are among the most detailed and accurate in Scripture, proving that God knows the end from the beginning and that His purposes will prevail.' },
    ],
    keyTakeaways: [
      'Small compromises lead to big failures; purpose to obey early',
      'Pray consistently regardless of consequences',
      'Give God glory for your success',
      'Integrity is worth more than political advancement',
      'God is sovereign over all earthly kingdoms',
    ],
    verses: ['Daniel 1:8', 'Daniel 2:28', 'Daniel 6:10', 'Daniel 6:26-27', 'Daniel 9:2-3'],
  },
  'names-ruth': {
    id: 'ruth',
    title: 'Ruth: Loyal Love',
    subtitle: 'From Moab to Messiah\'s lineage',
    category: 'Names & People',
    readTime: 7,
    introduction: 'Ruth\'s story is a beautiful picture of redemption. A Moabite widow who chose to follow the God of Israel, she became the great-grandmother of King David and an ancestor of Jesus Christ. Her loyalty, humility, and faith transformed tragedy into triumph.',
    sections: [
      { title: 'Loyal Love', content: 'When Naomi\'s husband and sons died, leaving her with two foreign daughters-in-law, Naomi urged them to return to their families. Orpah left, but Ruth clung to Naomi with one of Scripture\'s most beautiful pledges: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." True conversion isn\'t just intellectual; it\'s relational.' },
      { title: 'Humble Service', content: 'Back in Bethlehem, Ruth worked in the fields, gathering leftover grain to support herself and Naomi. She didn\'t demand special treatment despite her tragic circumstances. She worked hard and showed respect. This caught the attention of Boaz, the field\'s owner and a kinsman-redeemer. God honors humble faithfulness in small things.' },
      { title: 'Faith Rewarded', content: 'Boaz praised Ruth\'s character and showed her favor beyond the law\'s requirements. When Ruth followed Naomi\'s plan to ask Boaz to be her kinsman-redeemer, he was moved by her loyalty to Naomi and her willingness to follow Israel\'s customs. He redeemed both Naomi\'s land and Ruth, marrying her and providing for them both.' },
      { title: 'Royal Lineage', content: 'Ruth and Boaz had a son named Obed, who became the father of Jesse, who was the father of King David. This Moabite woman—a foreigner, a widow, a poor gleaner—became part of the Messianic line. Her story shows that God\'s grace extends to all who trust Him, regardless of their background. Jesus\' genealogy includes Ruth because God values faithful hearts.' },
    ],
    keyTakeaways: [
      'True faith shows itself in loyalty and commitment',
      'God\'s grace extends to all who trust Him',
      'Hard work and humility open doors of opportunity',
      'Our choices impact generations we\'ll never meet',
      'God\'s redemption is available to everyone',
    ],
    verses: ['Ruth 1:16-17', 'Ruth 2:12', 'Ruth 4:13-17', 'Matthew 1:5', 'Proverbs 31:10'],
  },
  'names-elijah': {
    id: 'elijah',
    title: 'Elijah: Prophet of Fire',
    subtitle: 'Standing against idolatry',
    category: 'Names & People',
    readTime: 10,
    introduction: 'Elijah appeared suddenly in Israel\'s darkest hour and confronted evil kings, called down fire from heaven, and was taken to heaven in a whirlwind. His ministry demonstrated God\'s power over false gods and His faithfulness to those who stand for truth, even when they stand alone.',
    sections: [
      { title: 'Courage to Confront', content: 'Elijah appeared before King Ahab with a bold prophecy: no rain would fall except at his word. This confronted Baal worship directly, since Baal was supposedly the god of storms. For three years, drought devastated Israel while God miraculously provided for Elijah. Sometimes obedience means standing against popular opinion and trusting God to sustain us.' },
      { title: 'Mount Carmel Showdown', content: 'Elijah challenged 450 prophets of Baal to a contest: whose god would send fire from heaven? Baal\'s prophets called all day with no response. Elijah prayed once, and fire fell from heaven, consuming not just the sacrifice but the altar and surrounding water. The people declared, "The Lord—he is God!" One person standing with God is a majority.' },
      { title: 'Depression and Restoration', content: 'After this great victory, Jezebel threatened Elijah\'s life, and he ran in fear. Exhausted and depressed, he asked God to let him die. Instead, God sent an angel with food, let him rest, and spoke to him in a gentle whisper. God doesn\'t condemn us in our weakness; He restores us. Elijah wasn\'t finished yet—God had more work for him to do.' },
      { title: 'Departure in Glory', content: 'Elijah didn\'t experience death. As he walked with his successor Elisha, a chariot and horses of fire appeared, and Elijah was taken to heaven in a whirlwind. His dramatic departure testified to God\'s approval of his faithful service. Elijah later appeared with Moses at Jesus\' transfiguration, showing that those who serve God faithfully will share in His glory.' },
    ],
    keyTakeaways: [
      'Bold obedience requires trusting God\'s provision',
      'One faithful person can make a tremendous difference',
      'God speaks in whispers as well as earthquakes',
      'Depression can follow great spiritual victories',
      'Faithful service to God has eternal significance',
    ],
    verses: ['1 Kings 17:1', '1 Kings 18:37-39', '1 Kings 19:11-12', '2 Kings 2:11', 'Malachi 4:5'],
  },
  'themes-love': {
    id: 'love',
    title: 'Love in Scripture',
    subtitle: 'The foundation of our faith',
    category: 'Biblical Themes',
    readTime: 7,
    introduction: 'Love is not just a theme in Scripture—it\'s the very essence of God\'s character and the foundation of all His commands. Understanding biblical love transforms how we relate to God and others. This isn\'t mere sentiment or emotion; it\'s sacrificial action rooted in God\'s nature.',
    sections: [
      { title: 'God\'s Love for Us', content: 'The Bible declares "God is love" (1 John 4:8). His love isn\'t based on our performance; it flows from His character. While we were still sinners, Christ died for us. God\'s love is unconditional, eternal, and unchanging. He demonstrated it supremely at the cross, where justice and mercy met. This love adopts us as His children and assures us nothing can separate us from it.' },
      { title: 'The Greatest Commandment', content: 'When asked which commandment was greatest, Jesus answered: "Love the Lord your God with all your heart, soul, mind, and strength." This all-encompassing love must be our first priority. We love Him because He first loved us. True love for God shows itself in obedience to His commands and passionate worship of His person.' },
      { title: 'Love One Another', content: 'Jesus gave a new commandment: "Love one another as I have loved you." This sacrificial, other-centered love marks us as His disciples. It\'s patient and kind, doesn\'t envy or boast, isn\'t self-seeking. It always protects, trusts, hopes, and perseveres. This love goes beyond feelings to deliberate acts of service and sacrifice.' },
      { title: 'Love Your Enemies', content: 'Jesus\' most radical teaching challenged us to love our enemies and pray for those who persecute us. This supernatural love proves we\'re children of our Heavenly Father. It breaks cycles of revenge and demonstrates Christ\'s transforming power. When we love those who hate us, we reflect God\'s character most clearly.' },
    ],
    keyTakeaways: [
      'God\'s love is the source and model for all true love',
      'Love is an action, not just a feeling',
      'Loving God and loving others are inseparable',
      'Christian love is supernatural and countercultural',
      'Love is the fulfillment of all God\'s law',
    ],
    verses: ['1 John 4:8', '1 John 4:19', 'Matthew 22:37-40', 'John 13:34-35', '1 Corinthians 13:4-7'],
  },
  'themes-faith': {
    id: 'faith',
    title: 'Biblical Faith',
    subtitle: 'Trust and belief in God',
    category: 'Biblical Themes',
    readTime: 8,
    introduction: 'Faith is the currency of the Kingdom of God. Without it, we cannot please God. Yet faith isn\'t blind belief—it\'s confident trust in a trustworthy God based on His revealed character and promises. Understanding biblical faith transforms our walk with God.',
    sections: [
      { title: 'What Is Faith?', content: 'Hebrews 11:1 defines faith as "confidence in what we hope for and assurance about what we do not see." It\'s not wishful thinking or positive attitude. Biblical faith is trust in God\'s character and promises, even when circumstances say otherwise. Faith takes God at His word and acts accordingly.' },
      { title: 'Faith for Salvation', content: 'We\'re saved by grace through faith, not works (Ephesians 2:8-9). Faith receives what God offers in Christ—forgiveness, righteousness, adoption. It\'s not our faith that saves us; it\'s Christ. But faith is the hand that receives the gift. Justifying faith believes that Jesus died for our sins and rose from the dead.' },
      { title: 'Living by Faith', content: 'The righteous live by faith (Habakkuk 2:4, Romans 1:17). This means daily trusting God rather than leaning on our own understanding. It means obeying when we don\'t see the outcome. Faith grows through testing—trials prove it genuine and strengthen our trust. Small faith in a big God accomplishes more than big faith in ourselves.' },
      { title: 'Faith and Works', content: 'James says faith without works is dead. He doesn\'t contradict Paul; rather, he shows that genuine faith produces obedience. We\'re not saved by works, but saving faith always works. Abraham believed God (faith) and therefore obeyed Him (works). The two are inseparable.' },
    ],
    keyTakeaways: [
      'Faith is confident trust in God\'s promises',
      'We\'re saved by grace through faith, not works',
      'Genuine faith produces obedience',
      'Faith is tested and strengthened through trials',
      'We live by faith, not by sight',
    ],
    verses: ['Hebrews 11:1', 'Hebrews 11:6', 'Romans 1:17', 'Ephesians 2:8-9', 'James 2:17'],
  },
  'themes-grace': {
    id: 'grace',
    title: 'Grace: God\'s Unmerited Favor',
    subtitle: 'The heart of the Gospel',
    category: 'Biblical Themes',
    readTime: 9,
    introduction: 'Grace is the most beautiful word in Scripture. It\'s God\'s undeserved favor toward rebels who deserve His wrath. Grace saves us, sustains us, and will ultimately glorify us. Understanding grace frees us from performance-based religion and fills us with gratitude and worship.',
    sections: [
      { title: 'Saved by Grace', content: 'Salvation is by grace alone, through faith alone, in Christ alone. We can\'t earn it, work for it, or deserve it. While we were dead in sins, God made us alive with Christ. This wasn\'t because of our righteousness but because of His great love and mercy. Grace is God giving us what we don\'t deserve (salvation) and not giving us what we do deserve (judgment).' },
      { title: 'Grace vs. Works', content: 'Paul emphasizes that salvation is "not by works, so that no one can boast" (Ephesians 2:9). If we could earn salvation, we could take credit. But grace excludes boasting while producing humble gratitude. The Law shows us our need; grace meets that need. We\'re not saved by keeping rules but by trusting Jesus.' },
      { title: 'Grace for Living', content: 'Grace isn\'t just for salvation—it\'s for sanctification too. God\'s grace trains us to say no to ungodliness and to live upright lives (Titus 2:11-12). When we fail, grace forgives and restores. Grace empowers what it commands. As Paul said, "God\'s grace is sufficient" for every weakness and struggle.' },
      { title: 'Extending Grace', content: 'Having received grace, we must extend it to others. We forgive because we\'ve been forgiven. We show mercy because we\'ve received mercy. This doesn\'t mean tolerating sin, but it does mean responding to others with the same patience and kindness God showed us. Grace transforms us from judges into ambassadors of reconciliation.' },
    ],
    keyTakeaways: [
      'Grace is undeserved favor from a holy God',
      'Salvation is by grace alone, not works',
      'Grace empowers holy living',
      'God\'s grace is sufficient for every need',
      'We must extend to others the grace we\'ve received',
    ],
    verses: ['Ephesians 2:8-9', 'Titus 2:11-12', '2 Corinthians 12:9', 'Romans 3:24', 'Romans 5:20'],
  },
  'themes-hope': {
    id: 'hope',
    title: 'Hope in Christ',
    subtitle: 'A living hope through resurrection',
    category: 'Biblical Themes',
    readTime: 7,
    introduction: 'Biblical hope isn\'t wishful thinking—it\'s confident expectation based on God\'s promises. Through Christ\'s resurrection, we have a living hope that anchors our souls in life\'s storms and assures us of eternal glory.',
    sections: [
      { title: 'Living Hope', content: 'Peter calls our hope "living" because it\'s based on Christ\'s resurrection (1 Peter 1:3). Dead religions offer dead hopes. Christianity offers resurrection life! Because Jesus rose from the dead, we have assurance that we too will rise. This hope doesn\'t disappoint because it rests on historical fact: the empty tomb.' },
      { title: 'Hope as an Anchor', content: 'Hebrews describes hope as "an anchor for the soul, firm and secure" (Hebrews 6:19). When storms rage and circumstances overwhelm, hope keeps us steady. It\'s not optimism about circumstances but confidence in God\'s character and promises. This anchor reaches into heaven itself, where Jesus intercedes for us.' },
      { title: 'Hope in Suffering', content: 'Romans 5 says suffering produces perseverance, character, and hope. This seems backwards until we realize that trials prove God\'s faithfulness, which strengthens our confidence in Him. Hope doesn\'t eliminate suffering but transforms its meaning. We can rejoice in trials because we know God is working all things for our good.' },
      { title: 'Future Hope', content: 'Our ultimate hope is Christ\'s return and our glorification. We await new heavens and a new earth where righteousness dwells. Death has been swallowed up in victory. This future hope affects present living—we purify ourselves as He is pure, knowing we\'ll see Him face to face.' },
    ],
    keyTakeaways: [
      'Christian hope is confident expectation, not wishful thinking',
      'Hope is based on Christ\'s resurrection',
      'Hope anchors us in life\'s storms',
      'Suffering can strengthen hope when we trust God',
      'Future hope transforms present living',
    ],
    verses: ['1 Peter 1:3', 'Hebrews 6:19', 'Romans 5:3-5', 'Romans 8:24-25', '1 John 3:2-3'],
  },
  'themes-peace': {
    id: 'peace',
    title: 'Peace of God',
    subtitle: 'Shalom in a broken world',
    category: 'Biblical Themes',
    readTime: 8,
    introduction: 'Biblical peace (shalom) is far richer than absence of conflict. It\'s wholeness, harmony, and flourishing—with God, others, and ourselves. Through Christ, the Prince of Peace, we experience peace with God and the peace of God.',
    sections: [
      { title: 'Peace with God', content: 'Romans 5:1 declares: "We have peace with God through our Lord Jesus Christ." Apart from Christ, we\'re at war with God—rebels deserving His wrath. But Jesus reconciled us through His blood. The barrier of sin has been removed. We\'re no longer enemies but beloved children. This peace is the foundation for all other peace.' },
      { title: 'The Peace of God', content: 'Philippians 4:7 promises "the peace of God, which transcends all understanding, will guard your hearts and minds in Christ Jesus." This isn\'t freedom from trouble but tranquility in the midst of it. It doesn\'t make sense to the world—having peace when circumstances scream anxiety. This peace guards us like a sentinel, protecting our hearts from fear and worry.' },
      { title: 'Prince of Peace', content: 'Isaiah prophesied that Messiah would be called the Prince of Peace (Isaiah 9:6). Jesus fulfills this perfectly. He made peace through His blood, reconciling all things to God. He is our peace, breaking down dividing walls of hostility. His Kingdom is characterized by peace, joy, and righteousness in the Holy Spirit.' },
      { title: 'Living in Peace', content: 'We\'re called to live at peace with everyone, as far as it depends on us (Romans 12:18). We pursue peace and strive for it. This means forgiving others, seeking reconciliation, and refusing to repay evil for evil. Peacemakers are called God\'s children because they reflect their Father\'s character.' },
    ],
    keyTakeaways: [
      'Peace with God comes through Jesus alone',
      'God\'s peace transcends circumstances',
      'Jesus is the Prince of Peace',
      'Peace should characterize our relationships',
      'Peacemakers reflect God\'s character',
    ],
    verses: ['Romans 5:1', 'Philippians 4:6-7', 'Isaiah 9:6', 'John 14:27', 'Matthew 5:9'],
  },
  'themes-wisdom': {
    id: 'wisdom',
    title: 'Biblical Wisdom',
    subtitle: 'The fear of the Lord',
    category: 'Biblical Themes',
    readTime: 8,
    introduction: 'Wisdom in Scripture isn\'t mere intelligence or knowledge—it\'s the skillful application of truth to life. True wisdom begins with fearing God and culminates in Christ, "in whom are hidden all the treasures of wisdom and knowledge."',
    sections: [
      { title: 'The Fear of the Lord', content: 'Proverbs repeatedly declares: "The fear of the Lord is the beginning of wisdom." This isn\'t terror but reverent awe—recognizing God\'s holiness, authority, and majesty. When we rightly fear God, we stop fearing everything else. Wisdom starts with understanding who God is and who we are in relation to Him.' },
      { title: 'Wisdom vs. Knowledge', content: 'Knowledge accumulates information; wisdom applies it rightly. You can know many facts yet live foolishly. Wisdom is skill in godly living—making decisions that honor God and align with His design. James contrasts earthly wisdom (envious, ambitious, disordered) with heavenly wisdom (pure, peace-loving, gentle, submissive, merciful).' },
      { title: 'Christ Our Wisdom', content: 'Paul writes that Christ has become for us wisdom from God (1 Corinthians 1:30). God\'s wisdom was revealed in the cross—what looked like foolishness was actually God\'s power and wisdom for salvation. All wisdom ultimately points to Christ. He is the wisdom of God incarnate.' },
      { title: 'Asking for Wisdom', content: 'James encourages us to ask God for wisdom, promising He gives generously without finding fault (James 1:5). We need wisdom for decisions, relationships, ministry, and navigating this world. God wants to give it to us! But we must ask in faith, trusting that He knows best.' },
    ],
    keyTakeaways: [
      'Wisdom begins with fearing God',
      'Wisdom applies knowledge skillfully to life',
      'Christ is the wisdom of God',
      'Heavenly wisdom differs from worldly wisdom',
      'We can ask God for wisdom and He will give it',
    ],
    verses: ['Proverbs 9:10', 'James 1:5', '1 Corinthians 1:24-25', 'James 3:17', 'Proverbs 2:6'],
  },
  'themes-redemption': {
    id: 'redemption',
    title: 'Redemption Through Christ',
    subtitle: 'Bought back by His blood',
    category: 'Biblical Themes',
    readTime: 9,
    introduction: 'Redemption is the act of buying back something that was lost or enslaved. Scripture uses this powerful commercial and legal concept to describe what Christ did for us on the cross. We were slaves to sin, but Jesus paid the price to set us free.',
    sections: [
      { title: 'The Kinsman-Redeemer', content: 'In the Old Testament, a kinsman-redeemer could buy back family property or family members sold into slavery. He had to be a relative and able to pay the price. Jesus became our kinsman by taking human flesh, and He was able to pay our redemption price with His precious blood. The book of Ruth beautifully illustrates this concept through Boaz.' },
      { title: 'Slaves to Sin', content: 'Before Christ, we were slaves to sin—unable to free ourselves, helpless to escape. Sin\'s wages is death, and we were on death row. No amount of good works could pay our debt. We needed someone from outside our prison to pay the ransom. This is the desperate situation redemption addresses.' },
      { title: 'The Price of Redemption', content: 'Peter writes that we were redeemed "not with perishable things like silver or gold... but with the precious blood of Christ" (1 Peter 1:18-19). The price was infinite—God\'s own Son. This reveals both the magnitude of our debt and the depth of God\'s love. Nothing less than divine blood could purchase our freedom.' },
      { title: 'Redemption\'s Effects', content: 'Redemption brings forgiveness of sins, freedom from sin\'s power, adoption as God\'s children, and the indwelling Holy Spirit as a deposit guaranteeing our full redemption at Christ\'s return. We\'re not just forgiven—we\'re liberated! This should produce passionate gratitude and devoted service to our Redeemer.' },
    ],
    keyTakeaways: [
      'We were slaves to sin, unable to free ourselves',
      'Christ is our kinsman-redeemer',
      'The price of redemption was Jesus\' blood',
      'Redemption brings freedom and adoption',
      'We should live as redeemed people',
    ],
    verses: ['Ephesians 1:7', '1 Peter 1:18-19', 'Galatians 3:13', 'Romans 3:24', 'Colossians 1:14'],
  },
  'themes-covenant': {
    id: 'covenant',
    title: 'God\'s Covenant Promises',
    subtitle: 'Faithful through the ages',
    category: 'Biblical Themes',
    readTime: 10,
    introduction: 'Covenants are the framework of Scripture. Unlike contracts (agreements between equals), biblical covenants are initiated by God and reveal His faithful character. From Noah to the New Covenant in Christ\'s blood, God binds Himself to His promises.',
    sections: [
      { title: 'The Noahic Covenant', content: 'After the flood, God made a covenant with Noah never to destroy the earth with water again. The rainbow serves as the sign. This universal covenant shows God\'s commitment to sustaining creation despite human sin. It\'s unconditional—based on God\'s grace, not human merit.' },
      { title: 'The Abrahamic Covenant', content: 'God promised Abraham land, descendants, and blessing to all nations. This covenant was unconditional and eternal—God bound Himself with an oath. When Abraham questioned how it could be, God passed between cut animals (a covenant ceremony) alone, showing that fulfillment depended solely on Him.' },
      { title: 'The Mosaic Covenant', content: 'At Sinai, God gave Israel the Law. This covenant was conditional—blessings for obedience, curses for disobedience. It revealed God\'s holiness and humanity\'s inability to keep His law perfectly. The Mosaic Covenant pointed forward to our need for a better covenant.' },
      { title: 'The New Covenant', content: 'Jeremiah prophesied a New Covenant where God would write His law on hearts, forgive sin completely, and give His Spirit. Jesus inaugurated this covenant with His blood at the Last Supper. Unlike the old covenant (which we broke), this one depends on Christ\'s perfect obedience. It\'s eternal, unbreakable, and better in every way.' },
    ],
    keyTakeaways: [
      'Covenants reveal God\'s faithful character',
      'God initiates and guarantees His covenants',
      'The Old Covenant revealed our need for grace',
      'The New Covenant is eternal and unbreakable',
      'Jesus is the mediator of a better covenant',
    ],
    verses: ['Genesis 9:11', 'Genesis 15:17-18', 'Jeremiah 31:31-34', 'Luke 22:20', 'Hebrews 8:6'],
  },
  'themes-holiness': {
    id: 'holiness',
    title: 'The Holiness of God',
    subtitle: 'Set apart and calling us',
    category: 'Biblical Themes',
    readTime: 8,
    introduction: 'Holiness is God\'s defining attribute—the quality that sets Him apart from all creation. Understanding God\'s holiness transforms our worship, deepens our reverence, and clarifies our calling to reflect His character to the world.',
    sections: [
      { title: 'God\'s Essential Holiness', content: 'When seraphim surround God\'s throne, they cry "Holy, holy, holy" (Isaiah 6). This three-fold declaration emphasizes God\'s absolute holiness. He is morally perfect—without sin, evil, or defect. His holiness is so overwhelming that Moses couldn\'t look at His face, and Isaiah felt undone in His presence.' },
      { title: 'Holiness and Justice', content: 'God\'s holiness demands that sin be punished. He cannot simply overlook sin—His holy nature requires justice. This makes the cross even more amazing: God\'s holiness was satisfied when Jesus bore our punishment. God remained just while justifying the ungodly. Holiness and love met at Calvary.' },
      { title: 'Called to Holiness', content: 'God commands, "Be holy, because I am holy" (1 Peter 1:16). This isn\'t optional for Christians—we\'re called to reflect God\'s character. We\'re set apart (sanctified) for God\'s purposes. This means pursuing purity, rejecting sin, and becoming more like Christ. It\'s not legalism but love responding to grace.' },
      { title: 'Practical Holiness', content: 'Holiness isn\'t just avoiding bad things—it\'s actively pursuing good. It means treating our bodies as temples, guarding our minds, speaking with grace, and living with integrity. It affects every area of life. We pursue holiness through the Spirit\'s power, not human effort. "Without holiness no one will see the Lord" (Hebrews 12:14).' },
    ],
    keyTakeaways: [
      'Holiness is God\'s essential attribute',
      'God\'s holiness demands justice for sin',
      'Christians are called to be holy',
      'Holiness touches every area of life',
      'We pursue holiness by the Spirit\'s power',
    ],
    verses: ['Isaiah 6:3', 'Leviticus 11:44', '1 Peter 1:15-16', 'Hebrews 12:14', '2 Corinthians 7:1'],
  },
  'themes-prayer': {
    id: 'prayer',
    title: 'The Power of Prayer',
    subtitle: 'Conversation with the Almighty',
    category: 'Biblical Themes',
    readTime: 7,
    introduction: 'Prayer is the privilege of conversing with the Creator of the universe. It\'s how we commune with God, present our requests, intercede for others, and align our hearts with His will. Prayer isn\'t just religious duty—it\'s relationship with our Heavenly Father.',
    sections: [
      { title: 'The Lord\'s Prayer', content: 'When disciples asked Jesus to teach them to pray, He gave them the Lord\'s Prayer—a model for all prayer. It begins with worship ("Hallowed be your name"), focuses on God\'s kingdom and will, requests daily provision, seeks forgiveness while forgiving others, and asks for protection from evil. Every prayer should include these elements.' },
      { title: 'Prayer in Jesus\' Name', content: 'Jesus taught us to pray in His name (John 14:13-14). This doesn\'t mean adding "in Jesus\' name" like a magic formula. It means praying according to His character and will, by His authority, for His glory. When we pray aligned with God\'s purposes, we can be confident He hears and answers.' },
      { title: 'Persistent Prayer', content: 'Jesus told parables about persistent prayer—the widow and the unjust judge, the friend at midnight. These don\'t teach that God is reluctant and needs persuading. Rather, they show that persistent prayer develops our faith, clarifies our desires, and aligns our will with God\'s. We keep asking, seeking, knocking because we trust our Father hears us.' },
      { title: 'Prayers God Answers', content: 'James says we don\'t have because we don\'t ask, or we ask with wrong motives (James 4:2-3). God answers prayers that align with His will and are offered in faith. He promises to give wisdom when we ask (James 1:5). The prayer of a righteous person is powerful and effective. God delights to answer prayers that bring Him glory and bless His children.' },
    ],
    keyTakeaways: [
      'Prayer is conversation with our Father',
      'The Lord\'s Prayer is our model',
      'We pray in Jesus\' name and authority',
      'Persistent prayer builds faith',
      'God answers prayers aligned with His will',
    ],
    verses: ['Matthew 6:9-13', 'John 14:13-14', 'James 1:5', 'James 5:16', '1 John 5:14-15'],
  },
};

export default function StudyArticleScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { category, articleId } = route.params;

  // Get article - construct key from category and articleId
  const articleKey = `${category}-${articleId}`;
  const article = articles[articleKey];

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Article not found</Text>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButtonError}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.categoryLabel}>{article.category}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Article Header */}
        <View style={styles.articleHeader}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.subtitle}</Text>
          <View style={styles.meta}>
            <Icon name="clock" size={16} color="#6B7280" />
            <Text style={styles.metaText}>{article.readTime} min read</Text>
          </View>
        </View>

        {/* Wooly's Tip */}
        <WoolyTip message="Take your time reading this! It's full of valuable insights that will enrich your understanding." />

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.introduction}>{article.introduction}</Text>
        </View>

        {/* Sections */}
        {article.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}

        {/* Key Takeaways */}
        <View style={styles.takeawaysCard}>
          <View style={styles.takeawaysHeader}>
            <Icon name="bookmark" size={20} color="#8B5CF6" />
            <Text style={styles.takeawaysTitle}>Key Takeaways</Text>
          </View>
          {article.keyTakeaways.map((takeaway, index) => (
            <View key={index} style={styles.takeawayItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.takeawayText}>{takeaway}</Text>
            </View>
          ))}
        </View>

        {/* Related Verses */}
        <View style={styles.versesCard}>
          <View style={styles.versesHeader}>
            <Icon name="book-open" size={20} color="#3B82F6" />
            <Text style={styles.versesTitle}>Related Scriptures</Text>
          </View>
          <View style={styles.versesList}>
            {article.verses.map((verse, index) => (
              <View key={index} style={styles.verseBadge}>
                <Icon name="bookmark" size={12} color="#3B82F6" />
                <Text style={styles.verseText}>{verse}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer CTA */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaEmoji}>🐑</Text>
          <View style={styles.ctaContent}>
            <Text style={styles.ctaTitle}>Ready to Test Your Knowledge?</Text>
            <Text style={styles.ctaText}>
              Head to the Learn tab to take quizzes about {article.title.split(':')[0]} and other biblical figures!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#E8E3FF', // Light lilac
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  articleHeader: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    marginBottom: 24,
  },
  introduction: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 26,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 26,
  },
  takeawaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#DDD6FE',
  },
  takeawaysHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  takeawaysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B21B6',
  },
  takeawayItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    fontSize: 18,
    color: '#8B5CF6',
    marginRight: 10,
    marginTop: 2,
  },
  takeawayText: {
    flex: 1,
    fontSize: 15,
    color: '#5B21B6',
    lineHeight: 22,
  },
  versesCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },
  versesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  versesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  verseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  verseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  ctaCard: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FCD34D',
    alignItems: 'center',
  },
  ctaEmoji: {
    fontSize: 48,
    marginRight: 16,
  },
  ctaContent: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#78350F',
    marginBottom: 6,
  },
  ctaText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 16,
  },
  backButtonError: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
