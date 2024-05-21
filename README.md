# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# AquaCicle

## Alvacoders

## Integrantes: <a href="https://www.linkedin.com/in/matheus-m-77b7a213a/">Matheus Moura</a>, <a href="https://www.linkedin.com/in/murilo-dias-da-silva-9265292a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Filipi Pires</a>, <a href="https://www.linkedin.com/in/murilo-dias-da-silva-9265292a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">João Albuquerque</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/"> Victor Bruno </a>, <a href="https://www.linkedin.com/in/victorbarq/">Adriano Felix Valente</a>, <a href="https://www.linkedin.com/in/victorbarq/"> Jose Carlos </a> 


## Descrição

<p align="center">
<img src="imagens/capa.jpeg" alt="ThunderCat" border="0">
  Projeto by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023-2-NADS1/Grupo6/tree/main">Matheus Moura da Silva e Murilo Dias da Silva</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a>
</p>
O objetivo do nosso grupo é desenvolver um projeto que tenha um impacto direto nos <a href="https://brasil.un.org/pt-br/sdgs">Objetivos de Desenvolvimento Sustentável da Organização das Nações Unidas (ONU)</a>. Com isso, desenvolvemos um site que visa facilitar o processo de adoção de pets, criando uma rede social específica para esse propósito.

Nosso projeto foi planejado para atender aos Objetivos de Desenvolvimento Sustentável da ONU. A primeira etapa após definir o projeto foi identificar quais objetivos ele atenderia. Descobrimos que nosso projeto está alinhado com vários objetivos, incluindo:
<br><br>
ODS 2: Fome Zero e Agricultura Sustentável
<br><br>
ODS 3: Saúde e Bem-Estar
<br><br>
ODS 8: Trabalho Decente e Crescimento Econômico
<br><br>
ODS 9: Indústria, Inovação e Infraestrutura
<br><br>
ODS 12: Consumo e Produção Responsáveis
<br><br>
Com todos os nossos objetivos definidos, iniciamos o desenvolvimento do site!

## 🛠 Instalação

Nesta etapa, vamos demonstrar como programar nosso frontend e backend, que estão localizados na pasta src.

Desenvolvemos nosso front-end no Figma para definir a aparência da página e, em seguida, implementamos no React todas as páginas da rede social para adoção de pets.
Desenvolvemos nosso banco de dados para armazenar os dados dos usuários e postagens.
Desenvolvemos nossa API em C#, que define como os dados dos usuários e postagens vão se comportar na nossa rede social.
Configuramos um servidor na Azure para hospedar nosso projeto e facilitar ajustes de qualquer lugar.
Conectamos o front-end com o back-end, integramos ao nosso servidor e também ao Netlify.
Abaixo, na configuração de desenvolvimento, estão os componentes que utilizamos para montar nosso projeto.

<br><br>
## 💻 Configuração para Desenvolvimento
<br><br>
<p align="center">
<img src="imagens/PROJETO.jpeg" alt="NOME DO JOGO" border="0">
<br><br>

No nosso projeto utilizamos os seguintes elementos de comunicação para conseguirmos realizar as leituras de dados e fazer com que o projeto cumpra com o objetico que nos o desenvolvemos.
<br><br>
Os 4 sensores controlados e 1 filtro de agua controlados por IOT estão listados abaixo:
<br><br>
Sensor de Turbidez: Com este sensor podemos verificar a Turbidez da agua captada ou seja a transparencia da agua.
<br><br>
Sensor de Ph: Com este sensor podemos verificar o indice de Ph da água.
<br><br>
Sensor de Nivel: Uma boia para podermos verificar o nivel de água de cada estação.
<br><br>
Bomba de Agua: Utilizado para fazer com que a agua seja trasportada entre as estações.
<br><br>
Filtro de Agua: Para que o tratamento seja realizado.
<br><br>
Com o todos os os sensores devidamente ligados utilizamos o Arduino e Esp32 para podermos gerenciar os dados e controlar cada sensor para que o projeto realize o seu objetivo com sucesso. 
<br><br>

## 🗃 Histórico de lançamentos
<br><br>

A cada atualização os detalhes devem ser lançados aqui.

* 0.2.2 - 21/11/2023
    * Montamos a versão atual do projeto.
    * MUDANÇA: Fizmos a alteração do sensores de ph e turbidez para o esp32, para não termos interferencia nos dados coletados.
* 0.2.1 - 17/11/2023
    * MUDANÇA: Montamos uma base de mfd para colocarmos o projeto e alocarmos os cabos, fonte, arduino e esp32.
* 0.2.0 - 10/11/2022
    * MUDANÇA: Compramos um filtro de carvão para a estção de tratmento e o mdf para fazermos a base do projeto.
    * ADD:Colocamos um eps32 para fazemos que ele recebece-se o dados do arduino e nos mostra-se o valor do  ph e turbidez.
* 0.1.1 - 01/11/2023
    * CONSERTADO: Compramos reles, para que as bombas liguem e desliguem quando necessário conforme programamos no arduino.
* 0.1.0 - 27/10/2023
    * Realizamos o primeiro prototipo com todos os sensores e bombas
    * MUDANÇA: Precisamos encontrar uma forma de como parar as bombas que estão ativadas o tempo todo.
* 0.0.1 - 19/10/2023
    * Indentificamso os sensores e como iriamos montar o projeto.
<br><br>
## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023-2-NADS1/Grupo6/tree/main">AquaCicle</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023-2-NADS1/Grupo6/tree/main">Matheus Moura da Silva e Murilo Dias da Silva</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p> 

## 🎓 Referências

Aqui estão as referências usadas no projeto.
1. <https://github.com/iuricode/readme-template>
2. <https://github.com/gabrieldejesus/readme-model>
3. <https://creativecommons.org/share-your-work/>
4. <https://freesound.org/>
5. Músicas por: <a href="https://freesound.org/people/DaveJf/sounds/616544/"> DaveJf </a> e <a href="https://freesound.org/people/DRFX/sounds/338986/"> DRFX </a> ambas com Licença CC 0.
