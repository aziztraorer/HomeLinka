const keys = document.querySelectorAll('td');



window.addEventListener("keydown", (event) => {
    const keyPressed = event.key.toUpperCase();
const AltPressed = event.altKey;  
const windowPressed = event.metaKey; 
const CtrlPressed = event.ctrlKey;
const ShiftPressed = event.shiftKey;
const downpressed = event.key === "ArrowDown";
const upPressed = event.key === "ArrowUp";
const leftPressed = event.key === "ArrowLeft";
const rightPressed = event.key === "ArrowRight";
const pageUpPressed = event.key === "PageUp";
const pageDownPressed = event.key === "PageDown";
const fnPressed = event.key === "Fn";
const lockPressed = event.getModifierState("CapsLock");
const EscapePressed = event.key === "Escape";
const enterPressed = event.key === "Enter";

    keys.forEach(key => {
        if (key.classList.contains(keyPressed) || (keyPressed === " " && key.classList.contains("SPACE")) || (AltPressed && key.classList.contains("ALT")) || (windowPressed && key.classList.contains("Win")) || (CtrlPressed && key.classList.contains("Ctrl")) || (ShiftPressed && key.classList.contains("Shift")) || (downpressed && key.classList.contains("DOWN")) || (upPressed && key.classList.contains("UP")) || (leftPressed && key.classList.contains("LEFT")) || (rightPressed && key.classList.contains("RIGHT")) || (pageUpPressed && key.classList.contains("PAGUP")) || (pageDownPressed && key.classList.contains("PAG")) || (fnPressed && key.classList.contains("fn")) || (lockPressed && key.classList.contains("lock")) || (EscapePressed && key.classList.contains("Esc")) || (enterPressed && key.classList.contains("ENTRER"))) {
            key.style.backgroundColor = "red";
        }
    });
});