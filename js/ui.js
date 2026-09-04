/*
 * ui.js — 화면에 그리는 일만 담당
 *
 * 규칙: 이 파일은 '보여주기'만 합니다.
 *       점수를 계산하거나 게임 흐름을 결정하지 않습니다.
 *       game.js 가 값을 넘겨주면, UI 는 그 값을 화면에 표시하기만 하면 됩니다.
 */

const UI = {
    // DOM 요소 참조 (script 태그가 body 끝에 있으므로 바로 찾을 수 있음)
    targetCharElement: document.getElementById('targetChar'),
    scoreElement: document.getElementById('score'),
    timerElement: document.getElementById('timer'),
    startButton: document.getElementById('startButton'),
    resetButton: document.getElementById('resetButton'),
    timeOptionsElement: document.getElementById('timeOptions'),
    modeSelect: document.getElementById('modeSelect'),
    comboElement: document.getElementById('combo'),
    typedInput: document.getElementById('typedInput'),

    // 출제된 문자를 표시
    renderTarget(char) {
        this.targetCharElement.innerText = char;
    },

    // 출제 문자 지우기
    clearTarget() {
        this.targetCharElement.innerText = '';
    },

    // 점수 표시
    renderScore(score) {
        this.scoreElement.innerText = `점수: ${score}`;
    },

    renderCombo(combo, bonus) {
        this.comboElement.innerText = combo > 0
            ? `콤보: ${combo}${bonus > 0 ? ` (+${bonus} 보너스)` : ''}`
            : '콤보: 0';
    },

    renderTypedInput(text) {
        this.typedInput.value = text;
    },

    // 남은 시간 표시
    renderTimer(timeLeft) {
        this.timerElement.innerText = `남은 시간: ${timeLeft}`;
    },

    // 게임이 끝났을 때 최종 결과 표시
    renderGameOver(score) {
        this.timerElement.innerText = `시간 초과! 최종 점수: ${score}`;
    },

    // 시간 선택 버튼을 만들어 넣기 (페이지 열릴 때 한 번)
    // CONFIG.TIME_OPTIONS 를 그대로 받아서 개수만큼 버튼을 생성합니다.
    renderTimeOptions(options, onSelect) {
        this.timeOptionsElement.innerHTML = '';

        options.forEach((seconds) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'game__time-option';
            button.dataset.time = seconds;
            button.innerText = `${seconds}초`;
            button.addEventListener('click', () => onSelect(seconds));
            this.timeOptionsElement.appendChild(button);
        });
    },

    // 현재 선택된 시간 버튼을 강조
    highlightTime(selectedSeconds) {
        this.timeOptionsElement
            .querySelectorAll('.game__time-option')
            .forEach((button) => {
                const isSelected = Number(button.dataset.time) === selectedSeconds;
                button.classList.toggle('is-selected', isSelected);
            });
    },

    // 게임 중에는 시간을 못 바꾸도록 잠그기
    setTimeOptionsEnabled(enabled) {
        this.timeOptionsElement
            .querySelectorAll('.game__time-option')
            .forEach((button) => {
                button.disabled = !enabled;
            });
    },
};
