/**
 * [input 태그 다루기]
 * 
 * > 포커스 이벤트
 *  focusin: 요소에 포커스가 되었을 때
 *  focusout: 요소에 포커스가 빠져나갈 때
 * 
 *  focus: 요소에 포커스가 되었을 때 (버블링 X)
 *  blur: 요소에 포커스가 빠져나갈 때 (버블링 X)
 */

const el = document.querySelector("#form");

function printEventType (event) {
    console.log("type: ", event.type);
    console.log("target: ", event.target);
}

el.addEventListener("focusin", printEventType);
el.addEventListener("focusout", printEventType);

/**
 * > 입력 이벤트
 *  input: 사용자가 입력을 할 때
 *  change: 요소의 값이 변했을 때
 */

el.addEventListener("input", printEventType);
el.addEventListener("change", printEventType);