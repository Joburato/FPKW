# Sistema de Arbitragem - FPKW (Federação Potiguar de Kung Fu Wushu)

Este projeto é uma aplicação web estática desenvolvida para auxiliar na gestão de campeonatos de Kung Fu Wushu. O sistema funciona como um placar eletrônico e calculadora de notas para as modalidades de combate (Sandá) e formas (Taolu).

O projeto está configurado para ser hospedado via **GitHub Pages**.

## 📋 Funcionalidades

O sistema é dividido em três módulos principais acessíveis pela página inicial:

### 1. Sandá (Profissional/Avançado)
Placar eletrônico para lutas oficiais.
*   **Cronômetro:** Timer de 2 minutos com controle de Início, Pausa e Reset.
*   **Áudio:** Efeitos sonoros automáticos para os 10 segundos finais (`tick.mp3`) e fim do round (`end.mp3`).
*   **Pontuação:**
    *   Controle de rounds (melhor de 3) com indicadores visuais (bolinhas).
    *   Contagem de KOS (Nocautes/Quedas), Saídas e Faltas (Técnicas e Pessoais).
    *   Identificação visual dos atletas (Vermelho vs Azul).

### 2. Sandá Iniciante
Versão adaptada para categorias de base.
*   **Cronômetro:** Timer ajustado para 1 minuto e 30 segundos.
*   **Placar Simplificado:** Lógica específica para pontuação de rounds, permitindo marcar vitória para Vermelho, Azul ou Empate/Decisão Dividida (indicador bicolor).

### 3. Taolu (Rotinas)
Calculadora para a banca de arbitragem.
*   **Entrada de Notas:** Campos para 5 juízes.
*   **Cálculo Automático:**
    *   Identifica e descarta a maior e a menor nota (destacando-as em vermelho).
    *   Calcula a média aritmética das 3 notas restantes.
*   **Interface:** Botões para calcular a nota final e reiniciar o formulário.

## 🚀 Como Usar

### Online (GitHub Pages)
Acesse o link do repositório publicado (ex: `https://seu-usuario.github.io/FPKW-gh-pages/`).

### Localmente
Como é um projeto estático (HTML/CSS/JS), você pode rodá-lo diretamente no seu computador:

1.  Clone este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).

> **Nota:** Para que os sons do cronômetro funcionem corretamente, o navegador pode exigir que o usuário interaja com a página (clique em algo) antes de permitir a reprodução de áudio.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica das páginas.
*   **CSS3:** Estilização personalizada (incluindo fontes `Russo One` e `roboremix`).
*   **JavaScript (Vanilla):** Lógica de cronômetro, manipulação do DOM e cálculos matemáticos.

## 📂 Estrutura de Arquivos

*   `index.html`: Menu principal.
*   `sanda.html` / `sanda.js` / `sanda.css`: Módulo de luta principal.
*   `sandaini.html` / `sandaini.js`: Módulo de luta iniciante.
*   `taolu.html` / `taolu.js` / `taolu.css`: Módulo de formas.
*   `assets`: Imagens (`redblue.png`, logos) e sons (`tick.mp3`, `end.mp3`).

## 🤝 Contribuição

Sinta-se à vontade para abrir *issues* ou enviar *pull requests* para melhorias no código ou no design.

---

**Federação Potiguar de Kung Fu Wushu**
```

<!--
[PROMPT_SUGGESTION]Como eu faço para corrigir o bug de lógica no cálculo da média no arquivo taolu.js?[/PROMPT_SUGGESTION]
[PROMPT_SUGGESTION]Pode criar um arquivo .gitignore para este projeto?[/PROMPT_SUGGESTION]
