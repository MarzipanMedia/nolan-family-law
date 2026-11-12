/**
 * THE OFFICE CONFIG.
 *
 * The only place an office's name, address, phone number or map link is written.
 * PhoneLink, the header phone strip (D-30), the footer and the LegalService schema read
 * from here. `npm run check` fails if a phone number or tel: link appears anywhere else.
 *
 * Name, address and phone must match each office's Google Business Profile exactly.
 */
import type { RouteKey } from './routes.ts';

export type OfficeKey = 'sydney' | 'melbourne';

export interface Office {
  key: OfficeKey;
  city: string;
  state: string;
  stateName: string;
  /** Name as it appears on the Google Business Profile. */
  name: string;
  /** Number as displayed, e.g. "(02) 8014 5885". */
  phoneDisplay: string;
  /** E.164, used for tel: links. */
  phoneE164: string;
  /** Schema.org format. */
  phoneSchema: string;
  /** Street address lines as displayed. */
  street: string;
  /** Short form for the header strip and running copy. */
  streetShort: string;
  /** Full postal address as written in page copy. */
  addressDisplay: string;
  suburb: string;
  postcode: string;
  mapUrl: string;
  /** The city hub. Its URL is the office's schema @id base. */
  hub: RouteKey;
}

export const offices: Record<OfficeKey, Office> = {
  sydney: {
    key: 'sydney',
    city: 'Sydney',
    state: 'NSW',
    stateName: 'New South Wales',
    name: 'Nolan Family Law & Mediation – Sydney',
    phoneDisplay: '(02) 8014 5885', // D-08
    phoneE164: '+61280145885',
    phoneSchema: '+61 2 8014 5885',
    street: 'Suite 3, Level 22, 25 Bligh St',
    streetShort: '25 Bligh Street',
    addressDisplay: 'Suite 3, Level 22, 25 Bligh Street, Sydney NSW 2000',
    suburb: 'Sydney',
    postcode: '2000',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nolan+Family+Law+%26+Mediation+25+Bligh+St+Sydney+NSW+2000',
    hub: 'sydneyHub',
  },
  melbourne: {
    key: 'melbourne',
    city: 'Melbourne',
    state: 'VIC',
    stateName: 'Victoria',
    name: 'Nolan Family Law & Mediation – Melbourne',
    phoneDisplay: '(03) 9088 8889',
    phoneE164: '+61390888889',
    phoneSchema: '+61 3 9088 8889',
    // No level until Ben confirms Level 23 or 33 against the Google Business Profile (Q-4).
    street: '385 Bourke St',
    streetShort: '385 Bourke Street',
    addressDisplay: '385 Bourke Street, Melbourne VIC 3000',
    suburb: 'Melbourne',
    postcode: '3000',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nolan+Family+Law+%26+Mediation+385+Bourke+St+Melbourne+VIC+3000',
    hub: 'melbourneHub',
  },
};

export const officeList: Office[] = [offices.sydney, offices.melbourne];

/** The office that leads on a page: the page's city, or Sydney where the page has none (D-30). */
export function leadOffice(city: 'sydney' | 'melbourne' | null): Office {
  return city === 'melbourne' ? offices.melbourne : offices.sydney;
}

export function otherOffice(office: Office): Office {
  return office.key === 'sydney' ? offices.melbourne : offices.sydney;
}

export const telHref = (office: Office) => `tel:${office.phoneE164}`;
