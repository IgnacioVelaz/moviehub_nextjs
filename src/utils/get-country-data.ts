export const countryCodes = {
  AO: "Angola",
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BO: "Bolivia",
  BR: "Brazil",
  BZ: "Belize",
  CA: "Canada",
  CH: "Switzerland",
  CL: "Chile",
  CO: "Colombia",
  CR: "Costa Rica",
  CV: "Cape Verde",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DK: "Denmark",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ES: "Spain",
  FI: "Finland",
  FR: "France",
  GB: "United Kingdom",
  GH: "Ghana",
  GR: "Greece",
  GT: "Guatemala",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IS: "Iceland",
  IT: "Italy",
  KR: "South Korea",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  ML: "Mali",
  MU: "Mauritius",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NZ: "New Zealand",
  PE: "Peru",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  PY: "Paraguay",
  SE: "Sweden",
  SG: "Singapore",
  SI: "Slovenia",
  SK: "Slovakia",
  TH: "Thailand",
  TR: "Turkey",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  US: "United States",
  VE: "Venezuela",
  ZA: "South Africa",
  ZW: "Zimbabwe",
};

export type UserCountry = {
  name: string;
  code: keyof typeof countryCodes;
};

export const getCountryData = (
  countryCode: string | null | undefined,
): UserCountry => {
  const isValidCountry =
    countryCode !== null &&
    countryCode &&
    Object.prototype.hasOwnProperty.call(countryCodes, countryCode);

  if (isValidCountry) {
    return {
      name: countryCodes[countryCode as keyof typeof countryCodes],
      code: countryCode as keyof typeof countryCodes,
    };
  }

  return {
    name: "United States",
    code: "US",
  };
};
