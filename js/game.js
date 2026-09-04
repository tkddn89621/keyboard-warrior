/*
 * game.js — 게임 규칙과 진행
 *
 * 상태(점수/남은 시간/진행 여부)를 관리하고, 화면 표시는 UI 에게 맡깁니다.
 */

// 게임 상태를 관리하는 변수들
let score = 0;
let timeLeft = CONFIG.GAME_TIME;
let gameInterval;
let isGameRunning = false; // 게임이 실행 중인지 확인하는 변수

// 랜덤 문자를 생성하는 함수
function getRandomChar() {
    return CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)];
}

// 새로운 타겟 문자를 설정하는 함수
function setNewTargetChar() {
    UI.renderTarget(getRandomChar());
}

// 입력된 문자를 확인하고 점수를 업데이트하는 함수
function checkInput(event) {
    const inputChar = event.key;

    // CapsLock, Shift 등의 키는 무시
    if (CONFIG.EXCLUDED_KEYS.includes(inputChar)) {
        return;
    }

    // 입력 문자가 타겟 문자와 일치하면 점수 증가, 아니면 점수 감소
    score += (inputChar === UI.targetCharElement.innerText)
        ? CONFIG.SCORE_CORRECT
        : CONFIG.SCORE_WRONG;

    // 업데이트된 점수와 새로운 타겟 문자 표시
    UI.renderScore(score);
    setNewTargetChar();
}

// 타이머를 업데이트하고 시간이 다 되면 게임을 종료하는 함수
function updateTimer() {
    timeLeft--;
    UI.renderTimer(timeLeft);

    if (timeLeft <= 0) {
        endGame();
    }
}

// 게임을 종료하고 필요한 정리 작업을 수행하는 함수
function endGame() {
    clearInterval(gameInterval);
    UI.clearTarget();                                   // 타겟 문자 제거
    UI.renderGameOver(score);
    document.removeEventListener('keydown', checkInput); // 키 입력 이벤트 제거
    isGameRunning = false;                               // 게임 실행 상태를 종료로 설정
}

// 게임을 초기화하고 시작하는 함수
function startGame() {
    if (isGameRunning) return; // 게임이 이미 실행 중이면 새로 시작하지 않음
    isGameRunning = true;      // 게임 실행 상태를 시작으로 설정

    score = 0;
    timeLeft = CONFIG.GAME_TIME;
    UI.renderScore(score);
    UI.renderTimer(timeLeft);
    setNewTargetChar(); // 첫 번째 타겟 문자 설정

    gameInterval = setInterval(updateTimer, CONFIG.TICK_MS); // 일정 간격으로 타이머 업데이트
    document.addEventListener('keydown', checkInput);        // 키 입력 이벤트 추가
}

// 게임을 리셋하는 함수
function resetGame() {
    clearInterval(gameInterval); // 타이머 정지
    score = 0;
    timeLeft = CONFIG.GAME_TIME;
    UI.renderScore(score);
    UI.renderTimer(timeLeft);
    UI.clearTarget();                                    // 타겟 문자 초기화
    document.removeEventListener('keydown', checkInput); // 키 입력 이벤트 제거
    isGameRunning = false;                               // 게임 실행 상태를 종료로 설정
}

// 페이지 로드 시 초기 설정
function initGame() {
    UI.renderScore(0);
    UI.renderTimer(CONFIG.GAME_TIME);
    UI.clearTarget(); // 게임 시작 전 타겟 문자 초기화

    // HTML 의 onclick 대신 여기서 버튼을 연결 (골격과 동작 분리)
    UI.startButton.addEventListener('click', startGame);
    UI.resetButton.addEventListener('click', resetGame);
}

// 게임 초기화 함수 호출
initGame();
