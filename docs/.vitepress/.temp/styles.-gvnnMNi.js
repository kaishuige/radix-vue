const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/green.css';\n@import '@radix-ui/colors/mauve.css';\n@import '@radix-ui/colors/slate.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.ToastViewport {\n  --viewport-padding: 25px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  padding: var(--viewport-padding);\n  gap: 10px;\n  width: 390px;\n  max-width: 100vw;\n  margin: 0;\n  list-style: none;\n  z-index: 2147483647;\n  outline: none;\n}\n\n.ToastRoot {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n  padding: 15px;\n  display: grid;\n  grid-template-areas: 'title action' 'description action';\n  grid-template-columns: auto max-content;\n  column-gap: 15px;\n  align-items: center;\n}\n.ToastRoot[data-state='open'] {\n  animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n.ToastRoot[data-state='closed'] {\n  animation: hide 100ms ease-in;\n}\n.ToastRoot[data-swipe='move'] {\n  transform: translateX(var(--radix-toast-swipe-move-x));\n}\n.ToastRoot[data-swipe='cancel'] {\n  transform: translateX(0);\n  transition: transform 200ms ease-out;\n}\n.ToastRoot[data-swipe='end'] {\n  animation: swipeOut 100ms ease-out;\n}\n\n@keyframes hide {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateX(calc(100% + var(--viewport-padding)));\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes swipeOut {\n  from {\n    transform: translateX(var(--radix-toast-swipe-end-x));\n  }\n  to {\n    transform: translateX(calc(100% + var(--viewport-padding)));\n  }\n}\n\n.ToastTitle {\n  grid-area: title;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: var(--slate-12);\n  font-size: 15px;\n}\n\n.ToastDescription {\n  grid-area: description;\n  margin: 0;\n  color: var(--slate-11);\n  font-size: 13px;\n  line-height: 1.3;\n}\n\n.ToastAction {\n  grid-area: action;\n}\n\n.Button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.Button.small {\n  font-size: 12px;\n  padding: 0 10px;\n  line-height: 25px;\n  height: 25px;\n}\n.Button.large {\n  font-size: 15px;\n  padding: 0 15px;\n  line-height: 35px;\n  height: 35px;\n}\n.Button.grass {\n  background-color: white;\n  color: var(--grass-11);\n  box-shadow: 0 2px 10px var(--black-a7);\n}\n.Button.grass:hover {\n  background-color: var(--mauve-3);\n}\n.Button.grass:focus {\n  box-shadow: 0 0 0 2px black;\n}\n.Button.green {\n  background-color: var(--green-2);\n  color: var(--green-11);\n  box-shadow: inset 0 0 0 1px var(--green-7);\n}\n.Button.green:hover {\n  box-shadow: inset 0 0 0 1px var(--green-8);\n}\n.Button.green:focus {\n  box-shadow: 0 0 0 2px var(--green-8);\n}";
export {
  styles as default
};