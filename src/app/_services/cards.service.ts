import { ListaCardsAcanosMaiores } from './cards.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cartaDia: ListaCardsAcanosMaiores;

  getCards(): Observable<Array<ListaCardsAcanosMaiores>> {
    return new Observable(observer => {
      observer.next([
        {
          arcanoMaior: 'O Louco',
          descricao: 'O Louco simboliza novos começos, novas experiências, simboliza o início da jornada. Quando aparece em uma consulta, geralmente indica que está na hora de deixar para trás tudo que empata nossos objetivos, como medos, dúvidas e preocupações, para trilhar novos rumos. A carta sugere que esse novo começo seja empreendido de braços abertos e com alegria.',
          positivo: 'Viagem, liberdade, inocencia',
          negativo: 'imaturidade, mentiroso, sem rumo',
        }, {
          arcanoMaior: 'O Mago',
          descricao: 'A carta O Mago traz a mensagem de que seus talentos e seus próprios dons são as chaves para o seu sucesso em qualquer situação questionada. É como se você tivesse todas as ferramentas que precisa bem na sua frente para garantir que o sucesso potencial se manifeste.',
          positivo: 'Ação, Novidades, poder',
          negativo: 'manipulador, trapaceiro, mau planejamento',
        }, {
          arcanoMaior: 'A Sacerdotisa',
          descricao: 'A Sacerdotisa é um lembrete de que não temos como saber de tudo acerca de uma situação. Indica que ou não recebemos todos os fatos, ou não enxergamos todos os fatos ou outras pessoas podem estar retendo informações importantes. Quando esta carta aparece, indica segredos e que é melhor procurar pelas respostas.',
          positivo: 'Sabedoria, misterio, oculto',
          negativo: 'falsidade, segredos, amantes',
        }, {
          arcanoMaior: 'A Imperatriz',
          descricao: 'Quando a Imperatriz aparece em uma consulta, geralmente indica que as coisas vão bem na situação questionada, como se cada coisa estivesse em seu devido lugar, exatamente como desejado. Também pode trazer informações sobre o tema Mãe, seja sobre você no papel de mãe, sobre uma figura materna em sua vida ou na situação em questão. A Imperatriz é uma figura poderosa e muito segura de si. Sugere proteção e não questiona as decisões. Com a certeza de uma mãe cria bem seus filhos, ela não sugere dúvidas. Esta carta geralmente indica um bom presságio, assim como realização e sucesso.',
          positivo: 'Comunicação, fertilidade, realizações',
          negativo: 'excesso de vaidade, controladora',
        }, {
          arcanoMaior: 'O Imperador',
          descricao: 'Quando o imperador aparece em uma consulta, sugere que você está prestes a alcançar seus objetivos ou está no caminho certo. A conexão com Áries também tem a ver com liderança, controle e realização, ou seja, às vezes sugere que você assumirá um papel de líder ou controlará um problema.',
          positivo: 'Proteção, segurança, estabilidade',
          negativo: 'centralizador, inflexível, teimoso',
        }, {
          arcanoMaior: 'O Hierofante',
          descricao: 'Quando o Papa aparece em uma consulta, as respostas remetem à busca de conselhos sábios. Esta carta também pode representar uma pessoa do signo de Touro relacionada à questão, em sua vida ou que está prestes a aparecer para interagir.',
          positivo: 'Aconselhamento, estudos, tradição',
          negativo: 'preconceitos, tabus, rigidez',
        }, {
          arcanoMaior: 'Os Amantes',
          descricao: 'Muitas vezes, a carta Os Enamorados tem a ver com uma importante decisão que deve ser tomada. Quando a situação envolve trabalho ou amor, ela sugere que você siga sua intuição. Se o seu coração está mandando você seguir um caminho, confie em seus instintos. Só não faça as coisas pensando somente em você, pois o tiro pode sair pela culatra. Pense sempre em quem está envolvido, tente fazer o melhor para todos.',
          positivo: 'Escolhas, relacionamentos, amor',
          negativo: 'duvidas, decisões, dualidade',
        }, {
          arcanoMaior: 'O Carro',
          descricao: 'Esta carta tende a anunciar vitórias e sucessos. Porém, diz que nada vem de bandeja. Mesmo com o sucesso batendo à porta, você deve batalhar por ele. Pode significar uma vitória, mas que deve ser merecida. Simboliza o trabalho duro e a dedicação a longo prazo, indicando que o sucesso não vem fácil, ele deve ser conquistado.',
          positivo: 'Controle, rumo, oportunidades',
          negativo: 'mudanças rápidas, falta de controle, oposição',
        }, {
          arcanoMaior: 'A Força',
          descricao: 'A Força representa as melhores características do signo de Leão, como coragem, determinação, resiliência e força, boas chaves para o sucesso. Porém, indica que para realizar seus objetivos, você também precisará de autocontrole para domar seus próprios leões interiores, que podem representar tanto seus conflitos internos quanto os obstáculos que a vida nos impõe.',
          positivo: 'Sensualidade, coragem, autocontrole',
          negativo: 'recuar, falta de autocontrole, emoção bruta',
        }, {
          arcanoMaior: 'O Eremita',
          descricao: 'Quando a carta do Eremita aparece em uma consulta, pode significar que precisamos refletir em relação à situação. Às vezes é preciso dar um tempo e se isolar para ponderar e analisar melhor uma questão. Esta pode ser a mensagem que O Eremita traz: a necessidade de dar uma pausa e refletir. Anuncia que pode ser a hora de se afastar e analisar, mergulhar no seu interior em busca das respostas que você precisa no momento.',
          positivo: 'Reclusão, paciência, estudos',
          negativo: 'solidão, avareza, isolamento',
        }, {
          arcanoMaior: 'A Roda da Fortuna',
          descricao: 'A Roda da Fortuna representa basicamente a colheita daquilo que plantamos. Apesar do seu significado otimista, não sugere prosperidade, sorte e fortuna do nada. Tudo isso está relacionado às ações que você tomou até o momento. Se você preparou o terreno fazendo escolhas sensatas e tocando seus projetos com afinco, seus objetivos serão realizados. Você semeou e regou sua plantação, agora é hora de colher bons frutos.',
          positivo: 'Viagem, mudança inesperada, destino',
          negativo: 'instabilidade, perder controle, azar',
        }, {
          arcanoMaior: 'A Justiça',
          descricao: 'Quando a carta da Justiça aparece em uma consulta, ela traz a mensagem de que a situação em questão tende a se resolver a seu favor, ou, pelo menos, da forma mais justa possível. Pode ser um assunto da lei, o resultado final de uma situação específica, questões de relacionamento ou outras situações. O significado básico da carta muitas vezes fala sobre decisões equilibradas e justas.',
          positivo: 'Negociações legais, reconciliação, ser justo',
          negativo: 'frieza, ser injusto, desonestidade',
        }, {
          arcanoMaior: 'O Enforcado',
          descricao: 'Quando o Enforcado aparece em uma consulta, quer dizer que você precisa se desapegar de algo e seguir em frente. Você pode estar se agarrando a algo que não traz satisfação na questão atual, como um amor não correspondido ou nocivo, um emprego que não te levará a lugar algum, uma promoção que não sai, etc.',
          positivo: 'Estagnação, sacrifício, deixar ir',
          negativo: 'jogos, estagnação, indecisão',
        }, {
          arcanoMaior: 'A Morte',
          descricao: 'A carta A Morte pode incutir medo ou receio nos que ainda não compreendem seu significado. De fato, quando pensamos no tema morte, nada de bom vem à mente, porém, o significado desta carta vai muito além do fim derradeiro. Tem a ver com términos, mas também traz consigo a possibilidade de novos começos, mudanças e transformações. A carta deve ser encarada como um símbolo de transição.',
          positivo: 'Transformação, mudança, fim de ciclo',
          negativo: 'perdas, destruição, resistência à mudança',
        }, {
          arcanoMaior: 'A Temperança',
          descricao: 'Temperança é a característica da pessoa que consegue equilibrar suas próprias vontades. Quando a carta aparece em uma consulta, significa basicamente equilíbrio e sugere harmonia para a situação em questão',
          positivo: 'Equilibrio, harmonia, moderação',
          negativo: 'lentidão, paciência, desequilibrio',
        }, {
          arcanoMaior: 'O Diabo',
          descricao: 'A carta O Diabo é um Arcano Maior que nunca é visto com bons olhos. Mas, assim como A Morte, não é uma carta negativa. Apenas indica que existem lições que você tem que aprender e isso nem sempre é ruim. Sua associação com Capricórnio sugere que você deve tomar o controle da situação em questão, lidando com as coisas de maneira bem pragmática.',
          positivo: 'Tentação, material, sexualidade',
          negativo: 'vícios, obsessões, falta de controle',
        }, {
          arcanoMaior: 'A Torre',
          descricao: 'O significado da carta A Torre tem a ver com mudanças abruptas. Algo pode mudar em relação à situação questionada. Pense em uma estrutura ou fundação que entra em colapso. Um relacionamento, um emprego, uma amizade e em alguns casos, até mesmo estruturas físicas.',
          positivo: 'Ruptura, perda, destruição',
          negativo: 'reconstrução, adiar o inevitável, trauma',
        }, {
          arcanoMaior: 'A Estrela',
          descricao: 'A Estrela tem um significado extremamente positivo em uma consulta. Quando aparece, indica um momento em que as coisas começam a dar certo. Sugere que conflitos podem ser apaziguados, problemas de saúde curados, dívidas quitadas, separações que viram reuniões, situações que se tornam positivas, enfim, indica paz, prosperidade e harmonia em sua resposta. Às vezes também aponta a ajuda de alguém que agirá como seu protetor.',
          positivo: 'Esperança, inspiração, espiritualidade',
          negativo: 'ingenuidade, má fé, desanimo',
        }, {
          arcanoMaior: 'A Lua',
          descricao: 'A Lua em uma consulta significa que está na hora de você seguir a sua intuição. Indica segredos, mistérios e ilusões. Se você tem que tomar uma decisão e não tem certeza sobre que caminho tomar, escute seu coração.',
          positivo: 'Ilusão, duvidas, fertilidade',
          negativo: 'traição, decepção, medos',
        }, {
          arcanoMaior: 'O Sol',
          descricao: 'O Sol significa que boas energias estão em jogo. Quando esse Arcano Maior aparece na leitura, traz todo seu brilho para o momento. A carta sugere otimismo e abundância, indicando que o sucesso parece ser inevitável. O Sol traz energia para realizar, nos enche de confiança e ilumina nosso caminho',
          positivo: 'Alegria, realizações, gravidez',
          negativo: 'tristeza, insatisfação, desmotivar',
        }, {
          arcanoMaior: 'O Julgamento',
          descricao: 'Quando a carta O Julgamento aparece em uma leitura, significa que um novo ciclo se inicia. Todo o seu desempenho ou os pormenores da questão serão avaliados e recompensas surgirão. Este Arcano Maior indica que está na hora de você refletir sobre a situação ou sua vida no momento a fim de obter mais consciência e elevação.',
          positivo: 'Renovação, Renascimento, resgate',
          negativo: 'ciclo vicioso, esperar por ajuda divina',
        }, {
          arcanoMaior: 'O Mundo',
          descricao: 'A carta O Mundo significa que a situação em questão terá um desfecho. Esse Arcano Maior anuncia um novo começo e indica que a mudança é inevitável. As mudanças que ocorrem ou ocorrerão tendem a ser positivas, sugerindo resposta positiva. Simboliza que algo em sua vida ou relacionado à questão perguntada chegará a uma conclusão.',
          positivo: 'Viagem, sucesso, conclusão',
          negativo: 'estagnação, planos fracassados, fim de ciclo'
        }
      ])
    });
  }
  getCartaDia() {
    return this.cartaDia;
  }
  setCartaDia(value: ListaCardsAcanosMaiores) {
    this.cartaDia = value;
  }
}
