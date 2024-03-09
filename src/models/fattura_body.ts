import { TipoRitenuta } from './tipo_ritenuta';
import { TipoDocumento } from './tipo_documento';
import { TipoCassa } from './tipo_cassa';

interface DatiRitenuta {
  tipoRitenuta: TipoRitenuta;
  /**
   * formato numerico con decimali separati dal punto '.'
   */
  importoRitenuta: number;
  /**
   * importo percentuale aliquota, decimali separati dal punto '.'
   */
  percentualeAliquotaRitenuta: number;
  /**
   * causale pagamento, quella del MOD CU, codifiche ammesse come da MOD CU,
   */
  causalePagamento: string;
}

interface DatiBollo {
  /**
   * bollo assolto ai sensi del decreto MEF 17 giugno 2014 (art.6)
   * unico valore ammesso: SI
   */
  bolloVirtuale: 'SI';
  /**
   * importo del bollo, valori decimali separati dal punto '.'
   */
  importoBollo: number;
}

interface DatiCassaPrevidenziale {
  tipoCassa: TipoCassa;
  /**
   * importo del aliquotaCassa, valori decimali separati dal punto '.'
   */
  percentualeAliquotaCassa: number;
  ritenuta: string;
}

interface DatiGeneraliDocumento {
  tipoDocumento: TipoDocumento;
  /**
   * codice ISO 4217 alpha-3:2001 della valuta utilizza per l'indicazione dell'importo
   */
  divisa: string;
  /**
   * date ISO 8601:2004
   */
  data: Date;
  /**
   * numero della fattura
   */
  numero: string;
  datiRitenuta?: DatiRitenuta;
  datiBollo?: DatiBollo;
}

interface DatiGenerali {}

interface FatturaElettronicaBody {}
