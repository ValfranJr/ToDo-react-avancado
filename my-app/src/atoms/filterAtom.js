import { atom } from "recoil";

export const filtroTextoState = atom({
    key: 'filtroTextoState',
    default: ''
})

export const filtroStatusState = atom({
    key: 'filtroStatusState',
    default: 'todas'
})