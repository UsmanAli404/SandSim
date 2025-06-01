# 🌈 Sand Simulation with p5.js

This project is an interactive sand simulation created using [p5.js](https://p5js.org/). Users can draw sand particles that fall and spread in a natural, gravity-driven manner. The color of the particles evolves over time, and the brush size can be adjusted using the mouse wheel.

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-%2300bcd4?style=for-the-badge&logo=p5.js&logoColor=white)](https://editor.p5js.org/Usman_Ali/full/BJpcsEywC)


## ✨ Features

- **Responsive canvas**: Fills the browser window and adjusts to resizing.
- **Particle physics**: Particles fall downward and attempt to spread diagonally if blocked.
- **Color variation**: Particle color changes dynamically with each draw.
- **Brush tool**: Variable-size brush controlled by the mouse wheel.
- **Minimal UI**: Clean look with a floating brush size label at the bottom-right corner.


## 🎮 Controls

| Action                 | Description                              |
|------------------------|------------------------------------------|
| 🖱️ Hold left-click     | Draw sand particles                       |
| 🔄 Scroll up/down      | Increase or decrease brush size          |
| 🪟 Resize window       | Grid and canvas adjust automatically     |


## 📁 File Structure

```
├── sketch.js       // Main simulation logic
├── README.md       // Project documentation (this file)
```


## 🔧 How It Works

- The sketch uses a 2D array (`grid`) to simulate a discrete space where each cell may hold a sand particle.
- On mouse press, sand is deposited in a square area around the cursor (`n x n`).
- Each frame, the simulation checks for possible downward movement of sand particles:
  - If the cell below is empty, the particle moves down.
  - If blocked, it tries to move diagonally down-left or down-right.
- Particles have a hue that shifts with every placement, giving a colorful appearance.


## 🧠 Concepts Used

- Grid-based simulations
- Cellular automata principles
- Basic particle physics
- Responsive layout with `windowResized()`
- Color manipulation with HSB color mode


## 🧑‍💻 Author

**Usman Ali**  
[GitHub Profile](https://github.com/UsmanAli404) <!-- Add your GitHub link if available -->  
A software engineering student passionate about creative coding, simulations, and interactive design.

---

## 📜 License

This project is open-source and free to use. Attribution is appreciated.
