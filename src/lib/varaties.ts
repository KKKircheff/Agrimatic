export interface Variety {
    name: string;
    cookingType: string;
    cookingTypeLetter: 'A' | 'AB' | 'B' | 'BC' | 'C';
    shape: string;
    skin: 'Жълт' | 'Светло жълт' | 'Червен' | 'Кафяв';
    flesh: 'Светло жълта' | 'Бяла' | 'Жълта';
    size: string;
    maturity: 'Ранен' | 'Средно ранен' | 'Средни' | 'Средно късен' | 'Късен';
    licensed: boolean;
    organic: boolean;
    description: string;
}

export const varieties: Variety[] = [
    {
        name: 'Alexia',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Средни',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Alexia е сорт картофи със средно ранно узряване, известен с леко ронливата си текстура (тип B). Той има овално-дълги грудки с жълта кожа и светло жълта вътрешност, подходящ за различни кулинарни приложения, включително варене и печене. Този сорт е устойчив на болести.',
    },
    {
        name: 'Amora',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Ранен',
        licensed: true,
        organic: false,
        description:
            'Amora е ранен сорт, характеризиращ се с големи овални грудки и леко ронлива текстура (тип B). С жълта кожа и светло жълта вътрешност, този сорт е идеален за варене и пържене. Amora е особено ценен заради високия си добив и отличните кулинарни качества.',
    },
    {
        name: 'Aromata',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Ранен',
        licensed: true,
        organic: false,
        description:
            'Aromata е ранен сорт картофи, известен с големите си овални грудки и леко ронлива текстура (тип B). С жълта кожа и жълта вътрешност, този сорт е особено подходящ за пържене и печене заради богатия си вкус.',
    },
    {
        name: 'Gerona',
        cookingType: 'Леко твърди (AB)',
        cookingTypeLetter: 'AB',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Малки',
        maturity: 'Средно късен',
        licensed: true,
        organic: false,
        description:
            'Gerona е сорт със средно късно узряване и леко твърда текстура (AB). Произвежда малки овални грудки с жълта кожа и вътрешност. Този сорт често се избира за варене и има добри качества за съхранение.',
    },
    {
        name: 'Valencia',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средни',
        licensed: true,
        organic: true,
        description:
            'Valencia е сорт със средно узряване, известен с ронливата си текстура (BC). Произвежда големи овално-дълги грудки с жълта кожа и вътрешност, идеални за печене и пържене поради високото съдържание на сухо вещество.',
    },
    {
        name: 'Agria',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Agria е сорт със средно късно узряване, характеризиращ се с леко ронлива текстура (тип B). Произвежда големи овално-дълги грудки с жълта кожа и вътрешност, които са популярни за пържене поради отличния си вкус.',
    },
    {
        name: 'Bintje',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Бяла',
        size: 'Средни',
        maturity: 'Средни',
        licensed: false,
        organic: false,
        description:
            'Bintje е сорт със средно узряване, известен с ронливата си текстура (BC). Произвежда средно големи овални грудки с жълта кожа и бяла вътрешност, широко използван за пържени картофи поради високото съдържание на нишесте.',
    },
    {
        name: 'Cara',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Късен',
        licensed: false,
        organic: false,
        description:
            'Cara е сорт със късно узряване, който има големи овални грудки и леко ронлива текстура (тип B). С жълта кожа и светло жълта вътрешност, Cara е предпочитан за варене и печене.',
    },
    {
        name: 'Desiree',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Червен',
        flesh: 'Светло жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Desiree е сорт със средно късно узряване, известен с леко ронливата си текстура (тип B). Има средно големи овално-дълги грудки с червена кожа и светло жълта вътрешност, което го прави универсален за различни методи на готвене.',
    },
    {
        name: 'Hermes',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Кръгли',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Hermes е сорт със средно късно узряване, характеризиращ се с леко ронлива текстура (тип B). Този сорт картофи е подходящ за производство на чипсове. Произвежда големи кръгли грудки с жълта кожа и вътрешност, идеални за варене или печене. Препоръчва се за късно прибиране на реколтата.',
    },
    {
        name: 'Nicola',
        cookingType: 'Твърди (A)',
        cookingTypeLetter: 'A',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Nicola е сорт със средно късно узряване, известен с твърдата си текстура (A). Произвежда средно големи овално-дълги грудки с жълта кожа и вътрешност, идеални за салати или варене.',
    },
    {
        name: 'Spunta',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овално дълги',
        skin: 'Светло жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: false,
        organic: false,
        description:
            'Spunta е сорт със средно ранно узряване, известен с ронливата си текстура (BC). Има големи овално-дълги грудки със светло жълта кожа и вътрешност, подходящи за печене или пържене.',
    },
];

export const fullVarieties: Variety[] = [
    {
        name: 'Alexia',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Средни',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Alexia е сорт картофи със средно ранно узряване, известен с леко ронливата си текстура (тип B). Той има овално-дълги грудки с жълта кожа и светло жълта вътрешност, подходящ за различни кулинарни приложения, включително варене и печене. Този сорт е устойчив на болести.',
    },
    {
        name: 'Amora',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Ранен',
        licensed: true,
        organic: false,
        description:
            'Amora е ранен сорт, характеризиращ се с големи овални грудки и леко ронлива текстура (тип B). С жълта кожа и светло жълта вътрешност, този сорт е идеален за варене и пържене. Amora е особено ценен заради високия си добив и отличните кулинарни качества.',
    },
    {
        name: 'Arcade',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Arcade е сорт картофи със средно ранно узряване, който произвежда големи овално-дълги грудки. Има леко ронлива текстура (тип B) с жълта кожа и светло жълта вътрешност. Подходящ е за различни методи на готвене, включително печене и пържене.',
    },
    {
        name: 'Aromata',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Ранен',
        licensed: true,
        organic: false,
        description:
            'Aromata е ранен сорт картофи, известен с големите си овални грудки и леко ронлива текстура (тип B). С жълта кожа и жълта вътрешност, този сорт е особено подходящ за пържене и печене заради богатия си вкус.',
    },
    {
        name: 'Gerona',
        cookingType: 'Леко твърди (AB)',
        cookingTypeLetter: 'AB',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Малки',
        maturity: 'Средно късен',
        licensed: true,
        organic: false,
        description:
            'Gerona е сорт със средно късно узряване и леко твърда текстура (AB). Произвежда малки овални грудки с жълта кожа и вътрешност. Този сорт често се избира за варене и има добри качества за съхранение.',
    },
    {
        name: 'Ibiza',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Ibiza е сорт със средно ранно узряване, който се отличава с големи овално-дълги грудки и леко ронлива текстура (тип B). Грудките имат жълта кожа и светло жълта вътрешност, което ги прави универсални за различни кулинарни приложения.',
    },
    {
        name: 'Valencia',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средни',
        licensed: true,
        organic: true,
        description:
            'Valencia е сорт със средно узряване, известен с ронливата си текстура (BC). Произвежда големи овално-дълги грудки с жълта кожа и вътрешност, идеални за печене и пържене поради високото съдържание на сухо вещество.',
    },
    {
        name: 'Agria',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Agria е сорт със средно късно узряване, характеризиращ се с леко ронлива текстура (тип B). Произвежда големи овално-дълги грудки с жълта кожа и вътрешност, които са популярни за пържене поради отличния си вкус.',
    },
    {
        name: 'Bildtstar',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Червен',
        flesh: 'Жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Bildtstar е сорт със средно късно узряване, известен с леко ронливата си текстура (тип B). Има средно големи овални грудки с червена кожа и жълта вътрешност, подходящ за варене и печене.',
    },
    {
        name: 'Bintje',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Бяла',
        size: 'Средни',
        maturity: 'Средни',
        licensed: false,
        organic: false,
        description:
            'Bintje е сорт със средно узряване, известен с ронливата си текстура (BC). Произвежда средно големи овални грудки с жълта кожа и бяла вътрешност, широко използван за пържени картофи поради високото съдържание на нишесте.',
    },
    {
        name: 'Cara',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Късен',
        licensed: false,
        organic: false,
        description:
            'Cara е сорт със късно узряване, който има големи овални грудки и леко ронлива текстура (тип B). С жълта кожа и светло жълта вътрешност, Cara е предпочитан за варене и печене.',
    },
    {
        name: 'Desiree',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Червен',
        flesh: 'Светло жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Desiree е сорт със средно късно узряване, известен с леко ронливата си текстура (тип B). Има средно големи овално-дълги грудки с червена кожа и светло жълта вътрешност, което го прави универсален за различни методи на готвене.',
    },
    {
        name: 'Hermes',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Кръгли',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Hermes е сорт със средно късно узряване, характеризиращ се с леко ронлива текстура (тип B). Произвежда големи кръгли грудки с жълта кожа и вътрешност, идеални за варене или печене.',
    },
    {
        name: 'Maritiema',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: false,
        organic: true,
        description:
            'Maritiema е сорт със средно ранно узряване, известен с ронливата си текстура (BC). Произвежда големи овални грудки с жълта кожа и светло жълта вътрешност, подходящи за пържене и печене.',
    },
    {
        name: 'Nicola',
        cookingType: 'Твърди (A)',
        cookingTypeLetter: 'A',
        shape: 'Овално дълги',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: false,
        organic: false,
        description:
            'Nicola е сорт със средно късно узряване, известен с твърдата си текстура (A). Произвежда средно големи овално-дълги грудки с жълта кожа и вътрешност, идеални за салати или варене.',
    },
    {
        name: 'Spunta',
        cookingType: 'Ронливи (BC)',
        cookingTypeLetter: 'BC',
        shape: 'Овално дълги',
        skin: 'Светло жълт',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: false,
        organic: false,
        description:
            'Spunta е сорт със средно ранно узряване, известен с ронливата си текстура (BC). Има големи овално-дълги грудки със светло жълта кожа и вътрешност, подходящи за печене или пържене.',
    },
    {
        name: 'Colomba',
        cookingType: 'Леко твърди (AB)',
        cookingTypeLetter: 'AB',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Средни',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Colomba е сорт със средно ранно узряване, характеризиращ се с леко твърда текстура (AB). Има средно големи овални грудки с жълта кожа и вътрешност, които са универсални за кухнята.',
    },
    {
        name: 'EKO Vitabella',
        cookingType: 'Твърди (A)',
        cookingTypeLetter: 'A',
        shape: 'Овални',
        skin: 'Светло жълт',
        flesh: 'Светло жълта',
        size: 'Средни',
        maturity: 'Средни',
        licensed: true,
        organic: false,
        description:
            'EKO Vitabella е сорт със средно узряване, известен с твърдата си текстура (A). Произвежда еднакви овални грудки със светло жълта кожа и вътрешност, идеални за варене или готвене на пара.',
    },
    {
        name: 'Innovator',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овално дълги',
        skin: 'Кафяв',
        flesh: 'Светло жълта',
        size: 'Големи',
        maturity: 'Средно ранен',
        licensed: true,
        organic: false,
        description:
            'Innovator е сорт със средно ранно узряване, известен като доказан сорт за пържени картофи. Произвежда големи овално-дълги грудки с леко ронлива текстура (тип B) и кафява кожа, с високо съдържание на сухо вещество.',
    },
    {
        name: 'Melody',
        cookingType: 'Леко ронливи (B)',
        cookingTypeLetter: 'B',
        shape: 'Овални',
        skin: 'Жълт',
        flesh: 'Жълта',
        size: 'Средни',
        maturity: 'Средно късен',
        licensed: true,
        organic: false,
        description:
            'Melody е сорт със средно късно узряване, известен с леко ронливата си текстура (тип B). Произвежда средно големи овални грудки с жълта кожа и вътрешност, подходящи за различни методи на готвене, включително варене.',
    },
    {
        name: 'Mozart',
        cookingType: 'Леко твърди (AB)',
        cookingTypeLetter: 'AB',
        shape: 'Овални',
        skin: 'Червен',
        flesh: 'Жълта',
        size: 'Големи',
        maturity: 'Средно късен',
        licensed: true,
        organic: false,
        description:
            'Mozart е сорт със средно късно узряване, характеризиращ се с леко твърда текстура (AB). Има големи овални грудки с червена кожа и жълта вътрешност, подходящи за печенe',
    },
];