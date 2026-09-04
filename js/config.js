/*
 * config.js — 게임 설정값
 *
 * 숫자나 문자셋을 바꾸고 싶으면 여기만 고치면 됩니다.
 * 여러 명이 함께 보는 파일이라, 값을 바꿀 때는 팀원에게 알려주세요.
 */

const CONFIG = {
    // 한 판에 주어지는 기본 시간(초) — 페이지를 열었을 때 선택되어 있는 값
    GAME_TIME: 20,

    // 플레이어가 고를 수 있는 시간(초)
    // 여기에 숫자를 넣고 빼면 버튼도 자동으로 늘거나 줄어듭니다.
    TIME_OPTIONS: [20, 30, 60],

    // 타이머가 줄어드는 간격(ms)
    TICK_MS: 1000,

    // 맞췄을 때 / 틀렸을 때 점수 변화
    SCORE_CORRECT: 10,
    SCORE_WRONG: -5,

    // 문제로 출제될 문자들
    CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

    // 눌러도 채점하지 않을 키
    // 문자를 입력하는 키가 아니므로 점수에 영향을 주면 안 됩니다.
    // (특히 Tab 은 점수도 깎이고 버튼으로 포커스까지 이동해버림)
    EXCLUDED_KEYS: [
        'Shift', 'CapsLock', 'Control', 'Alt', 'Meta',
        'Tab', 'Enter', 'Escape', 'Backspace',
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    ],
};
