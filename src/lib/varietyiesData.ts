// Base type for simple key-value pair
type KeyValuePair<T = string> = {
    key: string;
    value: T;
};

// Type for sections with array values
type ArraySection = {
    key: string;
    value: string[];
};

// Type for sections with nested properties
type PropertiesSection<T> = {
    key: string;
    properties: T;
};

// Types for specific sections
type PhysicalCharacteristicsProperties = {
    skinColor: KeyValuePair;
    coreColor: KeyValuePair;
    fryingQuality: KeyValuePair;
    tuberShape: KeyValuePair;
    tubersPerPlant: KeyValuePair;
    maturity: KeyValuePair;
    dormancyPeriod: KeyValuePair;
    seedFruits: KeyValuePair;
    cookingType: KeyValuePair;
    averageTuberLength: KeyValuePair;
    washability: KeyValuePair;
    underwaterWeight: KeyValuePair;
    dryMatter: KeyValuePair;
};

type SensitivityProperties = {
    bruising: KeyValuePair;
    mechanicalDamage: KeyValuePair;
    growthCracks: KeyValuePair;
    secondaryGrowth: KeyValuePair;
    sencor: KeyValuePair;
    drought: KeyValuePair;
    hollowHeart: KeyValuePair;
};

type ResistanceProperties = {
    yVirus: KeyValuePair;
    yntnVirus: KeyValuePair;
    spraing: KeyValuePair;
    tuberBlight: KeyValuePair;
    foliageBlight: KeyValuePair;
    fusarium: KeyValuePair;
    commonScab: KeyValuePair;
    potatoCancer: PropertiesSection<{
        f1: KeyValuePair;
        f2: KeyValuePair;
        f6: KeyValuePair;
        f18: KeyValuePair;
    }>;
    nematodes: PropertiesSection<{
        ro1: KeyValuePair;
        ro23: KeyValuePair;
        pa2: KeyValuePair;
        pa3: KeyValuePair;
    }>;
    silverScurf: KeyValuePair;
    earlyBlight: KeyValuePair;
    leafRoll: KeyValuePair;
};

type PlantingProperties = {
    sizes: PropertiesSection<{
        small: {
            key: string;
            spacing: KeyValuePair;
            quantity: KeyValuePair;
            plants: KeyValuePair;
        };
        medium: {
            key: string;
            spacing: KeyValuePair;
            quantity: KeyValuePair;
            plants: KeyValuePair;
        };
        large: {
            key: string;
            spacing: KeyValuePair;
            quantity: KeyValuePair;
            plants: KeyValuePair;
        };
    }>;
};

type FertilizationProperties = {
    nitrogen: {
        key: string;
        amount: KeyValuePair;
        application: KeyValuePair;
    };
    phosphorus: KeyValuePair;
    potassium: {
        key: string;
        amount: KeyValuePair;
        type: KeyValuePair;
    };
    additional: KeyValuePair;
};

type StorageProperties = {
    pretreatment: ArraySection;
    harvesting: ArraySection;
};

type ContactsProperties = {
    company: KeyValuePair;
    phone: KeyValuePair;
    website: KeyValuePair;
};

// Main type for a single variety
type VarietyData = {
    name: KeyValuePair;
    origin: KeyValuePair;
    mainCharacteristics: ArraySection;
    physicalCharacteristics: PropertiesSection<PhysicalCharacteristicsProperties>;
    sensitivity: PropertiesSection<SensitivityProperties>;
    resistance: PropertiesSection<ResistanceProperties>;
    planting: PropertiesSection<PlantingProperties>;
    fertilization: PropertiesSection<FertilizationProperties>;
    storage: PropertiesSection<StorageProperties>;
    contacts: PropertiesSection<ContactsProperties>;
};

// Final type for all varieties
type VarietiesData = {
    [varietyKey: string]: VarietyData;
};

// Export the type for use in your project
export type {VarietiesData, VarietyData};

export const varietiesData: VarietiesData = {
    agria: {
        name: {
            key: 'Име',
            value: 'АГРИЯ',
        },
        origin: {
            key: 'Произход',
            value: 'Quarta x Semlo',
        },

        mainCharacteristics: {
            key: 'Основни характеристики',
            value: [
                'Подходящ за пържени картофи',
                'Сравнително устойчив на Y-вирус',
                'Почти без обезцветяване',
            ],
        },

        physicalCharacteristics: {
            key: 'Физически характеристики',
            properties: {
                skinColor: {
                    key: 'Цвят на кожата',
                    value: 'Жълт',
                },
                coreColor: {
                    key: 'Цвят сърцевина',
                    value: 'Жълт',
                },
                fryingQuality: {
                    key: 'Качество за пържене',
                    value: 'Отлично',
                },
                tuberShape: {
                    key: 'Форма на клубените',
                    value: 'Овално-продълговата',
                },
                tubersPerPlant: {
                    key: 'Клубени на растение',
                    value: '8 - 9',
                },
                maturity: {
                    key: 'Зрялост',
                    value: 'Късна',
                },
                dormancyPeriod: {
                    key: 'Период на покой',
                    value: 'Дълъг',
                },
                seedFruits: {
                    key: 'Семенни плодове',
                    value: 'Многобройни',
                },
                cookingType: {
                    key: 'Тип за готвене',
                    value: 'BC',
                },
                averageTuberLength: {
                    key: 'Средна дължина клубени',
                    value: '107',
                },
                washability: {
                    key: 'Възможност за измиване',
                    value: 'Доста добра',
                },
                underwaterWeight: {
                    key: 'Подводно тегло',
                    value: '390 - 410',
                },
                dryMatter: {
                    key: 'Съдържание на суха маса',
                    value: '21 - 22 %',
                },
            },
        },

        sensitivity: {
            key: 'Чувствителност',
            properties: {
                bruising: {
                    key: 'Натъртване',
                    value: 'Слабо чувствителен',
                },
                mechanicalDamage: {
                    key: 'Механични повреди',
                    value: 'Чувствителен',
                },
                growthCracks: {
                    key: 'Пукнатини при растеж',
                    value: 'Слабо чувствителен',
                },
                secondaryGrowth: {
                    key: 'Вторичен растеж',
                    value: 'Слабо чувствителен',
                },
                sencor: {
                    key: 'Сенкор (Метрибузин)',
                    value: 'Слабо чувствителен',
                },
                drought: {
                    key: 'Суша',
                    value: 'Слабо чувствителен',
                },
                hollowHeart: {
                    key: 'Кухи сърцевини',
                    value: 'Доста чувствителен',
                },
            },
        },

        resistance: {
            key: 'Устойчивост',
            properties: {
                yVirus: {
                    key: 'Y-вирус',
                    value: 'Слабо възприемчив',
                },
                yntnVirus: {
                    key: 'Yntn вирус',
                    value: 'Слабо възприемчив',
                },
                spraing: {
                    key: 'Спрейнг',
                    value: 'Слабо възприемчив',
                },
                tuberBlight: {
                    key: 'Мана по клубените',
                    value: 'Слабо възприемчив',
                },
                foliageBlight: {
                    key: 'Мана по листата',
                    value: 'Възприемчив',
                },
                fusarium: {
                    key: 'Фузариум',
                    value: 'Слабо възприемчив',
                },
                commonScab: {
                    key: 'Обикновена краста',
                    value: 'Възприемчив',
                },
                potatoCancer: {
                    key: 'Рак по картофите',
                    properties: {
                        f1: {
                            key: 'F1',
                            value: 'Устойчив / 9',
                        },
                        f2: {
                            key: 'F2',
                            value: '- / -',
                        },
                        f6: {
                            key: 'F6',
                            value: 'Неустойчив / 6',
                        },
                        f18: {
                            key: 'F18',
                            value: '- / -',
                        },
                    },
                },
                nematodes: {
                    key: 'КЦН',
                    properties: {
                        ro1: {
                            key: 'Ro1',
                            value: 'Устойчив / 9',
                        },
                        ro23: {
                            key: 'Ro2/3',
                            value: '- / -',
                        },
                        pa2: {
                            key: 'Pa2',
                            value: 'Възприемчив / 2',
                        },
                        pa3: {
                            key: 'Pa3',
                            value: 'Възприемчив / 2',
                        },
                    },
                },
                silverScurf: {
                    key: 'Сребриста краста',
                    value: 'Възприемчив',
                },
                earlyBlight: {
                    key: 'Ранен пригор',
                    value: '- / -',
                },
                leafRoll: {
                    key: 'Листно завиване',
                    value: '- / -',
                },
            },
        },

        planting: {
            key: 'Засаждане',
            properties: {
                sizes: {
                    key: 'Размери',
                    properties: {
                        small: {
                            key: '28/35 мм',
                            spacing: {
                                key: 'Разстояние',
                                value: '24 см × 75 см',
                            },
                            quantity: {
                                key: 'Количество',
                                value: '1.600 кг/ха',
                            },
                            plants: {
                                key: 'Растения',
                                value: '60.000 растения/ха',
                            },
                        },
                        medium: {
                            key: '35/50 мм',
                            spacing: {
                                key: 'Разстояние',
                                value: '28 см × 75 см',
                            },
                            quantity: {
                                key: 'Количество',
                                value: '3.100 кг/ха',
                            },
                            plants: {
                                key: 'Растения',
                                value: '47.000 растения/ха',
                            },
                        },
                        large: {
                            key: '50/55 мм',
                            spacing: {
                                key: 'Разстояние',
                                value: '33 см × 75 см',
                            },
                            quantity: {
                                key: 'Количество',
                                value: '4.600 кг/ха',
                            },
                            plants: {
                                key: 'Растения',
                                value: '44.000 растения/ха',
                            },
                        },
                    },
                },
            },
        },

        fertilization: {
            key: 'Торене',
            properties: {
                nitrogen: {
                    key: 'Азот',
                    amount: {
                        key: 'Количество',
                        value: '200 кг/ха',
                    },
                    application: {
                        key: 'Приложение',
                        value: '2/3 преди засаждане и 1/3 по време на клубенообразуване',
                    },
                },
                phosphorus: {
                    key: 'Фосфор',
                    value: 'Стандартни местни препоръки',
                },
                potassium: {
                    key: 'Калий',
                    amount: {
                        key: 'Количество',
                        value: '250 кг/ха',
                    },
                    type: {
                        key: 'Тип',
                        value: 'нискохлорен калий',
                    },
                },
                additional: {
                    key: 'Допълнително торене',
                    value: 'Прилагайте Mg, Mn, Ca и B като листни торове',
                },
            },
        },

        storage: {
            key: 'Съхранение',
            properties: {
                pretreatment: {
                    key: 'Предварителна обработка',
                    value: [
                        'Съхранявайте семенните картофи с помощта на механична охладителна система, за да предотвратите физиологично стареене',
                        'Аклиматизирайте преди засаждане',
                        'Почвена температура от поне 10°C е от съществено значение за успешно начало',
                        'Приложете третиране срещу Ризоктония, Сребриста краста и Черни петна по време на засаждане',
                    ],
                },
                harvesting: {
                    key: 'Прибиране на реколтата',
                    value: [
                        'Започнете прибирането на реколтата най-малко три седмици след унищожаване на стъблата',
                        'Агрия е чувствителна към натъртване, причинено от механични повреди',
                        'Препоръчва се температура от поне 14°C по време на зарастване на нараняванията',
                        'След това постепенно намалете температурата на съхранение до минимум 7 - 8°C',
                    ],
                },
            },
        },

        contacts: {
            key: 'Контакти',
            properties: {
                company: {
                    key: 'Име',
                    value: 'АгриМатик',
                },
                phone: {
                    key: 'Телефон',
                    value: '+359 876 962 484',
                },
                website: {
                    key: 'Уебсайт',
                    value: 'www.agrimatic.bg',
                },
            },
        },
    },
};
