import { CommonsDatiTrasmissione, AnagraficaBase, IDFiscaleIVA, Sede, RappresentanteFiscaleBase, REA, IdentificativiFiscali, CommonHeaders } from "./commons_headers";
import { BaseDatiAnagrafici } from "./fattura_header";

interface DatiTrasmissioneFatturaSemplificata extends CommonsDatiTrasmissione {
       formatoTrasmissione: FormatoTrasmissioneFatturaSemplificata;
}

interface CedentePrestatoreFatturaSemplificata extends AltriIdentificativiFiscali {
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
       identificativiFiscali: IdentificativiFiscali,
       altriIdentificativi: AltriIdentificativiFiscali,
}

interface AltriIdentificativiFiscali extends AnagraficaBase {
       sede: Sede;
       stabileOrganizzazione?: Sede;
       rappresentanteFiscale?: RappresentanteFiscaleBase;
}

/**
 * Tipi di Regime Fiscale.
 */
enum RegimeFiscaleFatturaSemplificata {
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
}


interface FatturaElettronicaSemplificataHeader extends CommonHeaders {
       datiTrasmissione: DatiTrasmissioneFatturaSemplificata;
       cedentePrestatore: CedentePrestatoreFatturaSemplificata;
       cessionarioCommittente: CessionarioCommittenteFatturaSemplificata;
}
