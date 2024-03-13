export interface DatiGeneraliDocumentoBase {
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
}

export interface Allegati {
       /**
        * Nome del file allegato completo di estensione.
        */
       nomeAttachment: string;
       /**
        * L'algoritmo utilizzato per comprimere il
        * file (ZIP, RAR etc).
        */
       algoritmoCompressione?: string;
       /**
        * Formato dell'allegato da trascrivere
        * utilizzando la sua meglio nota estensione
        * (pdf, html, txt).
        */
       formatoAttachment?: string;
       /**
        * Descrizione del documento allegato.
        */
       descrizioneAttachment?: string;
       /**
        * Lo valorizziamo con il file desiderato
        * preventivamente convertito in formato base64.
        */
       base64Attachment: string;
}