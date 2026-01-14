export interface StudyArticle {
  id: string;
  category: string;
  subcategory?: string;
  title: string;
  subtitle: string;
  introduction: string;
  sections: ContentSection[];
  keyTakeaways: string[];
  furtherStudy: string[];
  crossReferences: string[];
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  quote?: {
    text: string;
    reference: string;
  };
  illustration?: string;
}

// NAMES & PEOPLE STUDY CONTENT
export const namesStudyArticles: StudyArticle[] = [
  {
    id: 'moses-study',
    category: 'names',
    subcategory: 'prophets',
    title: 'Moses: The Great Deliverer',
    subtitle: 'From Basket to Burning Bush - The Life and Legacy of Moses',
    introduction: 'Moses stands as one of the most significant figures in all of Scripture. Author of the first five books of the Bible, leader of the Exodus, receiver of the Law, and prophet of God, Moses\'s life demonstrates God\'s power to use ordinary people for extraordinary purposes.',
    sections: [
      {
        heading: 'Early Life: Preserved for a Purpose',
        paragraphs: [
          'Moses was born during a dark time in Israel\'s history. The Israelites were slaves in Egypt, and Pharaoh had ordered all Hebrew baby boys to be killed. Yet God had a plan. Moses\'s mother hid him for three months, then placed him in a waterproof basket among the reeds of the Nile River.',
          'Pharaoh\'s daughter found the basket and adopted Moses, raising him as her own son in the Egyptian palace. Moses received the finest education Egypt could offer, but God was preparing him for a far greater purpose than Egyptian royalty.',
          'Moses grew up with the privileges of Egyptian nobility while being nursed by his own Hebrew mother. This unique position gave him access to Pharaoh\'s court while maintaining connection to his Hebrew heritage.'
        ],
        quote: {
          text: 'By faith Moses\' parents hid him for three months after he was born, because they saw he was no ordinary child, and they were not afraid of the king\'s edict.',
          reference: 'Hebrews 11:23'
        }
      },
      {
        heading: 'Flight to Midian: The Wilderness Years',
        paragraphs: [
          'At age 40, Moses saw an Egyptian beating a Hebrew slave. In anger, he killed the Egyptian and buried him in the sand. When Pharaoh learned of this, Moses fled to Midian, where he lived as a shepherd for 40 years.',
          'These wilderness years were not wasted time—God was preparing Moses for his future role. As a shepherd, Moses learned patience, endurance, and how to lead stubborn sheep (preparation for leading stubborn Israelites!). He also learned humility, transforming from a proud prince to a humble shepherd.',
          'Moses married Zipporah and settled into a quiet life. For 40 years, he tended sheep in the desert, seemingly forgotten. But God had not forgotten Moses.'
        ],
        illustration: 'Just as Moses spent 40 years learning to be patient with sheep before leading people, God often uses seasons of preparation before calling us to significant ministry.'
      },
      {
        heading: 'The Burning Bush: God\'s Call',
        paragraphs: [
          'One day, while tending his father-in-law\'s flock, Moses saw an extraordinary sight: a bush that was burning but not consumed. As he approached to investigate, God spoke to him from the bush.',
          'God revealed Himself as "I AM WHO I AM"—the eternal, self-existent God of Abraham, Isaac, and Jacob. He commissioned Moses to return to Egypt and lead the Israelites out of slavery.',
          'Moses offered every excuse: "Who am I?" "What if they don\'t believe me?" "I\'m not a good speaker." But God answered each objection. He promised, "I will be with you," provided miraculous signs, and assigned Aaron as Moses\'s spokesman.',
          'Finally, Moses obeyed. At age 80, he began the greatest mission of his life. This shows us that it\'s never too late for God to use us!'
        ],
        quote: {
          text: 'God said to Moses, "I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you."',
          reference: 'Exodus 3:14'
        }
      },
      {
        heading: 'The Ten Plagues: God\'s Power Displayed',
        paragraphs: [
          'Moses returned to Egypt and confronted Pharaoh: "Let my people go!" Pharaoh refused. So God sent ten devastating plagues upon Egypt, each one demonstrating His power over the false gods of Egypt.',
          'The plagues were: (1) water turned to blood, (2) frogs, (3) gnats, (4) flies, (5) livestock disease, (6) boils, (7) hail, (8) locusts, (9) darkness, and (10) death of the firstborn.',
          'Each time, Pharaoh hardened his heart and refused to let Israel go. Finally, after the tenth plague, Pharaoh relented and the Israelites left Egypt in the Exodus.'
        ],
        bulletPoints: [
          'The plagues showed God\'s superiority over Egyptian gods',
          'They demonstrated that the God of Israel is the one true God',
          'They brought judgment on Egypt for enslaving God\'s people',
          'They preserved the Israelites while punishing their oppressors'
        ]
      },
      {
        heading: 'The Red Sea Crossing: Impossible Deliverance',
        paragraphs: [
          'After letting Israel go, Pharaoh changed his mind and pursued them with his army. The Israelites were trapped between the Egyptian army and the Red Sea. They cried out in fear, but Moses declared, "The LORD will fight for you; you need only to be still."',
          'God commanded Moses to raise his staff over the sea. The waters parted, creating a dry path through the sea. All of Israel crossed safely on dry ground. When the Egyptians pursued, the waters returned and drowned Pharaoh\'s army.',
          'This miracle demonstrated God\'s complete power over creation and His faithfulness to deliver His people. It became the defining moment of Israel\'s history.'
        ],
        quote: {
          text: 'Then Moses stretched out his hand over the sea, and all that night the LORD drove the sea back with a strong east wind and turned it into dry land. The waters were divided, and the Israelites went through the sea on dry ground.',
          reference: 'Exodus 14:21-22'
        }
      },
      {
        heading: 'Mount Sinai: Receiving the Law',
        paragraphs: [
          'Three months after leaving Egypt, Israel camped at Mount Sinai. God called Moses up the mountain and gave him the Ten Commandments—God\'s moral law written on stone tablets.',
          'Moses spent 40 days and nights on the mountain with God, receiving not just the Ten Commandments but detailed instructions for worship, the tabernacle, and how Israel should live as God\'s holy people.',
          'The Law served multiple purposes: it revealed God\'s holiness, showed Israel how to live, exposed human sinfulness, and pointed forward to the need for a Savior. Paul later wrote that "the law was our guardian until Christ came."'
        ]
      },
      {
        heading: 'Wilderness Wanderings: Testing and Training',
        paragraphs: [
          'What should have been an 11-day journey to the Promised Land took 40 years. Why? Because the Israelites refused to trust God when they reached Canaan\'s border. Ten of the twelve spies brought back a fearful report, and the people rebelled against God.',
          'God decreed that the entire generation (except Caleb and Joshua) would wander in the wilderness until they died. Their children would enter the Promised Land.',
          'During these 40 years, Moses led a stubborn, complaining people. They grumbled about food, water, and leadership. Yet Moses interceded for them repeatedly, even when God offered to destroy them and start over with Moses\'s family.',
          'Moses himself made a critical error: in anger at the people, he struck a rock to get water instead of speaking to it as God commanded. Because of this, God told Moses he could see the Promised Land but would not enter it.'
        ],
        illustration: 'Moses\'s sin shows that even great leaders are human and accountable to God. His faithful service didn\'t excuse disobedience.'
      },
      {
        heading: 'Final Days: Passing the Torch',
        paragraphs: [
          'As the 40 years came to an end, Moses prepared Israel for entry into Canaan. He gave three powerful sermons (recorded in Deuteronomy) reviewing God\'s faithfulness, restating the Law, and calling Israel to covenant faithfulness.',
          'Moses commissioned Joshua as his successor, blessed the twelve tribes, and climbed Mount Nebo. From there, God showed him the entire Promised Land.',
          'At age 120, Moses died on the mountain. God Himself buried him, and no one knows where his grave is. Moses had led Israel for 40 years, written the Torah, and established the foundation for Israel\'s relationship with God.',
          'Deuteronomy concludes: "Since then, no prophet has risen in Israel like Moses, whom the LORD knew face to face."'
        ],
        quote: {
          text: 'The LORD said to him, "This is the land I promised on oath to Abraham, Isaac and Jacob when I said, \'I will give it to your descendants.\' I have let you see it with your eyes, but you will not cross over into it."',
          reference: 'Deuteronomy 34:4'
        }
      },
      {
        heading: 'Legacy: A Prophet Like Moses',
        paragraphs: [
          'Moses\'s legacy is immeasurable. He wrote Genesis, Exodus, Leviticus, Numbers, and Deuteronomy—the foundation of Scripture. He established Israel\'s covenant relationship with God. He led the greatest mass deliverance in history. He spoke with God face to face.',
          'But Moses himself pointed beyond himself to a greater prophet: "The LORD your God will raise up for you a prophet like me from among you, from your fellow Israelites. You must listen to him" (Deuteronomy 18:15).',
          'This prophecy was fulfilled in Jesus Christ. Like Moses, Jesus delivered God\'s people (from sin, not Egypt), gave them a new covenant, performed miracles, and spoke God\'s word. But Jesus is greater than Moses—while Moses was a servant in God\'s house, Jesus is the Son over God\'s house (Hebrews 3:5-6).',
          'Remarkably, Moses appeared with Elijah at Jesus\'s transfiguration, showing that even in death, God had special purposes for His faithful servant.'
        ]
      }
    ],
    keyTakeaways: [
      'God can use anyone, regardless of their past or perceived inadequacies',
      'Seasons of preparation (like Moses\'s 40 years in Midian) are not wasted time',
      'True leadership involves interceding for and serving difficult people',
      'Even great leaders are accountable to God and must obey His commands',
      'Moses points us to Jesus, the Prophet greater than Moses',
      'God remembers His promises and delivers His people'
    ],
    furtherStudy: [
      'Read the entire book of Exodus to see Moses\'s full story',
      'Study Hebrews 11:24-28 for New Testament perspective on Moses\'s faith',
      'Compare Moses and Jesus using Hebrews 3:1-6',
      'Explore Numbers 12 to see Moses\'s humility and God\'s vindication'
    ],
    crossReferences: [
      'Exodus 2-4 (Moses\'s early life and call)',
      'Exodus 7-12 (The ten plagues)',
      'Exodus 14 (Red Sea crossing)',
      'Exodus 19-20 (Mount Sinai and Ten Commandments)',
      'Numbers 20:1-13 (Moses strikes the rock)',
      'Deuteronomy 34 (Moses\'s death)',
      'Hebrews 3:1-6 (Moses and Jesus compared)',
      'Matthew 17:1-8 (Transfiguration)'
    ]
  },
  {
    id: 'david-study',
    category: 'names',
    subcategory: 'kings',
    title: 'David: A Man After God\'s Own Heart',
    subtitle: 'From Shepherd Boy to King - The Triumphs and Failures of Israel\'s Greatest King',
    introduction: 'David is one of the most complex and fascinating characters in Scripture. A shepherd, warrior, king, psalmist, and ancestor of Jesus, David\'s life shows us both the heights of faithful devotion to God and the depths of human sin and repentance.',
    sections: [
      {
        heading: 'Unlikely Beginnings: The Youngest Son',
        paragraphs: [
          'David was the youngest of eight sons of Jesse from Bethlehem. While his older brothers were tall and impressive, David was overlooked—so much so that when the prophet Samuel came to anoint Israel\'s next king, Jesse didn\'t even bother to call David in from the fields.',
          'Samuel looked at each of Jesse\'s sons, expecting God to choose one of them. But God told Samuel, "Do not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart."',
          'Finally, Jesse sent for David. When the young shepherd arrived, God said, "Rise and anoint him; this is the one." So Samuel anointed David with oil, and from that day on, the Spirit of the LORD came powerfully upon David.'
        ],
        quote: {
          text: 'The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.',
          reference: '1 Samuel 16:7'
        },
        illustration: 'God often chooses the unlikely, the overlooked, and the underestimated to accomplish His purposes. David reminds us that God values the heart over human credentials.'
      },
      {
        heading: 'Giant Slayer: Faith in Action',
        paragraphs: [
          'Israel was at war with the Philistines. For 40 days, the giant Goliath (over nine feet tall) taunted Israel\'s army, challenging them to send a champion to fight him. The entire army, including King Saul, was terrified.',
          'David, bringing food to his brothers at the battle, heard Goliath\'s challenge and was outraged: "Who is this uncircumcised Philistine that he should defy the armies of the living God?" David volunteered to fight Goliath.',
          'King Saul tried to dissuade him, but David testified of how God had delivered him from lions and bears while protecting his sheep. Saul offered his armor, but David refused it. Instead, he chose five smooth stones and his shepherd\'s sling.',
          'When Goliath saw David, he scorned him. But David declared, "You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty, the God of the armies of Israel, whom you have defied."',
          'David slung a stone that struck Goliath in the forehead. The giant fell, and David cut off his head with Goliath\'s own sword. Israel\'s army routed the Philistines, and David became a national hero.'
        ],
        bulletPoints: [
          'David\'s confidence was in God, not in his own ability',
          'He had practiced faithfulness in small things (protecting sheep)',
          'He fought for God\'s honor, not his own glory',
          'He used the tools he knew, not what others expected',
          'His victory came through faith, not superior weapons'
        ]
      },
      {
        heading: 'Saul\'s Jealousy: Years of Fugitive Life',
        paragraphs: [
          'After David\'s victory, women sang, "Saul has slain his thousands, and David his tens of thousands." This enraged Saul, and from that day on, he sought to kill David.',
          'For years, David fled from Saul, hiding in caves and the wilderness. Yet throughout this time, David refused to harm Saul. Twice he had opportunity to kill Saul, but each time he spared him, saying, "I will not lay a hand on the LORD\'s anointed."',
          'During this difficult period, David wrote many psalms expressing his trust in God despite danger and betrayal. He gathered a band of loyal followers who would later become his mighty men. God was training David in the wilderness for future kingship.'
        ],
        quote: {
          text: 'The LORD forbid that I should do such a thing to my master, the LORD\'s anointed, or lay my hand on him; for he is the anointed of the LORD.',
          reference: '1 Samuel 24:6'
        }
      },
      {
        heading: 'Becoming King: God\'s Timing',
        paragraphs: [
          'After Saul died in battle, David became king of Judah at age 30. Seven years later, all Israel united under his leadership. David conquered Jerusalem and made it his capital (the City of David).',
          'David brought the Ark of the Covenant to Jerusalem with great celebration. He wanted to build a temple for God, but God said no—David had shed much blood in war. However, God made a covenant with David, promising that David\'s descendants would rule forever.',
          'This Davidic Covenant pointed to Jesus Christ, who would be called "Son of David" and whose kingdom would have no end. Every promise God made to David finds its ultimate fulfillment in Jesus.'
        ]
      },
      {
        heading: 'Greatest Sin: The Bathsheba Incident',
        paragraphs: [
          'At the height of his power, David committed his greatest sin. One evening, he saw Bathsheba bathing. Though she was married to Uriah (one of David\'s loyal soldiers), David sent for her and slept with her. She became pregnant.',
          'To cover his sin, David called Uriah home from battle, hoping he would sleep with his wife. But Uriah, honorably, refused to enjoy his home while his fellow soldiers camped in the field.',
          'David then sent Uriah back to battle with orders that guaranteed his death. Uriah was killed, and David married Bathsheba. David thought he had hidden his sin successfully.',
          'But God sent the prophet Nathan, who told David a parable about a rich man who stole a poor man\'s only lamb. David was outraged—until Nathan said, "You are the man!" Nathan pronounced God\'s judgment: the sword would never depart from David\'s house.'
        ],
        illustration: 'David\'s sin shows that no one is immune to temptation, regardless of their spiritual maturity. It also shows the devastating consequences of sin—David\'s family was torn apart by violence and betrayal.'
      },
      {
        heading: 'True Repentance: Psalm 51',
        paragraphs: [
          'David\'s response to Nathan\'s confrontation was immediate and complete: "I have sinned against the LORD." He wrote Psalm 51, one of the most profound expressions of repentance in Scripture.',
          'In this psalm, David acknowledged his sin fully, asked for cleansing, pleaded for restoration, and committed to teaching others God\'s ways. He understood that true repentance involves confession, forsaking sin, and seeking God\'s forgiveness.',
          'God forgave David, but the consequences remained. The child born from his adultery died. David\'s son Amnon raped his half-sister Tamar. Another son, Absalom, murdered Amnon and later led a rebellion against David.',
          'Through all this, David continued to trust God, writing psalms of lament and hope. His life shows that God forgives genuine repentance but doesn\'t always remove earthly consequences.'
        ],
        quote: {
          text: 'Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me. Restore to me the joy of your salvation.',
          reference: 'Psalm 51:10-12'
        }
      },
      {
        heading: 'Legacy: The Sweet Psalmist of Israel',
        paragraphs: [
          'Despite his failures, David is called "a man after God\'s own heart." Why? Because when David sinned, he genuinely repented. He loved God passionately, worshiped Him wholeheartedly, and trusted Him completely.',
          'David wrote approximately half of the 150 psalms, giving the church a hymnal for all seasons: praise, lament, confession, thanksgiving, and prophecy. Through the Psalms, David teaches us how to pray, how to worship, and how to bring our honest emotions to God.',
          'Most importantly, David\'s greatest descendant is Jesus Christ, the promised eternal King. Every promise God made to David is fulfilled in Jesus. The angel told Mary, "He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, and he will reign over Jacob\'s descendants forever; his kingdom will never end."'
        ]
      }
    ],
    keyTakeaways: [
      'God looks at the heart, not outward appearance',
      'Faithfulness in small things prepares us for greater responsibilities',
      'No one is above temptation—we must guard our hearts',
      'True repentance brings God\'s forgiveness, though consequences may remain',
      'Worship should be passionate, honest, and from the heart',
      'David points us to Jesus, the eternal King from David\'s line'
    ],
    furtherStudy: [
      'Read 1 Samuel 16-31 and 2 Samuel for David\'s full story',
      'Study Psalm 51 for a model of genuine repentance',
      'Read Psalm 23 to see David\'s faith as a shepherd',
      'Explore the Davidic Covenant in 2 Samuel 7 and its fulfillment in Luke 1:30-33'
    ],
    crossReferences: [
      '1 Samuel 16 (David anointed as king)',
      '1 Samuel 17 (David and Goliath)',
      '2 Samuel 11-12 (David and Bathsheba)',
      '2 Samuel 7 (Davidic Covenant)',
      'Psalm 23 (The Lord is My Shepherd)',
      'Psalm 51 (Prayer of repentance)',
      'Matthew 1:1 (Jesus, Son of David)',
      'Luke 1:30-33 (Jesus, heir to David\'s throne)'
    ]
  }
];

// THEMES STUDY CONTENT
export const themesStudyArticles: StudyArticle[] = [
  {
    id: 'love-study',
    category: 'themes',
    title: 'Biblical Love: Agape and Beyond',
    subtitle: 'Understanding God\'s Love and How It Transforms How We Love',
    introduction: 'Love is the central theme of Scripture. From "God is love" to "love one another," the Bible presents a radical vision of love that goes far beyond emotion or sentiment. Biblical love—especially agape love—is sacrificial, unconditional, and transformative.',
    sections: [
      {
        heading: 'God\'s Nature: God IS Love',
        paragraphs: [
          'The Apostle John makes the stunning declaration: "God is love" (1 John 4:8). This doesn\'t mean God is made of love or that love is one of God\'s attributes—it means love defines His very essence and nature.',
          'Because God is love, everything He does flows from love. His creation was an act of love. His laws are given in love. Even His judgments come from love for righteousness and His people.',
          'God\'s love is unlike human love. It doesn\'t depend on the worthiness of the object. Romans 5:8 says, "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." God loved us when we were unlovable, rebelling against Him.'
        ],
        quote: {
          text: 'God is love. Whoever lives in love lives in God, and God in them.',
          reference: '1 John 4:16'
        }
      },
      {
        heading: 'Greatest Love: The Cross of Christ',
        paragraphs: [
          'The supreme demonstration of God\'s love is the cross. John 3:16 declares, "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
          'Jesus Himself said, "Greater love has no one than this: to lay down one\'s life for one\'s friends" (John 15:13). Yet Jesus died not just for His friends, but for His enemies—for sinners who rejected Him.',
          'The cross shows us that love costs. True love sacrifices. Divine love doesn\'t wait for us to deserve it; it acts while we are still in our sin. This is the love that saves us and transforms us.'
        ],
        bulletPoints: [
          'God\'s love sent Jesus to earth to become human',
          'Jesus willingly went to the cross in our place',
          'He bore the punishment our sins deserved',
          'Through His death, we can be reconciled to God',
          'His resurrection proves His love conquered death'
        ]
      },
      {
        heading: 'Love\'s Definition: 1 Corinthians 13',
        paragraphs: [
          'Paul\'s famous "Love Chapter" defines what true love looks like in action. Love is patient and kind. It doesn\'t envy, boast, or act proudly. It isn\'t rude, self-seeking, or easily angered. It keeps no record of wrongs.',
          'Love doesn\'t delight in evil but rejoices with truth. It always protects, trusts, hopes, and perseveres. And love never fails—it endures forever.',
          'Paul emphasizes that without love, even the greatest spiritual gifts are worthless. If I speak in tongues, have prophetic powers, understand all mysteries, have mountain-moving faith, give away all I possess, or even sacrifice my body—without love, I gain nothing.',
          'This chapter shows that love is not primarily an emotion but a commitment to action. It\'s choosing to be patient when frustrated, kind when annoyed, and forgiving when wronged.'
        ],
        quote: {
          text: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
          reference: '1 Corinthians 13:13'
        }
      },
      {
        heading: 'The Greatest Commandment',
        paragraphs: [
          'When asked which commandment was greatest, Jesus answered, "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself. All the Law and the Prophets hang on these two commandments."',
          'Jesus reduced all 613 laws in Torah to two love commands. Every other command flows from these. If we truly love God and love others, we will naturally keep all His commands.',
          'Loving God with ALL our heart, soul, and mind means total devotion—no rivals, no divided loyalties. Loving our neighbor as ourselves means valuing others\' wellbeing as highly as our own.',
          'Jesus radically expanded "neighbor" to include everyone—even enemies. In the Parable of the Good Samaritan, He showed that our neighbor is anyone we encounter who needs help, regardless of race, religion, or background.'
        ]
      },
      {
        heading: 'Loving Our Enemies',
        paragraphs: [
          'Perhaps Jesus\' most revolutionary teaching on love is this: "Love your enemies and pray for those who persecute you" (Matthew 5:44). This goes against every natural instinct.',
          'Jesus explained that anyone can love those who love them—even sinners do that. But loving enemies demonstrates we are truly children of God, "for he makes his sun rise on the evil and on the good."',
          'Loving enemies doesn\'t mean approving their actions or tolerating evil. It means desiring their good, praying for their salvation, and treating them with respect despite their hostility.',
          'Jesus modeled this perfectly. As He was being crucified, He prayed, "Father, forgive them, for they do not know what they are doing." This is the love He calls us to show.'
        ],
        illustration: 'Stephen, the first Christian martyr, followed Jesus\' example. As he was being stoned to death, he prayed, "Lord, do not hold this sin against them" (Acts 7:60).'
      },
      {
        heading: 'Love in Action: The New Commandment',
        paragraphs: [
          'On the night before His crucifixion, Jesus gave His disciples a "new commandment": "Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another" (John 13:34-35).',
          'What makes this commandment new? The standard: "as I have loved you." Jesus loved sacrificially, humbly (washing feet), unconditionally, and to the point of death. This is how we are to love.',
          'Love is the distinguishing mark of Christians. Not our theological precision, spiritual experiences, or moral performance—but our love for one another. When the world sees Christians genuinely loving each other, it becomes a powerful testimony.',
          'John later wrote, "This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers and sisters" (1 John 3:16). Love means being willing to sacrifice for others.'
        ]
      },
      {
        heading: 'Love Never Fails',
        paragraphs: [
          'Paul concludes 1 Corinthians 13 by declaring that love never fails. Prophecies will cease, tongues will be stilled, knowledge will pass away, but love endures forever.',
          'When we reach heaven, we won\'t need prophecy, tongues, or partial knowledge—we\'ll see God face to face. But we will still need love. Love is eternal because God is eternal, and God is love.',
          'This means our loving actions have eternal significance. Every act of kindness, every word of encouragement, every sacrifice made in love—these matter forever. They are never wasted.',
          'Nothing can separate us from God\'s love. Paul writes, "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord" (Romans 8:38-39).'
        ]
      }
    ],
    keyTakeaways: [
      'God\'s very nature is love—everything He does flows from love',
      'The cross is the supreme demonstration of God\'s love',
      'True love is sacrificial action, not just emotion',
      'We are commanded to love God fully and love others as ourselves',
      'Love for one another is the mark of true disciples',
      'Nothing can separate believers from God\'s love in Christ'
    ],
    furtherStudy: [
      'Read 1 John (the entire book focuses on love)',
      'Study Romans 5:1-11 on God\'s love demonstrated through Christ',
      'Meditate on the Parable of the Good Samaritan (Luke 10:25-37)',
      'Explore Ephesians 5:1-2 on walking in love'
    ],
    crossReferences: [
      'John 3:16 (God\'s love in sending Jesus)',
      'John 15:9-17 (Abiding in Christ\'s love)',
      'Romans 5:8 (Christ died for sinners)',
      'Romans 8:35-39 (Nothing separates us from God\'s love)',
      '1 Corinthians 13 (The Love Chapter)',
      '1 John 3:16-18 (Love in action)',
      '1 John 4:7-21 (God is love)',
      'Ephesians 3:14-21 (Paul\'s prayer to know Christ\'s love)'
    ]
  }
];

export const allStudyArticles = {
  names: namesStudyArticles,
  themes: themesStudyArticles
};

export function getStudyArticles(category: string): StudyArticle[] {
  return allStudyArticles[category as keyof typeof allStudyArticles] || [];
}

export function getStudyArticle(id: string): StudyArticle | undefined {
  const allArticles = [...namesStudyArticles, ...themesStudyArticles];
  return allArticles.find(article => article.id === id);
}
