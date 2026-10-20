---
title: My thoughts about REA
description: Is All Software Now Open Source?
slug: my_thoughts_about_rea
date: Oct 20, 2026
---

![rea_img](https://github.com/franksodre/The-Blog/blob/master/app/asset_tmp/rea_img.png?raw=true)

## SOBRE O REA

O [REA (Reverse Engineer Anything)](https://github.com/morluto/rea), criado em
14 de abril de 2026, é uma ferramenta CLI e um servidor
[MCP](https://modelcontextprotocol.io/) que permite às pessoas fazer engenharia
reversa de basicamente **qualquer coisa**, usando programas especializados em
engenharia reversa, como [Hopper](https://www.hopperapp.com/),
[Ghidra](https://ghidra-sre.org/) ou [IDA](https://hex-rays.com/ida-pro),
juntamente com AI. Neste artigo, vou falar sobre o que realmente é o REA, como
funciona, onde pode ser aplicado e muito mais.

## O que é o REA e como funciona?

O REA é uma ferramenta que faz proveito de outras ferramentas de engenharia reversa já
consolidadas, como o IDA, e usa AI para analisar o binário de uma aplicação e
descompilá-lo (entre outros processos) para pseudocódigo. Este processo de descompilação
não recupera o código-fonte original exato. Quando crias um binário, muita
informação sobre o código-fonte original são descartadas, como os nomes das
variáveis, os nomes das funções em C, etc. Algumas informações podem ser
removidas quando o binário é *stripped* para reduzir o seu tamanho. O que estas
ferramentas fazem é inferir uma possível versão do código-fonte, resultando
numa representação a partir da qual é mais fácil extrair informações úteis.
Tudo isso é baseado nas instruções em assembly fornecidas pelo disassembler,
depois o teu agente pode interpretar esse pseudocódigo e gerar código válido.

A principal utilidade disto é conseguir obter informações válidas e mais
precisas sobre como uma determinada aplicação faz alguma coisa. Imagina que
tens uma aplicação _closed source_ que faz pesquisas muito rapidamente e queres
saber como funciona, agora, uma opção muito viável seria usar o REA, pois podes
simplesmente investigar isso. Um disclaimer importante é que podes fazer o mesmo
sem o REA, mas, a menos que exista uma fonte válida sobre a aplicação,
vais encontrar informações um tanto genéricas (algo que pode parecer verdade,
mas não se tem a certeza) ou até informações erradas. Além disso, isso não
funciona tão bem com aplicações pouco populares, praticamente desconhecidas,
porquê há pouca informação disponível! Nesses casos, o binário pode ser
a fonte de informação mais valiosa sobre como a aplicação realmente funciona.

Eu, como programador, fiquei curioso com esse projeto, ou melhor, com
esse workflow, porque saber como funcionam realmente as aplicações de
que gostas é algo com que qualquer sonhador competente sonharia. Mas depois
me lembrei que os softwares que mais uso são em sua maioria, se não todos, [OSS
(*Open Source Software*)](https://opensource.org/osd), maior parte deles
gratuita, por isso, pra mim, não é grande coisa, as llms conseguem me
confirmar tudo sobre eles — até porque eu mesmo leio o _source code_ desses
projetos.

## Onde pode ser utilizado?

A lista de coisas que é possível analisar com o REA é extensa, com mais de 20
categorias, e obviamente não vou falar de todas elas. Inclui aplicações de
desktop, binários nativos, binários de [Go](https://go.dev/) e
[Rust](https://www.rust-lang.org/), aplicações
[Electron](https://www.electronjs.org/), websites e aplicações
[Flutter](https://flutter.dev/), todas com resultados e requisitos diferentes.
Consulta a [tabela
completa](https://github.com/morluto/rea#what-you-can-analyze).

## Como isso afecta muita coisa?

Bem, estamos a entrar numa era onde passamos a deixar de ser apenas consumers
para nos tornarmos também producers. No sentido de que, porquê haverias de
comprar software se podes simplesmente construí-lo? E podes até argumentar:
"Ah, não vai ser a mesma coisa", e tens razão, concordo contigo. Na verdade, é
muito melhor para as tuas necessidades específicas, porque as pessoas nunca
pediram coisas perfeitas, elas pedem coisas que funcionam para elas, da forma
como gostariam que funcionasse. **Software "perfeito" é para uso geral**. Preferias
gastar dinheiro em algo que podes (pelo menos tentar) **controlar** até aos
mínimos detalhes ou em algo que não podes? Não é por isso que as pessoas usam
[Linux](https://www.kernel.org/)? Não é a isso que chamamos liberdade? Isso,
claro, não se aplica apenas ao REA mas a tudo que as AIs podem fornecer.

## O que penso sobre isso

REA e as AIs em geral são ótimas para aprender e testar coisas novas. É tão
rápido testar uma ideia e obter feedback sobre ela, perceber o que funciona e o
que não funciona. Mas as grandes corporações estão constantemente a dizer-nos
que [seremos
substituídos](https://www.anthropic.com/institute/recursive-self-improvement) e
deitar fora tudo aquilo a que temos dedicado os nossos esforços, então a parte
divertida é normalmente esquecida, mesmo que para seja bem mais divertido não
usar. Eu, pessoalmente, sou facilmente substituido por um agente não tem muito
o que dizer sobre isso, é um facto, mas gosto do que faço e não me imagino fazer
diferente. 
