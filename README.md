![ShowCase](https://dev-intj.github.io/images/RenderWave/showcase.png)

# 🌊 React Render Wave

**A compact React hook + component for effortlessly rendering large datasets in waves.**

React Render Wave helps you break rendering into small, timed batches to keep your UI smooth and responsive—especially when working with large lists or data-heavy UIs.

---

## ✨ Features

- ✅ Lightweight and customizable
- 🌊 Progressive wave-based rendering (`batchSize`)
- 🧠 Virtual scroll with overscan support
- ⌨️ Keyboard navigation
- 🦴 Skeleton loading support
- 🧲 Snap-to-batch scroll alignment
- ⚛️ Built with modern React and TypeScript

---

## 📦 Installation

````bash
npm install react-render-wave
# or
yarn add react-render-wave



## 🧪 Basic Usage

```bash
import { RenderWave } from 'react-render-wave';

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

<RenderWave
  items={items}
  batchSize={20}
  interval={60}
  renderItem={(item, index) => (
    <div key={index}>{item}</div>
  )}
/>
````

## 🔁 Virtual Scroll Usage

```bash
import { VirtualRenderWave } from 'react-render-wave';

<VirtualRenderWave
  items={items}
  itemHeight={40}
  containerHeight={400}
  overscan={5}
  keyboardNavigation
  renderItem={(item, index) => (
    <div>{item}</div>
  )}
/>
```

## 📘 Documentation

👉 View full demos and interactive props in NOT YET SETUP

## 🧩 Roadmap

- ✅ Progressive rendering

- ✅ Virtual scrolling

- ✅ Keyboard support

- ✅ Snap-to-batch scroll

- ⬜ Focus/scroll-to-element API

- ⬜ Sticky headers

- ⬜ Rust/Wasm acceleration (experimental)
