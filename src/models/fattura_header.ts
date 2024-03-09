interface IDFiscaleIVA {
  /**
   * codice nazione ISO 3166-1 alpha-2 code
   */
  idPaese: string;
  /**
   * codice identificativo fiscale
   */
  idCodice: string;
}

enum FormatoTrasmissione {
  /**
   * fatture verso privati
   */
  FPR12 = 'FPR12',
  /**
   * fatture verso pubblica amministrazione PA
   */
  FPA12 = 'FPA12',
}
interface Contatti {
  telefono?: string;
  email?: string;
  fax?: string;
}

interface Anagrafica {
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
  /**
   * titolo onorifico
   */
  titolo?: string;
  /**
   * numero del codice eori (Economic Operator And Identification)
   */
  codEORI?: string;
}

interface InfoAlbo {
  alboProfessionale: string;
  provinciaAlbo: string;
  numeroIscrizioneAlbo: string;
  dataIscrizioneAlbo: Date;
}

/**
 * Tipi di Regime Fiscale.
 */
enum RegimeFiscale {
  /**
   * (Ordinario)
   */
  ORDINARIO = 'RF01',
  /**
   * (Contribuenti minimi (art.1, c.96-117, L. 244/07))
   */
  CONTRIBUENTI_MINIMI = 'RF02',
  /**
   * (Agricoltura e attività connesse e pesca (artt.34 e 34-bis, DPR 633/72))
   */
  AGRICOLTURA_E_ATTIVITA_CONNESSE_E_PESCA = 'RF04',
  /**
   * (Vendita sali e tabacchi (art.74, c.1, DPR. 633/72))
   */
  VENDITA_SALI_E_TABACCHI = 'RF05',
  /**
   * (Commercio fiammiferi (art.74, c.1, DPR 633/72))
   */
  COMMERCIO_FIAMMIFERI = 'RF06',
  /**
   * (Editoria (art.74, c.1, DPR 633/72))
   */
  EDITORIA = 'RF07',
  /**
   * (Gestione servizi telefonia (art.74, c.1, DPR 633/72))
   */
  GESTIONE_SERVIZI_TELEFONIA = 'RF08',
  /**
   * (Rivendita documenti di trasporto pubblico e di sosta (art.74, c.1, DPR 633/72))
   */
  RIVENDITA_DOCUMENTI_DI_TRASPORTO_PUBBLICO_E_DI_SOSTA = 'RF09',
  /**
   * (Intrattenimenti, giochi e altre attività di cui alla tariffa allegata al DPR 640/72 (art.74, c.6, DPR 633/72))
   */
  INTRATTENIMENTI_GIOCHI_E_ALTRE_ATTIVITA_DI_CUI_ALLA_TARIFFA_ALLEGATA_AL_DPR_640_72 = 'RF10',
  /**
   * (Agenzie viaggi e turismo (art.74-ter, DPR 633/72))
   */
  AGENZIE_VIAGGI_E_TURISMO = 'RF11',
  /**
   * (Agriturismo (art.5, c.2, L. 413/91))
   */
  AGRITURISMO = 'RF12',
  /**
   * (Vendite a domicilio (art.25-bis, c.6, DPR 600/73))
   */
  VENDITE_A_DOMICILIO = 'RF13',
  /**
   * (Rivendita beni usati, oggetti d’arte, d’antiquariato o da collezione (art.36, DL 41/95))
   */
  RIVENDITA_BENI_USATI_OGGETTI_DARTE_DANTIQUARIATO_O_DA_COLLEZIONE = 'RF14',
  /**
   * (Agenzie di vendite all’asta di oggetti d’arte, antiquariato o da collezione (art.40-bis, DL 41/95))
   */
  AGENZIE_DI_VENDITE_ALLASTA_DI_OGGETTI_DARTE_ANTIQUARIATO_O_DA_COLLEZIONE = 'RF15',
  /**
   * (IVA per cassa P.A. (art.6, c.5, DPR 633/72))
   */
  IVA_PER_CASSA_P_A = 'RF16',
  /**
   * (IVA per cassa (art. 32-bis, DL 83/2012))
   */
  IVA_PER_CASSA = 'RF17',
  /**
   * (Altro)
   */
  ALTRO = 'RF18',
  /**
   * (Regime forfettario (art.1, c.54-89, L. 190/2014))
   */
  REGIME_FORFETTARIO = 'RF19',
}

interface Sede {
  /**
   * indirizzo della sede, puo includere il numero civico
   */
  indirizzo: string;
  /**
   * numero civico, se presente in indirizzo si può omettere
   */
  numeroCivico: string;
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

interface REA {
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

interface BaseDatiAnagrafici {
  idFiscaleIVA: IDFiscaleIVA;
  codiceFiscale?: string;
  anagrafica: Anagrafica;
}

interface DatiAnagraficiPrestatore extends BaseDatiAnagrafici {
  infoAlbo?: InfoAlbo;
  regimeFiscale: RegimeFiscale;
}

type DatiAnagraficiCommittente = Partial<
  Pick<BaseDatiAnagrafici, 'idFiscaleIVA'>
> &
  Omit<BaseDatiAnagrafici, 'idFiscaleIVA'>;

interface CedentePrestatore {
  datiAnagrafici: DatiAnagraficiPrestatore;
  sede: Sede;
  stabileOrganizzazione?: Sede;
  iscrizioneREA?: REA;
  contatti?: Contatti;
  /**
   * codice identificativo ai fini amministrativo-contabili
   */
  riferimentoAmministrazione?: string;
}

interface DatiTrasmissione {
  idTrasmittente: IDFiscaleIVA;
  /**
   * numero identificativo lato integratore, non ha impatto all'interno del sistema di interscambio
   */
  progressivoInvio: number;
  formatoTrasmissione: FormatoTrasmissione;
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
  contattiTrasmittente?: Contatti;
  pecDestinatario?: string;
}

interface RappresentanteFiscale {
  datiAnagrafici: BaseDatiAnagrafici;
}

interface CessionarioCommittente {
  datiAnagrafici: DatiAnagraficiCommittente;
  sede: Sede;
  stabileOrganizzazione?: Sede;
  rappresentanteFiscale?: {
    idFiscaleIVA: IDFiscaleIVA;
    denominazione?: string;
    nome?: string;
    cognome?: string;
  };
}

interface TerzoIntermediarioOSoggettoEmittente{
  // TODO: rinominare DatiAnagraficiCommittente
  datiAnagrafici: DatiAnagraficiCommittente;

}

interface FatturaElettronicaHeader {
  datiTrasmissione: DatiTrasmissione;
  cedentePrestatore: CedentePrestatore;
  rappresentanteFiscale: RappresentanteFiscale;
  cessionario: CessionarioCommittente;
  terzoIntermediario: TerzoIntermediarioOSoggettoEmittente;
  /**
   * da valorizzare in tutti i casi in cui la fattura è emessa da un soggetto diverso da cedente/prestatore; indica se la fattura è emessa dal cessionario/committente oppure da un terzo per conto del cedente/prestatore
   * CC: cessionario/committente
   * TZ: terzo
   */
  soggettoEmittente: 'CC' | 'TZ';
}
