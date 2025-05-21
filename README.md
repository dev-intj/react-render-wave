![ShowCase](https://dev-intj.github.io/images/RenderWave/showcase.png)

# 🌊 React Render Wave

**A compact React hook + component for effortlessly rendering large datasets in waves.**

React Render Wave helps you break rendering into small, timed batches to keep your UI smooth and responsive—especially when working with large lists or data-heavy UIs. By leveraging Rust for high-performance data processing and WebAssembly (WASM) for near-native speed in the browser, this solution ensures that rendering is both fast and memory-safe.

---

## ✨ Features

- ✅ Lightweight and customizable

- 🌊 Progressive wave-based rendering (batchSize)

- 🧠 Virtual scroll with overscan support

- ⌨️ Keyboard navigation

- 🦴 Skeleton loading support

- 🧲 Snap-to-batch scroll alignment

- ⚛️ Built with modern React and TypeScript

- 🚀 Rust-powered data handling for ultra-fast performance and memory safety (via WebAssembly)

## 🚀 Performance Benefits of Rust

To ensure smooth UI rendering even when handling massive datasets, React Render Wave leverages Rust, compiled to WebAssembly (WASM). Rust's efficiency in managing memory and its ability to handle large data structures with high concurrency make it the perfect choice for accelerating data processing in the browser.

Key Benefits:
Blazing Fast Data Handling: Rust’s low-level control over memory and concurrency allows us to process data more efficiently, resulting in faster rendering times for large datasets.

Memory Safety: By using Rust, we avoid common bugs such as data races or memory leaks, ensuring a reliable user experience.

WebAssembly Integration: Rust is compiled into WebAssembly (WASM) for near-native performance directly in the browser, without requiring additional backend resources.

---

## 📦 Installation

```bash
npm install react-render-wave
# or
yarn add react-render-wave
```

## 🧪 Basic Usage

```jsx
import { RenderWave } from "react-render-wave";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

<RenderWave
  items={items}
  batchSize={20}
  interval={60}
  renderItem={(item, index) => <div key={index}>{item}</div>}
/>;
```

## 🔁 Virtual Scroll Usage

```jsx
import { VirtualRenderWave } from "react-render-wave";

<VirtualRenderWave
  items={items}
  itemHeight={40}
  containerHeight={400}
  overscan={5}
  keyboardNavigation
  renderItem={(item, index) => <div>{item}</div>}
/>;
```

## 📘 Documentation

👉 View full demos and interactive props in [storybook](https://astonishing-cuchufli-c17417.netlify.app)

## 🧩 Roadmap

- ✅ Progressive rendering

- ✅ Virtual scrolling

- ✅ Keyboard support

- ✅ Snap-to-batch scroll

- ✅ Focus/scroll-to-element API

- ✅ Sticky headers

- ✅ Rust/Wasm acceleration (experimental) – leveraging Rust and WebAssembly for faster and safer data handling

- ✅ AutoHeight support

- ✅ AutoContainerHeight support

## 🧩 Roadmap (Planned Features – Priority Order)

### 🚧 Core Usability Enhancements

- 🔲 **Improved API design**
  Refactor the component API for cleaner prop usage and better developer ergonomics.

### 📱 Responsiveness & Layout Flexibility

These will help React Render Wave adapt to more complex UI layouts:

- 🔲 **Responsive layout support**
  Allow layout to adapt to different screen sizes and orientations.

- 🔲 **Table layout with children support & animations**
  Support structured layouts like tables, with optional row expansion and transitions.

### 🔄 Data Loading & Navigation Enhancements

For infinite datasets, user-initiated actions, and full navigation control:

- 🔲 **Infinite scroll support**
  Add props for "load more" callbacks or sentinel-based auto-loading.

### 📚 Developer Support

These improve discoverability, learning curve, and adoption:

- 🔲 **Documentation with real-world examples using Docusaurus**
  Move from Storybook-only demos to full docs with guides, recipes, and use cases.

## 🌍 Contribute

I welcome contributions! If you’d like to help improve React Render Wave, feel free to fork the repo and submit a pull request.

## 🙏 Acknowledgements

Special thanks to [@sequencemedia](https://github.com/sequencemedia) for helping squash a tricky bug and making React Render Wave better. 👷‍♂️👏
