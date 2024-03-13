import {
  CommonsDatiTrasmissione,
  AnagraficaBase,
  IDFiscaleIVA,
  Sede,
  RappresentanteFiscaleBase,
  REA,
  IdentificativiFiscali,
  CommonHeaders,
} from './commons_headers';
import { RegimeFiscaleFatturaSemplificata } from './regime_fiscale';

interface DatiTrasmissioneFatturaSemplificata extends CommonsDatiTrasmissione {
  formatoTrasmissione: FormatoTrasmissioneFatturaSemplificata;
}

interface CedentePrestatoreFatturaSemplificata
  extends AltriIdentificativiFiscali {
  idFiscaleIVA: IDFiscaleIVA;
  codiceFiscale?: string;
  iscrizioneREA?: REA;
  regimeFiscale: RegimeFiscaleFatturaSemplificata;
}

enum FormatoTrasmissioneFatturaSemplificata {
  /**
   * fattura semplificata
   */
  FSM10 = 'FSM10',
}

interface CessionarioCommittenteFatturaSemplificata {
  identificativiFiscali: IdentificativiFiscali;
  altriIdentificativi: AltriIdentificativiFiscali;
}

interface AltriIdentificativiFiscali extends AnagraficaBase {
  sede: Sede;
  stabileOrganizzazione?: Sede;
  rappresentanteFiscale?: RappresentanteFiscaleBase;
}

interface FatturaElettronicaSemplificataHeader extends CommonHeaders {
  datiTrasmissione: DatiTrasmissioneFatturaSemplificata;
  cedentePrestatore: CedentePrestatoreFatturaSemplificata;
  cessionarioCommittente: CessionarioCommittenteFatturaSemplificata;
}
