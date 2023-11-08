# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React와 Virtual DOM
# 빠르고 편리한 업데이트 구현(Virtual DOM)
# 1. 브라우저의 렌더링 과정
#    HTML -> DOM
#             |
#            Render Tree -> Layout -> Painting
#             |
#    CSS  -> CSSOM
# 2. 웹 브라우저가 화면을 업데이트 하는 과정
#    JavaScript가 DOM을 수정할 경우 렌더링 과정이 다시 시작됨, 
#    잦은 Reflow(Layout을 다시 한다), Repaint(Painting을 다시 한다)의 발생은 성능 악화의 주범!!
#