import {
  AnagraficaBase,
  CommonHeaders,
  CommonsDatiTrasmissione,
  IdentificativiFiscali,
  IDFiscaleIVA,
  RappresentanteFiscaleBase,
  REA,
} from '../commons/commons_headers';
import { RegimeFiscaleFatturaOrdinaria } from '../codifiche/regime_fiscale';

enum FormatoTrasmissioneFatturaOrdinaria {
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

export interface AnagraficaCompleta extends AnagraficaBase {
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

export interface Sede {
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

export interface BaseDatiAnagrafici
  extends Omit<IdentificativiFiscali, 'idFiscaleIVA'> {
  idFiscaleIVA: IDFiscaleIVA;
  anagrafica: AnagraficaCompleta;
}

interface DatiAnagraficiPrestatore extends BaseDatiAnagrafici {
  infoAlbo?: InfoAlbo;
  regimeFiscale: RegimeFiscaleFatturaOrdinaria;
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
interface DatiTrasmissioneFatturaOrdinaria extends CommonsDatiTrasmissione {
  formatoTrasmissione: FormatoTrasmissioneFatturaOrdinaria;
}
interface RappresentanteFiscaleCompleto {
  datiAnagrafici: BaseDatiAnagrafici;
}

interface CessionarioCommittente {
  datiAnagrafici: DatiAnagraficiCommittente;
  sede: Sede;
  stabileOrganizzazione?: Sede;
  rappresentanteFiscale?: RappresentanteFiscaleBase;
}

interface TerzoIntermediarioOSoggettoEmittente {
  // TODO: rinominare DatiAnagraficiCommittente
  datiAnagrafici: DatiAnagraficiCommittente;
}

interface FatturaElettronicaHeader extends CommonHeaders {
  datiTrasmissione: DatiTrasmissioneFatturaOrdinaria;
  cedentePrestatore: CedentePrestatore;
  rappresentanteFiscale: RappresentanteFiscaleCompleto;
  cessionario: CessionarioCommittente;
  terzoIntermediario: TerzoIntermediarioOSoggettoEmittente;
}
