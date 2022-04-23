var EN =
{
    "aka" : "aka ",
    "ammo" : "Ammunition: ",
    "armor" : "Wearing body armor",
    "datamine" : "Enlisted weapon datamine",
    "Category" : "Category EN",
    "contact" : "For any issues, suggestions, etc. contact 10art1#8181 on discord",
    "EMPTY": "",
    "footer_footer": [
        "Damage at less than 10m is the same as damage at 10m.",
        "This data accounts for base damage, which is done on body/arm shots.",
        "Hits to the head and neck do 210% damage, legs do 80% damage.",
        "Knife hits to the head are counted as hits to the body.",
        "Berlin allied body armor reduces ALL damage to the body by 10%.",
        "Helmets do not reduce damage, even with pistol shots. (4.8 damage pistol or more is OHK headshot.)",
        "Recoil reduction 'while standing' reduces recoil in all positions."
    ],
    "footer_header": "IMPORTANT NOTES:", 
    "gunIGN" : "Data name: ",
    "gunName" : "Name: ",
    "language": "Language:",
    "Remove" : "(Remove)",
    "rpm" : "Rounds/min: ",
    "title" : "Enlisted weapon comparison tool",
    "ttk_dpm_dropdown" : "Display the following:",
    "ttk_dpm_dropdown1" : "Damage over Distance",
    "ttk_dpm_dropdown2" : "Damage per Minute over Distance",
    "ttk_dpm_dropdown3" : "Shots to Kill over Distance",
    "ttk_dpm_dropdown4" : "Time to Kill over Distance",
    "type" : "Type: ",
    "vitality": "Has vitality perk",
    "Weapon" : "Weapon ",
    "WepName" : "Name EN"
};

var RU =
{
    "aka" : "Также известен как: ",
    "ammo" : "Патроны: ",
    "armor" : "Носит бронежилет",
    "datamine" : "Датамайн оружии в Enlisted",
    "Category" : "Category RU",
    "contact" : "По любым вопросам, предложениям и т. д. обращайтесь к 10art1#8181 на дискорде.",
    "EMPTY": "",
    "footer_footer": [
        "Урон на расстоянии менее 10 м равен урону на 10 м.",
        "Эти данные учитывают базовый урон, наносимый выстрелами в тело/руки.",
        "Удары по голове и шее наносят 210% урона, по ногам - 80% урона.",
        "Удары ножом по голове засчитываются как удары в тело.",
        "Бронежилет союзников в Берлине снижает ВСЕ повреждения тела на 10%",
        "Каски не уменьшают урон, даже от выстрелов из пистолета.",
        "(Пистолет с уроном 4,8 и выше — выстрел в голову убивает одним ударом.)",
    ],
    "footer_header": "ВАЖНЫЕ ЗАМЕЧАНИЯ:",
    "gunIGN" : "Имя в данных: ",
    "gunName" : "Имя: ",
    "language": "Язык:",
    "Remove" : "(Убрать)",
    "rpm" : "Скорострельность: ",
    "title" : "Enlisted инструмент сравнения оружии",
    "ttk_dpm_dropdown" : "Отображение диаграммы:",
    "ttk_dpm_dropdown1" : "Урон по расстоянию",
    "ttk_dpm_dropdown2" : "Урон в минуту по расстоянию",
    "ttk_dpm_dropdown3" : "Выстрелов на убийство по расстоянию",
    "ttk_dpm_dropdown4" : "Время на убийство по расстоянию",
    "type" : "Тип: ",
    "vitality": "Имеет способность к живучести",
    "Weapon" : "Оружие ",
    "WepName" : "Name RU"
};

function translate(text, type = "string", style = "") {
    var LANG;
    if (document.getElementById('language_dropdown').value == "English") {
        LANG = EN;
    }
    if (document.getElementById('language_dropdown').value == "Русский") {
        LANG = RU;
    }
    if (type == "string") {
        return LANG[text];
    }

    var element = document.createElement(type)
    element.style = style;

    if (Array.isArray(LANG[text])) {
        element.textContent = LANG[text].join("\r\n");
        element.text = LANG[text].join("\r\n");
        element.style += "; white-space: pre-line"
    }
    else {
        element.textContent = LANG[text];
        element.text = LANG[text];
    }
    return element;
}