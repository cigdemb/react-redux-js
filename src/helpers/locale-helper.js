
import store from '../store'
import { setLang } from '../store/slices/locale-slice';



export const langs = [
    { title: "English", code: "en", country: "gb" },
    { title: "Türkçe", code: "tr", country: "tr" },
    { title: "Francais", code: "fr", country: "fr" },
];

//function to return current lang from central state
export const getCurrentLang = ()=>{
    return store.getState().locale.lang;
}
//function to update current lang from central state
export const setCurrentLang = (lang)=>{
    store.dispatch(setLang(lang))
}

//function to give keys of json files
export const $t = (key)=>{
    const currLang = getCurrentLang()
    const longFile = require(`../helpers/langs/${currLang.code}.json`);
    return longFile[key]
}