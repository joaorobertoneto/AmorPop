var texIntro = ['É noite, você chega cansado de seu trabalho.<br>A casa está vazia, não há sinais de vida...<br>"Um pouco de companhia faria bem..." Você pensa consigo mesmo.<br>Está ficando tarde, talvez esteja na hora de ir para cama.', 'Ao deitar nela, você sente todo o cansaço e estresse do seu dia te alcançar.<br>Você está exausto, e com a cabeça deitada no travesseiro macio, lamenta mais uma vez: "Por que noites assim são tão solitárias?"', "Você fecha seus olhos e sente um doce sonho começando a se formar.", "..", "...", "....", "Você acorda em uma cama desconhecida.", "Andando pela casa estranha, você encontra um celular numa mesa vazia<br>Você o pega e imediatamente encontra alguns contatos", "Dentre eles, alguns nomes soam familiares:<br>Mikaella, Ana Clara e Linda.<br>Você as conhece de algum lugar?", "Curioso, você decide visitar uma das garotas.<br>Em busca de uma amizade, ou até mesmo algo a mais, você sai pela porta com o celular no bolso.", "De repente, você sente como se algo disesse exatamente onde essas garotas estão<br>Confiando em seus instintos, você decide se encontrar com uma delas."]
var mikaEndText=['<p>"Ei... Desculpa aparecer do nada, eu realmente precisava tirar isso do peito."</p><p>"Andei pensando sobre nós... Você é um cara bem legal, sabia?"</p><input type="button" value="Continuar" onclick="mikaEnd(1)">', '<p>"Talvez esteja na hora de tentar algo diferente, não acha?"</p><p>É melhor a gente conversar sobre isso em outro lugar. Eu moro perto daqui, quer vir comigo?"</p><input type="button" value="Ir com Mikaela" onclick="end('+"'Mikaella'"+')">']
var anaEndText=['<p>"Sonhador! Posso falar com você?"</p><p>"Isso pode parecer um pouco repentino, mas eu realmente gosto de você."<input type="button" value="Continuar" onclick="anaEnd(1)">', '<p>"É divertido ter você por perto, eu nunca me senti tão feliz assim antes."</p><p>"Por que não entramos na sua casa para conversar sobre isso? Estou ficando com um pouco de frio."</p><input type="button" value="Ir com Ana Clara" onclick="end('+"'Ana Clara'"+')">']
var linEndText=['<p>"Ah, você tá aqui! Ainda bem que cheguei a tempo."</p><p>"Desculpa chegar em você assim, do nada..."</p></p><input type="button" value="Continuar" onclick="linEnd(1)">', '<p>Eu acho que gosto de você, de verdade, acho que gosto mesmo."</p><p>"Se você não estiver ocupado, por que não damos uma volta no parque? Tenho muitas coisas que preciso te falar..."</p><input type="button" value="Ir com Linda" onclick="end('+"'Linda'"+')">']
var mikaPA = 0
var linPA = 0
var anaPA = 0
var dias = 1
var periodo = 1



function gameOver() {
    document.getElementById("encontros").innerHTML = '<p>O fim da sua semana nesse sonho chega ao fim, e você mais uma vez acorda em sua cama solitária...</p><p>Você deseja voltar a dormir?</p><input type="button" value="Voltar a dormir" onclick="seteDias(1,1), anaPA=0, mikaPA=0, linPA=0">'
    document.getElementById("tempo").innerHTML = ""
    document.getElementById("dia").innerHTML = "Sua cama"
}

function mikaEnd(texto) {
    document.getElementById("paquera").innerHTML = "Mikaella"
    document.getElementById("encontros").innerHTML = mikaEndText[texto]
}

function anaEnd(texto) {
    document.getElementById("paquera").innerHTML = "Ana Clara"
    document.getElementById("encontros").innerHTML = anaEndText[texto]
}

function linEnd(texto) {
    document.getElementById("paquera").innerHTML = "Linda"
    document.getElementById("encontros").innerHTML = linEndText[texto]
}

function end(paquera){
    document.getElementById("encontros").innerHTML = '<p>Parabéns! Você conseguiu conquistar a '+paquera+'!</p><p>Mesmo que você acorde em breve, você ainda se sente satisfeito com sua conquista.</p><br><p>Deseja jogar novamente?</p><input type="button" value="Sim" onclick=" mikaPA=0, anaPA=0, linPA=0, seteDias(1,1)"><input type="button" value="Não" onclick="document.getElementById('+"'encontros'"+').innerHTML = '+"'<p>Obrigado por jogar!</p>'"+'">'
    document.getElementById("paquera").innerHTML = ""
    document.getElementById("dia").innerHTML = ""
}

function Intro(click) {
    document.getElementById("intro").innerHTML = '<p>' + texIntro[click] + "</p><input type='button' value='Continuar' onclick='Intro(" + (click + 1) + ")'>"
    if (click == 6)
    document.getElementById("dia").innerHTML = "Sua casa?"
    if (click == 11)
    seteDias(1, 1)
}

function seteDias(dia, tempo) {
    document.getElementById("intro").innerHTML = ""
    document.getElementById("paquera").innerHTML = ""
    if (tempo == 1)
        document.getElementById("tempo").innerHTML = "Manhã"+"<img class='tempoimg' src='imagemtempo.png'>"
    if (tempo == 2)
        document.getElementById("tempo").innerHTML = "Meio-dia"+"<img class='tempoimg' src='imagemtempo.png'>"
    if (tempo == 3)
        document.getElementById("tempo").innerHTML = "Tarde"+"<img class='tempoimg' src='imagemtempo.png'>"
    document.getElementById("dia").innerHTML = "Dia " + dia
    document.getElementById("encontros").innerHTML = "<p>Com quem você gostaria de se encontrar hoje, Sonhador?</p><input type='button' value='Mikaella' onclick='mikaGreet(mikaPA)'><input type='button' value='Ana Clara' onclick='anaGreet(anaPA)'><input type='button' value='Linda' onclick='linGreet(linPA)'>";
    if (dia == 8 && periodo==1)
        gameOver()
    if (mikaPA >= 10){
        document.getElementById("encontros").innerHTML = "<p>Ao caminhar de volta para sua casa, você percebe alguém caminhando em sua direção...</p><p>Após se aproximar mais, você reconhece Mikaella vindo até você.</p><input type='button' value='Aceitar a confissão de Mikaella' onclick='mikaEnd(0)'>"
        document.getElementById("dia").innerHTML = "A caminho de casa"
        document.getElementById("tempo").innerHTML = ""
    }

    if (anaPA >= 10){
        document.getElementById("encontros").innerHTML = "<p>Ao caminhar de volta para sua casa, você percebe alguém caminhando em sua direção...</p><p>Após se aproximar mais, você reconhece Ana Clara vindo até você.</p><input type='button' value='Aceitar a confissão de Ana Clara' onclick='anaEnd(0)'>"
        document.getElementById("dia").innerHTML = "A caminho de casa"
        t.getElementById("tempo").innerHTML = ""
    }
    if (linPA >= 10){
        document.getElementById("encontros").innerHTML = "<p>Ao caminhar de volta para sua casa, você percebe alguém caminhando em sua direção...</p><p>Após se aproximar mais, você reconhece Linda procurando você.</p><input type='button' value='Aceitar a confissão de Linda' onclick='linEnd(0)'>"
        document.getElementById("dia").innerHTML = "A caminho de casa"
        document.getElementById("tempo").innerHTML = ""
    }
    if (tempo == 4) {
        document.getElementById("tempo").innerHTML = "Noite"+"<img class='tempoimg' src='imagemtempo.png'>"
        return periodo = 0, dias += 1
    }
}

function mikaGreet(pa) {
    if (pa==-999)
    return seteDias(dias, periodo)
    if (pa < 0 )
        document.getElementById("encontros").innerHTML = '<p>"... Que foi? Não tem outra pessoa pra incomodar?"</p>'
    if (pa >= 0 && pa <= 3)
        document.getElementById("encontros").innerHTML = '<p>"Oi."</p>'
    if (pa > 3 && pa <= 6)
        document.getElementById("encontros").innerHTML = '<p>"Ei, como vai? Veio encher meu saco de novo?"</p>'
    if (pa > 6 && pa <= 9)
        document.getElementById("encontros").innerHTML = '<p>"... Tá com tempo livre? Se tiver..."</p>'
    document.getElementById("encontros").innerHTML += '<input type="button" value="Ouvir o que ela tem a dizer" onclick="mikaDialog()">'
}

function mikaDialog() {
    switch (Math.ceil(Math.random() * 10)) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p> "Aqui, uma pergunta pra você. Acha que a situação financeira de alguém faz diferença num relacionamento?"</p><input type="button" value="Sim, eu não namoraria alguém que tivesse uma situação financeira diferente da minha." onclick="mikaAns(1)"><br><input type="button" value="Não, isso não muda em nada em um relacionamento." onclick="mikaAns(2)">'
            return periodo += 1
        case 2:
            document.getElementById("encontros").innerHTML = '<p> "Ei, você acredita no sobrenatural?"</p> <input type="button" value="É claro que sim, já tive minhas próprias experiências com o sobrenatural" onclick="mikaAns(4)"> <br> <input type="button" value="Esse tipo de coisa só existe em filmes de terror" onclick="mikaAns(5)"> <br> <input type="button" value="Não temos como saber, tudo é possível." onclick="mikaAns(6)">'
            return periodo += 1
        case 3:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, responde rápido. Que tipo de pessoa você se dá bem?" </p> <input type="button" value ="Pessoas que me fazem rir, são as melhores de ter por perto." onclick="mikaAns(7)"> <br> <input type="button" value="Pessoas que se interessam e cuidam de mim, gosto de me sentir cuidado por alguém" onclick="mikaAns(8)" ><br> <input type="button" value="Pessoas inteligentes, é bom manter um cérebro no grupo" onclick="mikaAns(9)" >'
            return periodo += 1
        case 4:
            document.getElementById("encontros").innerHTML = '<p>"Estive pensando em algo, Sonhador. Você contaria uma mentira para não machucar alguém?</p><input type="button" value="Se a verdade machucasse a pessoa, então sim." onclick="mikaAns(10)"><input type="button" value="Não, uma mentira é uma mentira." onclick="mikaAns(11)">'
            return periodo += 1
        case 5:
            document.getElementById("encontros").innerHTML = '<p>"O que importa mais pra você, aparência ou personalidade?"</p><input type="button" value="Aparência, é claro. Eu preciso me sentir atraído pela minha namorada." onclick="mikaAns(12)"><input type="button" value="Personalidade, a aparência não importa muito se você for babaca." onclick="mikaAns(13)">'
            return periodo += 1
        case 6:
            document.getElementById("encontros").innerHTML = '<p>"Acha que existe vida após a morte, Sonhador?"</p><input type="button" value="Sim, acredito em reeincarnações." onclick="mikaAns(14)"><input type="button" value="Não, nós apenas morremos." onclick="mikaAns(15)"><input type="button" value="Nunca parei para pensar nisso." onclick="mikaAns(16)">'
            return periodo += 1
        case 7:
            document.getElementById("encontros").innerHTML = '<p> "Ei, cara, andei pensando... existe algo no seu passsado que você receia contar a alguém?" </p> <input type="button" value="Todos temos algo a esconder, não é?" onclick="mikaAns(17)"><br> <input type="button" value ="Não, nadinha. Não me envergonho do meu passado." onclick="mikaAns(18)"> <br> <input type="button" value = "Sim, algo muito grande que não posso contar a ninguém." onclick="mikaAns(19)">'
            return periodo += 1
        case 8:
            document.getElementById("encontros").innerHTML = '<p> "Afinal, o que você acha da escola? Ou faculdade, tanto faz." </p> <input type="button" value = "É uma perda de tempo, nunca terminei meus estudos." onclick="mikaAns(20)"> <br> <input type="button" value="Eu amo tudo sobre o ambiente acadêmico! Queria passar o resto da minha vida estudando e aprendendo" onclick="mikaAns(21)"><br> <input type="button" value="É necessário pra um futuro, nada mais." onclick="mikaAns(22)">'
            return periodo += 1
        case 9:
            document.getElementById("encontros").innerHTML = '<p> "Hm... Sonhador, apenas por curiosidade. O que vocẽ faz quando não tem nada pra fazer?" </p> <input type="button" value ="Começo a investir nos meus hobbies." onclick="mikaAns(23)"><br> <input type="button" value = "Vou dormir, preciso carregar minhas energias." onclick="mikaAns(24)"><br> <input type="button" value = "Jogo alguma coisa pra passar o tempo." onclick="mikaAns(25)">'
            return periodo += 1
        case 10:
            document.getElementById("encontros").innerHTML = '<p> "Quero te perguntar algo sério, você já roubou alguma coisa?" </p> <input type="button" value ="Não, nunca." onclick="mikaAns(26)" > <br> <input type ="button" value ="Roubei por necessidade uma vez." onclick="mikaAns(27)"><br> <input type="button" value ="O tempo todo, roubar coisas é fácil." onclick="mikaAns(28)">'
            return periodo += 1
    }

}

function mikaAns(resposta) {
    switch (resposta) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p>"Como eu imaginei."</p><br><p>Ela pareceu não gostar da sua resposta... Você perdeu 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 2:
            document.getElementById("encontros").innerHTML = '<p>"Sério? Você acha?"</p><br><p>Ela pareceu surpresa com sua resposta! Você ganhou 2 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 2
        case 3:
            document.getElementById("encontros").innerHTML = '<p> "Não depende, não. Esquece isso," </p> <br> <p> Mikaella mudou de assunto...  </p>'
            break;
        case 4:
            document.getElementById("encontros").innerHTML = '<p>"... Ok, esquisito."</p><br><p>Ela pareceu não gostar da sua resposta... Você perdeu 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 5:
            document.getElementById("encontros").innerHTML = '<p>"Cara, você me irrita."</p><br><p>Ela parece ter ficado brava... Você perdeu 2 pontos de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 2
        case 6:
            document.getElementById("encontros").innerHTML = '<p>"Também acho, eu vivia escutando histórias estranhas quando era pequena."</p><br><p>Ela parece concordar com você! Você ganhou 1 ponto de afeição com Mikaella</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 7:
            document.getElementById("encontros").innerHTML = '<p>"É mesmo? Acho que concordo com você."</p><br><p>Ela parece feliz com sua escolha! Você ganhou 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 8:
            document.getElementById("encontros").innerHTML = '<p>"Cuidado? Você é o quê? Um bebê?"</p><br><p>Ela pareceu não gostar da sua preferência... Você perdeu 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 9:
            document.getElementById("encontros").innerHTML = '<p>"Hm.. Talvez você tenha razão."</p><br><p>Ela pareceu neutra sobre sua preferência.</p>'
            break;
        case 10:
            document.getElementById("encontros").innerHTML = '<p>"É ótimo saber que não posso confiar em você. Por que não aproveita e acha outra coisa pra fazer?"</p><br><p>Ela ficou brava com sua resposta... Você perdeu 2 pontos de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 2
        case 11:
            document.getElementById("encontros").innerHTML = '<p>"Sim, é como você disse. Prefiro que sejam diretos comigo, não suporto mentiras."</p><br><p>Ela está sorrindo, parece que gostou de sua resposta! Você ganhou 2 pontos de afeição com Mikaella!.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 2
        case 12:
            document.getElementById("encontros").innerHTML = '<p>"Por que eu esperava algo diferente de você?"</p><br><p>Ela ficou irritada ao ouvir isso... Você perdeu 2 pontos de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 2
        case 13:
            document.getElementById("encontros").innerHTML = '<p>"Sim! Tenho amigas que são lindas, mas vazias em questão de personalidade."</p><br><p>Ela ficou feliz com sua resposta! Você ganhou 2 pontos de afeição com Mikaella..</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 2
        case 14:
            document.getElementById("encontros").innerHTML = '<p>"Também acredito nisso, vidas passadas me intrigam bastante."</p><br><p>Ela pareceu interessada na sua resposta! Você ganhou 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 15:
            document.getElementById("encontros").innerHTML = '<p>"Hm, então é isso que você acha."</p><br><p>Ela pareceu não gostar da sua resposta... Você perdeu 1 ponto de afeição com Mikaella.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 16:
            document.getElementById("encontros").innerHTML = '<p>"Talvez você devesse pensar mais, não acha?"</p><br><p>Ela fez uma cara feia pra você.</p>'
            break;
        case 17:
            document.getElementById("encontros").innerHTML = '<p> "Não acho que alguém deveria esconder algo sobre o seu passado." </p> <br> <p> Ela ficou decepcionada com sua resposta! Você perdeu 1 ponto de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 18:
            document.getElementById("encontros").innerHTML = '<p> "Nem eu, não há motivos para esconder algo." </p> <br> <p> Ela parece satisfeita com sua resposta! Você ganhou 1 ponto de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 19:
            document.getElementById("encontros").innerHTML = '<p> "O quê? Qual o seu problema?" </p> <br> <p> Ela parece espantada por sua resposta... Você perdeu 1 ponto de afeição com Mikaella </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 20:
            document.getElementById("encontros").innerHTML = '<p> "Espero que goste de ser desempregado." </p> <br> <p> Ela te olha com desdém... Você perdeu 1 ponto de afeição com Mikaella </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 1
        case 21:
            document.getElementById("encontros").innerHTML = '<p> "Ah, você é assim, então." </p> <br> <p> Ela parece levemente decepcionada, mas muda de assunto. </p>'
            break;
        case 22:
            document.getElementById("encontros").innerHTML = '<p> "É, eu faço o suficiente pra sair de lá, nada mais que isso." </p> <br> <p> Ela concorda com você! Você ganhou 1 ponto de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 23:
            document.getElementById("encontros").innerHTML = '<p> "Ah, sério? Legal, legal." </p> <br> <p> Ela não parece muito interessada. </p>'
            break;
        case 24:
            document.getElementById("encontros").innerHTML = '<p> "Engraçado, você me lembra alguém." </p> <br> <p> Ela riu um pouco, parece que gostou de sua resposta! Você ganhou 1 ponto de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 25:
            document.getElementById("encontros").innerHTML = '<p> "Sério? Por que não me disse isso antes?" </p> <br> <p> Ela ficou super feliz com sua resposta! Você ganhou 2 pontos de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 2
        case 26:
            document.getElementById("encontros").innerHTML = '<p> "Ótimo, acho bom."</p> <br> <p> Ela parece gostar disso! Você ganhou 1 ponto de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA += 1
        case 27:
            document.getElementById("encontros").innerHTML = '<p> "Sério?" </p> <br> <p> Ela te olha com pena, talvez seja melhor trocar de assunto. </p>'
            break;
        case 28:
            document.getElementById("encontros").innerHTML = '<p> "Qual seu problema? Esquece isso." </p> <br> <p> Ela parece irritada com a sua resposta... Você perdeu 2 pontos de afeição com Mikaella. </p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return mikaPA -= 2
    }
    document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
}

function anaGreet(pa) {
    document.getElementById("paquera").innerHTML = "Ana Clara"
    if (pa < 0)
        document.getElementById("encontros").innerHTML = '<p>"...Por que veio aqui? Não deixei claro que não quero ver você na minha frente?"</p>'
    if (pa >= 0 && pa <= 3)
        document.getElementById("encontros").innerHTML = '<p>"Oi! Tudo bem?"</p>'
    if (pa > 3 && pa <= 6)
        document.getElementById("encontros").innerHTML = '<p>"Sonhador! Te procurei por toda parte! Que tal passar um tempo comigo?"</p>'
    if (pa > 6 && pa <= 9)
        document.getElementById("encontros").innerHTML = '<p>"Sentiu minha falta, Sonhador? Eu senti a sua.".</p>'
    document.getElementById("encontros").innerHTML += '<input type="button" value="Ouvir o que ela tem a dizer" onclick="anaDialog()">'
}

function anaDialog() {
    switch (Math.ceil(Math.random() * 10)) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, o que você acha sobre a dança? Gosta de dançar?"</p><input type="button" value="Sim, eu amo! Sou um ótimo dançarino, na verdade." onclick="anaAns(1)"><br><input type="button" value="Eu gosto de assistir, mas sou péssimo dançando." onclick="anaAns(2)"><br><input type="button" value="Acho sem graça, não vejo nada de especial." onclick="anaAns(3)">'
            return periodo += 1
        case 2:
            document.getElementById("encontros").innerHTML = '<p> "No momento, você se considera feliz com sua vida?"</p><input type="button" value="Sim, as coisas vão indo muito bem." onclick="anaAns(4)"><br><input type="button" value="Não muito, mas com você nela, com certeza isso mudaria." onclick="anaAns(5)"><br><input type="button" value="Não, às vezes sinto como se muitas coisas estivessem contra mim." onclick="anaAns(6)">'
            return periodo += 1
        case 3:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, pensei em algo interessante! Se você tivesse milhões de reais na sua conta do dia pra noite, como gastaria o dinheiro?"</p><input type="button" value="Bom, provavelmente investiria a maioria." onclick="anaAns(7)"><br><input type="button" value="Gastaria pra me divertir, chamaria alguns amigos e usaria o dinheiro da melhor forma." onclick="anaAns(8)"><br><input type="button" value="Compraria uma casa para conseguir criar uma vida estável para minha família" onclick="anaAns(9)">'
            return periodo += 1
        case 4:
            document.getElementById("encontros").innerHTML = '<p> "Parando pra pensar, todos nós temos gostos e desgostos sobre certas personalidades, não é? Você também tem um tipo de pessoa que não suporta?"</p><input type="button" value="Não consigo me dar bem com pessoas que sempre estão cabisbaixas, não consigo entender o lado delas." onclick="anaAns(10)"><br><input type="button" value="Não suporto pessoas agitadas, é como se elas nunca parassem quietas." onclick="anaAns(11)"><br><input type="button" value="Acho que consigo me dar bem com todo mundo, não tenho uma preferência marcante." onclick="anaAns(12)">'
            return periodo += 1
        case 5:
            document.getElementById("encontros").innerHTML = '<p> "Você costuma acordar de manhã? Ou prefere ficar acordado durante a madrugada?"</p><input type="button" value="Sempre acordo cedo, saber que tenho o dia todo pela frente me dá toda a energia que preciso." onclick="anaAns(13)"><br><input type="button" value="Durmo tarde e aproveito a noite, é calma e tranquila, durante essa período sinto que sou mais produtivo." onclick="anaAns(14)">'
            return periodo += 1
        case 6:
            document.getElementById("encontros").innerHTML = '<p> "Essa é uma pergunta importante pra mim, então... Digamos que você estaja caminhano em uma estrada de terra, e então se depara com uma pedra no seu caminho. Você passaria por cima da pedra, a contornaria ou pegaria outro caminho?"</p><input type="button" value="Passaria por cima da pedra" onclick="anaAns(15)"><br><input type="button" value="Contornaria a pedra." onclick="anaAns(16)"><br><input type="button" value="Pegara=ia outro caminho." onclick="anaAns(17)">'
            return periodo += 1
        case 7:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, estive pensando em visitar o cinema ultimamente. Apenas por curiosidade, que tipo de filme você mais gosta de assistir?"</p><input type="button" value="Os mais românticos e clichês que estiverem no cartaz." onclick="anaAns(18)"><br><input type="button" value="Filmes de terror, com certeza. Amo sentir a adrenalina do medo, mesmo estando seguro." onclick="anaAns(19)"><br><input type="button" value="Qualquer um que me leve em uma aventura, não vivo sem filmes cheios de ação." onclick="anaAns(20)">'
            return periodo += 1
        case 8:
            document.getElementById("encontros").innerHTML = '<p> "Pra você, o que define felicidade? Andei pesquisando sobre o tópico e achei respostas interessantes, queria entender o que se passa pela sua cabeça."</p><input type="button" value="Viver a vida do jeito que eu quiser, sem nada para me prender." onclick="anaAns(21)"><br><input type="button" value="Ter a pessoa que mais amo ao meu lado, isso é mais do que suficiente." onclick="anaAns(22)"><br><input type="button" value="Conseguir ter uma vida estável e com todos os bens que desejar." onclick="anaAns(23)">'
            return periodo += 1
        case 9:
            document.getElementById("encontros").innerHTML = '<p> "Acho que nunca perguntei isso antes, mas o quão próximo você é com a sua família, Sonhador?"</p><input type="button" value="Muito próximo, não consigo imaginar minha vida sem eles." onclick="anaAns(24)"><br><input type="button" value="De vez em quando faço uma visita ou duas, tenho mminha própria vida para seguir." onclick="anaAns(25)"><br><input type="button" value="Não falo mais com minha família porque tivemos desentendimentos no passado, mas não sinto falta deles." onclick="anaAns(26)">'
            return periodo += 1
        case 10:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, você gosta de crianças? Ah, espera, pensei em algo melhor! Planeja ter filhos no futuro?"</p><input type="button" value="Sim, sempre amei crianças, ter filhos é uma das minhas maiores vontades." onclick="anaAns(27)"><br><input type="button" value="Gosto de crianças, mas acho que não criaria uma." onclick="anaAns(28)"><br><input type="button" value="Não, não consigo suportar crianças, muito menos ter um filho para cuidar." onclick="anaAns(29)">'
            return periodo += 1
    }
}

function anaAns(resposta) {
    switch (resposta) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p>"Ah, é sério mesmo? Caramba, a gente precisa testar suas habilidades um dia!"</p><br><p>Ela pareceu ficar animada com sua resposta! Você ganhou 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 2
        case 2:
            document.getElementById("encontros").innerHTML = '<p>"É ótimo ouvir isso! Não se preocupa, eu posso te ensinar se quiser."</p><br><p>Ela parece aliviada com sua resposta! Você ganhou 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 3:
            document.getElementById("encontros").innerHTML = '<p>"Então você é assim... Talvez o sem-graça seja você, já parou para pensar?."</p><br><p>Ela pareceu ficar irritada com sua resposta... Você perdeu 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2
        case 4:
            document.getElementById("encontros").innerHTML = '<p>"Que bom ouvir isso! Temos que viver a vida ao máximo, não é?."</p><br><p>Ela pareceu contente em ouvir sua resposta! Você ganhou 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 5:
            document.getElementById("encontros").innerHTML = '<p>"Eu não vou trazer nenhuma felicidade pra você, viu? Procure ela sozinho."</p><br><p>Ela parece não gostar muito, mas decide ignorar.</p>'
            break;
        case 6:
            document.getElementById("encontros").innerHTML = '<p>"Que complicado... Sinto muito."</p><br><p>Ela não parece brava com você, mas decepcionada. Você perdeu 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 1
        case 7:
            document.getElementById("encontros").innerHTML = '<p>"Hm.. Sim, acho que isso faria sentido."</p><br><p>Ela pareceu neutra sobre sua escolha.</p>'
            break;
        case 8:
            document.getElementById("encontros").innerHTML = '<p>"Ah, você é divertido! Posso ser incluída na diversão? Só não acabe gastando tudo de uma vez!"</p><br><p>Ela pareceu animada com sua resposta! Você ganhou 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 9:
            document.getElementById("encontros").innerHTML = '<p>"Acho que todos temos prioridades diferentes, não é?."</p><br><p>Ela parece decepcionada com seu modo de pensar... Você perdeu 1 ponto de de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 1
        case 10:
            document.getElementById("encontros").innerHTML = '<p>"Meu deus, pensei que fosse só eu! Esse tipo de gente me estressa."</p><br><p>Ela pareceu aliviada com sua resposta! Você ganhou 2 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 2
        case 11:
            document.getElementById("encontros").innerHTML = '<p>"Entendo... Por que não procura outra garota, então?."</p><br><p>Ela saiu irritada... Você perdeu 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2
        case 12:
            document.getElementById("encontros").innerHTML = '<p>"É difícil encontrar pessoas assim."</p><br><p>Ela pareceu não ligar muito.</p>'
            break;
        case 13:
            document.getElementById("encontros").innerHTML = '<p>"Nós temos rotinas parecidas, então!."</p><br><p>Ela parece contente com sua resposta! Você ganhou 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 14:
            document.getElementById("encontros").innerHTML = '<p>"É uma pena, não somos compatíveis nesse quesito."</p><br><p>Ela não parece satisfeita com sua resposta... Você perdeu 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 1
        case 15:
            document.getElementById("encontros").innerHTML = '<p>"Eu também! É meu primeiro instinto."</p><br><p>Ela parece concordar com você! Você ganhou 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 2
        case 16:
            document.getElementById("encontros").innerHTML = '<p>"Então você faz isso..."</p><br><p>Ela parece pensativa.</p>'
            break;
        case 17:
            document.getElementById("encontros").innerHTML = '<p>"Não brinca... Nossa."</p><br><p>Ela ri discretamente de você... Você perdeu 2 pontos de afeição com Ana Clara</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2
        case 18:
            document.getElementById("encontros").innerHTML = '<p>"Sério? Meio inesperado, eu diria."</p><br><p>Ela parece surpresa.</p>'
            break;
        case 19:
            document.getElementById("encontros").innerHTML = '<p>"Terror... Acho melhor procurar outra pessoa pra ir com você, então."</p><br><p>Ela parece não gostar da sua preferência... Você perdeu 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 1
        case 20:
            document.getElementById("encontros").innerHTML = '<p>"Eu também! Por que a gente não compra uns ingressos?."</p><br><p>Ela parece contente! Talvez vocês visitem o cinema mais tarde. Você ganhou 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 21:
            document.getElementById("encontros").innerHTML = '<p>"É ótimo saber que pensamos parecido!"</p><br><p>Ela pareceu feliz com sua resposta! Você ganhou 1 ponto de afeição com Ana Clara</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 1
        case 22:
            document.getElementById("encontros").innerHTML = '<p>"Então você é do tipo romântico!."</p><br><p>Ela parece levemente surpresa.</p>'
            break;
        case 23:
            document.getElementById("encontros").innerHTML = '<p>"Bens materiais, você diz? Hm..."</p><br><p>Ela parece decepcionada com sua resposta... Você perdeu 1 ponto de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 1
        case 24:
            document.getElementById("encontros").innerHTML = '<p>"Então você é bem próximo deles... Entendo."</p><br><p>Ela parece chateada com sua resposta... Você perdeu 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2
        case 25:
            document.getElementById("encontros").innerHTML = '<p>"Acho que entendo, às vezes também penso assim."</p><br><p>Ela parece compreender sua situação.</p>'
            break;
        case 26:
            document.getElementById("encontros").innerHTML = '<p>"Algumas vezes essa é a melhor alternativa, eu te entendo."</p><br><p>Ela demonstra bastante empatia! Você ganhou 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 2
        case 27:
            document.getElementById("encontros").innerHTML = '<p>"Então você tem planos..."</p><br><p>Ela parece desgostar da sua escolha... Você perdeu 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2
        case 28:
            document.getElementById("encontros").innerHTML = '<p>"Sim, eu sei! Adoro crianças, mas não quero ter filhos no futuro."</p><br><p>Ela parece contente com sua resposta! Você ganhou 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA += 2
        case 29:
            document.getElementById("encontros").innerHTML = '<p>"São só crianças, você realmente odeia elas?"</p><br><p>Ela parece decepcionada com sua resposta. Você perdeu 2 pontos de afeição com Ana Clara.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return anaPA -= 2

    }
    document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
}
function linGreet(pa) {
    document.getElementById("paquera").innerHTML = "Linda"
    if (pa < 0)
        document.getElementById("encontros").innerHTML = '<p>"Ah... é você."</p>'
    if (pa >= 0 && pa <= 3)
        document.getElementById("encontros").innerHTML = '<p>"Olá, precisa de algo?"</p>'
    if (pa > 3 && pa <= 6)
        document.getElementById("encontros").innerHTML = '<p>"Sonhador, tenho tantas coisas pra te contar!""</p>'
    if (pa > 6 && pa <= 9)
        document.getElementById("encontros").innerHTML = '<p>"Andei pensando em você, por que não aproveitamos um passeio pelo parque?".</p>'
    document.getElementById("encontros").innerHTML += '<input type="button" value="Ouvir o que ela tem a dizer" onclick="linDialog()">'
}

function linDialog() {
    switch (Math.ceil(Math.random() * 10)) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p> "Bom... Se tivesse que escolher entre uma pessoa otimista e uma pessoa pessimista, qual das duas você se encaixaria melhor?"</p><input type="button" value="Uma pessoa pessimista. Às vezes isso me salva de decepções, é meu jeito natural de pensar." onclick="linAns(1)"><br><input type="button" value="Uma pessoa otimista. Não importa a situação, temos sempre que pensar no lado bom do que está acontecendo." onclick="linAns(2)">'
            return periodo += 1
        case 2:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, como você descreveria um encontro perfeito? Não estou com nada em mente, por favor não pense muito nisso..."</p><input type="button" value="Um piquenique ao ar livre, de preferência em um campo vasto e florido." onclick="linAns(3)"><br><input type="button" value="Um restaurante chique, com tudo em seu perfeito estado." onclick="linAns(4)"><br><input type="button" value="Todo e qualquer encontro é perfeito quando estamos com a pessoa que gostamos." onclick="linAns(5)">'
            return periodo += 1
        case 3:
            document.getElementById("encontros").innerHTML = '<p> "Seja honesto, por favor... Você ainda fala com suas ex namoradas?"</p><input type="button" value="Não, tudo entre nós acabou, não gosto de ter contato com nenhuma ex namorada." onclick="linAns(6)"><br><input type="button" value="Sim, terminamos em bons termos e decidimos manter a amizade." onclick="linAns(7)">'
            return periodo += 1
        case 4:
            document.getElementById("encontros").innerHTML = '<p> "Ei, você está feliz com seu corpo? Não quero ofender, só gostaria de ouvir seus pensamentos."</p><input type="button" value="Não há nada para me sentir infeliz sobre meu corpo." onclick="linAns(8)"><br><input type="button" value="Tenho coisas aqui e ali que mudaria se conseguisse, mas estou satisfeito com ele." onclick="linAns(9)"><br><input type="button" value="É uma das minhas maiores inseguranças, mudaria tudo se pudesse." onclick="linAns(10)">'
            return periodo += 1
        case 5:
            document.getElementById("encontros").innerHTML = '<p> "Sonhador, algumas vezes você se sente culpado por coisas que fez no seu passado?"</p><input type="button" value="Sim, me arrependo de muitas coisas que fiz, mas estou tentando mudar isso." onclick="linAns(11)"><br><input type="button" value="Não, acho que sempre agi da melhor forma, tanto pra mim como pelos outros." onclick="linAns(12)">'
            return periodo += 1
        case 6:
            document.getElementById("encontros").innerHTML = '<p> "Bem, espero que você não ache isso estranho. Acha que o destino pode unir duas pessoas?"</p><input type="button" value="Não, temos autonomia sobre nossas vidas, nada é destinado a acontecer." onclick="linAns(13)"><br><input type="button" value="Sim, acho que todos somos ligados de alguma forma, conexões assim realmente parecem existir." onclick="linAns(14)">'
            return periodo += 1
        case 7:
            document.getElementById("encontros").innerHTML = '<p> "Para você, qual é o sinal mais notável de que um relacionamento está fadado a dar errado?."</p><input type="button" value="Falta de confiança entre nós, você precisa se sentir seguro com seu parceiro." onclick="linAns(15)"><br><input type="button" value="Falta de maturidade de alguma parte, você acaba carregando todas as responsabilidades do relacionamento sozinho." onclick="linAns(16)"><br><input type="button" value="Não há nada que não possa ser resolvido em um relacionamento com o esforço necessário." onclick="linAns(17)">'
            return periodo += 1
        case 8:
            document.getElementById("encontros").innerHTML = '<p> "É uma pergunta meio boba, mas você se considera uma pessoa que gosta de ficar ao ar livre frequentemente?"</p><input type="button" value="Odeio, prefiro muito mais ficar no conforto da minha casa." onclick="linAns(18)"><input type="button" value="Amo! a natureza e o ar livre fazem eu me sentir vivo." onclick="linAns(19)">'
            return periodo += 1
        case 9:
            document.getElementById("encontros").innerHTML = '<p> "Não vou ficar brava se você errar, só quero ver se você consegue acertar minha flor favorita..."</p><input type="button" value="Crisântemo." onclick="linAns(20)"><br><input type="button" value="Orquídea." onclick="linAns(21)"><br><input type="button" value="Tulipa." onclick="linAns(22)">'
            return periodo += 1
        case 10:
            document.getElementById("encontros").innerHTML = '<p> "Que tipo de livros você mais gosta de ler? Estava pensando em passar numa livraria mais tarde."</p><input type="button" value="Livros de terror! Amo livros que conseguem mexer com a nossa cabeça." onclick="linAns(23)"><br><input type="button" value="Ficção científica, adoro ler histórias assim." onclick="linAns(24)"><br><input type="button" value="Romances, com certeza." onclick="linAns(25)">'
            return periodo += 1
    }
}

function linAns(resposta) {
    switch (resposta) {
        case 1:
            document.getElementById("encontros").innerHTML = '<p>"Eu penso da mesma forma..."</p><br><p>Ela parece concordar com você! Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1
        case 2:
            document.getElementById("encontros").innerHTML = '<p>"Ah... Acho que não consigo pensar da mesma forma."</p><br><p>Ela parece ter ficado chateada com sua resposta... Você perdeu 1 ponto de afeição com Linda</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 1

        case 3:
            document.getElementById("encontros").innerHTML = '<p>"Eu concordo totalmente com você! Adoro ficar perto da natureza, piqueniques são perfeitos para mim."</p><br><p>Ela pareceu amar sua escolha! Você ganhou 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 2

        case 4:
            document.getElementById("encontros").innerHTML = '<p>"Você gosta de coisas mais planejadas e chiques.. tudo bem, eu entendo."</p><br><p>Ela parece decepcionada com sua escolha... Você perdeu 2 pontos de afeição com Linda</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 2

        case 5:
            document.getElementById("encontros").innerHTML = '<p>"Acho que você tem razão, mas exixtem alternativas mais românticas, eu acho."</p><br><p>Ela ri calmamente.</p>'
            break;
        case 6:
            document.getElementById("encontros").innerHTML = '<p>"Que alívio... Por um momento achei que você fosse falar outra coisa."</p><br><p>Ela realmenta parece ter ficado muito aliviada! Você ganhou 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 2

        case 7:
            document.getElementById("encontros").innerHTML = '<p>"Acho que às vezes não é uma coisa ruim..."</p><br><p>Ela parece incerta sobre algo, mas sorri pra você. Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1

        case 8:
            document.getElementById("encontros").innerHTML = '<p>"É uma ótima maneira de pensar, fico feliz."</p><br><p>Ela sorri para vocẽ!</p>'
            break;

        case 9:
            document.getElementById("encontros").innerHTML = '<p>"Eu entendo você, também me sinto assim... Obrigada por ser honesto comigo."</p><br><p>Ela parece feliz com sua honestidade! Você ganhou 1 de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1

        case 10:
            document.getElementById("encontros").innerHTML = '<p>"Ah.. Nossa, sinto muito."</p><br><p>Ela parece ter ficado sem graça... Você perdeu 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 1

        case 11:
            document.getElementById("encontros").innerHTML = '<p>"Eu penso o mesmo... É ótimo saber que temos experiências parecidas."</p><br><p>Ela parece gostar da sua honestidade! Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1

        case 12:
            document.getElementById("encontros").innerHTML = '<p>"Bom pra você, eu acho."</p><br><p>Ela parece chateada com sua resposta! Você perdeu 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 1

        case 13:
            document.getElementById("encontros").innerHTML = '<p>"Nada que eu possa fazerpara mudar sua opinião, acredito..."</p><br><p>Ela parece ter ficado magoada com sua resposta... Você perdeu 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 2

        case 14:
            document.getElementById("encontros").innerHTML = '<p>"Então você concorda... Já conheceu alguém que tivesse uma conexão forte com você? Acho que eu já.."</p><br><p>Ela parece pensativa depois de sua resposta! Você ganhou 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 2

        case 15:
            document.getElementById("encontros").innerHTML = '<p>"Suponho que você tenha razão..."</p><br><p>Ela muda de assunto.</p>'
            break;

        case 16:
            document.getElementById("encontros").innerHTML = '<p>"Suponho que você tenha razão..."</p><br><p>Ela muda de assunto.</p>'
            break;

        case 17:
            document.getElementById("encontros").innerHTML = '<p>"Eu também acredito nisso! Parece que temos a mesma ideia sobre relacionamentos."</p><br><p>Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1
        case 18:
            document.getElementById("encontros").innerHTML = '<p>"Acho que discordamos sobre isso... É uma pena."</p><br><p> Ela parece chateada com sua opinião... Você perdeu 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 2

        case 19:
            document.getElementById("encontros").innerHTML = '<p>"Eu também! Não consigo viver sem o ar fresco. Fico feliz de ouvir isso..."</p><br><p>Ela parece muito contente com sua resposta! Você ganhou 2 pontos de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 2

        case 20:
            document.getElementById("encontros").innerHTML = '<p>"Não, negativo, errado. Não tem problema, sério."</p><br><p>Você errou, que pena</p>'
            break;

        case 21:
            document.getElementById("encontros").innerHTML = '<p>"Não, negativo, errado. Não tem problema, sério.."</p><br><p>Você errou. que pena.</p>'
            break;
        case 22:
            document.getElementById("encontros").innerHTML = '<p>"Nossa, você acertou! Como descobriu?."</p><br><p>Ela parece impressionada! Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1

        case 23:
            document.getElementById("encontros").innerHTML = '<p>"Hmm... Acho que não me dou bem com esse tipo de livro, mas talvez eu dê uma chance."</p><br><p>Ela parece pensar sobre sua escolha...</p>'
            break;

        case 24:
            document.getElementById("encontros").innerHTML = '<p>"Ah... Entendo."</p><br><p>Ela parecia esperar outra resposta... Você perdeu 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA -= 1
        case 25:
            document.getElementById("encontros").innerHTML = '<p>"Você também? Eu poderia passar horas lendo livros de românce! Por que não passamos na livraria para olhar alguns?."</p><br><p>Ela parece animada! Você ganhou 1 ponto de afeição com Linda.</p>'
            document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
            return linPA += 1
    }
    document.getElementById("encontros").innerHTML += '<br><input type="button" value="Continuar" onclick="seteDias(' + dias + ',' + periodo + ')">'
}
