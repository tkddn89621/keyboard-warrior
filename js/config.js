/*
 * config.js — 게임 설정값
 *
 * 숫자나 문자셋을 바꾸고 싶으면 여기만 고치면 됩니다.
 * 여러 명이 함께 보는 파일이라, 값을 바꿀 때는 팀원에게 알려주세요.
 */

const CONFIG = {
    // 한 판에 주어지는 시간(초)
    GAME_TIME: 20,

    // 타이머가 줄어드는 간격(ms)
    TICK_MS: 1000,

    // 맞췄을 때 / 틀렸을 때 점수 변화
    SCORE_CORRECT: 10,
    SCORE_WRONG: -5,

    // 문제로 출제될 문자들
    CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

    // 눌러도 채점하지 않을 키
    EXCLUDED_KEYS: ['Shift', 'CapsLock'],
};
