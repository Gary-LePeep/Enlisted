var EN =
{
    "aka" : "aka ",
    "ammo" : "Ammunition: ",
    "armor" : "Wearing body armor",
    "bulletSpeed" : "Bullet speed: ",
    "datamine" : "Enlisted weapon datamine",
    "Category" : "Category EN",
    "contact" : "For any issues, suggestions, etc. contact 10art1#8181 on discord",
    "dispersion" : "Shot dispersion: ",
    "effectiveRange" : "Effective Range: ",
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
    "maxRange" : "Maximum Range: ",
    "meters" : "m",
    "millimeters" : "mm",
    "NotFound" : "Data for this weapon is not yet available.",
    "penOverRange" : "Armor penetration over distance",
    "recoilHoriz" : "Horizontal recoil: ",
    "recoilVert" : "Vertical recoil: ",
    "reload" : "Time to reload with empty magazine: ",
    "reloadAlt" : "Time to reload with nonempty magazine: ",
    "Remove" : "(Remove)",
    "rpm" : "Rounds/min: ",
    "singleReloadPrepare" : "Single bullet reload, prepare time: ",
    "singleReloadLoop" : "Single bullet reload, time per bullet: ",
    "singleReloadPost" : "Single bullet reload, finishing time: ",
    "title" : "Enlisted weapon comparison tool",
    "ttk_dpm_dropdown" : "Display the following:",
    "ttk_dpm_dropdown1" : "Damage over distance",
    "ttk_dpm_dropdown2" : "Damage per minute over distance",
    "ttk_dpm_dropdown3" : "Shots to kill over distance",
    "ttk_dpm_dropdown4" : "Time to kill over distance",
    "type" : "Type: ",
    "vitality": "Has vitality perk",
    "Weapon" : "Weapon ",
    "WepName" : "Name EN",
    "zeroDistance" : "Sights zeroing distance: "
};

var RU =
{
    "aka" : "Также известен как: ",
    "ammo" : "Патроны: ",
    "armor" : "Носит бронежилет",
    "bulletSpeed" : "Скорость пули: ",
    "datamine" : "Датамайн оружии в Enlisted",
    "Category" : "Category RU",
    "contact" : "По любым вопросам, предложениям и т. д. обращайтесь к 10art1#8181 на дискорде.",
    "dispersion" : "Рассеивание выстрелов: ",
    "effectiveRange" : "Эффективное расстояние: ",
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
    "maxRange" : "Максимальное расстояние: ",
    "meters" : " м",
    "millimeters" : " мм",
    "NotFound" : "Данные по этому оружию отсутствуют.",
    "penOverRange" : "Бронепробиваемость по расстоянию",
    "recoilHoriz" : "Горизонтальная отдача: ",
    "recoilVert" : "Вертикальная отдача: ",
    "reload" : "Время перезарядки с пустым магазином: ",
    "reloadAlt" : "Время перезарядки с непустым магазином: ",
    "Remove" : "(Убрать)",
    "rpm" : "Скорострельность: ",
    "singleReloadPrepare" : "Время подготовки к перезарядке отдельных патронов: ",
    "singleReloadLoop" : "Время перезарядки отдельного патрона: ",
    "singleReloadPost" : "Время завершения перезарядки отдельных патронов: ",
    "title" : "Enlisted инструмент сравнения оружии",
    "ttk_dpm_dropdown" : "Отображение диаграммы:",
    "ttk_dpm_dropdown1" : "Урон по расстоянию",
    "ttk_dpm_dropdown2" : "Урон в минуту по расстоянию",
    "ttk_dpm_dropdown3" : "Выстрелов на убийство по расстоянию",
    "ttk_dpm_dropdown4" : "Время на убийство по расстоянию",
    "type" : "Тип: ",
    "vitality": "Имеет способность к живучести",
    "Weapon" : "Оружие ",
    "WepName" : "Name RU",
    "zeroDistance" : "Дистанция пристрелки: "
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
        var ret = LANG[text];
        if (ret == null) {
            ret = text;
        }
        return ret;
    }

    var element = document.createElement(type)
    element.style = style;

    if (Array.isArray(LANG[text])) {
        element.textContent = LANG[text].join("\r\n");
        element.text = LANG[text].join("\r\n");
        element.style += "; white-space: pre-line"
    }
    else {
        var ret = LANG[text];
        if (ret == null) {
            ret = text;
        }
        element.textContent = ret;
        element.text = ret;
    }
    return element;
}