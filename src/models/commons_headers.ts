export interface CommonsDatiTrasmissione {
       idTrasmittente: IDFiscaleIVA;
       /**
        * numero identificativo lato integratore, non ha impatto all'interno del sistema di interscambio
        */
       progressivoInvio: number;
       /**
        * codice di destinatario
        * per le PA, lungo 6 caratteri corrispondenti
        * al codice dell'ufficio di destinazione
        * per privati, lungo 7 caratteri corrispondente
        * al codice assegnato dal Sdi ai soggetti che hanno accreditato
        * un canaale; qualora il destinatario non abbia accreditato un
        * canale presso SdI deve essere valorizzato come tutti 0:
        * '0000000'
        *
        */
       codiceDestinatario: string;
       pecDestinatario?: string;
}

export interface IDFiscaleIVA {
       /**
        * codice nazione ISO 3166-1 alpha-2 code
        */
       idPaese: string;
       /**
        * codice identificativo fiscale
        */
       idCodice: string;
}
export interface AnagraficaBase {
       /**
        * ditta denominazinoe o ragione sociale (ditta,impresa,società,ente)
        * da valorizzare solo se non sono valorizzati gli elementi
        * nome e cognome
        */
       denominazione?: string;
       /**
        * nome della persona fisica. Da valorizzare insieme a cognome
        * e solo se non valorizzato denominazione
        */
       nome?: string;
       /**
        * cognome della persona fisica. Da valorizzare insieme a nome
        * e solo se non valorizzato denominazione
        */
       cognome?: string;

}

export interface Sede {
       /**
        * indirizzo della sede, puo includere il numero civico
        */
       indirizzo: string;
       /**
        * numero civico, se presente in indirizzo si può omettere
        */
       numeroCivico?: string;
       /**
        * cap
        */
       cap: string;
       /**
        * comune
        */
       comune: string;
       /**
        * provincia, da valorizzare se nazione = IT
        */
       provincia?: string;
       /**
        * codice nazione ISO 3166-1 alpha-2 code
        */
       nazione: string;
}

export interface RappresentanteFiscaleBase extends AnagraficaBase {
       idFiscaleIVA: IDFiscaleIVA;
}

export interface REA {
       /**
        * sigla provincia: RM, MI, ...
        */
       provinciaUfficio?: string;
       numeroREA?: string;
       /**
        * capitale sociale espresso in decimale con delimitatore '.'
        */
       capitaleSociale: number;
       /**
        * SU: socio unico
        * SM: più soci
        */
       socioUnico: 'SU' | 'SM';
       /**
        * LS: in liquidazione
        * LN: non in liquidazione
        */
       statoLiquidazione?: 'LS' | 'LN';
}

export interface IdentificativiFiscali {
       idFiscaleIVA?: IDFiscaleIVA;
       codiceFiscale?: string;
}

export interface CommonHeaders {  
       /**
        * Da valorizzare  in tutti i casi in cui la fattura è emessa da un soggetto diverso dal cedente/prestatore; indica se la fattura sia  emessa dal cessionario/committente oppure da un terzo per conto del cedente/prestatore
        * CC: cessionario/committente
        * TZ: terzo
        */
       soggettoEmittente: 'CC' | 'TZ';
}