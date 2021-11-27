var itens = [
  {
    id: 0,
    nome: 'CAMISETA MESCLA',
    img: 'img/img_1.png',
    quantidade: 0,
    cor: 'cinza',
    tamanho: 'P',
    preco: 28
  },

  {
    id: 1,
    nome: 'POCHETE CLUTCH',
    img: 'img/img_2.png',
    quantidade: 0,
    cor: 'preto',
    tamanho: 'M',
    preco: 99.00
  },

  {
    id: 2,
    nome: 'SAIA EM COURO',
    img: 'img/img_3.png',
    quantidade: 0,
    cor: 'preto',
    tamanho: 'G',
    preco: 398.00
  },

  {
    id: 3,
    nome: 'CARDIGAN TIGRE',
    img: 'img/img_4.png',
    quantidade: 0,
    cor: 'laranja',
    tamanho: 'P',
    preco: 250.90
  },

  {
    id: 4,
    nome: 'CARDIGAN OFF WHITE',
    img: 'img/img_5.png',
    quantidade: 0,
    cor: 'branco',
    tamanho: 'M',
    preco: 99.00
  },

  {
    id: 5,
    nome: 'BODY LEOPARDO',
    img: 'img/img_6.png',
    quantidade: 0,
    cor: 'marrom',
    tamanho: 'G',
    preco: 129.30
  }
]

var itens2 = [
  {
    id: 0,
    nome: 'CAMISETA MESCLA',
    img: 'img/img_1.png',
    quantidade: 0,
    cor: 'cinza',
    tamanho: 'P',
    preco: 28.00
  },

  {
    id: 1,
    nome: 'POCHETE CLUTCH',
    img: 'img/img_2.png',
    quantidade: 0,
    cor: 'preto',
    tamanho: 'M',
    preco: 99.00
  },

  {
    id: 2,
    nome: 'SAIA EM COURO',
    img: 'img/img_3.png',
    quantidade: 0,
    cor: 'preto',
    tamanho: 'G',
    preco: 398.00
  },

  {
    id: 3,
    nome: 'CARDIGAN TIGRE',
    img: 'img/img_4.png',
    quantidade: 0,
    cor: 'laranja',
    tamanho: 'P',
    preco: 250.90
  },

  {
    id: 4,
    nome: 'CARDIGAN OFF WHITE',
    img: 'img/img_5.png',
    quantidade: 0,
    cor: 'branco',
    tamanho: 'M',
    preco: 99.00
  },

  {
    id: 5,
    nome: 'BODY LEOPARDO',
    img: 'img/img_6.png',
    quantidade: 0,
    cor: 'marrom',
    tamanho: 'G',
    preco: 129.30
  }
]



/*crianção de itens dinâmicamente*/
inicializarLoja = () => {

  var containerProdutos = document.getElementById('produtos')
  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `

  })
}

inicializarLoja()


/*criando carrinho de compras*/
atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('itensSalvos')
  containerCarrinho.innerHTML = ""
  itens.map(val => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
      <div class="cesta">
        <div>
          <img class="imgCesta" src="` +
        val.img +
        `"/>
        </div>

        <div>
          <div>
            <span>produto: ` +
        val.nome +
        `</span>
          </div>

          <div>
            <span>qtd: ` +
        val.quantidade +
        ` </span>
          </div>

          <div>
            <span>preço: ` +
        val.preco +
        `</span>
          </div>
        </div>
      </div>

      `
    }
  })
  alert('Item adicionado ao carrinho')
}

/*criando o evento do botão comprar*/
var links = document.getElementsByTagName('button')

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    itens[key].quantidade++
    atualizarCarrinho()
    return false
  })
}

/*filtrando por tamanho*/

testeTamanhoM = () => {
  itens = itens2
  const filtroTamanhoM = itens.filter(valorAtual => {
    return valorAtual.tamanho == 'M'
  })

  itens = filtroTamanhoM

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" >COMPRAR </button>
        </div>

      `
  })
}

testeTamanhoP = () => {
  itens = itens2
  const filtroTamanhoP = itens.filter(valorAtual => {
    return valorAtual.tamanho == 'P'
  })

  itens = filtroTamanhoP

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

testeTamanhoG = () => {
  itens = itens2
  const filtroTamanhoG = itens.filter(valorAtual => {
    return valorAtual.tamanho == 'G'
  })

  itens = filtroTamanhoG

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

/*filtrando por cor*/
preto = () => {
  itens = itens2
  const filtroCor = itens.filter(valorAtual => {
    return valorAtual.cor == 'preto'
  })

  itens = filtroCor

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

marrom = () => {
  itens = itens2
  const filtroCor = itens.filter(valorAtual => {
    return valorAtual.cor == 'marrom'
  })

  itens = filtroCor

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

branco = () => {
  itens = itens2
  const filtroCor = itens.filter(valorAtual => {
    return valorAtual.cor == 'branco'
  })

  itens = filtroCor

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

cinza = () => {
  itens = itens2
  const filtroCor = itens.filter(valorAtual => {
    return valorAtual.cor == 'cinza'
  })

  itens = filtroCor

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

laranja = () => {
  itens = itens2
  const filtroCor = itens.filter(valorAtual => {
    return valorAtual.cor == 'laranja'
  })

  itens = filtroCor

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

/*filtragem por preço*/
menoresQue50 = () => {
  itens = itens2
  const filtroPreco = itens.filter(valorAtual => {
    return valorAtual.preco < 50
  })
  itens = filtroPreco

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}


menoresQue150 = () => {
  itens = itens2
  const filtroPreco = itens.filter(valorAtual => {
    return valorAtual.preco > 50 && valorAtual.preco <= 150
  })
  itens = filtroPreco

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}

menoresQue200 = () => {
  itens = itens2
  const filtroPreco = itens.filter(valorAtual => {
    return valorAtual.preco > 150 && valorAtual.preco >=200
  })
  itens = filtroPreco

  var containerProdutos = document.getElementById('produtos')
  containerProdutos.innerHTML = ""

  itens.map(val => {
    containerProdutos.innerHTML +=
      `

        <div class="roupas">
          <img src="` +
      val.img +
      `"/>
          <p>` +
      val.nome +
      `</p>
          <p>R$ ` +
      val.preco +
      `</p>
          <button key="` +
      val.id +
      `" href="#">COMPRAR </button>
        </div>

      `
  })
}


acao = () => {
  let modal = document.querySelector(".modal")

  modal.style.display = "block"
}

fechar = () => {
  let modal = document.querySelector(".modal")

  modal.style.display = "none"
}