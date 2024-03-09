import { TipoRitenuta } from './tipo_ritenuta';
import { TipoDocumento } from './tipo_documento';
import { TipoCassa } from './tipo_cassa';
import { NaturaAliquotaZero } from './natura_aliquota_zero';

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
  /**
   * importo di contributo per la cassa di appartenenza, valori decimali separati dal punto '.'
   */
  importoContributoCassa: number;
  /**
   * importo su quale applicare il contributo cassa previdenziale, valori decimali separati dal punto '.'
   */
  imponibileCassa?: number;
  /**
   * importo del aliquota iva, valori decimali separati dal punto '.'
   */
  percentualeAliquotaIVA: number;
  /**
   * indica se il contributo cassa è soggetto a ritenuta,
   * valore ammesso: 'SI'
   */
  ritenuta?: 'SI';
  /**
   * nei casi di aliquota IVA pari a 0
   */
  natura?: NaturaAliquotaZero;
  /**
   * codice alfanumerico ai fini amministrativo-contabili
   */
  riferimentoAmministrazione?: string;
}

interface ScontoMaggiorazione {
  /**
   * indica se tratta ddi scono o di maggiorazione
   * SC: sconto
   * MG: maggiorazione
   */
  tipo: 'SC' | 'MG';
  /**
   * percentuale di sconto o di maggiorazione, decimali espressi con il punto '.'
   */
  percentuale?: number;
  /**
   * importo di sconto o di maggiorazione, decimali espressi con il punto '.'
   */
  importo?: number;
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
  datiRitenuta?: DatiRitenuta[];
  datiBollo?: DatiBollo;
  datiCassaPrevidenziale?: DatiCassaPrevidenziale[];
  scontoMaggiorazione?: ScontoMaggiorazione[];
  /**
   * importo totale del documento al netto dell'eventuale sconto e comprensivo di imposta a debito del cessionario/committente, decimali espressi con il punto '.'
   */
  importoTotaleDocumento?: number;
  /**
   * eventuale arrotondamento sul totale documento (ammette anche il segno negativo), decimali espressi con il punto '.'
   */
  arrotondamento?: number;
  /**
   * descrizione della causale del documento
   */
  causale?: string[];
  /**
   * indica se il documento è stato emesso secondo modalità e termini stabiliti
   * con decreto ministeriale ai sensi dell'articolo 73 del DPR 633/72
   * (ciò consente al cedente/prestatore l'emissione nello stesso anno
   * di più documenti aventi stesso numero)
   * valore ammesso: SI
   */
  art73?: 'SI';
}

interface DatiOrdineAcquisto {
  /**
   * linea di dettaglio della fattura a cui si fa riferimento (se
   * il riferimento è all'intera fattura, non viene valorizzato)
   */
  riferimentoNumeroLinea?: number[];
  /**
   * numero del documento
   */
  idDocumento: string;
  /**
   * data del documento formato ISO 8601:2004
   */
  data?: Date;
  /**
   * identificativo della singola voce e all'interno del documento
   * (ad esempio, nel caso di ordine di acquisto, è il numero della
   * linea dell'ordine di acquisto, oppure, nel caso di contratto, è
   * il numero di contratto, etc...)
   */
  numItem?: string;
  /**
   * codice della commessa o della convenzione
   */
  codiceECommessaConvenzione?: string;
  /**
   * rappresenta il codice gestito dal CIPE che caratterizza ogni progetto
   * di investimento pubblico o (Codice Unitario Progetto)
   */
  codiceCUP?: string;
  /**
   * rarppresenta il codice e l'identificativo della Gara
   */
  codiceGIG?: string;
}

interface DatiSAL {
  /**
   * fase dello stato di avanzamento cui il documento si riferisce
   */
  riferimentoFase: number;
}

interface DatiDDT {
  /**
   * numero del documento di trasporto
   */
  numeroDDT: string;
  /**
   * data del documento formato ISO 8601:2004
   */
  dataDDT: Date;
  /**
   * linea di dettaglio della fattura cui si rifersce il DDT
   * (non viene valorizzato se il riferimento è all'intera fattura)
   */
  riferimentoNumeroLinea?: number[];
}

interface DatiGenerali {
  datiGeneraliDocumento: DatiGeneraliDocumento;
  datiOrdineAcquisto?: DatiOrdineAcquisto[];
  /**
   * blocco contenente le informazioni relative relative al contratto
   */
  datiContratto?: DatiOrdineAcquisto[];
  /**
   * blocco contenente le informazioni relative alla convenzione
   */
  datiConvenzione?: DatiOrdineAcquisto[];
  /**
   * blocco contenente le informazioni relative ai dati presenti
   * sul sistema gestionale in uso presso la PA (Agenzie Fiscali)
   * riguardanti la fase di ricezione
   */
  datiRicezione?: DatiOrdineAcquisto[];
  /**
   * blocco contenente le informazioni relative alle fatture
   * precedentemente trasmesse e alle quali si collega il documento
   * presente; riguarda i casi di invio di nota di credito e/o di fatture
   * di conguaglio a fronte di precedenti fatture di acconto
   */
  datiFattureCollegate?: DatiOrdineAcquisto[];
  /**
   * blocco da valorizzare nei casi di fattura per stato di avanzamento
   */
  datiSAL?: DatiSAL[];
  /**
   * blocco da valorizzare nei casi di fattura differita, per indicare
   * il documento cui cui è stato consegnato il bene (gli elementi
   * informativi del blocco possono essere ripetuti se la fattura fa riferimento
   * a più consegne e quindi a più documenti di trasporto)
   */
  datiDDT?: DatiDDT[];
}

interface FatturaElettronicaBody {}
