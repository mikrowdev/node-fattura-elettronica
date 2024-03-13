import { TipoRitenuta } from './tipo_ritenuta';
import { TipoDocumentoFatturaOrdinaria } from './tipo_documento';
import { TipoCassa } from './tipo_cassa';
import { TipoNaturaFatturaOrdinaria } from './tipo_natura';
import { Sede } from './fattura_header';
import { BaseDatiAnagrafici } from './fattura_header';
import { TipoPagamento } from './tipo_pagamento';
import { MetodiPagamento } from './modalita_pagamento';
import { Allegati, DatiGeneraliDocumentoBase } from './commons_body';
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
  natura?: TipoNaturaFatturaOrdinaria;
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

interface DatiGeneraliDocumento extends DatiGeneraliDocumentoBase {
  TipoDocumentoFatturaOrdinaria: TipoDocumentoFatturaOrdinaria;
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

interface DatiAnagraficitVettore extends BaseDatiAnagrafici {
  /**
   * numero identificativo della licenza di guida (es. numero patente)
   */
  numeroLicenzaGuida?: string;
}

interface DatiTrasporto {
  /**
   * blocco contenente i dati fiscali e anagrafici del vettore
   */
  datiAnagraficiVettore?: DatiAnagraficitVettore;
  /**
   * mezzo utilizzato per il trasporto
   */
  mezzoTrasporto?: string;
  /**
   * causale del trasporto
   */
  causaleTrasporto?: string;
  /**
   * numero dei colli trasportati
   */
  numeroColli?: number;
  /**
   * descrizione (natura,qualità,aspetto) relativi ai colli trasportati
   */
  descrizione?: string;
  /**
   * unità di misura riferita al peso della merce
   */
  unitaMisuraPeso?: string;
  /**
   * peso lordo della merce, decimali espressi con il punto '.'
   */
  pesoLordo?: number;
  /**
   * peso netto della merce, decimali espressi con il punto '.'
   */
  pesoNetto?: number;
  /**
   * data e ora del ritiro della merce in ISO 8601:2004
   */
  dataOraRitiro?: Date;
  /**
   * data di inizio dei trasporti ISO 8601:2004
   */
  dataInizioTrasporto?: Date;
  /**
   * codifica del termine di resa espresso secondo lo standard
   * ICC-Camera di Commercio Internazionale (Incoterms)
   * todo: aggiungere enum specifico https://it.wikipedia.org/wiki/Incoterms
   */
  tipoResa?: string;
  /**
   * dati dell'indirizzo di resa
   */
  indirizzoResa?: Sede;
  /**
   * data e ora della consegna della merce ISO 8601:2004
   */
  dataOraConsegna?: Date;
}

interface FatturaPrincipale {
  /**
   * numero della fattura relativa al trasporto di beni, da indicare
   * sulle fatture emesse dagli autotrasportatori per usufruire
   * delle agevolazioni in materia di registrazione e pagamento
   * dell'IVA
   */
  numeroFatturaPrincipale: string;
  /**
   * data della fattura ISO 8601:2004
   */
  dataFatturaPrincipale: Date;
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
  /**
   * blocco valorizzabile nel caso di fattura "accompagnata" per inserire
   * informazioni relative al trasporto
   */
  datiTrasporto?: DatiTrasporto;
  /**
   * blocco da valorizzare nei casi di fatture per operazioni accessorie
   * emesse dagli autotrasporatori per usufruire delle agevolazioni
   * in materia di registrazione e pagamento dell'IVA
   */
  fatturaPrincipale?: FatturaPrincipale;
}

interface CodiceArticolo {
  /**
   * indica la tipologia di codice articolo (per esempio,
   * TARI,CPV,EAN,SSC,...)
   */
  codiceTipo: string;
  /**
   * indica il valore del codice e articolo corrispondente alla
   * tipologia
   */
  codiceValore: string;
}

interface AltriDatiGestionali {
  /**
   * codice che identifica la tipologia di informazione
   */
  tipoDato: string;
  /**
   * elemento informativo in cui inserire un valore alfanumerico
   * riferito a tipoDato
   */
  riferimentoTesto?: string;
  /**
   * elemento informativo in cui inserire un valore alfanumerico
   * riferito a tipoDato, decimali espressi con il punto '.'
   */
  riferimentoNumero?: number;
  /**
   * elemento informativo in cui inserire una data riferita a tipoDato
   * ISO 8601:2004
   */
  riferimentoData?: Date;
}

interface DettaglioLinea {
  /**
   * numero della riga di dettaglio del documento
   */
  numeroLinea: number;
  /**
   * da valorizzare nei soli casi in cui si voglia utilizzare
   * la riga per rappresentare uno sconto/premio/abbuono ovvero
   * una spesa accessoria, valori ammessi:
   * SC: sconto
   * PR: premio
   * AB: abbuono
   * AC: spesa accessoria
   */
  tipoCessionePrestazione?: 'SC' | 'PR' | 'AB' | 'AC';
  /**
   * eventuale codifica dell'articolo (la molteplicita N del blocco
   * consente di gestire la presenza di più codifiche per ogni riga)
   */
  codiceArticolo?: CodiceArticolo[];
  /**
   * natura e qualità dell'oggetto della cessione/prestazione;
   * può fare anche riferimento a cessioni/prestazioni già oggetto
   * di un precedente documento emesse a titolo di anticipo/acconto
   * nel qual caso il valore dell'elemento prezzoUnitario e prezzoTotale
   * potranno essere valorizzati con segno negativo
   */
  descrizione: string;
  /**
   * dumero di unità cedute/erogate, i valori decimali espressi
   * con il punto '.'
   */
  quantita: number;
  /**
   * unità di misura riferita alla quantità
   */
  unitaMisura?: string;
  /**
   * data iniziale del periodo di riferimento cui si riferisce
   * l'eventuale servizio prestato ISO 8601:2004
   */
  dataInizioPeriodo?: Date;
  /**
   * data finlae del periodo di riferimento cui si riferisce
   * l'eventuale servizio prestato ISO 8601:2004
   */
  dataFinePeriodo?: Date;
  /**
   * prezzo unitario dei bene/servizio; nel caso di beni ceduti a titolo
   * di sconto, premio o abbuono, l'importo indicato
   * rappresenta il valore normale, valori decimali espressi con il
   * punto '.'
   */
  prezzoUnitario: number;
  /**
   * eventuale sconto o maggiorazione applicati al prezzo unitario
   */
  scontoMaggiorazione?: ScontoMaggiorazione[];
  /**
   * importo totale del bene/servizio (che tiene conto di eventuali
   * sconti/maggiorazini applicati al prezzo unitario) IVA esclusa
   * decimali espressi con il punto '.'
   */
  prezzoTotale: number;
  /**
   * aliquota % IVA applicata al bene/servizio, decimali espressi
   * con il punto '.'
   */
  percentualeAliquotaIVA: number;
  /**
   * da valorizzare solo in caso di cessione/prestazione soggetta a ritenuta
   * valore ammesso: SI
   */
  ritenuta?: 'SI';
  /**
   * nei casi di aliquota IVA pari a 0
   */
  natura?: TipoNaturaFatturaOrdinaria;
  /**
   * codice alfanumerico ai fini amministrativo-contabili
   */
  riferimentoAmministrazione?: string;
  /**
   * blocco che consente agli utenti di inserire, con riferimento ad
   * una linea di dettaglio, informazioni utili ai fini amminsistrativi
   * gestionali, etc..
   */
  altriDatiGestionali?: AltriDatiGestionali[];
}

interface DatiRiepilogo {
  /**
   * importo del aliquota iva, valori decimali separati dal punto '.'
   */
  percentualeAliquotaIVA: number;
  /**
   * nei casi di aliquota IVA pari a 0
   */
  natura?: TipoNaturaFatturaOrdinaria;
  /**
   * riepilogo degli importi di spese accessorie indicate nelle righe
   * di dettaglio linea tipoCessionePrestazione uguale a 'AC', tale importo
   * rappresenta una parte dell'ammontare contenuto nell'elemento
   * imponibileImporto, decimali espressi con il punto '.'
   */
  speseAccessorie?: number;
  /**
   * importo dell'arrotondamento eventualmente applicato alle somme
   * dei dati di dettaglio per riportarle al centesimo di euro, come
   * espresse nell'elemento imponibileImporto, decimali espressi con
   * il punto '.'
   */
  arrotondamento?: number;
  /**
   * Importo totale della fornitura IVA esclusa
   */
  imponibileImporto: number;
  /**
   * Imposta calcolata con l'applicazione dell'aliquota IVA sul relativo
   * imponibile.
   */
  imposta: number;
  /**
   * Tramite relativo codice si specifica il regime di esigibilità IVA
   * (differita o immediata) o la modalità di versamento dell'imposta
   * (scissione pagamenti). valori ammessi:
   * D: Esigibilità differita
   * I: Esigibilità immediata
   * S: Sciossione dei pagamenti
   */
  esigibilitaIVA?: 'D' | 'I' | 'S';
  /**
   * Deve essere riportata la norma di riferimento
   * nei casi in cui natura sia valorizzata
   */
  riferimentoNormativo?: string;
}

interface DatiBeniServizi {
  dettaglioLinea: DettaglioLinea[];
  datiRiepilogo: DatiRiepilogo[];
}

interface DatiVeicoli {
  /**
   * data della prima immatricolazione o
   * dell'iscrizione nei pubblici registri ISO 8601:2004
   */
  data: Date;
  /**
   * Totale dei chilometri percorsi, oppure totale delle ore di
   * navigazione o di volo
   */
  totalePercorso: string;
}
interface DettaglioPagamento {
  /**
   * caso il beneficiario sia diverso dal fornitore
   * (cedente/prestatore), occorre valorizzarlo
   */
  beneficiario?: string;
  /**
   * Tramite relativo codice che inizia con "MP"
   * viene espressa la modalità del pagamento.
   */
  modalitaPagamento: MetodiPagamento;
  /**
   * La data a partire dalla quale decorrono i
   * termini di pagamento. ISO 8601:2004
   */
  dataRiferimentoTerminiPagamento?: Date;
  /**
   * giorni che intercorrono a partire dal valore
   * in dataRiferimentoTerminiPagamento fino
   * alla scadenza del pagamento, che equivalgono
   * a zero per pagamenti "pronti".
   */
  giorniTerminiPagamento?: number;
  /**
   * Data della scadenza del pagamento, ovvero la
   * data in cui il pagamento diventa dovuto
   * ISO 8601:2004
   */
  dataScadenzaPagamento?: Date;
  /**
   * Importo di cui si richiede il pagamento
   */
  importoPagamento: number;
  /**
   * Da indicare nel caso in cui l'espletamento
   * del pagamento necessita di questa informazione
   */
  codUfficioPostale: string;
  /**
   * Nel caso il campo @param modalitaPagamento riporti
   * il valore "MP4", questo nodo va valorizzato
   * inserendo il cognome del quietanzante.
   */
  cognomeQuietanzante?: string;
  /**
   * Nel caso il campo @param modalitaPagamento riporti
   * il valore "MP4", questo nodo va valorizzato
   * inserendo il nome del quietanzante.
   */
  nomeQuietanzante?: string;
  /**
   * Nel caso il campo @param modalitaPagamento riporti
   * il valore "MP4", questo nodo va valorizzato
   * inserendo il codice fiscale del quietanzante.
   */
  cfQuietanzante?: string;
  /**
   * Nel caso il campo @param modalitaPagamento riporti
   * il valore "MP4", questo nodo va valorizzato
   * inserendo il titolo del quietanzante.
   */
  titoloQuietanzante?: string;
  /**
   * Nome della banca o dell'istituto finanziario
   * attraverso il quale si appoggia il pagamento.
   */
  istitutoFinanziario?: string;
  /**
   * IBAN del conto attraverso il quale si appoggia
   * il pagamento.
   */
  IBAN?: string;
  /**
   * Codice ABI dell'istituto finanziario
   */
  ABI?: string;
  /**
   * Codice CAB dell'istituto finanziario
   */
  CAB?: string;
  /**
   * Codice BIC (Bank Identifier Code)
   * dell'istituto finanziario.
   */
  BIC?: string;
  /**
   * Importo dell'eventuale sconto concesso
   * al cliente in caso di pagamento anticipato
   */
  scontoPagamentoAnticipato?: number;
  /**
   * Data che identifica la fine del periodo
   * entro il quale il fornitore può concedere
   * lo sconto per pagamento anticipato.
   * ISO 8601:2004
   */
  dataLimitePagamentoAnticipato?: Date;
  /**
   * Eventuale importo che identifica la penale
   * dovuta dal cliente in caso di ritardato
   * pagamento.
   */
  penalitaPagamentiRitardati?: number;
  /**
   * Eventuale data che identifica la decorrenza
   * della penale dovuta dal cliente in caso di
   * ritardato pagamento.
   * ISO 8601:2004
   */
  dataDecorrenzaPenale?: Date;
  /**
   * Eventuale codice in uso dal fornitore
   * (cedente/prestatore) per la riconciliazione
   * degli incassi
   */
  codicePagamento?: string;
}

interface DatiPagamento {
  /**
   * Tramite relativo codice che inizia con "TP" possiamo
   * specificare se il pagamento è a rate, o in un unica soluzione,
   * oppure è anticipato.
   */
  condizioniPagamento: TipoPagamento;
  /**
   * dettagli relativi alle condizioni di
   * pagamento
   */
  dettaglioPagamento: DettaglioPagamento[];
}

interface FatturaElettronicaBody {
  datiGenerali: DatiGenerali;
  datiBeniServizi: DatiBeniServizi;
  datiVeicolo?: DatiVeicoli;
  datiPagamento?: DatiPagamento[];
  allegati?: Allegati[];
}
