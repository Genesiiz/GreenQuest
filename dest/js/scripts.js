document.addEventListener('deviceready', function() {
   //code au lancement de l'app
}, false);

var app = angular.module('app', ['ui.router']);

//share date between Ctrls
app.service('sharedProperties', function () {

   var main = document.getElementsByTagName('main')[0];
   var home = document.getElementsByClassName('home')[0];
   var documentation = document.getElementsByClassName('documentation')[0];
   var potager = document.getElementsByClassName('potager')[0];
   var profil = document.getElementsByClassName('profil')[0];

   var $allSelectBtn = $('.tab-modif__el--left');

   //init basic plantes info table
   var plantes = [
      {
         name: "Amarante",
         img: "assets/plant/amarante.png",
         title01: "Période",
         para01: "Au début du printemps, planter la en serre. Ensuite dès le mois de mai, en pleine terre. Mais pas avant, l'amarante est une frileuse.",
         title02: "Préparation",
         para02: "Les amarantes vivaces ne sont pas rustiques sous nos latitudes, une culture en serre peut être nécessaire pour conserver les plantes dans les régions les plus froides. En pleine terre, faire un ajout de compost bien décomposé et de terreau avant la plantation. Arroser copieusement et laisser tremper la motte un petit quart d'heure avant de transplanter. Choisir un endroit en plein soleil et bien abrité des vents violents qui pourraient casser les tiges et les inflorescences de la plante. Le sol doit être fertile, frais et bien drainé. Si cela n'est pas le cas, ajouter un lit de graviers ou de sable au fond du trou de plantation.",
         title03: "Plantation",
         para03: "En serre planter l'amarante dans un pot muni d'un trou en son fond. Le remplir avec 3 cm de billes d'argile recouvertes de bon terreau et exposer en pleine lumière. Sinon lors de la mise en terre, ajouter un peu de compost bien décomposé et du terreau à la terre du jardin. Former une cuvette au pied de la plante et arroser.",
         title04: "Entretient",
         para04: "Maintenir une bonne humidité ambiante et arroser copieusement en été. Fertiliser pendant la période de croissance. Arroser régulièrement durant toute la belle saison. Tuteurer les grandes variétés en cas d’exposition venteuse. Pailler le pied des variétés vivaces pour tenter de les conserver d'une année sur l'autre."
      },
      {
         name: "Basilic",
         img: "assets/plant/basilic.png",
         title01: "Plantation du basilic",
         para01: "Si vous achetez votre basilic directement en pot, plantez-le en pleine terre à partir du mois de mai et tout au long de l’été. Vous pouvez également le laisser dans son pot d’origine quelques temps pour une utilisation à l’intérieur ou sur un balcon. Mais l’idéal pour la culture du basilic en pot c’est d’effectuer un rempotage immédiatement après l’achat dans un pot plus grand. Préférez une situation bien ensoleillé et abrité du vent. Le sol doit être bien drainé pour éviter l’eau stagnante. Après la plantation, arrosez régulièrement mais sans excès",
         title02: "Planter du basilic en intérieur",
         para02: "Cette plante est en effet parfaitement adaptée pour une culture en intérieur ou sur un balcon, en pot ou dans une jardinière. Prenez soin de l’arroser régulièrement afin que le terreau ne se dessèche pas.",
         title03: "Semis de basilic",
         para03: "Le semis de basilic est un bon moyen d’obtenir un joli plant de basilic de qualité. Vous pouvez acheter vos graines dans le commerce pour les récupérer après la floraison de votre basilic afin de les semer l’année suivante. Vous pourrez semer directement en place, à partir du mois d’avril dans les régions méridionales et dès le mois de mai dans les autres régions. Semez dans une terre légère et bien drainé, si possible améliorée avec du terreau et amendée. Veillez à ce que le sol reste humide durant les premières semaines après le semis. Lorsque les plantes comptent 2 à 3 feuilles, éclaircissez de manière à ne garder que les plants les plus vigoureux et en prenant soin de leur laisser la place de se développer. Pincez ensuite les nouvelles pousses, lorsque le plant a atteint 10 cm, afin de favoriser de nouvelles ramifications",
         title04: "Cueillette et récolte du basilic",
         para04: "Vous pouvez cueillir les feuilles de basilic tout au long du printemps et de l’été. Choisissez de préférence les feuilles les plus importantes en sectionnant la tige complète pour favoriser la naissance de nouvelles pousses. Le basilic peut se récolter tout au long de la journée, mais c’est souvent avant le repas qu’on préfère le cueillir afin de conserver toute sa fraicheur et le meilleur de son arôme."
      },
      {
         name: "Carotte",
         img: "assets/plant/carrotte.png",
         title01: "Culture, semis de carotte",
         para01: "Le semis de carotte s’étale de mars à juillet, voire un peu avant mars si le climat le permet. On aime échelonner le semis de carottes dans le temps afin de pouvoir les récolter au fil du temps. Pour éviter les carottes fourchues, il est impératif d’avoir un sol bien ameubli, sans cailloux ni zone compacte. La racine doit descendre rapidement dans le sol, sans obstacle, pour avoir une carotte bien droite et longue. La carotte a besoin d’un sol bien drainé et sain, sans pierre ni caillou. Incorporez systématiquement du sable de rivière à votre semis. La carotte a besoin de soleil pour bien se développer",
         title02: "Entretien et culture de la carotte",
         para02: "L’éclaircissage consiste à supprimer les jeunes pousses les plus fragiles pour laisser aux plus vigoureuses la place de se développer. Cette étape est indispensable pour sélectionner les plus beaux plants et améliorer la future récolte des carottes. Il est préférable de fertiliser le sol avant de planter vos carottes. Utilisez pour cela un fumier déshydraté ou un engrais bio pour potager. Évitez de mettre du fumier frais juste avant de cultiver vos carottes car vous risqueriez de brûler vos semis. Enfin, pour limiter le nombre d’arrosage durant la culture, paillez le pied de vos carottes, cela évitera l’évaporation et limitera la pousse des mauvaises herbes. Un bon binage régulier évite la pousse des mauvaises herbes et permet d’entretenir le drainage de l’eau.",
         title03: "Récolte des carottes",
         para03: "On peut considérer que la carotte est prête à être récoltée environ 3 à 6 mois après le semis, selon les variétés. Les variétés précoces, semées sous abri seront récoltées moins de 3 mois après le semis. Les variétés d’été mettront 3 à 4 mois avant d’être récoltées. Les variétés longues d’hiver peuvent atteindre 6 mois avant la récolte. Pour récolter les carottes, il suffit de les arracher entièrement, avec le feuillage sans abimer les plants restés en terre. Une fois arrachées, laissez-les sécher au soleil durant quelques heures afin de pouvoir enlever la terre facilement.",
         title04: "Bien conserver les carottes ",
         para04: "Pour conserver les carottes le plus longtemps possible pendant l’hiver, placez les dans un endroit frais, sec et aéré mais surtout abrité du gel. Le meilleur moyen est de les conserver dans une caissette remplie de sable et non humide."
      },
      {
         name: "Cerise",
         img: "assets/plant/cerise.png",
         title01: "Bien planter un cerisier",
         para01: "La plantation du cerisier est une étape importante car, bien faite, elle favorise la bonne croissance de l’arbre, la fructification du cerisier et donc la récolte des cerises. Au mieux il sera planté et au mieux il produira de belles cerises rapidement. Il est vivement recommandé de planter le cerisier à l’automne pour favoriser l’enracinement. Une situation ensoleillée est indispensable pour produire des cerises. Choisissez des cerisiers greffés pour qu’ils donnent des fruits.",
         title02: "Taille du cerisier",
         para02: "La taille du cerisier a tendance à affaiblir l’arbre et devient aussi source de nombreuses maladies. Il est pourtant parfois nécessaire de tailler si le cerisier devient trop grand ou que certaines branches deviennent trop fragiles. Le cerisier supportant mal la taille, elle doit être réduite au strict minimum. Supprimez les branches mortes, fragiles ou cassées. Si une branche casse, appliquez immédiatement un mastic de cicatrisation sur la plaie. Le mastic de cicatrisation évite l’apparition de maladies et de champignons.",
         title03: "Maladies et parasites courants chez le cerisier",
         para03: "Le cerisier un un fruitier considéré comme sensible. Il convient donc de le tailler le moins possible car chaque taille est une source d’entrée pour les champignons notamment. 'Mouche de la cerise' : Les cerises sont attaquées par les larves de mouche et des trous se forment dans les cerises. 'Les pucerons' : Les feuilles du cerisier s’enroulent et perdent leur couleur d’origine, elles jaunissent ou se décolorent. 'Les cochenilles' : Amas blanc ou rosé à l’aspect farineux se forme sur les branches et les feuilles. 'La moniliose' : les cerises pourrissent sur l’arbre. Attention aux ravages que peuvent faire les oiseaux chez le cerisier. L’idéal est d’utiliser un filet de protection contre les oiseaux que l’on achète en magasin spécialisé.",
         title04: "",
         para04: ""
      },
      {
         name: "Courge",
         img: "assets/plant/courgette.png",
         title01: "Semis et plantation de la courgette",
         para01: "Le semis en terre directement en place a partir de fin avril-début mai, après tout risque de gelée. Les semis s'effectue en place à partir du mois de avril et jusqu’à la fin de l’été. Utilisez la méthode de semis dite en poquet à environ 2 ou 3 cm de profondeur et en respectant un espace de 60 à 80 cm entre chaque poquet. Lorsque les plants atteignent 8 à 10 cm de haut, éclaircissez pour qu’ils se développe normalement. Si vous choisissez un semis en pot, repiquez en pleine terre 4 à 6 semaines plus tard. Cela a l’avantage de protéger les jeunes plants contre les limaces jusqu’à leur bon développement. Un conseil, la courgette a besoin d’être pollinisé par des pieds mâles et femelles pour donner des courgettes. Il est donc nécessaire d’avoir plusieurs plants pour bien se développer et favoriser la récolte. Si vous êtes pressé par le temps, on peut planter des courgettes achetées en godet dés la fin du printemps ou au début de l'été.",
         title02: "Entretien et culture des courgettes",
         para02: "Si la culture des courgettes et très facile, l’entretien réclame quelque soins pour parvenir à une belle récolte. Supprimer les mauvaises herbes au fur et à mesure. Arroser en cas de fortes chaleurs en évitant de mouiller le feuillage au risque de voire apparaître l’oïdium de la courgette. Retirer les feuilles abîmées au fur et à mesure, surtout si elles montrent des signes de maladie.",
         title03: "Récolte des courgettes",
         para03: "La croissance de la courgette est très rapide donc il faut veiller à son développement car, trop grosse, elles sont moins bonnes que lorsque elles sont de bonne taille. La récolte a lieu environ 2 mois après le semis. Il est préférable aussi de les cueillir lorsque leur taille ne dépasse pas 20 cm pour les longues, et 10 cm de diamètre pour les rondes. Au-delà de cette taille, elle perdent en saveur.",
         title04: "Protéger la courgette contre l’oïdium",
         para04: "Utiliser un sécateur préalablement désinfecté à l’alcool à 90°. Couper et détruire les feuilles malades dès l’apparition de l’oïdium (jamais au compost). Essuyer votre sécateur à l’alcool à 90° après chaque coupe. Pulvérisez ensuite une solution à base de soufre que vous trouverez souvent sous l’appelation « Soufre pulvérisation » dans le commerce. On peut aussi utiliser le bicarbonate de soude à raison de 5g/litre d’eau + une cuillère à café de savon de Marseille."
      },
      {
         name: "Haricot",
         img: "assets/plant/haricot.png",
         title01: "Semis de haricot",
         para01: "Le semis de haricots a lieu en place au printemps et en été, avril à août pour les haricots verts et avril à juin pour les haricots à écosser. Il faut attendre la fin de toute gelée avant de semer et le sol doit avoir une température de 10-12°. Si vous craignez le retour de quelques gelées, protégez votre semis. Semez en ligne et éclaircissez à environ 40 cm ou en poquet à raison de 4/5 graines par poquet.",
         title02: "entretien",
         para02: "Après la levée, fixez les rames pour les haricots à rame afin de les faire grimper. Les haricots à rame peuvent monter à 3 mètres de haut et il est donc important de leur donner un support pour grimper et se fixer. Les rames doivent mesurer 3 m de haut et doivent être en bambou ou en noisetier pour supporter le poids mais aussi l’humidité.",
         title03: "Récolte des haricots",
         para03: "On récolte les haricots verts lorsqu’ils sont atteint la moitié de leur taille définitive, ils mesurent alors 12 à 15 cm de long. Ne pas attendre que la peau se durcisse pour récolter les haricots. Pour les autres types de haricots comme les mangetout, on attendra la formation des grains.",
         title04: "",
         para04: ""
      },
      {
         name: "Laitue",
         img: "assets/plant/laitue.png",
         title01: "Semis de la laitue, la salade",
         para01: "La laitue se sème en place et en ligne de février à octobre selon les types et les espèces. Plus on commencera tôt, plus il faudra protéger vos semis de châssis, cloches ou tunnel. En ce qui concerne les semis d’été, la germination est difficile au delà de 20° donc n’hésitez pas à les semer dans un endroit un peu plus frais, voire à l’ombre. Dans tous les cas, il conviendra d’éclaircir à 25/30 cm dès l’apparition des premières feuilles. Sachez également que la salade se cultive très bien en pot et que vous pourrez donc en profiter sur votre balcon ou votre terrasse.",
         title02: "Planter la laitue achetée en pot, en godet",
         para02: "Si vous voulez éviter l’étape du semis, il est possible d’acheter directement vos laitues en pot (godet) avec des petites feuilles. Vous les planterez alors en terre, que ce soit au potager ou en bac sur une terrasse ou un balcon. Respectez une distance de 30 cm entre chaque plante et arrosez régulièrement.",
         title03: "Récolte de la laitue, la salade",
         para03: "Lors de la récolte, il est inutile d’arracher la racine car vous l’empêcherez de faire de nouvelles feuilles. Il est préférable d’utiliser un bon couteau et de couper la laitue au niveau du collet. Laissez ainsi la partie blanche et de nouvelles pousses apparaîtront rapidement pour une autre récolte. Arrosez régulièrement afin de maintenir le sol humide. Il faut absolument récolter avant la montée en graine.",
         title04: "Cultiver la laitue en hiver",
         para04: "Il est possible de récolter de la salade toute l’année mais également durant la période hivernale. Pour cela, privilégiez des variétés de laitues pommées d’hiver comme la Merveille d’hiver, la Passion verte d’hiver, la batavia goutte de sang , la Val d’Orge, ou encore la Brune d’hiver. Vous sèmerez d’août à octobre, directement en place. Dès l’arrivée des premiers froids vous allez protéger votre semis et vos cultures avec une petite serre, un tunnel ou tout autre support permettant à vos laitues de pousser malgré le gel et laissant passer un maximum de lumière."
      },
      {
         name: "Maïs",
         img: "assets/plant/mais.png",
         title01: "Cultiver le maïs",
         para01: "Pour pousser correctement, il faut au maïs une exposition ensoleillée, dégagée et assez chaude. Le maïs s’épanouira dans un sol profond, consistant, bien drainé et très fertile. Attention, pyrale, rouille et mouche ne font pas bon ménage avec le maïs doux. En pot, les variétés à tiges courtes se plairont dans des contenants de 25 cm. Étant donné la forme tout en hauteur du maïs dont la tige monte souvent à plus de 2 m, il est intéressant de l'utiliser en bordure de potager. Il délimite ainsi les espaces de culture et suivant son orientation au soleil, peut aussi apporter un peu d'ombre salvatrice à quelques légumes sensibles comme les laitues ou les choux.",
         title02: "",
         para02: "",
         title03: "",
         para03: "",
         title04: "",
         para04: ""
      },
      {
         name: "Radi",
         img: "assets/plant/radi.png",
         title01: "Semis de radis",
         para01: "La période de semis de radis s’étale tout au long de l’année avec une préférence pour la fin de l’hiver, en février, l’été, de juin à septembre. Le semis de radis est l’un des plus faciles à réaliser. Directement en place, il suffit de couvrir d’un peu de terre et/ou de terreau puis d’arroser régulièrement pour récolter rapidement de beaux radis bien frais. Le semis de radis a lieu en place dès le mois de février mais il faut prévoir une protection comme un châssis ou un tunnel jusqu’à la fin des gelées. Le semis a lieu durant tout l’été et les radis peuvent être semés directement en terre, sans abri. Ils se sèment de juin à novembre selon le climat.",
         title02: "Technique de semis de radis",
         para02: "La technique pour semer vos radis est la même qu’elle que soit la période de l’année. Une fois le semis levé, il faut éclaircir. Cette opération consiste à supprimer les plants les plus faibles de manière à ne garder que les plus vigoureux tous les 4/5 cm. Bien tendu, vous pouvez aussi semer vos radis dans des jardinières, avec du terreau et un arrosage régulier.",
         title03: "Culture et entretien des radis",
         para03: "Le radis est très facile de culture et d’entretien. Une fois semé, on peut considérer que seul un arrosage régulier est nécessaire. Maintenir un sol relativement frais par des arrosages fréquents surtout en été. Biner la terre pour permettre à l’eau de bien s’écouler. Retirer les mauvaises herbes au fur et à mesure.",
         title04: "Récolte du radis",
         para04: "La récolte du radis est facile et a lieu en général 4 à 6 semaines après le semis. C’est donc assez rapide mais mieux vaut les récolter au bon moment pour en tirer toute la saveur. Le seul risque avec le radis c’est qu’il devienne creux et devienne donc indigeste à la consommation. Il faut alors les récolter de manière régulière dès que les radis sont formés. Ne laissez pas les radis trop grossir, mieux vaut les récolter trop petits."
      },
      {
         name: "Raisin",
         img: "assets/plant/raisin.png",
         title01: "Plantation de la vigne",
         para01: "Il est recommandé de planter la vigne à l’automne ou au printemps. Mais la meilleure période reste l’automne pour la plantation car elle favorise l’enracinement avant l’hiver et donc la reprise au printemps. En dehors de ces périodes, évitez les gelées ou les fortes chaleurs pour planter. Si vous plantez au printemps ou en été, pensez à arroser régulièrement après la plantation afin de faciliter l’enracinement et la reprise. La vigne a besoin d’une situation ensoleillée car sans ça elle ne produira pas de fruits. La vigne redoute les vents trop forts mais aussi les endroits confinés qui favorisent l’apparition de certains champignons. La vigne aime les sols bien drainés et redoute l’eau stagnante.",
         title02: "Taille, entretien de la vigne",
         para02: "Elle s’effectue de novembre à mi-avril à condition qu’il ne gèle pas. C’est à ce moment qu’elle est en repos végétatif. La taille de la vigne est importante car elle conditionne la qualité de la récolte des raisins, elle permet de maîtriser la pousse vigoureuse des lianes et permet de limiter les maladies.",
         title03: "",
         para03: "",
         title04: "",
         para04: ""
      },
      {
         name: "Tomate",
         img: "assets/plant/tomate.png",
         title01: "Semis et plantation de la tomate",
         para01: "On doit considérer que la tomate ne pourra être plantée en extérieur qu’à mi-mai et qu’il est donc inutile de commencer à semer trop tôt. Le semis de tomate doit commencer à la fin de l’hiver, vers la mi-mars, sous abri, et à température d’au moins 18-20°. Pour de plus belles tomates, apportez un engrais organique spécial tomates 1 à 2 fois par mois. Les tomates aiment : les sols riches en humus, idéalement amendés avant la plantation, une exposition bien ensoleillée, un arrosage régulier sans mouiller le feuillage pour éviter les maladies.",
         title02: "Taille de la tomate, ce qu’il faut faire",
         para02: "Il faut favoriser une bonne exposition des fruits à la lumière pour un bon développement. Supprimez les pousses (on les appelle 'gourmands' ) qui peuvent se développer à la jonction entre une feuille et la tige. Ces « gourmands » puisent beaucoup de sève et, qui plus est, au détriment de la croissance de la plante. Lorsque la plante aura atteint sa hauteur maximale, taillez la tête en laissant environ 4 ou 5 groupes de feuilles.",
         title03: "Récolte de la tomate",
         para03: "La récolte des tomates intervient en général à partir de la mi-août et peut aller jusqu’à la fin de l’automne si le climat le permet. La tomate se cueille lorsqu’elle est bien colorée. En général 4 à 5 mois de culture après le semis. Certains fruits peuvent arriver très tard en maturation. Vous pourrez les cueillir et les faire mûrir dans votre garage ou sur une bordure de fenêtre.",
         title04: "",
         para04: ""
      }
   ];

   //demo profil table
   var profils = [
      {
         name: "Kevin Darelle",
         img: "assets/profil/profil01.png",
         bio: "Jardinier aguerri, je pratique la permaculture",
         publi: "146",
         abonne: "1050",
         abo: "899",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Guillaume Devin",
         img: "assets/profil/profil02.png",
         bio: "",
         publi: "28",
         abonne: "114",
         abo: "299",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Elise Norman",
         img: "assets/profil/profil03.png",
         bio: "Amatrice de la verdure, je pratique depuis 5ans maintenant",
         publi: "79",
         abonne: "301",
         abo: "255",
         ppost01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Christian Williems",
         img: "assets/profil/profil04.png",
         bio: "",
         publi: "47",
         abonne: "162",
         abo: "156",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Denis peeters",
         img: "assets/profil/profil05.png",
         bio: "Vendeur de semis et plantation",
         publi: "122",
         abonne: "421",
         abo: "213",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Eva Janssens",
         img: "assets/profil/profil06.png",
         bio: "",
         publi: "34",
         abonne: "146",
         abo: "234",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Nathan Bourgon",
         img: "assets/profil/profil07.png",
         bio: "Je suis novice je me lance et commence mon propre petit potager",
         publi: "1",
         abonne: "66",
         abo: "75",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      },
      {
         name: "Carla Jacobs",
         img: "assets/profil/profil08.png",
         bio: "Jardinier amateur",
         publi: "1",
         abonne: "83",
         abo: "266",
         post01: "Recrute de petites mains, pour un évènement dans le Bruxelles midi. Sujet du développement des jardins collectifs. Laissez un message pour intéressé.",
         post02: "Je cherche des conseils perso pour faire les semis de mes courges cette été",
         post03: "a ajouté amarante à son potager",
         post04: "Je vend des pousses tomates pour cette été!",
         post05: "Gros stock de plan de courge, radi, tomate, haricot a vendre",
         post06: "a édité sa documentation sur la Courge, viens la découvrir"
      }
   ];

   return {
      getHome: function () {
         return home;
      },
      setHome: function(value) {
         property = value;
      },
      getDocumentation: function () {
         return documentation;
      },
      setDocumentation: function(value) {
         property = value;
      },
      getPotager: function () {
         return potager;
      },
      setPotager: function(value) {
         property = value;
      },
      getProfil: function () {
         return profil;
      },
      setProfil: function(value) {
         property = value;
      },
      getMain: function () {
         return main;
      },
      setMain: function(value) {
         property = value;
      },
      getPlantes: function () {
         return plantes;
      },
      setPlantes: function(value) {
         property = value;
      },
      getProfils: function () {
         return profils;
      },
      setProfils: function (value) {
         property = value;
      },
      getAllSelectBtn: function () {
         return $allSelectBtn;
      },
      setAllSelectBtn: function(value) {
         property = value;
      }
   };

});

//directive
app.directive('onFinishLoad', function($timeout) {

   return {
      restrict: 'A',
      link: function(scope, element, attr) {
         if(scope.$last === true) {
            $timeout(function () {
                  scope.$emit(attr.onFinishLoad);
            });
         }
      }
   }

});

// A new factory with an update method
app.factory('myService', function(){
  return {
      //save the content to plante.php page
      planteContent: {
         name: "Plante",
         img: "",
         title01: "Informations plante",
         para01: "",
         title02: "",
         para02: "",
         title03: "",
         para03: "",
         title04: "",
         para04: "",
         hour: "Heure d'ajout"
      },
      planteContentUpdate: function(name, img, title01, para01, title02, para02, title03, para03, title04, para04) {
         this.planteContent.name = name;
         this.planteContent.img = img;
         this.planteContent.title01 = title01;
         this.planteContent.para01 = para01;
         this.planteContent.title02 = title02;
         this.planteContent.para02 = para02;
         this.planteContent.title03 = title03;
         this.planteContent.para03 = para03;
         this.planteContent.title04 = title04;
         this.planteContent.para04 = para04;
      },
      //save the content to oneprofil.php page
      profilContent: {
         name: "Name profil",
         img: "",
         bio: "",
         publi: "",
         abonne: "",
         abo: "",
         post01: "",
         post02: "",
         post03: "",
         post04: "",
         post05: "",
         post06: "",
         firstPost: "a rejoint la communauté"
      },
      profilContentUpdate: function(name, img, bio, publi, abonne, abo, post01, post02, post03, post04, post05, post06) {
         this.profilContent.name = name;
         this.profilContent.img = img;
         this.profilContent.bio = bio;
         this.profilContent.publi = publi;
         this.profilContent.abonne = abonne;
         this.profilContent.abo = abo;
         this.profilContent.post01 = post01;
         this.profilContent.post02 = post02;
         this.profilContent.post03 = post03;
         this.profilContent.post04 = post04;
         this.profilContent.post05 = post05;
         this.profilContent.post06 = post06;
      }
   };
});

//main controller
app.controller('mainCtrl', ['$rootScope', '$location', function($rootScope, $location, $scope) {

   //connexion
   var connexionB;
   function getConnexion() {
      var connexionB = localStorage.getItem('connexionB');
      if (!connexionB) {
         connexionB = Boolean(false);
      }
      if(connexionB === false) {
         $('#connexion').addClass('up');
      }
   };

   $('#connexion-btn').click(function() {
      var co = Boolean(true);
      localStorage.setItem('connexionB', co);
      $('.connexion-shadow').addClass('co');
      setTimeout(connexion, 592);
   });

   function connexion() {
      $('.connexion-shadow').removeClass('co');
      $('#connexion').removeClass('up');
   };

   getConnexion();


   //history, function back();
   var history = [];

   $rootScope.$on('$locationChangeSuccess', function() {

      if($location.path() === '/home' ||
         $location.path() === '/documentation' ||
         $location.path() === '/mypotager' ||
         $location.path() === '/myprofil') {
            history = [];
      }
      history.push($location.$$path);

   });

   $rootScope.back = function () {

      var historyPrevId = history.length - 2;
      var prevUrl = history[historyPrevId];
      history.splice(history.length - 2, 2);
      $location.path(prevUrl);

   };

}]);

app.controller('documentation', function($scope, $rootScope, $location, sharedProperties, myService) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.home.classList.remove('active');
   $scope.potager.classList.remove('active');
   $scope.profil.classList.remove('active');

   $scope.documentation.classList.add('active');


   //search
   var loop = document.getElementsByClassName('nav__btn--loop')[0];
   var search = document.getElementsByClassName('search')[0];
   var title = document.getElementsByTagName('h1')[0];

   loop.addEventListener("click", getSearch);

   function getSearch() {
      title.classList.toggle('search');
      search.classList.toggle('active');
   };


   //add the plante content to the page plante.php
   $scope.planteContent = myService.planteContent;

   $scope.doc = function () {

      var index = this.$index;
      var name = $scope.plantes[index].name;
      var img = $scope.plantes[index].img;
      var title01 = $scope.plantes[index].title01;
      var para01 = $scope.plantes[index].para01;
      var title02 = $scope.plantes[index].title02;
      var para02 = $scope.plantes[index].para02;
      var title03 = $scope.plantes[index].title03;
      var para03 = $scope.plantes[index].para03;
      var title04 = $scope.plantes[index].title04;
      var para04 = $scope.plantes[index].para04;

      myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
      $location.path('/plante');

   };

   $scope.plantes = sharedProperties.getPlantes();

});

app.controller('homepage', function($scope, sharedProperties, myService, $location) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.documentation.classList.remove('active');
   $scope.potager.classList.remove('active');
   $scope.profil.classList.remove('active');

   $scope.home.classList.add('active');


   //weather
   var weather = document.getElementById('weather');
   var home = document.getElementById('home');
   var headerHome = document.getElementById('header-home');
   var navHome = document.getElementsByClassName('nav-home')[0];
   var navHomeReturn = document.getElementsByClassName('nav-home')[0].childNodes[1];


   weather.addEventListener("click", getAdvice);

   function getAdvice() {
      headerHome.classList.add('advice-actived');
      home.classList.add('advice-actived');
      navHome.classList.add('advice-actived');
   };

   navHomeReturn.addEventListener("click", removeAdvice);

   function removeAdvice() {
      navHome.classList.remove('advice-actived');
      home.classList.remove('advice-actived');
      headerHome.classList.remove('advice-actived');
   };


   //add the profil content to the page oneprofil.php
   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.getProfils();

   $scope.profil = function(index) {

      var value = $($('.actu__el--post')[index]).find('a').html();

      for(var i = 0; i < $scope.profils.length; i++) {
         if(value === $scope.profils[i].name) {
            var name = $scope.profils[i].name;
            var img = $scope.profils[i].img;
            var bio = $scope.profils[i].bio;
            var publi = $scope.profils[i].publi;
            var abonne = $scope.profils[i].abonne;
            var abo = $scope.profils[i].abo;
            var post01 = $scope.profils[i].post01;
            var post02 = $scope.profils[i].post02;
            var post03 = $scope.profils[i].post03;
            var post04 = $scope.profils[i].post04;
            var post05 = $scope.profils[i].post05;
            var post06 = $scope.profils[i].post06;
         }
      }

      myService.profilContentUpdate(name, img, bio, publi, abonne, abo, post01, post02, post03, post04, post05, post06);
      $location.path('/oneprofil');
   };

});

app.controller('mypotager', function($timeout, $scope, $rootScope, $location, sharedProperties, myService) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.home.classList.remove('active');
   $scope.documentation.classList.remove('active');
   $scope.profil.classList.remove('active');

   $scope.potager.classList.add('active');


   var myPlantes = [];

   function myPlante(name, hour, img) {
      this.name = name;
      this.hour = hour;
   }

   //add new myPlante
   function addNewPlante(name, hour, img) {
      var p = new myPlante(name, hour, img);
      myPlantes.push(p);
      savePlantes();
   }

   //remove myPlante
   function removePlanteAtIndex(index) {
      myPlantes.splice(index, 1);
      savePlantes();

   }

   //get myPlantes
   function getPlanteAtIndex(index) {
      return myPlantes[index];
   }

   //get data from localStorage
   function getPlantes() {
      var str = localStorage.getItem('myPlantes');
      myPlantes = JSON.parse(str);
      console.log (myPlantes);
      if (!myPlantes) {
         myPlantes = [
            {
               hour: "1min",
               img: "assets/plant/first.png",
               name: "Ajoute des plantes à ton potager",
            }
         ];
      }
   }

   getPlantes();

   function savePlantes() {
      var str = JSON.stringify(myPlantes);
      localStorage.setItem('myPlantes', str);
   }

   $scope.myPlantes = myPlantes;

   $scope.plantes = sharedProperties.getPlantes();

   //myPlantes table is load finished
   $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

      //variable on page
      var $modifierBtn = $('.nav__link');
      var $addBtn = $('.nav__btn--add');
      var $selector = $('.selector');
      var $potagerEl = $('.potager__el');
      var $potagerPlante = $('.potager__el--plante');
      var $tabModif = $('.tab-modif');
      var $tabEl = $('.tab__el');
      var $allSelectBtn = $('.tab-modif__el--left');
      var $suppressBtn = $('.tab-modif__el--right');
      var $swipe = $('.swipe');

      var modifON = Boolean(false);
      var suppressON = Boolean(false);

      //change navigation on click 'modifier'
      $modifierBtn.click(function() {

         if(modifON === false && suppressON === false) {
            $modifierBtn.html('Annuler');
            $addBtn.addClass('modif');
            $potagerEl.addClass('modif');
            $potagerPlante.addClass('modif');
            $selector.addClass('modif');
            $tabEl.addClass('modif');
            $allSelectBtn.removeClass('null');
            $suppressBtn.removeClass('null');
            $tabModif.addClass('active');

            modifON = Boolean(true);
         } else if(modifON === true && suppressON === false) {
            $modifierBtn.html('Modifier');
            $potagerPlante.removeClass('modif');
            $selector.removeClass('modif').removeClass('checked');
            $allSelectBtn.removeClass('transparent');
            $tabEl.removeClass('modif');
            $addBtn.removeClass('modif');
            $tabModif.removeClass('active');

            modifON = Boolean(false);
         } else if(suppressON === true && modifON === false) {
            $swipe.css("transform", "translate3d(0, 0, 0)");
            $tabModif.removeClass('active');
            $modifierBtn.html('Modifier');

            suppressON = false;
         }

      });

      //verify if potager__el is checked ??
      //change element on click potager__el
      $scope.potagerEl = function() {
         var index = this.$index;

         if(modifON === false && suppressON === false) {

            for(var i = 0; i < $scope.plantes.length; i++) {
               if($scope.myPlantes[index].name === $scope.plantes[i].name) {
                  var name = $scope.plantes[i].name;
                  var img = $scope.plantes[i].img;
                  var title01 = $scope.plantes[i].title01;
                  var para01 = $scope.plantes[i].para01;
                  var title02 = $scope.plantes[i].title02;
                  var para02 = $scope.plantes[i].para02;
                  var title03 = $scope.plantes[i].title03;
                  var para03 = $scope.plantes[i].para03;
                  var title04 = $scope.plantes[i].title04;
                  var para04 = $scope.plantes[i].para04;
               }
            }

            myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
            $location.path('/plante');

         } else if(modifON === true && suppressON === false) {
            $($potagerEl[index]).find($selector).toggleClass('checked');

         } else if(suppressON === true && modifON === false) {
            $swipe.css("transform", "translate3d(0, 0, 0)");
            $tabModif.removeClass('active');
            $tabEl.removeClass('null');
            $allSelectBtn.addClass('null');
            $suppressBtn.addClass('null');
            $modifierBtn.html('Modifier');

            suppressON = false;
         }

      };

      //select all potager__el
      $scope.allSelected = function() {
         if(!$(this.$index).hasClass('transparent')) {
            $selector.addClass('checked');
            $allSelectBtn.addClass('transparent');
         }
      };

      //suppress potager element (potagerEl)
      $scope.delete = function() {
         var i = 0;
         $potagerEl.each( function() {
            if($(this).find('.selector').hasClass('checked')) {

               var index = $(this).index();
               removePlanteAtIndex(index-i);
               i ++;
            }
         });
         $modifierBtn.html('Modifier');
         $potagerPlante.removeClass('modif');
         $selector.removeClass('modif').removeClass('checked');
         $allSelectBtn.removeClass('transparent');
         $tabEl.removeClass('modif');
         $addBtn.removeClass('modif');
         $tabModif.removeClass('active');

         modifON = Boolean(false);
      };
      $scope.suppress = function() {
            var index = this.$index;
            removePlanteAtIndex(index);

            $modifierBtn.html('Modifier');
            $swipe.css("transform", "translate3d(0, 0, 0)");
      };


      //hammer js: swipe
      $potagerEl.hammer()
         .on('pan', function(e) {
            var $swiped = $(this).find($swipe);

            if(e.gesture.direction == '2') {
               if(e.gesture.deltaX < -123) {
                  return false;
               } else {
                  $swiped.css("transform", "translate3d("+e.gesture.deltaX+"px, 0, 0)");
               }
            } else if(e.gesture.direction == '4') {
               if(e.gesture.deltaX > 123) {
                  return false;
               } else {
                  $swiped.css("transform", "translate3d("+(-123 + e.gesture.deltaX)+"px, 0, 0)");
               }
            }

         })
         .on('panend', function(e) {
            var $swiped = $(this).find($swipe);

            if(e.gesture.deltaX < -61.5) {
               $swiped.css("transform", "translate3d(-123px, 0, 0)");
               $tabModif.removeClass('active');
               $allSelectBtn.addClass('null');
               $suppressBtn.addClass('null');
               $modifierBtn.html("Ok");
               suppressON = true;

            } else {
               $swiped.css("transform", "translate3d(0, 0, 0)");
               $tabModif.removeClass('active');
               $modifierBtn.html("Modifier");
               suppressON = false;
            }
         });

      //end 'is load finished: "ngRepeatFinished"'
   });

});

app.controller('mypotageradd', function($scope, $location, sharedProperties, myService) {

   //search
   var loop = document.getElementsByClassName('nav__btn--loop')[0];
   var retour = document.getElementsByClassName('nav__btn--retour')[0];
   var search = document.getElementsByClassName('search')[0];
   var title = document.getElementsByTagName('h1')[0];
   var $docEl = $('.doc__el');

   loop.addEventListener("click", getSearch);

   function getSearch() {
      retour.classList.toggle('search');
      title.classList.toggle('search');
      search.classList.toggle('active');
   };

   //add the plante content to the page plante.php
   $scope.planteContent = myService.planteContent;

   $scope.doc = function () {

      var index = this.$index;
      var name = $scope.plantes[index].name;
      var img = $scope.plantes[index].img;
      var title01 = $scope.plantes[index].title01;
      var para01 = $scope.plantes[index].para01;
      var title02 = $scope.plantes[index].title02;
      var para02 = $scope.plantes[index].para02;
      var title03 = $scope.plantes[index].title03;
      var para03 = $scope.plantes[index].para03;
      var title04 = $scope.plantes[index].title04;
      var para04 = $scope.plantes[index].para04;

      myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
      $location.path('/plante');

   };

   $scope.plantes = sharedProperties.getPlantes();

});

app.controller('myprofil', function($scope, sharedProperties) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.home.classList.remove('active');
   $scope.documentation.classList.remove('active');
   $scope.potager.classList.remove('active');

   $scope.profil.classList.add('active');

   //auto scroll to publication
   $('.profil__publi > a').click(function(){

      $('.bg-wrapper').animate({
         scrollTop:(($('#myprofilpubli').offset().top) - 98)
      }, 'slow');
      return false;
   });
   
});

app.controller('oneabo', function($scope, $location, sharedProperties, myService) {

   $scope.follow = function(index) {

      var $thisIt = $('.follow:eq('+index+')');
      $thisIt.toggleClass('active');

      if($thisIt.hasClass('active')) {
         $thisIt.html('Abonné(e)s');
      } else {
         $thisIt.html('Suivre');
      }
   };

   //add the profil content to the page oneprofil.php
   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.getProfils();

   $scope.getProfil = function(index) {
      var $thisIt = $('.personnes__el--info:eq('+index+')');
      var value = $thisIt.find('p').html();

      for(var i = 0; i < $scope.profils.length; i++) {
         if(value === $scope.profils[i].name) {
            var name = $scope.profils[i].name;
            var img = $scope.profils[i].img;
            var bio = $scope.profils[i].bio;
            var publi = $scope.profils[i].publi;
            var abonne = $scope.profils[i].abonne;
            var abo = $scope.profils[i].abo;
            var post01 = $scope.profils[i].post01;
            var post02 = $scope.profils[i].post02;
            var post03 = $scope.profils[i].post03;
            var post04 = $scope.profils[i].post04;
            var post05 = $scope.profils[i].post05;
            var post06 = $scope.profils[i].post06;
         }
      }

      myService.profilContentUpdate(name, img, bio, publi, abonne, abo, post01, post02, post03, post04, post05, post06);
      $location.path('/oneprofil');
   };

});

app.controller('oneabonne', function($scope, $location, sharedProperties, myService) {

   $scope.follow = function(index) {

      var $thisIt = $('.follow:eq('+index+')');

      $thisIt.toggleClass('active');

      if($thisIt.hasClass('active')) {
         $thisIt.html('Abonné(e)s');
      } else {
         $thisIt.html('Suivre');
      }
   };


   //add the profil content to the page oneprofil.php
   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.getProfils();

   $scope.getProfil = function(index) {
      var $thisIt = $('.personnes__el--info:eq('+index+')');
      var value = $thisIt.find('p').html();

      for(var i = 0; i < $scope.profils.length; i++) {
         if(value === $scope.profils[i].name) {
            var name = $scope.profils[i].name;
            var img = $scope.profils[i].img;
            var bio = $scope.profils[i].bio;
            var publi = $scope.profils[i].publi;
            var abonne = $scope.profils[i].abonne;
            var abo = $scope.profils[i].abo;
            var post01 = $scope.profils[i].post01;
            var post02 = $scope.profils[i].post02;
            var post03 = $scope.profils[i].post03;
            var post04 = $scope.profils[i].post04;
            var post05 = $scope.profils[i].post05;
            var post06 = $scope.profils[i].post06;
         }
      }

      myService.profilContentUpdate(name, img, bio, publi, abonne, abo, post01, post02, post03, post04, post05, post06);
      $location.path('/oneprofil');
   };

});

app.controller('onepotager', function($scope, $rootScope, $location, sharedProperties, myService) {

   var $potagerElPlante = $('.potager__el--plante');
   $scope.plantes = sharedProperties.getPlantes();

   $rootScope.plante = function(index) {

      $scope.index = index;
      var value = $($potagerElPlante[index]).find('a').html();

      for(var i = 0; i < $scope.plantes.length; i++) {
         if(value === $scope.plantes[i].name) {
            var name = $scope.plantes[i].name;
            var img = $scope.plantes[i].img;
            var title01 = $scope.plantes[i].title01;
            var para01 = $scope.plantes[i].para01;
            var title02 = $scope.plantes[i].title02;
            var para02 = $scope.plantes[i].para02;
            var title03 = $scope.plantes[i].title03;
            var para03 = $scope.plantes[i].para03;
            var title04 = $scope.plantes[i].title04;
            var para04 = $scope.plantes[i].para04;
         }
      }

      myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
      $location.path('/plante');

   };

});

app.controller('oneprofil', function($scope, sharedProperties, myService) {

   $scope.main = sharedProperties.getMain();

   var hammertime = new Hammer($scope.main);
      hammertime.on('pan', function(e) {
         if(e.direction == '4') {
            $scope.main.style.transform = "translate3d("+ e.deltaX +"px, 0, 0)";
         }
   });

   //auto scroll to publication
   $('.profil__publi > a').click(function(){

      $('.bg-wrapper').animate({
         scrollTop:(($('#oneprofilpubli').offset().top) - 98)
      }, 'slow');
      return false;

   });

   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.profils;


   //follow btn
   $('.followone').click(function() {
      $(this).toggleClass('active');

      if($(this).hasClass('active')) {
         $(this).html('Abonné(e)s');
      } else {
         $(this).html('Suivre');
      }
   });

});

app.controller('plante', function($scope, sharedProperties, myService) {

   $scope.documentation = sharedProperties.getDocumentation();
   var $btnAdd = $('.nav__btn--add');

   var $modale = $('.modale');
   var $modaleWrapper = $('.modale-wrapper');
   var $modaleAdd = $('.modale-btn__add');
   var $modaleAnnule = $('.modale-btn__annule');

   //set content of plante
   $scope.planteContent = myService.planteContent;

   //add btn show modale window
   $btnAdd.click(function() {

      $modale.addClass('up');
      $modaleWrapper.addClass('up');

   });

   //remove modale
   $modale.click(function() {

      $modale.removeClass('up');
      $modaleWrapper.removeClass('up');

   });

   //annule modale
   $modaleAnnule.click(function() {

      $modale.removeClass('up');
      $modaleWrapper.removeClass('up');

   });

   //add plante with modale
   $modaleAdd.click(function() {

      var myPlantes = [];

      function myPlante(name, img, hour) {
         this.name = name;
         this.img = img;
         this.hour = hour;
      }

      //add new myPlante
      function addNewPlante(name, img, hour) {
         var p = new myPlante(name, img, hour);
         myPlantes.push(p);
         savePlantes();
      }

      //get data from localStorage
      function getPlantes() {
         var str = localStorage.getItem('myPlantes');
         myPlantes = JSON.parse(str);
         if (!myPlantes) {
            myPlantes = [];
         }
      }

      getPlantes();

      //ajout de la plante
      addNewPlante($scope.planteContent.name, $scope.planteContent.img, $scope.planteContent.hour);

      function savePlantes() {
         var str = JSON.stringify(myPlantes);
         localStorage.setItem('myPlantes', str);
      }

      $scope.myPlantes = myPlantes;

   });

});

app.config(['$stateProvider', function($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'pages/views/home.php',
         controller: 'homepage'
      })
      .state('documentation', {
         url: '/documentation',
         templateUrl: 'pages/views/documentation.php',
         controller: 'documentation'
      })
      .state('mypotager', {
         url: '/mypotager',
         templateUrl: 'pages/views/mypotager.php',
         controller: 'mypotager'
      })
      .state('myprofil', {
         url: '/myprofil',
         templateUrl: 'pages/views/myprofil.php',
         controller: 'myprofil'
      })
      .state('mypotageradd', {
         url: '/mypotageradd',
         templateUrl: 'pages/views/mypotageradd.php',
         controller: 'mypotageradd'
      })
      .state('oneprofil', {
         url: '/oneprofil',
         templateUrl: 'pages/views/oneprofil.php',
         controller: 'oneprofil'
      })
      .state('oneabonne', {
         url: '/oneabonne',
         templateUrl: 'pages/views/oneabonne.php',
         controller: 'oneabonne'
      })
      .state('oneabo', {
         url: '/oneabo',
         templateUrl: 'pages/views/oneabo.php',
         controller: 'oneabo'
      })
      .state('plante', {
         url: '/plante',
         templateUrl: 'pages/views/plante.php',
         controller: 'plante'
      })
      .state('onepotager', {
         url: '/onepotager',
         templateUrl: 'pages/views/onepotager.php',
         controller: 'onepotager'
      })
      .state('otherwise', {
         url: '*path',
         templateUrl: 'pages/views/home.php',
         controller: 'homepage'
      });

}]);
