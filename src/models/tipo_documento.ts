export enum TipoDocumento {
  /**
   * fattura
   */
  FATTURA = 'TD01',
  /**
   * acconto/anticipo su fattura
   */
  ACCONTO_ANTICIPO_SU_FATTURA = 'TD02',
  /**
   * acconto/anticipo su parcella
   */
  ACCONTO_ANTICIPO_SU_PARCELLA = 'TD03',
  /**
   * nota di credito
   */
  NOTA_DI_CREDITO = 'TD04',
  /**
   * nota di debito
   */
  NOTA_DI_DEBITO = 'TD05',
  /**
   * parcella
   */
  PARCELLA = 'TD06',
  /**
   * integrazione fattura reverse charge interno
   */
  INTEGRAZIONE_FATTURA_REVERSE_CHARGE_INTERNO = 'TD16',
  /**
   * integrazione/autofattura per acquisto servizi dall'estero
   */
  INTEGRAZIONE_AUTOFATTURA_PER_ACQUISTO_SERVIZI_DELL_ESTERO = 'TD17',
  /**
   * integrazione per acquisto di beni intracomunitari
   */
  INTEGRAZIONE_PER_ACQUISTO_DI_BENI_INTRACOMUNITARI = 'TD18',
  /**
   * integrazione/autofattura per acquisto di beni ex art.17 c.2 DPR 633/
   */
  INTEGRAZIONE_AUTOFATTURA_PER_ACQUISTO_DI_BENI = 'TD19',
  /**
   * autofattura per regolarizzazione e integrazione delle fatture (ex art.6 c.8 e 9-bis d.lgs. 471/97  o  art.46 c.5 D.L. 331/93)
   */
  AUTOFATTURA_PER_REGOLARIZZAZIONE_E_INTEGRAZIONE_DELLE_FATTURE = 'TD20',
  /**
   * autofattura per splafonamento
   */
  AUTOFATTURA_PER_SPLAFONAMENTO = 'TD21',
  /**
   * estrazione beni da Deposito IVA
   */
  ESTRAZIONE_BENI_DA_DEPOSITO_IVA = 'TD22',
  /**
   * estrazione beni da Deposito IVA con versamento dell'IVA
   */
  ESTRAZIONE_BENI_DA_DEPOSITO_IVA_CON_VERSAMENTO_DELL_IVA = 'TD23',
  /**
   * fattura differita di cui all'art. 21, comma 4, terzo periodo lett. a) DPR 633/72
   */
  FATTURA_DIFFERITA_TIPO_A = 'TD24',
  /**
   * fattura differita di cui all'art. 21, comma 4, terzo periodo lett. b) DPR 633/72
   */
  FATTURA_DIFFERITA_TIPO_B = 'TD025',
  /**
   * cessione di beni ammortizzabili e per passaggi interni (ex art.36 DPR 633/72)
   */
  CESSIONI_DI_BENI_AMMORTIZZABILI_E_PER_PASSAGGI_INTERNI = 'TD26',
  /**
   * fattura per autoconsumo o per cessioni gratuite senza rivalsa
   */
  FATTURA_PER_AUTOCONSUMO_O_PER_CESSIONI_GRATUITE_SENZA_RIVALSA = 'TD27',
  /**
   * cquisti da San Marino con IVA (fattura cartacea)
   */
  ACQUISTI_DA_SAN_MARINO_CON_IVA = 'TD28',
}
