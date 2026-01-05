# 🍄 Super Mario Jump

> **It's me, Mario!** Um minigame de "infinite runner" desenvolvido com Vanilla JavaScript, CSS3 e HTML5.

![Badge HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🎮 Sobre o Jogo

Este projeto recria a mecânica clássica de pulo do Super Mario. O objetivo é simples: evitar os tubos e sobreviver o maior tempo possível!

A lógica do jogo foi construída inteiramente manipulando o **DOM**. Um loop (`setInterval`) verifica a cada **10ms** a posição do Mario e do Tubo para detectar colisões em tempo real.

### ✨ Funcionalidades

* 🏃 **Animação de Loop:** O cenário (tubos e nuvens) se move infinitamente para criar a ilusão de corrida.
* 💨 **Mecânica de Pulo:** Adição e remoção dinâmica de classes CSS para animar o sprite.
* 💥 **Detecção de Colisão:** Lógica matemática que verifica as coordenadas `bottom` (Mario) e `left` (Tubo) para disparar o "Game Over".
* ❌ **Game Over State:** Troca de sprites e parada de animações ao colidir.

---

## 📸 Preview

<div align="center">
  <img src="./assets/print_mario_game.png" alt="Demo do Jogo Mario" width="600">
</div>

---
