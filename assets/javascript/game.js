var philosopherNames = ["nietzsche", "plato", "socrates", "aristotle", "hegel", "russell", "wittgenstein", "sartre", "camus", "heidegger", "locke", "berkeley", "hume", "kierkegaard", "pascal", "schopenhauer", "spinoza", "foucault", "derrida", "kant", "dostoevsky"]
var keyVal = ""
var pressCount = 0
var correctCount = 0
var randomName = philosopherNames[Math.floor(Math.random()*philosopherNames.length)].split("")
var nameLength = randomName.length
var positions = []
var guesses = []
var wrongs = 0
var firstGame = true
var hangmanIds = ["hangmanContainer", "noose", "torso", ["leftArm", "rightArm"], ["leftLeg", "rightLeg"], "head"]
var gamesWon = 0
var losingPressCount = 0

var headShotSpecs = [ ["png", 65] ["png", 85], ["png", 85], ["png", 85], ["jpg", 60], ["png", 55], ["png", 60, 70], ["jpg ", 80], ["png", 85], ["png", 85], ["png", 80, 75], ["png", 70], ["jpg", 65], ["jpg", 80], ["jpg", 80], ["jpg", 65], ["png", 65], ["jpg", 65], ["jpg", 80], ["png", 80, 70], ["png", 65], ["jpg", 75] ]
var quotes = [
[
"The greatest weight: What, if some day or night a demon were to steal after you into your loneliest loneliness and say to you: 'This life as you now live it and have lived it, you will have to live it once more and innumerable times more: and there will be nothing new in it, but every pain and every joy and every thought and sigh and everything unutterably small or great in your life will have to return to you, all in the same succession and sequence: even this spider and this moonlight between the trees, and even this moment and I myself. The eternal hourglass of existence is turned upside down again and again, and you with it, speck of dust! Would you not throw yourself down and gnash your teeth and curse the demon who spoke thus? Or have you once experienced a tremendous moment when you would have answered him: 'You are a god and never have I heard anything more divine.' If this thought gained possession of you, it would change you as your are or perhaps crush you. The question in each and every thing, 'Do you desire this once more and innumerable times more?' would lie upon your actions as the greatest weight. Or how well disposed would you have to become to yourself and to life to crave nothing more reverently than this ultimate eternal confirmation and seal?"
,"Another ideal runs ahead of us, a strange, tempting, dangerous ideal to which we should not wish to persuade anybody because we do not readily concede the right to it to anyone: the ideal of a spirit who plays naively — that is, not deliberately but from overflowing power and abundance — with all that was hitherto called holy, good, untouchable, divine; for whom those supreme things that the people naturally accept as their value standards, signify danger, decay, debasement, or at least recreation, blindness, and temporary self-oblivion; the ideal of a human, superhuman well-being and benevolence that will often appear inhuman — for example, when it confronts all earthly seriousness so far, all solemnity in gesture, word, tone, eye, morality, and task so far, as if it were their most incarnate and involuntary parody — and in spite of all this, it is perhaps only with him that great seriousness really begins, that the real question mark is posed for the first time, that the destiny of the soul changes, the hand moves forward, the tragedy begins."
,"One must shed the bad taste of wanting to agree with many. 'Good' is no longer good when your neighbor mouths it. And how should there be a 'common good'! The term contradicts itself: whatever can be common always has little value. In the end it must be as it is and always has been: great things remain for the great, abysses for the profound, nuances and shudders for the refined, and, in brief, all that is rare for the rare."
,"It is the business of the very few to be independent; it is a privilege of the strong. And whoever attempts it, even with the best right, but without being OBLIGED to do so, proves that he is probably not only strong, but also daring beyond measure. He enters into a labyrinth, he multiplies a thousandfold the dangers which life in itself already brings with it; not the least of which is that no one can see how and where he loses his way, becomes isolated, and is torn piecemeal by some minotaur of conscience. Supposing such a one comes to grief, it is so far from the comprehension of men that they neither feel it, nor sympathize with it. And he cannot any longer go back! He cannot even go back again to the sympathy of men!"
,"Christianity gave Eros poison to drink he did not die of it, certainly, but degenerated to Vice."
,"When one is young, one venerates and despises without that art of nuances which constitutes the best gain of life, and it is only fair that one has to pay dearly for having assaulted men and things in this manner with Yes and No. Everything is arranged so that the worst of tastes, the taste for the unconditional, should be cruelly fooled and abused until a man learns to put a little art into his feelings and rather to risk trying even what is artificial — as the real artists of life do."
,"Every philosophy is a foreground philosophy — that is a hermitic judgment: 'There is something arbitrary in his stopping here to look back and look around, in his not digging deeper here but laying his spade aside; there is also something suspicious about it.' Every philosophy also conceals a philosophy; every opinion is also a hideout, every word also a mask."
,"The feelings of devotion, self-sacrifice for a neighbor, the whole morality of self-denial must be questioned mercilessly and taken to court.... There is too much charm and sugar in these feelings of 'for others,' 'not for myself,' for us not to need to become doubly suspicious at this point and to ask: 'are these not perhaps-seductions?"
],
[
"By no means, said I, but do you ask the question. You certainly have heard it often, but now you either do not apprehend or again you are minded to make trouble for me by attacking the argument. I suspect it is rather the latter. For you have often heard that the greatest thing to learn is the idea of good by reference to which just things and all the rest become useful and beneficial. And now I am almost sure you know that this is what I am going to speak of and to say further that we have no adequate knowledge of it. And if we do not know it, then, even if without the knowledge of this we should know all other things ever so well, you are aware that it would avail us nothing, just as no possession either is of any avail without the possession of the good. Or do you think there is any profit in possessing everything except that which is good, or in understanding all things else apart from the good while understanding and knowing nothing that is fair and good? No, by Zeus, I do not, he said."
,"If you would reflect that the part of the soul that in the former case, in our own misfortunes, was forcibly restrained, and that has hungered for tears and a good cry and satisfaction, because it is its nature to desire these things, is the element in us that the poets satisfy and delight, and that the best element in our nature, since it has never been properly educated by reason or even by habit, then relaxes its guard over the plaintive part, inasmuch as this is contemplating the woes of others and it is no shame to it to praise and pity another who, claiming to be a good man, abandons himself to excess in his grief, but it thinks this vicarious pleasure is so much clear gain, and would not consent to forfeit it by disdaining the poem altogether. That is, I think, because few are capable of reflecting that what we enjoy in others will inevitably react upon ourselves. For after feeding fat the emotion of pity there, it is not easy to restrain it in our own sufferings."
,"Now to find the maker and father of this All is hard enough, and even if I succeeded, to declare him to everyone is impossible"
,"When the father and creator saw the creature which he had made moving and living, the created image of the eternal gods, he rejoiced, and in his joy determined to make the copy still more like the original, and as this was an eternal living being, he sought to make the universe eternal, so far as might be.  Now the nature of the ideal being was everlasting, but to bestow this attribute in its fullness upon a creature was impossible.  Wherefore he resolved to have a moving image of eternity, and when he set in order the heaven, he made this image eternal but moving according to number, while eternity itself rests in unity, and this image we call time.  For there were no days and nights and months and years before the heaven was created, but when he constructed the heaven he created them also.  They are all parts of time, and the past and future are created species of time, which we unconsciously but wrongly transfer to eternal being, for we say that it 'was,' or 'is,' or 'will be,' but the truth is that 'is' alone is properly attributed to it, and that 'was' and 'will be' are only to be spoken of becoming in time, for they are motions, but that which is immovably the same forever cannot become older or younger by time, nor can it be said that it came into being in the past, or has come into being now, or will come into being in the future, nor is it subject at all to any of those states which affect moving and sensible things and of which generation is the cause.  These are the forms of time, which imitates eternity and revolves according to a law of number.  Moreover, when we say that what has become is become and what becomes is becoming, and that what will become is about to become and that the nonexistent is nonexistent – all these are inaccurate modes of expression."
,"Every seeker after wisdom knows that up to the time when philosophy takes it over his soul is a helpless prisoner, chained hand and foot in the body, compelled to view reality not directly but only through its prison bars, and wallowing in utter ignorance. And philosophy can see that the imprisonment is ingeniously effected by the prisoner's own active desire, which makes him first accessory to his own confinement. Well, philosophy takes over the soul in this condition and by gentle persuasion tries to set it free. She points out that observation by means of the eyes and ears and all the other senses is entirely deceptive, and she urges the soul to refrain from using them unless it is necessary to do so, and encourages it to collect and concentrate itself by itself, trusting nothing but its own independent judgment upon objects considered in themselves, and attributing no truth to anything which it views indirectly as being subject to variation, because such objects are sensible and visible but what the soul itself sees is intelligible and invisible. Now the soul of the true philosopher feels that it must not reject this opportunity for release, and so it abstains as far as possible from pleasures and desires and griefs, because it reflects that the result of giving way to pleasure or fear or desire is not as might be supposed the trivial misfortune of becoming ill or wasting money through self-indulgence, but the last and worst calamity of all, which the sufferer does not recognize. When anyone's soul feels a keen pleasure or pain it cannot help supposing that whatever causes the most violent emotion is the plainest and truest reality, which it is not. It is chiefly visible things that have this effect, verily? Is it not on this sort of occasion that soul passes most completely into the bondage of body?"
,"This, then, must be our conviction about the just man, that whether he fall into poverty or disease or any other supposed evil, for him all these things will finally prove good, both in life and in death. For by the gods assuredly that man will never be neglected who is willing and eager to be righteous, and by the practice of virtue to be likened unto God so far as that is possible for man."
,"My own case, the divine sign, is hardly worth mentioning – for I suppose it has happened to few or none before me.  And those who have been of this little company who have tasted the sweetness and blessedness of this possession and who have also come to understand the madness of the multitude sufficiently and have seen that there is nothing, if I may say so, sound or right in any present politics, and that there is no ally with whose aid the champion of justice could escape destruction, but that he would be as a man who has fallen among wild beasts, unwilling to share their misdeeds and unable to hold out singly against the savagery of all, and that he would thus, before he could in any way benefit his friends or the state, come to an untimely end without doing any good to himself or others – for all these reasons I say the philosopher remains quiet, minds his own affair, and, as it were, standing aside under shelter of a wall in a storm and blast of dust and sleet and seeing others filled full of lawlessness, is content if in any way he may keep himself free from iniquity and unholy deeds through this life and take his departure with fair hope, serene, and well content when the end comes."
,"Well, then, that the soul is immortal our recent argument and our other proofs would constrain us to admit. But to know its true nature we must view it not marred by communion with the body and other miseries as we now contemplate it, but consider adequately in the light of reason what it is when it is purified, and then you will find it to be a far more beautiful thing and will more clearly distinguish justice and injustice and all the matters that we have now discussed. To its love of wisdom. And we must note the things of which it has apprehensions, and the associations for which it yearns, as being itself akin to the divine and the immortal and to eternal being, and so consider what it might be if it followed the gleam unreservedly and were raised by this impulse out of the depths of this sea in which it is now sunk, and were cleansed and scraped free of the rocks and barnacles which, because it now feasts on earth, cling to it in wild profusion of earthy and stony accretion by reason of these feastings that are accounted happy. And then one might see whether in its real nature it is manifold or single in its simplicity, or what is the truth about it and how."
],
[
"To know, is to know that you know nothing. That is the meaning of true knowledge."
,"By all means, marry. If you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher."
,"A system of morality which is based on relative emotional values is a mere illusion, a thoroughly vulgar conception which has nothing sound in it and nothing true."
,"I decided that it was not wisdom that enabled poets to write their poetry, but a kind of instinct or inspiration, such as you find in seers and prophets who deliver all their sublime messages without knowing in the least what they mean."
,"Ordinary people seem not to realize that those who really apply themselves in the right way to philosophy are directly and of their own accord preparing themselves for dying and death."
,"Beauty is the bait which with delight allures man to enlarge his kind."
,"I only wish that ordinary people had an unlimited capacity for doing harm; then they might have an unlimited power for doing good."
,"Wonder is the beginning of wisdom."
],
[
"The beauty of the soul shines out when a man bears with composure one heavy mischance after another, not because he does not feel them, but because he is a man of high and heroic temper."
,"Freedom is obedience to self-formulated rules."
,"Bad people...are in conflict with themselves; they desire one thing and will another, like the incontinent who choose harmful pleasures instead of what they themselves believe to be good."
,"Men cannot know each other till they have ‘eaten salt together."
,"The happy life is thought to be one of excellence; now an excellent life requires exertion, and does not consist in amusement. If Eudaimonia, or happiness, is activity in accordance with excellence, it is reasonable that it should be in accordance with the highest excellence; and this will be that of the best thing in us."
,"And here will apply an observation made before, that whatever is proper to each is naturally best and pleasantest to him: such then is to Man the life in accordance with pure Intellect (since this Principle is most truly Man), and if so, then it is also the happiest."
,"If, therefore, there is some end of our actions that we wish for on account of itself, the rest being things we wish for on account of this end, and if we do not choose all things on account of something else—for in this way the process will go on infinitely such that the longing involved is empty and pointless—clearly this would be the good, that is, the best."
,"Now each man judges well the things he knows, and of these he is a good judge. And so the man who has been educated in a subject is a good judge of that subject, and the man who has received an all-round education is a good judge in general. Hence a young man is not a proper hearer of lectures on political science; for he is inexperienced in the actions that occur in life, but its discussions start from these and are about these; and, further, since he tends to follow his passions, his study will be vain and unprofitable, because the end aimed at is not knowledge but action. And it makes no difference whether he is young in years or youthful in character; the defect does not depend on time, but on his living, and pursuing each successive object, as passion directs. For to such persons, as to the incontinent, knowledge brings no profit; but to those who desire and act in accordance with a rational principle knowledge about such matters will be of great benefit."
],
[
"Genuine tragedies in the world are not conflicts between right and wrong. They are conflicts between two rights."
,"Truth is found neither in the thesis nor the antithesis, but in an emergent synthesis which reconciles the two."
,"It is solely by risking life that freedom is obtained; . . . the individual who has not staked his or her life may, no doubt, be recognized as a Person; but he or she has not attained the truth of this recognition as an independent self-consciousness."
,"When liberty is mentioned, we must always be careful to observe whether it is not really the assertion of private interests which is thereby designated."
,"Evil resides in the very gaze which perceives Evil all around itself."
,"The ignorant man is not free, because what confronts him is an alien world, something outside him and in the offing, on which he depends, without his having made this foreign world for himself and therefore without being at home in it by himself as in something his own. The impulse of curiosity, the pressure for knowledge, from the lowest level up to the highest rung of philosophical insight arises only from the struggle to cancel this situation of unfreedom and to make the world one's own in one's ideas and thought."
,"The bud disappears when the blossom breaks through, and we might say that the former is refuted by the latter; in the same way when the fruit comes, the blossom may be explained to be a false form of the plant’s existence, for the fruit appears as its true nature in place of the blossom. The ceaseless activity of their own inherent nature makes these stages moments of an organic unity, where they not merely do not contradict one another, but where one is as necessary as the other; and constitutes thereby the life of the whole."
,"An idea is always a generalization, and generalization is a property of thinking. To generalize means to think."
],
[
"My desire and wish is that the things I start with should be so obvious that you wonder why I spend my time stating them. This is what I aim at because the point of philosophy is to start with something so simple as not to seem worth stating, and to end with something so paradoxical that no one will believe it."
,"To teach how to live without certainty, and yet without being paralyzed by hesitation, is perhaps the chief thing that philosophy, in our age, can still do for those who study it."
,"One should as a rule respect public opinion in so far as is necessary to avoid starvation and to keep out of prison, but anything that goes beyond this is voluntary submission to an unnecessary tyranny, and is likely to interfere with happiness in all kinds of ways."
,"Men fear thought as they fear nothing else on earth -- more than ruin, more even than death. Thought is subversive and revolutionary, destructive and terrible, thought is merciless to privilege, established institutions, and comfortable habits; thought is anarchic and lawless, indifferent to authority, careless of the well-tried wisdom of the ages. Thought looks into the pit of hell and is not afraid ... Thought is great and swift and free, the light of the world, and the chief glory of man."
,"And if there were a God, I think it very unlikely that He would have such an uneasy vanity as to be offended by those who doubt His existence."
,"The secret of happiness is to face the fact that the world is horrible, horrible, horrible."
,"In all affairs it is a healthy thing now and then to hang a question mark on the things you have long taken for granted."
,"Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind. These passions, like great winds, have blown me hither and thither, in a wayward course, over a great ocean of anguish, reaching to the very verge of despair. I have sought love, first, because it brings ecstasy - ecstasy so great that I would often have sacrificed all the rest of life for a few hours of this joy. I have sought it, next, because it relieves loneliness--that terrible loneliness in which one shivering consciousness looks over the rim of the world into the cold unfathomable lifeless abyss. I have sought it finally, because in the union of love I have seen, in a mystic miniature, the prefiguring vision of the heaven that saints and poets have imagined. This is what I sought, and though it might seem too good for human life, this is what--at last--I have found. With equal passion I have sought knowledge. I have wished to understand the hearts of men. I have wished to know why the stars shine. And I have tried to apprehend the Pythagorean power by which number holds sway above the flux. A little of this, but not much, I have achieved. Love and knowledge, so far as they were possible, led upward toward the heavens. But always pity brought me back to earth. Echoes of cries of pain reverberate in my heart. Children in famine, victims tortured by oppressors, helpless old people a burden to their sons, and the whole world of loneliness, poverty, and pain make a mockery of what human life should be. I long to alleviate this evil, but I cannot, and I too suffer. This has been my life. I have found it worth living, and would gladly live it again if the chance were offered me."
],
[
"The limits of my language means the limits of my world."
,"Whereof one cannot speak, thereof one must be silent."
,"Death is not an event in life: we do not live to experience death. If we take eternity to mean not infinite temporal duration but timelessness, then eternal life belongs to those who live in the present. Our life has no end in the way in which our visual field has no limits."
,"A man will be imprisoned in a room with a door that is unlocked and opens inwards; as long as it does not occur to him to pull rather than push."
,"I am sitting with a philosopher in the garden; he says again and again 'I know that that is a tree', pointing to a tree that is near us. Someone else arrives and hears this, and I tell him: 'This fellow isn’t insane. We are only doing philosophy."
,"Not how the world is, but that it is, is the mystery."
,"The problems are solved, not by giving new information, but by arranging what we have known since long."
,"To imagine a language is to imagine a form of life."
],
[
"Anything, anything would be better than this agony of mind, this creeping pain that gnaws and fumbles and caresses one and never hurts quite enough."
,"Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance."
,"Man is not the sum of what he has already, but rather the sum of what he does not yet have, of what he could have."
,"We must act out passion before we can feel it."
,"Man is condemned to be free; because once thrown into the world, he is responsible for everything he does."
,"Life begins on the other side of despair."
,"It is certain that we cannot escape anguish, for we are anguish."
,"Our responsibility is much greater than we might have supposed, because it involves all mankind."
],
[
"Do not walk in front of me… I may not follow. Do not walk behind me… I may not lead. Walk beside me… just be my friend"
,"You know what charm is: a way of getting the answer yes without having asked any clear question."
,"But in the end one needs more courage to live than to kill himself."
,"Blessed are the hearts that can bend; they shall never be broken."
,"Real generosity towards the future lies in giving all to the present."
,"Do not wait for the last judgment. It comes every day."
,"Beauty is unbearable, drives us to despair, offering us for a minute the glimpse of an eternity that we should like to stretch out over the whole of time."
,"The most important thing you do everyday you live is deciding not to kill yourself."
],
[
"Anyone can achieve their fullest potential, who we are might be predetermined, but the path we follow is always of our own choosing. We should never allow our fears or the expectations of others to set the frontiers of our destiny. Your destiny cannot be changed but, it can be challenged. Every man is born as many men and dies as a single one."
,"That the presence of the other breaks into our own life - this is what no feeling can fully encompass. Human fate gives itself to human fate, and it is the task of pure love to keep this self-surrender as vital as on the first day."
,"Man acts as though he were the shaper and master of language, while in fact language remains the master of man."
,"Thinking only begins at the point where we have come to know that Reason, glorified for centuries, is the most obstinate adversary of thinking."
,"The small are always dependent on the great; they are 'small' precisely because they think they are independent. The great thinker is one who can hear what is greatest in the work of other 'greats' and who can transform it in an original manner."
,"The possible ranks higher than the actual."
,"To think is to confine yourself to a single thought that one day stands still like a star in the world sky."
,"Thus 'phenomenology' means αποφαινεσθαι τα φαινομενα -- to let that which shows itself be seen from itself in the very way in which it shows itself from itself."
],
[
"Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours."
,"New opinions are always suspected, and usually opposed, without any other reason but because they are not common."
,"So that, in effect, religion, which should most distinguish us from beasts, and ought most peculiarly to elevate us, as rational creatures, above brutes, is that wherein men often appear most irrational, and more senseless than beasts themselves."
,"For where is the man that has incontestable evidence of the truth of all that he holds, or of the falsehood of all he condemns; or can say that he has examined to the bottom all his own, or other men's opinions? The necessity of believing without knowledge, nay often upon very slight grounds, in this fleeting state of action and blindness we are in, should make us more busy and careful to inform ourselves than constrain others."
,"The great question which, in all ages, has disturbed mankind, and brought on them the greatest part of their mischiefs ... has been, not whether be power in the world, nor whence it came, but who should have it."
,"Reverie is when ideas float in our mind without reflection or regard of the understanding."
,"The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made."
,"I pretend not to teach, but to inquire; and therefore cannot but confess here again,–that external and internal sensation are the only passages I can find of knowledge to the understanding. These alone, as far as I can discover, are the windows by which light is let into this DARK ROOM. For, methinks, the understanding is not much unlike a closet wholly shut from light, with only some little openings left, to let in external visible resemblances, or ideas of things without: which, would they but stay there, and lie so orderly as to be found upon occasion, it would very much resemble the understanding of a man, in reference to all objects of sight, and the ideas of them."
],
[
"Philosophy being nothing else but the study of wisdom and truth, it may with reason be expected that those who have spent most time and pains in it should enjoy a greater calm and serenity of mind, a greater clearness and evidence of knowledge, and be less disturbed with doubts and difficulties than other men. Yet so it is, we see the illiterate bulk of mankind that walk the high-road of plain common sense, and are governed by the dictates of nature, for the most part easy and undisturbed. To them nothing that is familiar appears unaccountable or difficult to comprehend. They complain not of any want of evidence in their senses, and are out of all danger of becoming Sceptics. But no sooner do we depart from sense and instinct to follow the light of a superior principle, to reason, meditate, and reflect on the nature of things, but a thousand scruples spring up in our minds concerning those things which before we seemed fully to comprehend. Prejudices and errors of sense do from all parts discover themselves to our view; and, endeavouring to correct these by reason, we are insensibly drawn into uncouth paradoxes, difficulties, and inconsistencies, which multiply and grow upon us as we advance in speculation, till at length, having wandered through many intricate mazes, we find ourselves just where we were, or, which is worse, sit down in a forlorn Scepticism."
,"I know what I mean by the term I and myself; and I know this immediately, or intuitively, though I do not perceive it as I perceive a triangle, a colour, or a sound."
,"It is indeed an opinion strangely prevailing amongst men, that houses, mountains, rivers, and in a word all sensible objects have an existence natural or real, distinct from their being perceived by the understanding. But with how great an assurance and acquiescence soever this principle may be entertained in the world; yet whoever shall find in his heart to call it in question, may, if I mistake not, perceive it to involve a manifest contradiction. For what are the forementioned objects but the things we perceive by sense, and what do we perceive besides our own ideas or sensations; and is it not plainly repugnant that any one of these or any combination of them should exist unperceived?"
,"If we admit a thing so extraordinary as the creation of this world, it should seem that we admit something strange, and odd, and new to human apprehension, beyond any other miracle whatsoever."
,"From my own being, and from the dependency I find in myself and my ideas, I do, by an act of reason, necessarily infer the existence of a God, and of all created things in the mind of God."
,"The same principles which at first view lead to skepticism, pursued to a certain point, bring men back to common sense"
,"In vain do we extend our view into the heavens, and pry into the entrails of the earth, in vain do we consult the writings of learned men, and trace the dark footsteps of antiquity; we need only draw the curtain of words, to behold the fairest tree of knowledge, whose fruit is excellent, and within the reach of our hand."
,"The phenomena of nature, which strike on the senses and are understood by the mind, form not only a magnificent spectacle, but also a most coherent, entertaining, and instructive Discourse; and to effect this, they are conducted, adjusted, and ranged by the greatest wisdom. This Language or Discourse is studied with different attention, and interpreted with different degrees of skill. But so far as men have studied and remarked its rules, and can interpret right, so far they may be said to be knowing in nature. A beast is like a man who hears a strange tongue but understands nothing."
],
[
"Beauty is no quality in things themselves: It exists merely in the mind which contemplates them; and each mind perceives a different beauty."
,"If we take in our hand any volume; of divinity or school metaphysics, for instance; let us ask, Does it contain any abstract reasoning concerning quantity or number? No. Does it contain any experimental reasoning concerning matter of fact and existence? No. Commit it then to the flames: for it can contain nothing but sophistry and illusion."
,"All sentiment is right; because sentiment has a reference to nothing beyond itself, and is always real, wherever a man is conscious of it. But all determinations of the understanding are not right; because they have a reference to something beyond themselves, to wit, real matter of fact; and are not always conformable to that standard."
,"For my part, when I enter most intimately into what I call myself, I always stumble on some particular perception or other, of heat or cold, light or shade, love or hatred, pain or pleasure. I never can catch myself at any time without a perception, and never can observe any thing but the perception…. If any one, upon serious and unprejudic'd reflection thinks he has a different notion of himself, I must confess I can reason no longer with him. All I can allow him is, that he may be in the right as well as I, and that we are essentially different in this particular. He may, perhaps, perceive something simple and continu'd, which he calls himself; tho' I am certain there is no such principle in me."
,"Tis not unreasonable for me to prefer the destruction of the whole world to the scratching of my finger."
,"When I shall be dead, the principles of which I am composed will still perform their part in the universe, and will be equally useful in the grand fabric, as when they composed this individual creature. The difference to the whole will be no greater betwixt my being in a chamber and in the open air. The one change is of more importance to me than the other; but not more so to the universe."
,"Pleasure, scarcely in one instance, is ever able to reach ecstasy and rapture; and in no one instance can it continue for any time at its highest pitch and altitude. The spirits evaporate, the nerves relax, the fabric is disordered, and the enjoyment quickly degenerates into fatigue and uneasiness. But pain often, good God, how often! rises to torture and agony; and the longer it continues, it becomes still more genuine agony and torture. Patience is exhausted, courage languishes, melancholy seizes us, and nothing terminates our misery but the removal of its cause, or another event, which is the sole cure of all evil, but which, from our natural folly, we regard with still greater horror and consternation."
,"Custom, then, is the great guide of human life. It is that principle alone which renders our experience useful to us, and makes us expect, for the future, a similar train of events with those which have appeared in the past. Without the influence of custom, we should be entirely ignorant of every matter of fact beyond what is immediately present to the memory and senses. We should never know how to adjust means to ends, or to employ our natural powers in the production of any effect. There would be an end at once of all action, as well as of the chief part of speculation."
],
[
"The function of prayer is not to influence God, but rather to change the nature of the one who prays."
,"The greatest hazard of all, losing your own self, can occur very quietly in the world, as if it were nothing at all. No other loss can occur so quietly; any other loss - an arm, a leg, five dollars, a wife, etc. - is sure to be noticed."
,"What is a poet? An unhappy man who hides deep anguish in his heart, but whose lips are so formed that when the sigh and cry pass through them, it sounds like lovely music.... And people flock around the poet and say: 'Sing again soon' - that is, 'May new sufferings torment your soul but your lips be fashioned as before, for the cry would only frighten us, but the music, that is blissful."
,"To venture causes anxiety, but not to venture is to lose your own self.... And to venture in the highest is precisely to be conscious of your own self."
,"How did I get into the world? Why was I not asked about it and why was I not informed of the rules and regulations but just thrust into the ranks as if I had been bought by a peddling shanghaier of human beings? How did I get involved in this big enterprise called actuality? Why should I be involved? Is this case a matter of choice? And if I am compelled to be involved, where is the manager—I have something to say about this. Is there no manager? To whom shall I make my complaint?"
,"The highest and most beautiful things in life are not to be heard about, nor read about, nor seen but, if one will, are to be lived."
,"One must not think slightingly of the paradoxical…for the paradox is the source of the thinker’s passion, and the thinker without a paradox is like a lover without feeling: a paltry mediocrity."
,"What I really need is to get clear about what I must do, not what I must know, except insofar as knowledge must precede every act. What matters is to find a purpose, to see what it really is that God wills that I shall do; the crucial thing is to find a truth which is truth for me, to find the idea for which I am willing to live and die."
],
[
"All problems of humanity stem from the inability of Man to sit quietly in a room alone."
,"Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed."
,"Few men speak humbly of humility, chastely of chastity, skeptically of skepticism."
,"To ridicule philosophy is really to philosophize."
,"Can anything be stupider than that a man has the right to kill me because he lives on the other side of a river and his ruler has a quarrel with mine, though I have not quarrelled with him?"
,"Belief is a wise wager. Granted that faith cannot be proved, what harm will come to you if you gamble on its truth and it proves false? If you gain, you gain all; if you lose, you lose nothing. Wager, then, without hesitation, that He exists."
,"When I see the blind and wretched state of men, when I survey the whole universe in its deadness, and man left to himself with no light, as though lost in this corner of the universe without knowing who put him there, what he has to do, or what will become of him when he dies, incapable of knowing anything, I am moved to terror, like a man transported in his sleep to some terrifying desert island, who wakes up quite lost, with no means of escape. Then I marvel that so wretched a state does not drive people to despair."
,"Let each of us examine his thoughts; he will find them wholly concerned with the past or the future. We almost never think of the present, and if we do think of it, it is only to see what light is throws on our plans for the future. The present is never our end. The past and the present are our means, the future alone our end. Thus we never actually live, but hope to live, and since we are always planning how to be happy, it is inevitable that we should never be so."
],
[
"Talent hits a target no one else can hit. Genius hits a target no one else can see."
,"They tell us that Suicide is the greatest piece of Cowardice... That Suicide is wrong; when it is quite obvious that there is nothing in this world to which every man has a more unassailable title than to his own life and person."
,"Every miserable fool who has nothing at all of which he can be proud, adopts as a last resource pride in the nation to which he belongs; he is ready and happy to defend all its faults and follies tooth and nail, thus reimbursing himself for his own inferiority."
,"When we read, another person thinks for us: we merely repeat his mental process. In learning to write, the pupil goes over with his pen what the teacher has outlined in pencil: so in reading; the greater part of the work of thought is already done for us. This is why it relieves us to take up a book after being occupied with our own thoughts. And in reading, the mind is, in fact, only the playground of another’s thoughts. So it comes about that if anyone spends almost the whole day in reading, and by way of relaxation devotes the intervals to some thoughtless pastime, he gradually loses the capacity for thinking; just as the man who always rides, at last forgets how to walk. This is the case with many learned persons: they have read themselves stupid."
,"Man can do what he wills but he cannot will what he wills."
,"The art of not reading is a very important one. It consists in not taking an interest in whatever may be engaging the attention of the general public at any particular time. When some political or ecclesiastical pamphlet, or novel, or poem is making a great commotion, you should remember that he who writes for fools always finds a large public. A precondition for reading good books is not reading bad ones: for life is short."
,"We will gradually become indifferent to what goes on in the minds of other people when we acquire a knowledge of the superficial nature of their thoughts, the narrowness of their views and of the number of their errors. Whoever attaches a lot of value to the opinions of others pays them too much honor."
,"It would be better if there were nothing. Since there is more pain than pleasure on earth, every satisfaction is only transitory, creating new desires and new distresses, and the agony of the devoured animal is always far greater than the pleasure of the devourer"
],
[
"Those who wish to seek out the cause of miracles and to understand the things of nature as philosophers, and not to stare at them in astonishment like fools, are soon considered heretical and impious, and proclaimed as such by those whom the mob adores as the interpreters of nature and the gods. For these men know that, once ignorance is put aside, that wonderment would be taken away, which is the only means by which their authority is preserved."
,"I would warn you that I do not attribute to nature either beauty or deformity, order or confusion. Only in relation to our imagination can things be called beautiful or ugly, well-ordered or confused."
,"Further conceive, I beg, that a stone, while continuing in motion, should be capable of thinking and knowing, that it is endeavoring, as far as it can, to continue to move. Such a stone, being conscious merely of its own endeavor and not at all indifferent, would believe itself to be completely free, and would think that it continued in motion solely because of its own wish. This is that human freedom, which all boast that they possess, and which consists solely in the fact, that men are conscious of their own desire, but are ignorant of the causes whereby that desire has been determined."
,"Happiness is not the reward of virtue, but is virtue itself; nor do we delight in happiness because we restrain from our lusts; but on the contrary, because we delight in it, therefore we are able to restrain them."
,"The supreme mystery of despotism, its prop and stay, is to keep men in a state of deception, and with the specious title of religion to cloak the fear by which they must be held in check, so that they will fight for their servitude as if for salvation."
,"Hatred is increased by being reciprocated, and can on the other hand be destroyed by love. Hatred which is completely vanquished by love, passes into love; and love is thereupon greater, than if hatred had not preceded it."
,"Emotion, which is suffering, ceases to be suffering as soon as we form a clear and precise picture of it."
,"The superstitious know how to reproach people for their vices better than they know how to teach them virtues, and they strive, not to guide men by reason, but to restrain them by fear, so that they flee the evil rather than love virtues. Such people aim only to make others as wretched as they themselves are, so it is no wonder that they are generally burdensome and hateful to men."
],
[
"I do not feel that it is necessary to know exactly what I am. The main interest in life and work is to become someone else that you were not in the beginning. If you knew when you began a book what you would say at the end, do you think that you would have the courage to write it? What is true for writing and for love relationships is true also for life. The game is worthwhile insofar as we don’t know where it will end."
,"What strikes me is the fact that in our society, art has become something which is related only to objects and not to individuals, or to life. That art is something which is specialized or which is done by experts who are artists. But could not the life of each one become a work of art? Why should the lamp or the house be an art object, but not our life?"
,"Schools serve the same social functions as prisons and mental institutions- to define, classify, control, and regulate people."
,"What desire can be contrary to nature since it was given to man by nature itself?"
,"You may have killed God beneath the weight of all that you have said; but do not imagine that, with all that you are saying, you will make a man that will live longer than he."
,"From the idea that the self is not given to us, I think there is only one practical consequence: we have to create ourselves as a work of art."
,"But let there be no misunderstanding: it is not that a real man, the object of knowledge, philosophical reflection or technological intervention, has been substituted for the soul, the illusion of theologians. The man described for us, whom we are invited to free, is already in himself the effect of a subjection more profound than himself. A 'soul' inhabits him and brings him to existence, which is itself a factor in the mastery that power exercises over the body. The soul is the effect and instrument of a political anatomy; the soul is the prison of the body."
,"Thought is no longer theoretical. As soon as it functions it offends or reconciles, attracts or repels, breaks, dissociates, unites or reunites; it cannot help but liberate or enslave. Even before prescribing, suggesting a future, saying what must be done, even before exhorting or merely sounding an alarm, thought, at the level of its existence, in its very dawning, is in itself an action-a perilous act."
],
[
"Monsters cannot be announced. One cannot say: 'Here are our monsters,' without immediately turning the monsters into pets."
,"In general, I try and distinguish between what one calls the Future and 'l’avenir' the ‘to come. The future is that which – tomorrow, later, next century – will be. There is a future which is predictable, programmed, scheduled, foreseeable. But there is a future, l’avenir (to come) which refers to someone who comes whose arrival is totally unexpected. For me, that is the real future. That which is totally unpredictable. The Other who comes without my being able to anticipate their arrival. So if there is a real future, beyond the other known future, it is l’avenir in that it is the coming of the Other when I am completely unable to foresee their arrival."
,"What is called 'objectivity,' scientific for instance (in which I firmly believe, in a given situation) imposes itself only within a context which is extremely vast, old, firmly established, or rooted in a network of conventions … and yet which still remains a context."
,"A text is not a text unless it hides from the first comer, from the first glance, the law of its composition and the rules of its game. A text remains, moreover, forever imperceptible. Its laws and rules are not, however, harbored in the inaccessibility of a secret; it is simply that they can never be booked, in the present, into anything that could rigorously be called a perception."
,"Here again, the difference between the effective and the virtual, between mourning and its possibility, seems fragile and porous. The anguished apprehension of mourning (without which the act of friendship would not spring forth in its very energy) insinuates itself a priori and anticipates itself; it haunts and plunges the friend, before mourning, into mourning. This apprehension weeps before the lamentation, it weeps death before death, and this is the very respiration of friendship, the extreme of its possibility. Hence surviving is at once the essence, the origin and the possibility, the condition of possibility of friendship; it is the grieved act of loving. This time of surviving thus gives the time of friendship."
,"Let us narrow the arguments down further. In certain respects, the theme of supplementarity is certainly no more than one theme among others. It is in a chain, carried by it. Perhaps one could substitute something else for it. But it happens that this theme describes the chain itself, the being-chain of a textual chain, the structure of substitution, the articulation of desire and of language, the logic of all conceptual oppositions taken over by Rousseau…It tells us in a text what a text is, it tells us in writing what writing it, in Rousseau’s writing it tells us Jean-Jacque’s desire etc…the concept of the supplement and the theory of writing designate textuality itself in Rousseau’s text in an indefinitely multiplied structure—en abyme."
,"Therefore we will not listen to the source itself in order to learn what it is or what it means, but rather to the turns of speech, the allegories, figures, metaphors, as you will, into which the source has deviated, in order to lose it or rediscover it—which always amounts to the same."
,"What must a text be if it can, by itself in a way, turn itself in order to shine again, after an eclipse, with a different light, in a time that is no longer that of its productive source (and was it ever contemporaneous with it?), and then again repeat this resurgence after several deaths, counting, among several others, those of the author, and the simulacrum of a multiple extinction?"
],
[
"Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end."
,"Enlightenment is the release of man from his self-incurred tutelage. Tutelage is the inability  of manto make use of his understanding without direction from another. Self-incurred is this tutelage when its cause lies not in lack of reason but in lack of resolution and courage to use it without direction from another. Sapere aude! 'Have courage to use your own reason!'- that is the motto of enlightenment."
,"Two things fill the mind with ever new and increasing admiration and awe, the more often and steadily we reflect upon them: the starry heavens above me and the moral law within me. I do not seek or conjecture either of them as if they were veiled obscurities or extravagances beyond the horizon of my vision; I see them before me and connect them immediately with the consciousness of my existence."
,"Whereas the beautiful is limited, the sublime is limitless, so that the mind in the presence of the sublime, attempting to imagine what it cannot, has pain in the failure but pleasure in contemplating the immensity of the attempt."
,"Space and time are the framework within which the mind is constrained to construct its experience of reality."
,"Genius is the ability to independently arrive at and understand concepts that would normally have to be taught by another person."
,"Act only according to that maxim whereby you can at the same time will that it should become a universal law."
,"The light dove, in free flight cutting through the air the resistance of which it feels, could get the idea that it could do even better in airless space. Likewise, Plato abandoned the world of the senses because it posed so many hindrances for the understanding, and dared to go beyond it on the wings of the ideas, in the empty space of pure understanding."
],
[
"Above all, do not lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."
,"Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth."
,"What is hell? I maintain that it is the suffering of being unable to love."
,"The world says: 'You have needs -- satisfy them. You have as much right as the rich and the mighty. Do not hesitate to satisfy your needs; indeed, expand your needs and demand more.' This is the worldly doctrine of today. And they believe that this is freedom. The result for the rich is isolation and suicide, for the poor, envy and murder."
,"The awful thing is that beauty is mysterious as well as terrible. God and the devil are fighting there and the battlefield is the heart of man."
,"If you wish to glimpse inside a human soul and get to know a man, do not bother analyzing his ways of being silent, of talking, of weeping, of seeing how much he is moved by noble ideas; you will get better results if you just watch him laugh. If he laughs well, he is a good man."
,"Don’t let us forget that the causes of human actions are usually immeasurably more complex and varied than our subsequent explanations of them."
,"For, after all, you do grow up, you do outgrow your ideals, which turn to dust and ashes, which are shattered into fragments; and if you have no other life, you just have to build one up out of these fragments. And all the time your soul is craving and longing for something else. And in vain does the dreamer rummage about in his old dreams, raking them over as though they were a heap of cinders, looking in these cinders for some spark, however tiny, to fan it into a flame so as to warm his chilled blood by it and revive in it all that he held so dear before, all that touched his heart, that made his blood course through his veins, that drew tears from his eyes, and that so splendidly deceived him!"
],
]



function isLetter(str) {
  return str.match(/[a-z]/i);
}

function myKeyPress(event) {
	keyVal = event.key
	if (pressCount >= 1 && isLetter(keyVal) && keyVal.length === 1) {
		if (wrongs < 6) {
			checkGuess()
			if (wrongs === 1) {
				document.getElementById("infoContainer").style.position = "absolute"
				document.getElementById("infoContainer").style.marginLeft = "50%"
			}
		} else {
			pressCount += 1
			if (pressCount === losingPressCount + 1) {
				newGame()
				losingPressCount = 0
			} else {
				gameLost()
				losingPressCount = pressCount
			}
			
		}
	} else if ((pressCount > 1 && !isLetter(keyVal)) || (pressCount > 1 && keyVal.length !== 1)) {
		alert("Not a letter!")
	}
	if (pressCount === 0) {
		if (!firstGame) {
			emptyBlocks()
			document.getElementById("guessesText").innerHTML = ""
			nameLength = randomName.length
		}
		document.getElementById("mistakes").innerHTML = 6
		changeText()
		displayBlocks()
		document.getElementById("guessesTitle").innerHTML = "Wrong Guesses:"
		document.getElementById("infoContainer").style.display = "block"
		document.getElementById("quoteText").innerHTML = quotes[philosopherNames.indexOf(randomName.join(""))][0]
		pressCount += 1
	}
	if (correctCount === randomName.length) {
		gameWon()
		newGame()
	}
	positions = []
}

function checkGuess() {
	if (randomName.indexOf(keyVal) !== -1 && guesses.indexOf(keyVal) === -1) {
		for (var i = nameLength - 1; i >= 0; i--) {
			if (keyVal === randomName[i].toLowerCase()) {
				positions.push(i)
			} 
		}
		for (var i = 0; i < positions.length; i++) {
			positions[i] = positions[i] + (13-nameLength)
			displayNameLetter(positions[i],keyVal)
		}
		correctCount += positions.length
		if (pressCount<8) {
			document.getElementById("quoteText").innerHTML = quotes[philosopherNames.indexOf(randomName.join(""))][pressCount]
		}
		guesses.push(keyVal)
		pressCount += 1
	} else {
		var isNew = checkIfNew(keyVal)
		console.log(isNew)
		if (isNew) {
			if (hangmanIds[wrongs].length !== 2 && wrongs !== 5) {
				document.getElementById(hangmanIds[wrongs]).style.display = "block"
			} else if (wrongs === 5) {
				document.getElementById("head").style.display = "block"
				document.getElementById("head").src = "./assets/images/" + randomName.join("") + "." + headShotSpecs[philosopherNames.indexOf(randomName.join(""))][0]
				document.getElementById("head").style.height = headShotSpecs[philosopherNames.indexOf(randomName.join(""))][1] + "px"
				document.getElementById("head").style.width = "60px"
				if (headShotSpecs[philosopherNames.indexOf(randomName.join(""))].length === 3) {
					document.getElementById("head").style.width = headShotSpecs[philosopherNames.indexOf(randomName.join(""))][2] + "px"
				}
			} else {
				document.getElementById(hangmanIds[wrongs][0]).style.display = "block"
				document.getElementById(hangmanIds[wrongs][1]).style.display = "block"
			}
			wrongGuess()
			pressCount += 1
		} else if (randomName.indexOf(keyVal) !== -1) {
			for (var i = 13-nameLength; i <= 12; i++) {
				if (document.getElementById("letterText"+i).innerHTML === keyVal.toUpperCase()) {
					enlarge("letterText"+i)
					reduce("letterText"+i)
				}
			}
		}
	}
}

function emptyBlocks() {
	for (var i = 13-nameLength; i <= 12; i++) {
		document.getElementById("letterText"+i).innerHTML = ""
		document.getElementById("letterText"+i).style.borderBottom = "0px solid black"
		document.getElementById("letterText"+i).style.fontSize = "16px"
		document.getElementById("letterText"+i).style.marginLeft = "0px"
		document.getElementById("letter"+i).style.display = "none"
	}
}

function wrongGuess() {
		wrongs += 1
		if (wrongs === 6) {
			document.getElementById("mistakes").innerHTML = "GAME OVER!"
			document.getElementById("instructionsTop").innerHTML = "Press Any Key for Answer"
		} else { 
			document.getElementById("mistakes").innerHTML = 6-wrongs
		}
		if (pressCount<8) {
			document.getElementById("quoteText").innerHTML = quotes[philosopherNames.indexOf(randomName.join(""))][pressCount]
		}
		console.log(wrongs)
}

function displayBlocks() {
	for (var i = 12; i > (12-nameLength); i--) {
		var letterID = "letter" + i
		console.log(i)
		document.getElementById(letterID).style.display = "block"
		document.getElementById(letterID).style.height = "30px"
		document.getElementById(letterID).style.width = "35px"
		document.getElementById("letterText"+i).style.borderBottom = "2px solid black"
		document.getElementById("letterText"+i).style.fontSize = "16px"
		document.getElementById("letterText"+i).style.marginLeft = "9px"
		document.getElementById("letterText"+i).style.textAlign = "center"
		document.getElementById("letterText"+i).style.marginTop = "0px"
	}
	if (nameLength !== 12) {
		var marginLeft = ((420-(35*nameLength))/2)-4
		document.getElementById("wordMarginer").style.width = marginLeft+"px"
	} else {
		document.getElementById("wordMarginer").style.width = "0px"
	}
}

function checkIfNew(letter) {
	var isNew = false
	if (guesses.indexOf(letter) === -1) {
		guesses.push(letter)
		document.getElementById("guessesText").innerHTML += "<span id="+ letter + ">" + letter.toUpperCase() + "</span> "
		isNew = true
	} else if (randomName.indexOf(keyVal) === -1) {
		enlarge(letter)	
		reduce(letter)
	}
	return isNew
}

function gameWon() {
	document.getElementById("mistakes").innerHTML = "YOU WON!"
	gamesWon += 1
	hideHanger()
	document.getElementById("infoContainer").style.position = "relative"
	document.getElementById("infoContainer").style.margin = "auto"
	document.getElementById("wins").innerHTML = gamesWon
}

function hideHanger() {
	for (var i = hangmanIds.length - 1; i >= 0; i--) {
		console.log(hangmanIds[i] + " " + i)
		if (hangmanIds[i].length !== 2) { 
			document.getElementById(hangmanIds[i]).style.display = "none"
		} else {
			document.getElementById(hangmanIds[i][0]).style.display = "none"
			document.getElementById(hangmanIds[i][1]).style.display = "none"
		}
	}
}

function newGame() {
	wrongs = 0 
	correctCount = 0
	guesses = []
	randomName = philosopherNames[Math.floor(Math.random()*philosopherNames.length)].split("")
	document.getElementById("instructionsTop").innerHTML = "Press Any Key to Begin New Game."
	pressCount = 0
	firstGame = false
}

function gameLost() {
	firstGame = false
	for (var i = 13-nameLength; i <= 12; i++) {
		displayNameLetter(i,randomName[i-13+nameLength])
	}
	hideHanger()
	document.getElementById("instructionsTop").innerHTML = "Hit Any Key to Start New Round"
	document.getElementById("infoContainer").style.position = "relative"
	document.getElementById("infoContainer").style.margin = "auto"
}

function changeText() {
	document.getElementById("instructionsTop").innerHTML = "Type a Letter to Make a Guess!"
}

function enlarge(id) {
	document.getElementById(id).style.fontSize = "30px"
	document.getElementById(id).style.fontWeight = "bold"
}

function reduce(id) {
	setTimeout(function() {document.getElementById(id).style.fontSize = "16px"}, 300)
	setTimeout(function() {document.getElementById(id).style.fontWeight = "normal"}, 300)
}

function displayNameLetter(int,str) {
	document.getElementById("letterText"+int).innerHTML = str.toUpperCase()
	document.getElementById("letterText"+int).style.border = "0px solid black"
	document.getElementById("letterText"+int).style.marginTop = "-20px"
}

document.onkeypress = myKeyPress




