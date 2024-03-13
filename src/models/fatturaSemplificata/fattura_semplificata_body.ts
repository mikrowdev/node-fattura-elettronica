import { Allegati, DatiGeneraliDocumentoBase } from "../commons/commons_body";
import { TipoDocumentoFatturaSemplificata } from "../codifiche/tipo_documento";
import { TipoNaturaFatturaSemplificata } from "../codifiche/tipo_natura";

interface DatiGeneraliDocumentoFatturaSemplificata extends DatiGeneraliDocumentoBase {
       /**
        * Tipologia di documento
        */
       TipoDocumentoFatturaOrdinaria: TipoDocumentoFatturaSemplificata;
       /**
        * Bollo assolto ai sensi del decreto MEF 17 giugno 2014 (art. 6)
        * valore ammesso: 'SI'
        */
       bolloVirtuale?: 'SI';
}

interface DatiFatturaRettificata {
       /**
        * numero della fattura rettificata
        */
       numeroFR: string;
       /**
        * data della fattura rettificata
        */
       dataFR: Date;
       /**
        * Indicazioni specifiche degli elementi oggetto di rettifica
        * formato alfanumerico, lunghezza massima 200 caratteri
        */
       elementiRettificati: string;
}

interface DatiGeneraliFatturaSemplificata {
       /**
        * Blocco sempre obbligatorio contenente i dati generali della fattura
        */
       datiGeneraliDocumento: DatiGeneraliDocumentoFatturaSemplificata;
       /**
        * Blocco contenente le informazioni relative alla fattura rettificata. 
        * Vale per le fatture emesse ai sensi dell'articolo 26 DPR 633/72
        */
       datiFatturaRettificata?: DatiFatturaRettificata;
}

interface DatiIvaFatturaSemplificata {
       /**
        * Ammontare dell'imposta. Si può indicare in alternativa all'elemento informativo aliquota
        */
       Imposta?: number;
       /**
        * Aliquota (%) IVA applicata. Si può indicare in alternativa all'elemento informativo Imposta
        */
       aliquota?: number;
}

interface DatiBeniEServiziFatturaSemplificata {
       /**
        * Natura e qualità dell'oggetto della cessione/prestazione
        */
       descrizione: string;
       /**
        * Ammontare complessivo (comprensivo di imposta) 
        */
       importo: number;
       /**
        * Dati relativi all'imposta sul valore aggiunto
        */
       datiIva: DatiIvaFatturaSemplificata;
       /**
        * L'elemento serve per indicare il motivo (Natura dell'operazione) per il quale l'emittente della fattura non indica aliquota IVA
        */
       natura?: TipoNaturaFatturaSemplificata;
       /**
        * Norma di riferimento
        */
       riferimentoNormativo?: string;
}

interface FatturaElettronicaSemplificataBody {
       datiGenerali: DatiGeneraliFatturaSemplificata;
       datiBeniServizi: DatiBeniEServiziFatturaSemplificata;
       allegati?: Allegati[];
}