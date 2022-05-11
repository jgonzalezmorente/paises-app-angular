export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc?: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: { [key: string]: Currency };
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: string[];
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    spa?: string;
    rus?: string;
    uzb?: string;
    aze?: string;
    kir?: string;
    lit?: string;
    por?: string;
    zho?: string;
    kaz?: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    spa?: Translation;
    rus?: Translation;
    uzb?: Translation;
    aze?: Translation;
    kir?: Translation;
    lit?: Translation;
    por?: Translation;
    zho?: Translation;
    kaz?: Translation;
}

export interface Translation {
    official: string;
    common: string;
}
